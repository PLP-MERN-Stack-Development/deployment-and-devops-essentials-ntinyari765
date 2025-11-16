import { useEffect, useState } from 'react';
import { getCategories } from '../services/categoryService';
import { Link } from 'react-router-dom';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => setCategories([]));
  }, []);

  return (
    <aside className="w-full md:w-64">
      <div className="bg-white rounded-lg shadow-md p-4 border">
        <h3 className="font-semibold mb-3">Categories</h3>
        {categories.length === 0 ? (
          <p className="text-sm text-gray-500">No categories</p>
        ) : (
          <ul className="space-y-2">
            {categories.map((c) => (
              <li key={c._id}>
                <Link to={`/?cat=${c.slug}`} className="text-gray-700 hover:text-lilac-600 inline-flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-lilac-500 text-white text-xs">{c.name[0]}</span>
                  <span>{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
