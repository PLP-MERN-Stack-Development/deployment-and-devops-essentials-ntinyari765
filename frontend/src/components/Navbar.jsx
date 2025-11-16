import { Link } from 'react-router-dom';
import '../styles/theme.css';

export default function Navbar() {
  return (
    <header className="site-header-plain sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="site-brand">MyBlog</Link>
        <nav className="nav-links">
          <Link to="/" className="text-gray-800 hover:text-purple-600 text-lg font-medium">Home</Link>
          <Link
            to="/create"
            className="cta-button-plain"
          >
            Create Post
          </Link>
        </nav>
      </div>
    </header>
  );
}
