import { Link } from 'react-router';

export default function AboutUs() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#143c69]">About FUYU JEWELS</h1>
          <p className="text-lg sm:text-xl text-gray-600">15 Years of Professional Jewelry Manufacturing Excellence</p>
        </div>

        {/* Company Introduction */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="rounded-lg h-64 sm:h-80 lg:h-96 overflow-hidden">
              <img
                src={storyImage}
                alt="FUYU JEWELS Factory"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#143c69]">Our Story</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Guangzhou Fuyu Import & Export Co., Ltd. is a professional jewelry manufacturer with 15 years of experience,
                specializing in the production and wholesale export of 925 sterling silver and brass jewelry. Since its establishment,
                we have been committed to providing high-quality jewelry products to customers worldwide.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Over the years, we have continuously innovated, introduced advanced production equipment and technologies,
                and established a comprehensive quality management system. Our products are exported to many countries and regions
                in Europe, the United States, Latin America, and Southeast Asia, winning the trust of our customers.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                We firmly believe that quality is the lifeline of an enterprise. Every product undergoes rigorous quality inspection
                to ensure compliance with international standards.
              </p>
            </div>
          </div>
        </div>

        {/* Our Advantages */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-[#143c69]">Our Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-[#143c69]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Professional Factory</h3>
              <p className="text-sm text-gray-600">15 years manufacturing experience with modern production facilities</p>
            </div>
            <div className="text-center">
              <div className="bg-[#143c69]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Quality Assurance</h3>
              <p className="text-sm text-gray-600">Strict quality inspection meeting international standards</p>
            </div>
            <div className="text-center">
              <div className="bg-[#143c69]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Design Innovation</h3>
              <p className="text-sm text-gray-600">Professional design team following fashion trends</p>
            </div>
            <div className="text-center">
              <div className="bg-[#143c69]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">Global Service</h3>
              <p className="text-sm text-gray-600">Rich export experience serving worldwide clients</p>
            </div>
            <div className="text-center">
              <div className="bg-[#143c69]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">OEM Service</h3>
              <p className="text-sm text-gray-600">Customized manufacturing based on your specifications and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-[#143c69]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-bold mb-2 text-[#143c69]">ODM Service</h3>
              <p className="text-sm text-gray-600">Complete design and manufacturing solutions from concept to delivery</p>
            </div>
          </div>
        </div>

        {/* Production Capabilities */}
        <div className="mb-8 sm:mb-12 lg:mb-16 bg-gray-50 rounded-lg p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-[#143c69]">Production Capacity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold mb-3 text-[#143c69] text-sm sm:text-base">Main Products</h3>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>• 925 Sterling Silver Rings</li>
                <li>• 925 Sterling Silver Necklaces</li>
                <li>• 925 Sterling Silver Earrings</li>
                <li>• 925 Sterling Silver Bracelets</li>
                <li>• 925 Sterling Silver Sets</li>
                <li>• Brass Jewelry Collection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-[#143c69] text-sm sm:text-base">Plating Options</h3>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>• Silver</li>
                <li>• Rhodium</li>
                <li>• Gold</li>
                <li>• Rose Gold</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-[#143c69] text-sm sm:text-base">Services</h3>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>• OEM Customization Service</li>
                <li>• ODM Design Service</li>
                <li>• Small Batch Production</li>
                <li>• Flexible Minimum Order Quantity</li>
                <li>• Fast Delivery</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#143c69] text-white rounded-lg p-6 sm:p-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Looking Forward to Partnering With You</h2>
          <p className="mb-4 sm:mb-6 text-gray-100 text-sm sm:text-base">Contact us to learn more and get product catalog and quotation</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#143c69] px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}
