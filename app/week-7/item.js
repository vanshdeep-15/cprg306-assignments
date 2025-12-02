export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 bg-slate-50 rounded border border-slate-200">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-slate-600">
        Buy {quantity} in <span className="capitalize">{category}</span>
      </div>
    </li>
  );
}