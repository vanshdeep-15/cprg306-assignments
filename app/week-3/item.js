// This component represents a single item in the shopping list.
export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 m-2 bg-slate-800 rounded-lg shadow-md max-w-sm w-full">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-400">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}

