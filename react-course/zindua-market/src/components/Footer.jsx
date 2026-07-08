import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-10">
      
      {/* Main columns */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Zindua Market</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop shop for quality products at unbeatable prices. Shop smart, shop Zindua.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-white font-semibold mb-3">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login" className="hover:text-white transition-colors">Sign In</Link></li>
            <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Nairobi, Kenya</li>
            <li>+254 700 000 000</li>
            <li>hello@zinduamarket.com</li>
          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-gray-700 hover:bg-blue-600 transition-colors rounded-full w-8 h-8 flex items-center justify-center text-xs">f</a>
            <a href="#" className="bg-gray-700 hover:bg-sky-500 transition-colors rounded-full w-8 h-8 flex items-center justify-center text-xs">X</a>
            <a href="#" className="bg-gray-700 hover:bg-pink-600 transition-colors rounded-full w-8 h-8 flex items-center justify-center text-xs">ig</a>
            <a href="#" className="bg-gray-700 hover:bg-red-600 transition-colors rounded-full w-8 h-8 flex items-center justify-center text-xs">yt</a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">Subscribe to our newsletter for deals and updates</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
        <p>© 2026 Zindua Market. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer