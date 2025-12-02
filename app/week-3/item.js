export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-50 border border-slate-300 p-4 rounded-lg mb-3 shadow-sm">
      <div className="font-medium text-slate-900">{name}</div>
      <div className="text-sm text-slate-600">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}