"use client";
import { useState } from "react";
import { handleContactForm } from "./actions";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Submitting...");
        try {
            // Call the server action function
            const response = await handleContactForm(formData);

            if (response.success) {
                setStatus(response.message);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(response.message);
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-white mb-4">Contact Us</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                    rows={4}
                    required
                ></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Send Message
                </button>
                {status && <p className="mt-4 text-white">{status}</p>}
            </form>
        </div>
    );
}