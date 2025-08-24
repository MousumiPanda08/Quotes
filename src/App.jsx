import React, { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // function to fetch a new quote from the API
  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Oops! Could not fetch a new quote.");
      setAuthor("");
    }
  };

  // fetch a quote on page load
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200 text-gray-800">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl text-center">
        <p className="text-xl italic mb-4">"{quote}"</p>
        {author && <p className="text-md font-semibold mb-6">- {author}</p>}
        <button
          onClick={fetchQuote}
          className="px-5 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
