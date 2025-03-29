'use server';

export async function handleContactForm(data: { name: string; email: string; message: string }) {
    // Simulate processing the data (e.g., saving to a database or sending an email)
    console.log("Contact Form Data Received:", data);

    // Example: Simulate saving to a database
    try {
        // Simulate a delay for processing
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Return a success message
        return { success: true, message: "Your message has been received!" };
    } catch (error) {
        console.error("Error processing contact form:", error);
        return { success: false, message: "Failed to process your message. Please try again later." };
    }
}