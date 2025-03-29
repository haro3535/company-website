import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Parse the JSON body from the request
        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        // TODO: Process the data (e.g., save to a database or send an email)
        console.log("Contact Request Received:", { name, email, message });

        // Return a success response
        return NextResponse.json(
            { message: "Your message has been received!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error handling contact request:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}