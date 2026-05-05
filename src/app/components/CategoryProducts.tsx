import { Link } from 'react-router';
import ImageZoom from './ImageZoom';

const allProducts = [
  // Silver Rings
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
    id: 8,
    sku: 'FY2608',
    name: '925 Sterling Silver Band Ring',
    category: 'silver',
    subcategory: 'rings',
    weight: '3.8g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Silver Bracelets
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
    id: 9,
    sku: 'FY2609',
    name: '925 Sterling Silver Chain Bracelet',
    category: 'silver',
    subcategory: 'bracelets',
    weight: '6.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 10,
    sku: 'FY2610',
    name: '925 Sterling Silver Charm Bracelet',
    category: 'silver',
    subcategory: 'bracelets',
    weight: '8.2g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Silver Necklaces
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
    id: 11,
    sku: 'FY2611',
    name: '925 Sterling Silver Pendant Necklace',
    category: 'silver',
    subcategory: 'necklaces',
    weight: '6.0g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 12,
    sku: 'FY2612',
    name: '925 Sterling Silver Chain Necklace',
    category: 'silver',
    subcategory: 'necklaces',
    weight: '4.8g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Silver Earrings
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
    id: 13,
    sku: 'FY2613',
    name: '925 Sterling Silver Hoop Earrings',
    category: 'silver',
    subcategory: 'earrings',
    weight: '3.2g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 14,
    sku: 'FY2614',
    name: '925 Sterling Silver Stud Earrings',
    category: 'silver',
    subcategory: 'earrings',
    weight: '2.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Silver Sets
  {
    id: 15,
    sku: 'FY2615',
    name: '925 Sterling Silver Jewelry Set - Classic',
    category: 'silver',
    subcategory: 'sets',
    weight: '15.0g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 16,
    sku: 'FY2616',
    name: '925 Sterling Silver Bridal Set',
    category: 'silver',
    subcategory: 'sets',
    weight: '18.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Brass Rings
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
    id: 18,
    sku: 'FY2618',
    name: 'Brass Signet Ring',
    category: 'brass',
    subcategory: 'rings',
    weight: '5.2g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Brass Bracelets
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
    id: 19,
    sku: 'FY2619',
    name: 'Brass Cuff Bracelet',
    category: 'brass',
    subcategory: 'bracelets',
    weight: '7.8g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 20,
    sku: 'FY2620',
    name: 'Brass Bangle Set',
    category: 'brass',
    subcategory: 'bracelets',
    weight: '8.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Brass Necklaces
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
  {
    id: 22,
    sku: 'FY2622',
    name: 'Brass Pendant Necklace',
    category: 'brass',
    subcategory: 'necklaces',
    weight: '6.2g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Brass Earrings
  {
    id: 23,
    sku: 'FY2623',
    name: 'Brass Drop Earrings',
    category: 'brass',
    subcategory: 'earrings',
    weight: '3.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 24,
    sku: 'FY2624',
    name: 'Brass Stud Earrings',
    category: 'brass',
    subcategory: 'earrings',
    weight: '2.8g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },

  // Brass Sets
  {
    id: 25,
    sku: 'FY2625',
    name: 'Brass Jewelry Set - Vintage',
    category: 'brass',
    subcategory: 'sets',
    weight: '16.0g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
  {
    id: 26,
    sku: 'FY2626',
    name: 'Brass Statement Set',
    category: 'brass',
    subcategory: 'sets',
    weight: '19.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
  },
];

const categoryTitles: Record<string, string> = {
  'silver-rings': '925 Sterling Silver Rings',
  'silver-bracelets': '925 Sterling Silver Bracelets',
  'silver-necklaces': '925 Sterling Silver Necklaces',
  'silver-earrings': '925 Sterling Silver Earrings',
  'silver-sets': '925 Sterling Silver Sets',
  'brass-rings': 'Brass Rings',
  'brass-bracelets': 'Brass Bracelets',
  'brass-necklaces': 'Brass Necklaces',
  'brass-earrings': 'Brass Earrings',
  'brass-sets': 'Brass Sets',
};

export default function CategoryProducts() {
  // Get category from URL path
  const pathname = window.location.pathname;
  const category = pathname.replace('/products/', '');

  // Parse category parameter (e.g., "silver-rings" -> material: "silver", subcategory: "rings")
  const [material, subcategory] = category.split('-');

  // Filter products based on category
  const products = allProducts.filter(
    p => p.category === material && p.subcategory === subcategory
  );

  const pageTitle = categoryTitles[category] || 'Products';

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/products" className="text-[#143c69] hover:underline font-medium mb-4 inline-block">
            ← Back to All Products
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-[#143c69]">{pageTitle}</h1>
          <p className="text-gray-600">Browse our collection of {pageTitle.toLowerCase()}</p>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
                <div className="h-64 bg-gray-100 relative">
                  <ImageZoom
                    alt={product.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-sm text-[#143c69] font-semibold mb-1">SKU: {product.sku}</div>
                  <h3 className="font-bold mb-2 text-gray-900 min-h-[3rem]">{product.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-4 flex-1">
                    <p><span className="font-medium">Weight:</span> {product.weight}</p>
                    <p><span className="font-medium">MOQ:</span> {product.moq} pcs</p>
                    <p><span className="font-medium">Plating:</span> {product.plating.slice(0, 2).join(', ')}{product.plating.length > 2 ? '...' : ''}</p>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 bg-[#143c69] text-white text-center px-4 py-2 rounded-md font-semibold hover:bg-[#0f2f52] transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/contact?product=${product.sku}`}
                      className="flex-1 bg-white border-2 border-[#143c69] text-[#143c69] text-center px-4 py-2 rounded-md font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
