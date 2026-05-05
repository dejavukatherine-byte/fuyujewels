import { Link, Outlet } from 'react-router';
import { useState } from 'react';
import OnlineChat from './OnlineChat';

const productCategories = [
  {
    title: '925 Sterling Silver',
    items: [
      { name: 'Rings', path: '/products/silver-rings' },
      { name: 'Bracelets', path: '/products/silver-bracelets' },
      { name: 'Necklaces', path: '/products/silver-necklaces' },
      { name: 'Earrings', path: '/products/silver-earrings' },
      { name: 'Sets', path: '/products/silver-sets' },
    ]
  },
  {
    title: 'Brass Jewelry',
    items: [
      { name: 'Rings', path: '/products/brass-rings' },
      { name: 'Bracelets', path: '/products/brass-bracelets' },
      { name: 'Necklaces', path: '/products/brass-necklaces' },
      { name: 'Earrings', path: '/products/brass-earrings' },
      { name: 'Sets', path: '/products/brass-sets' },
    ]
  }
];

export default function Layout() {
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
      setMenuTimeout(null);
    }
    setShowProductsMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowProductsMenu(false);
    }, 300);
    setMenuTimeout(timeout);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link to="/" className="flex flex-col" onClick={() => setMobileMenuOpen(false)}>
              <div className="text-lg lg:text-xl font-bold text-[#143c69]">FUYU JEWELS</div>
              <div className="text-xs text-gray-500">for you forever</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-[#143c69] transition-colors font-medium">
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/products" className="text-gray-700 hover:text-[#143c69] transition-colors font-medium">
                  Products
                </Link>
                {showProductsMenu && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-64 border border-gray-200"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {productCategories.map((category, index) => (
                      <div key={category.title} className="px-4 py-2">
                        <Link
                          to={index === 0 ? '/products?category=silver' : '/products?category=brass'}
                          className="font-semibold text-[#143c69] mb-2 hover:text-[#0f2f52] block"
                          onClick={() => setShowProductsMenu(false)}
                        >
                          {category.title}
                        </Link>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#143c69] rounded"
                              onClick={() => setShowProductsMenu(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/about" className="text-gray-700 hover:text-[#143c69] transition-colors font-medium">
                About Us
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#143c69] transition-colors font-medium">
                Blog
              </Link>
              <Link to="/contact" className="bg-[#143c69] text-white px-6 py-2 rounded-md hover:bg-[#0f2f52] transition-colors font-medium">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-[#143c69] transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div>
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full text-left text-gray-700 hover:text-[#143c69] transition-colors font-medium flex justify-between items-center"
                  >
                    Products
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileProductsOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {productCategories.map((category, index) => (
                        <div key={category.title} className="space-y-2">
                          <Link
                            to={index === 0 ? '/products?category=silver' : '/products?category=brass'}
                            className="block text-sm font-semibold text-[#143c69] hover:text-[#0f2f52]"
                            onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                          >
                            {category.title}
                          </Link>
                          {category.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block text-sm text-gray-600 hover:text-[#143c69] ml-4"
                              onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-[#143c69] transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-[#143c69] transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="bg-[#143c69] text-white px-6 py-2 rounded-md hover:bg-[#0f2f52] transition-colors font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Online Chat Widget */}
      <OnlineChat />

      <footer className="bg-[#143c69] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors text-sm">Products</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/products?category=silver" className="text-gray-300 hover:text-white transition-colors text-sm">925 Sterling Silver</Link></li>
                <li><Link to="/products/silver-rings" className="text-gray-300 hover:text-white transition-colors text-sm pl-4">- Rings</Link></li>
                <li><Link to="/products/silver-necklaces" className="text-gray-300 hover:text-white transition-colors text-sm pl-4">- Necklaces</Link></li>
                <li><Link to="/products/silver-earrings" className="text-gray-300 hover:text-white transition-colors text-sm pl-4">- Earrings</Link></li>
                <li><Link to="/products/silver-bracelets" className="text-gray-300 hover:text-white transition-colors text-sm pl-4">- Bracelets</Link></li>
                <li><Link to="/products?category=brass" className="text-gray-300 hover:text-white transition-colors text-sm">Brass Jewelry</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Custom Orders</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-gray-300 text-sm mb-2 font-semibold">GUANGZHOU FUYU IMPORT&EXPORT CO.,LTD</p>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold">Email:</span><br />
                  <a href="mailto:fuyujewels@outlook.com" className="hover:text-white transition-colors">
                    fuyujewels@outlook.com
                  </a>
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold">Tel/WhatsApp:</span><br />
                  <a href="tel:+8615018789534" className="hover:text-white transition-colors">
                    +86 15018789534
                  </a>
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold">Address:</span><br />
                  Room C302, South Tower, Liwan Plaza,<br />
                  Liwan District, Guangzhou City,<br />
                  Guangdong Province, China
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20 text-center text-gray-300 text-sm">
            <p>&copy; 2026 FUYU JEWELS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
