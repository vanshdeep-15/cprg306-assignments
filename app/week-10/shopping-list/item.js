export default function Item({ id, name, quantity, category, onSelect, onDelete }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(name);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent triggering onSelect
    if (onDelete && id) {
      onDelete(id);
    }
  };

  return (
    <li 
      className="p-2 bg-slate-50 rounded border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors flex justify-between items-center"
      onClick={handleClick}
    >
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-slate-600">
          Buy {quantity} in <span className="capitalize">{category}</span>
        </div>
      </div>
      {onDelete && (
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      )}
    </li>
  );
}