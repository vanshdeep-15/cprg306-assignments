import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-200 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}