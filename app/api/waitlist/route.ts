import { NextResponse } from "next/server"
import { z } from "zod"
import { docClient } from "@/lib/db"
import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb"

const schema = z.object({
  email: z.string().email(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      )
    }

    const tableName = process.env.DYNAMODB_TABLE_NAME!

    // Check if email already exists
    const existing = await docClient.send(
      new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: "email = :email",
        ExpressionAttributeValues: { ":email": result.data.email },
        Limit: 1,
      }),
    )

    if (existing.Items && existing.Items.length > 0) {
      return NextResponse.json({ success: true })
    }

    await docClient.send(
      new PutCommand({
        TableName: tableName,
        Item: {
          email: result.data.email,
          datetime: new Date().toISOString(),
        },
      }),
    )

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
