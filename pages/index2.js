import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-50">
      <h1 className="text-4xl font-bold mb-4">Virtuális Növénygondozó</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Üdvözlünk a növényeid gondozását segítő alkalmazásban! Itt nyomon követheted, hogy mely növényeidnek van szüksége vízre, napfényre, vagy más gondozásra.
      </p>
      <div className="flex gap-4">
        <Link href="/plants">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Növények listája</button>
        </Link>
        <Link href="/add-plant">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Új növény hozzáadása</button>
        </Link>
      </div>
    </div>
  );
}
