'use client';

import { useState } from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Contact Us</h1>
        
        <div className="bg-purple-300 rounded-lg shadow-md p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">Email</h2>
            <p className="text-gray-600">
              For general inquiries: <a href="mailto:contact@bailaapp.com" className="text-purple-600 hover:text-purple-800">contact@bailaapp.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-black">Response Time</h2>
            <p className="text-gray-600">
              We typically respond to all inquiries within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 