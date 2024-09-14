import User from '../../../models/User';
import connectDB from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectDB();
    console.log("Connected to MongoDB");

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    await User.create({ name, email, password: hashedPassword });
    console.log("User created successfully");

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    
    return NextResponse.json(
      { message: 'An error occurred during registration' },
      { status: 500 }
    );
  }
}
