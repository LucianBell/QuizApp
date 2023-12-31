"use client";
import { useState, useEffect } from "react";
import { json } from "stream/consumers";

export default function Home() {
  const [username, setUsername] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  let questionCounter = 0;
  let idsArray: String[] = [];

  const apiUrl = "https://cs-fundamentals-quizapi.onrender.com/questions/";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      idsArray = data.map((item: any) => item._id);
      console.log(idsArray[0]);
    })
    .catch((error) => console.error("Error fetching data:", error));

  const showIds = () => {
    const i = 0;

    return <p>{idsArray[i]}</p>;
  };

  const handleInputChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleRegister = async () => {
    try {
      // Replace 'API_ENDPOINT' with the actual API endpoint where you want to register the user
      const response = await fetch(
        "https://cs-fundamentals-quizapi.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }
      );

      if (response.ok) {
        setIsRegistered(true);
      } else {
        // Handle error scenarios here if needed
        console.error("Failed to register the user.");
      }
    } catch (error) {
      // Handle network or other errors here
      console.error("Error occurred while registering the user:", error);
    }
  };

  return (
    <main className="bg-zinc-900 font-mono px-14">
      <div className="mt-20">
        <h2 className="text-xl">Time to</h2>
        <h1 className="text-6xl">Play!</h1>
      </div>
      <div>
        <h2>Register</h2>
        <h3>
          What is your <span className="text-purple-800">name?</span>
        </h3>
        <input
          type="text"
          name="username"
          id=""
          className="text-black bg-slate-200 border-b-4 border-purple-950"
          value={username}
          onChange={handleInputChange}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
      {isRegistered && (
        <section>
          <h3>Great, {username}!</h3>
          <p>You have been successfully registered.</p>
        </section>
      )}
      <h4>Question {questionCounter}</h4>
      ids new: {showIds()}
      <h4>Alternatives:</h4>
      <p>Alternative 1</p>
      <p>Alternative 2</p>
      <p>Alternative 3</p>
      <p>Alternative 4</p>
    </main>
  );
}
