import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/data/books.json')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error loading books:', error));
  }, []);

  return (
    <div>
      <Head>
        <title>RCP Visionary</title>
        <meta name="description" content="Official site of RCP Visionary, a dynamic and interactive experience" />
      </Head>
      <header className="bg-black text-white py-5 text-center">
        <h1 className="text-4xl font-bold">RCP Visionary</h1>
        <p className="text-lg mt-2">Explore our books and projects</p>
      </header>
      <main className="p-5">
        <h2 className="text-2xl font-semibold mb-4">Book Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <div key={index} className="border p-4 rounded shadow-md">
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-bold mt-3">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="mt-2">{book.description}</p>
              <Link href={book.link} className="text-blue-500 mt-2 inline-block">Learn more</Link>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-5 text-center mt-10">
        <p>&copy; 2025 RCP Visionary. All rights reserved.</p>
      </footer>
    </div>
  );
}
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/data/books.json')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error loading books:', error));
  }, []);

  return (
    <div>
      <Head>
        <title>RCP Visionary</title>
        <meta name="description" content="Official site of RCP Visionary, a dynamic and interactive experience" />
      </Head>
      <header className="bg-black text-white py-5 text-center">
        <h1 className="text-4xl font-bold">RCP Visionary</h1>
        <p className="text-lg mt-2">Explore our books and projects</p>
      </header>
      <main className="p-5">
        <h2 className="text-2xl font-semibold mb-4">Book Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <div key={index} className="border p-4 rounded shadow-md">
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-xl font-bold mt-3">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="mt-2">{book.description}</p>
              <Link href={book.link} className="text-blue-500 mt-2 inline-block">Learn more</Link>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-5 text-center mt-10">
        <p>&copy; 2025 RCP Visionary. All rights reserved.</p>
      </footer>
    </div>
  );
}
