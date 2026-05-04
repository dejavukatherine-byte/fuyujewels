import { Link } from 'react-router';
import { useState } from 'react';
import ImageZoom from './ImageZoom';

const products = [
  {
    id: 1,
    sku: 'FY2601',
    name: '925 Sterling Silver Classic Ring',
    category: 'silver',
    subcategory: 'rings',
    weight: '3.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 2,
    sku: 'FY2602',
    name: '925 Sterling Silver Minimalist Necklace',
    category: 'silver',
    subcategory: 'necklaces',
    weight: '5.2g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 3,
    sku: 'FY2603',
    name: 'Brass Vintage Style Ring',
    category: 'brass',
    subcategory: 'rings',
    weight: '4.0g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 4,
    sku: 'FY2604',
    name: '925 Sterling Silver Modern Earrings',
    category: 'silver',
    subcategory: 'earrings',
    weight: '2.8g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 5,
    sku: 'FY2605',
    name: 'Brass Trendy Bracelet',
    category: 'brass',
    subcategory: 'bracelets',
    weight: '6.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 6,
    sku: 'FY2606',
    name: '925 Sterling Silver Elegant Bracelet',
    category: 'silver',
    subcategory: 'bracelets',
    weight: '7.0g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 7,
    sku: 'FY2607',
    name: '925 Sterling Silver Solitaire Ring',
    category: 'silver',
    subcategory: 'rings',
    weight: '4.2g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 17,
    sku: 'FY2617',
    name: 'Brass Statement Ring',
    category: 'brass',
    subcategory: 'rings',
    weight: '4.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 21,
    sku: 'FY2621',
    name: 'Brass Chain Necklace',
    category: 'brass',
    subcategory: 'necklaces',
    weight: '5.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
];

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSilverMenu, setShowSilverMenu] = useState(false);
  const [showBrassMenu, setShowBrassMenu] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const silverSubcategories = [
    { name: 'Rings', path: 'rings' },
    { name: 'Bracelets', path: 'bracelets' },
    { name: 'Necklaces', path: 'necklaces' },
    { name: 'Earrings', path: 'earrings' },
    { name: 'Sets', path: 'sets' },
  ];

  const brassSubcategories = [
    { name: 'Rings', path: 'rings' },
    { name: 'Bracelets', path: 'bracelets' },
    { name: 'Necklaces', path: 'necklaces' },
    { name: 'Earrings', path: 'earrings' },
    { name: 'Sets', path: 'sets' },
  ];

  return (
    <div className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#143c69]">Product Catalog</h1>
          <p className="text-sm sm:text-base text-gray-600">Browse our collection of 925 Sterling Silver and Brass jewelry</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-colors text-sm sm:text-base ${
              selectedCategory === 'all'
                ? 'bg-[#143c69] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            All Products
          </button>

          {/* 925 Sterling Silver Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setSelectedCategory('silver');
                setShowSilverMenu(!showSilverMenu);
                setShowBrassMenu(false);
              }}
              className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-colors text-sm sm:text-base whitespace-nowrap ${
                selectedCategory === 'silver'
                  ? 'bg-[#143c69] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              925 Sterling Silver ▼
            </button>
            {showSilverMenu && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 border border-gray-200 z-10">
                {silverSubcategories.map((sub) => (
                  <Link
                    key={sub.path}
                    to={`/products/silver-${sub.path}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#143c69]"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Brass Jewelry Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setSelectedCategory('brass');
                setShowBrassMenu(!showBrassMenu);
                setShowSilverMenu(false);
              }}
              className={`px-4 sm:px-6 py-2 rounded-md font-semibold transition-colors text-sm sm:text-base whitespace-nowrap ${
                selectedCategory === 'brass'
                  ? 'bg-[#143c69] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Brass Jewelry ▼
            </button>
            {showBrassMenu && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 border border-gray-200 z-10">
                {brassSubcategories.map((sub) => (
                  <Link
                    key={sub.path}
                    to={`/products/brass-${sub.path}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#143c69]"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
              <div className="h-48 sm:h-64 bg-gray-100 relative">
                <ImageZoom
                  alt={product.name}
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="text-sm text-[#143c69] font-semibold mb-1">SKU: {product.sku}</div>
                <h3 className="font-bold mb-2 text-gray-900 min-h-[3rem] text-sm sm:text-base">{product.name}</h3>
                <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1">
                  <p><span className="font-medium">Weight:</span> {product.weight}</p>
                  <p><span className="font-medium">MOQ:</span> {product.moq} pcs</p>
                  <p><span className="font-medium">Plating:</span> {product.plating.slice(0, 2).join(', ')}{product.plating.length > 2 ? '...' : ''}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <Link
                    to={`/products/${product.id}`}
                    className="flex-1 bg-[#143c69] text-white text-center px-4 py-2 rounded-md font-semibold hover:bg-[#0f2f52] transition-colors text-sm sm:text-base"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/contact?product=${product.sku}`}
                    className="flex-1 bg-white border-2 border-[#143c69] text-[#143c69] text-center px-4 py-2 rounded-md font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
