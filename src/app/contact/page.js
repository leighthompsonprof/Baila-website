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
            <p className="text-gray-600 mb-4">
              Email us at <a href="mailto:contact@bailaapp.com" className="text-purple-600 hover:text-purple-800 font-medium">contact@bailaapp.com</a>
            </p>
          
            <a 
              href="https://mail.google.com/mail/?view=cm&to=contact@bailaapp.com" 
              target="_blank" 
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Open in Gmail
            </a>
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