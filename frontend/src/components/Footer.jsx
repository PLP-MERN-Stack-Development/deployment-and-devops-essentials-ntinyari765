export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer-plain border-t-2 border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          © {currentYear} MyBlog. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-white/70">
          Built with React • Powered by Node.js
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="#" className="hover:opacity-100 opacity-80 transition">Privacy</a>
          <a href="#" className="hover:opacity-100 opacity-80 transition">Terms</a>
          <a href="#" className="hover:opacity-100 opacity-80 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
