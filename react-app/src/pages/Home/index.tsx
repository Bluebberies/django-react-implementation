import * as React from 'react';

export default function HomePage({
  contacts,
}: {
  contacts: Record<string, string>;
}) {
  React.useEffect(() => {
    console.log('Initialised');
  });

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-blue-500">Home page</h1>
      <p>This is the home page</p>
      {Array.isArray(contacts) && contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact}>{contact}</li>
          ))}
        </ul>
      ) : (
        <p>No contacts yet...</p>
      )}

      <a href="/about" className="text-blue-500 underline mt-10">
        Go to about page
      </a>
      <a href="/contact" className="text-blue-500 underline mt-3">
        Go to contact page
      </a>
    </div>
  );
}
