"use client";

import { useState } from "react";

const FormNewBoard = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      // 1. Asynchronous call to API to create new board
      const response = await fetch("/api/board", {
        method: "POST",
        body: JSON.stringify({
          name,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      console.log(data);

      setName("");
      // 2. Redirect to dedicated board page
    } catch (error) {
      // 1. Display error message
      // 2. Stop loading spinner
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}>
      <p className="font-bold text-lg">Create a new feedback board</p>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Board name</legend>
        <input
          required
          type="text"
          className="input w-full"
          placeholder="Future Unicorn Inc. 🦄"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </fieldset>

      <button type="submit" className="btn btn-primary btn-block">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create Board
      </button>
    </form>
  );
};

export default FormNewBoard;
