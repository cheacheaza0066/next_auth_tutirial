import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // console.log(name)
    // console.log(email)
    // console.log(password)
    return NextResponse.json({ message: 'User registered successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred during registration' }, { status: 500 });
  }
}
