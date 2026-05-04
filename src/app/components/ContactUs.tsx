import { useState } from 'react';
import { useSearchParams } from 'react-router';

export default function ContactUs() {
  const [searchParams] = useSearchParams();
  const productSku = searchParams.get('product') || '';
  const plating = searchParams.get('plating') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product: productSku,
    plating: plating,
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Quote request submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border-2 border-[#143c69] rounded-lg p-6 sm:p-8 shadow-sm">
            <div className="text-4xl sm:text-5xl mb-4 text-[#143c69]">✓</div>
            <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#143c69]">Quote Request Submitted Successfully</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Thank you for your quote request! Our sales team will contact you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#143c69] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#0f2f52] transition-colors text-sm sm:text-base"
            >
              Get Another Quote
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#143c69]">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-600">Fill out the quote form and we'll get back to you soon</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm">
              <h2 className="font-bold mb-3 sm:mb-4 text-[#143c69] text-base sm:text-lg">Contact Information</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="font-semibold mb-1 text-gray-900 text-sm sm:text-base">📧 Email</div>
                  <a href="mailto:fuyujewels@outlook.com" className="text-[#143c69] hover:underline text-sm sm:text-base break-all">
                    fuyujewels@outlook.com
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-gray-900 text-sm sm:text-base">📱 Phone</div>
                  <a href="tel:+8615018789534" className="text-[#143c69] hover:underline text-sm sm:text-base">
                    +86 15018789534
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-gray-900 text-sm sm:text-base">💬 WhatsApp</div>
                  <a href="https://wa.me/8615018789534" className="text-[#143c69] hover:underline text-sm sm:text-base">
                    +86 15018789534
                  </a>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-gray-900 text-sm sm:text-base">📍 Address</div>
                  <p className="text-gray-600 text-sm sm:text-base">Room C302, South Tower, Liwan Plaza, Liwan District, Guangzhou City, Guangdong Province, China</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="font-bold mb-3 sm:mb-4 text-[#143c69] text-base sm:text-lg">Business Hours</h2>
              <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 12:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-4">(China Standard Time GMT+8)</p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 sm:p-8 shadow-sm">
              <h2 className="font-bold mb-4 sm:mb-6 text-[#143c69] text-base sm:text-lg">Quote Request Form</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                    placeholder="+1 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">
                    Country/Region <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter country/region"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">Product SKU</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                    placeholder="e.g., SR-001"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">Plating Color</label>
                  <select
                    name="plating"
                    value={formData.plating}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Please select</option>
                    <option value="Silver">Silver</option>
                    <option value="Rhodium">Rhodium</option>
                    <option value="Gold">Gold</option>
                    <option value="Rose Gold">Rose Gold</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">Estimated Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter quantity"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label className="block font-semibold mb-2 text-gray-900 text-sm sm:text-base">
                  Quote Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143c69] focus:border-transparent text-sm sm:text-base"
                  placeholder="Please describe your requirements in detail, including product specifications, quantity, delivery time, etc..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#143c69] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0f2f52] transition-colors text-sm sm:text-base"
              >
                Get A Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
