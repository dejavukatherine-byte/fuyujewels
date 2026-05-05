import { Link, useParams } from 'react-router';
import { useState } from 'react';
import ImageZoom from './ImageZoom';

// Default products with full details for detail page
const productDetails: Record<number, any> = {
  1: {
    id: 1,
    sku: 'FY2601',
    name: '925 Sterling Silver Classic Ring',
    category: '925 Sterling Silver',
    weight: '3.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: '925 Sterling Silver',
    description: 'This classic ring is crafted from 925 sterling silver with a timeless design suitable for daily wear. Exquisite craftsmanship ensures every piece meets the highest quality standards.',
    features: [
      '925 Sterling Silver material, quality guaranteed',
      'Multiple plating options available',
      'Fine polishing treatment',
      'Customizable sizes',
      'Quality inspection certified'
    ]
  },
  2: {
    id: 2,
    sku: 'FY2602',
    name: '925 Sterling Silver Minimalist Necklace',
    category: '925 Sterling Silver',
    weight: '5.2g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: '925 Sterling Silver',
    description: 'Minimalist design silver necklace suitable for various occasions. Made from premium 925 sterling silver for durability.',
    features: [
      '925 Sterling Silver material',
      'Adjustable chain length',
      'Fine polishing',
      'Hypoallergenic treatment',
      'Premium packaging'
    ]
  },
  3: {
    id: 3,
    sku: 'FY2603',
    name: 'Brass Vintage Style Ring',
    category: 'Brass',
    weight: '4.0g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: 'Brass',
    description: 'Vintage style brass ring with unique design showcasing personal charm. Multiple plating options to meet different needs.',
    features: [
      'Premium brass material',
      'Vintage design style',
      'Multiple plating processes',
      'Wear-resistant treatment',
      'Eco-friendly material'
    ]
  },
  4: {
    id: 4,
    sku: 'FY2604',
    name: '925 Sterling Silver Modern Earrings',
    category: '925 Sterling Silver',
    weight: '2.8g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: '925 Sterling Silver',
    description: 'Modern design 925 sterling silver earrings, lightweight and comfortable, suitable for extended wear.',
    features: [
      '925 Sterling Silver material',
      'Lightweight and comfortable',
      'Hypoallergenic posts',
      'Exquisite packaging',
      'Quality guaranteed'
    ]
  },
  5: {
    id: 5,
    sku: 'FY2605',
    name: 'Brass Trendy Bracelet',
    category: 'Brass',
    weight: '6.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: 'Brass',
    description: 'Trendy brass bracelet with unique design showcasing personal style.',
    features: [
      'Brass material',
      'Adjustable size',
      'Exquisite plating',
      'Strong durability',
      'Trendy design'
    ]
  },
  6: {
    id: 6,
    sku: 'FY2606',
    name: '925 Sterling Silver Elegant Bracelet',
    category: '925 Sterling Silver',
    weight: '7.0g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: '925 Sterling Silver',
    description: 'Elegant 925 sterling silver bracelet, perfectly matches various fashion styles.',
    features: [
      '925 Sterling Silver material',
      'Elegant design',
      'Adjustable chain length',
      'Fine craftsmanship',
      'Premium quality'
    ]
  },
  7: {
    id: 7,
    sku: 'FY2607',
    name: '925 Sterling Silver Solitaire Ring',
    category: '925 Sterling Silver',
    weight: '4.2g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: '925 Sterling Silver',
    description: 'Elegant solitaire design perfect for special occasions. Crafted with precision and attention to detail.',
    features: [
      '925 Sterling Silver material',
      'Classic solitaire design',
      'Multiple plating options',
      'Quality craftsmanship',
      'Perfect for gifts'
    ]
  },
  17: {
    id: 17,
    sku: 'FY2617',
    name: 'Brass Statement Ring',
    category: 'Brass',
    weight: '4.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: 'Brass',
    description: 'Bold statement ring that adds personality to any outfit. Premium brass with luxurious plating options.',
    features: [
      'Premium brass material',
      'Statement design',
      'Luxury plating finishes',
      'Durable construction',
      'Fashion-forward style'
    ]
  },
  21: {
    id: 21,
    sku: 'FY2621',
    name: 'Brass Chain Necklace',
    category: 'Brass',
    weight: '5.5g',
    moq: 30,
    plating: ['Silver', 'Rhodium', 'Gold', 'Rose Gold'],
    material: 'Brass',
    description: 'Versatile chain necklace suitable for layering or wearing alone. Quality brass with multiple finish options.',
    features: [
      'Premium brass material',
      'Versatile chain design',
      'Multiple plating options',
      'Adjustable length',
      'Perfect for layering'
    ]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productDetails[Number(id || 0)];
  const [selectedPlating, setSelectedPlating] = useState<string>('');

  if (!product) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-[#143c69] hover:underline">Back to Product Catalog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 sm:mb-6">
          <Link to="/products" className="text-[#143c69] hover:underline font-medium text-sm sm:text-base">← Back to Products</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Product Image */}
          <div>
            <div className="bg-white border border-gray-200 rounded-lg h-64 sm:h-80 lg:h-96 overflow-hidden relative">
              <ImageZoom
                alt={product.name}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg p-4 sm:p-8 shadow-sm">
            <div className="text-sm text-[#143c69] font-semibold mb-2">SKU: {product.sku}</div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">{product.name}</h1>

            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-200">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 mb-1">Material</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{product.material}</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 mb-1">Weight</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{product.weight}</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 mb-1">MOQ</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{product.moq} pcs</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 mb-1">Category</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{product.category}</div>
                </div>
              </div>
            </div>

            {/* Plating Options */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-900">Plating Options</label>
              <div className="flex gap-2 flex-wrap">
                {product.plating.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedPlating(option)}
                    className={`px-3 sm:px-4 py-2 rounded-md border-2 transition-colors text-sm sm:text-base ${
                      selectedPlating === option
                        ? 'border-[#143c69] bg-[#143c69] text-white'
                        : 'border-gray-300 hover:border-[#143c69] text-gray-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 sm:mb-6">
              <h2 className="font-bold mb-2 text-gray-900 text-base sm:text-lg">Product Description</h2>
              <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h2 className="font-bold mb-2 text-gray-900 text-base sm:text-lg">Product Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#143c69] mr-2 font-bold">✓</span>
                    <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to={`/contact?product=${product.sku}&plating=${selectedPlating}`}
                className="block w-full bg-[#143c69] text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-[#0f2f52] transition-colors text-sm sm:text-base"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
