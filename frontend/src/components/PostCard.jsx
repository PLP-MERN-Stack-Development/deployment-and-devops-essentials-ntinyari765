import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-5 mb-4 transition hover:shadow-lg">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {/* Optional placeholder for image */}
        <div className="w-full sm:w-28 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0"></div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold text-lilac-700 mb-1">{post.title}</h2>
          <p className="text-gray-600 mb-3 text-sm">{post.content?.slice(0, 140)}...</p>

          <div className="flex items-center justify-between">
            <Link to={`/posts/${post._id}`} className="text-lilac-700 hover:underline font-medium">Read More</Link>
            {post.category && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-lilac-50 text-lilac-600 text-sm">{post.category.name}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
