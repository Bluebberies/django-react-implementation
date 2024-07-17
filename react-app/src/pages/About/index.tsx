import * as React from 'react';

export default function AboutPage() {

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-blue-500">About Page</h1>
      <p>This is the about page</p>

      <a href="/" className="text-blue-500 underline mt-10">
        Go to home page
      </a>
      <a href="/contact" className="text-blue-500 underline mt-3">
        Go to contact page
      </a>
    </div>
  );
}