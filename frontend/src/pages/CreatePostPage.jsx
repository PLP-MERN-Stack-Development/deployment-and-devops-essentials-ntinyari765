import { useState } from 'react';
import { createPost } from '../services/postService';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  // Predefined categories
  const categories = ["Food", "Fashion", "Tech", "Art", "Music", "Beauty", "Other"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content, category });
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-lilac-50 rounded-lg p-6 mb-6 border shadow-sm">
        <h1 className="text-2xl font-bold mb-1">Create a Post</h1>
        <p className="text-sm text-gray-600">Share a new article with your readers. Add a title, content and optional category.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 border space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lilac-200"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lilac-200"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            className="w-full border border-gray-200 rounded px-3 py-2 h-56 focus:outline-none focus:ring-2 focus:ring-lilac-200"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end">
          <button className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-lilac-500 to-lilac-600 text-white font-semibold shadow-md transform transition hover:-translate-y-1" type="submit">Add Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostPage;
