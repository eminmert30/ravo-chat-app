import { NextResponse } from 'next/server'

export function GET(error: Error) {
  return NextResponse.json(
    { error: 'Internal Server Error' },
    { status: 500 }
  )
}

export function POST(error: Error) {
  return NextResponse.json(
    { error: 'Internal Server Error' },
    { status: 500 }
  )
}
