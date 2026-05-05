import { Link } from 'react-router';
//import silverRingImage from 'figma:asset/f5e4b07b6669741a2be6bdc3426ad2b6.jpg';
import necklaceImage from 'figma:asset/8d736274f039993717a5886b45062b71.jpg';
import processImage from 'figma:asset/image-1.png';
import processImage2 from 'figma:asset/微信图片_20260504162238_431_2-2.png';
import banner1 from 'figma:asset/微信图片_20260402132534_367_740-1.png';
import banner2 from 'figma:asset/微信图片_20260402132516_362_740-1.png';
import banner3 from 'figma:asset/微信图片_20260402132605_385_740.png';
import banner4 from 'figma:asset/微信图片_20260402132729_417_740-1.png';
import banner5 from 'figma:asset/微信图片_20260402132801_442_740-1.png';
import banner6 from 'figma:asset/微信图片_20260402132840_473_740-1.png';
import banner7 from 'figma:asset/微信图片_20260402132916_513_740-1.png';
import banner8 from 'figma:asset/微信图片_20260402133011_580_740.png';
import banner9 from 'figma:asset/微信图片_20260402132954_558_740-1.png';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Product Grid Background */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          <div className="w-full h-full overflow-hidden">
            <img src={banner2} alt="" className="w-full h-full object-cover" loading="eager" decoding="async" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={banner1} alt="" className="w-full h-full object-cover" loading="eager" decoding="async" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={banner3} alt="" className="w-full h-full object-cover" loading="eager" decoding="async" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={banner4} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={banner5} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={banner6} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={banner7} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={banner8} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="w-full h-full overflow-hidden">
            <img src={banner9} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#143c69]/85 via-[#143c69]/75 to-[#143c69]/85"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Professional Jewelry Manufacturer</h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-100 max-w-4xl mx-auto">15 Years of Excellence in 925 Sterling Silver & Brass Jewelry | Wholesale & Export Worldwide</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-white text-[#143c69] px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Browse Products
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#143c69] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#143c69]">Why Choose FUYU JEWELS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="font-bold mb-2 text-[#143c69]">15 Years Experience</h3>
              <p className="text-sm sm:text-base text-gray-600">Professional jewelry manufacturing with guaranteed quality</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-bold mb-2 text-[#143c69]">925 Silver & Brass</h3>
              <p className="text-sm sm:text-base text-gray-600">Premium materials with various plating options</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold mb-2 text-[#143c69]">Global Wholesale</h3>
              <p className="text-sm sm:text-base text-gray-600">Serving worldwide clients with flexible MOQ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#143c69]">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={silverRingImage}
                alt="925 Sterling Silver Jewelry"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="600"
                height="384"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143c69]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">925 Sterling Silver</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">Rings, Necklaces, Earrings, Bracelets & More</p>
                <Link to="/products?category=silver" className="inline-block bg-white text-[#143c69] px-4 sm:px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                  View Collection
                </Link>
              </div>
            </div>
            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={necklaceImage}
                alt="Brass Jewelry"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="600"
                height="384"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143c69]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Brass Jewelry</h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">Classic designs with multiple plating colors</p>
                <Link to="/products?category=brass" className="inline-block bg-white text-[#143c69] px-4 sm:px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143c69] mb-3 sm:mb-4">Production Process</h2>
            <p className="text-sm sm:text-base text-gray-600">From design to delivery - our professional manufacturing process</p>
          </div>

          {/* Production Process Flow Images */}
          <div className="mb-8 sm:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
              <img
                src={processImage}
                alt="Production Process Flow"
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
              <img
                src={processImage2}
                alt="Manufacturing Process Details"
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#143c69] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Design & Development</h3>
              <p className="text-sm text-gray-600">Custom design or select from our catalog</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#143c69] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Material Sourcing</h3>
              <p className="text-sm text-gray-600">High-quality 925 silver & brass materials</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#143c69] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Manufacturing</h3>
              <p className="text-sm text-gray-600">Precision crafting & plating process</p>
            </div>
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#143c69] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Quality Control</h3>
              <p className="text-sm text-gray-600">Rigorous inspection & packaging</p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center max-w-md w-full">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Delivery</h3>
              <p className="text-sm text-gray-600">Fast shipping & excellent after-sales service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#143c69] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Business?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-100">Contact us for product catalog and quotation</p>
          <Link to="/contact" className="inline-block bg-white text-[#143c69] px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Request Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
