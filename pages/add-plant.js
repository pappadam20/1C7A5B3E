import { useState } from "react";
import Link from "next/link";

export default function AddPlant() {
  const [name, setName] = useState("");
  const [water, setWater] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Növény hozzáadva: ${name}, Öntözés: ${water}`);
    setName("");
    setWater("");
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Új növény hozzáadása</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Növény neve:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Öntözés gyakorisága:</label>
          <input
            type="text"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Hozzáadás
        </button>
      </form>
      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Vissza a főoldalra</button>
      </Link>
    </div>
  );
}
