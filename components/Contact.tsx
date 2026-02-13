"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-background text-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">Get in Touch</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Have questions or just want to say hello? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Location</h3>
                                <p className="text-gray-600">Indonesia</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Email</h3>
                                <p className="text-gray-600">miana@gmail.com.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                                <Instagram size={24} />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">Instagram</h3>
                                <p className="text-gray-600">@miana.daily</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-white font-medium tracking-wide hover:bg-black transition-colors duration-300 rounded-sm"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
