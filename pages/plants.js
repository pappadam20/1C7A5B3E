import Link from "next/link";

const mockPlants = [
  { id: 1, name: "Monstera", water: "Hetente egyszer" },
  { id: 2, name: "Fikusz", water: "Kéthetente" },
  { id: 3, name: "Orchidea", water: "Hetente kétszer" },
];

export default function Plants() {
  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Növények listája</h1>
      <ul className="space-y-2">
        {mockPlants.map((plant) => (
          <li key={plant.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{plant.name}</h2>
            <p>Öntözés: {plant.water}</p>
          </li>
        ))}
      </ul>
      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Vissza a főoldalra</button>
      </Link>
    </div>
  );
}
