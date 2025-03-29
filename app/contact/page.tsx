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
        <div className="min-h-[80vh] w-full flex items-center">
            <div className="w-1/2 flex flex-col items-start justify-center px-10">
                <h1 className="text-3xl font-bold text-white ">Contact Us</h1>
                <p className="text-[14px] mt-2 text-gray-300">
                    We would love to hear from you! Please fill out the form and we will get back to you as soon as possible.
                    <br />
                    <br />
                    Overfit Soft Team
                </p>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center px-10">
                <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 border-1 border-white rounded-lg shadow-md">
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
                    <button type="submit" className="bg-blue-500 text-white py-2 px-3 rounded">
                        Send Contact Information
                    </button>
                    {status && <p className="mt-4 text-white">{status}</p>}
                </form>
            </div>
        </div>
    );
}