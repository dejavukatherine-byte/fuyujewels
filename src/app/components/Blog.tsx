import { Link } from 'react-router';

const blogPosts = [
  {
    id: 1,
    title: '2026 Jewelry Industry Trends: Sustainability & Innovative Design',
    excerpt: 'Explore the latest trends in the jewelry industry for 2026, including the application of eco-friendly materials, the rise of personalized customization services, and the use of digital technology in jewelry manufacturing.',
    date: 'April 28, 2026',
    category: 'Industry Trends',
    image: '/blog-1.jpg'
  },
  {
    id: 2,
    title: 'Complete Care Guide for 925 Sterling Silver Jewelry',
    excerpt: 'Learn how to properly care for your 925 sterling silver jewelry to extend its lifespan. Includes daily cleaning, storage methods, and tips to prevent oxidation.',
    date: 'April 15, 2026',
    category: 'Care Tips',
    image: '/blog-2.jpg'
  },
  {
    id: 3,
    title: 'How to Choose the Right Jewelry Plating Process',
    excerpt: 'Different plating processes bring different effects and durability. This article introduces various plating options and their suitable applications to help you choose the best process for your products.',
    date: 'April 2, 2026',
    category: 'Manufacturing',
    image: '/blog-3.jpg'
  },
  {
    id: 4,
    title: 'B2B Jewelry Wholesale: Finding Reliable Suppliers',
    excerpt: 'In today\'s globalized world, finding reliable jewelry suppliers is crucial. Learn the key factors for evaluating suppliers, including quality control, MOQ flexibility, and delivery times.',
    date: 'March 20, 2026',
    category: 'Buying Guide',
    image: '/blog-4.jpg'
  },
  {
    id: 5,
    title: 'Custom Jewelry: Complete Process from Design to Production',
    excerpt: 'How OEM and ODM services help you create unique jewelry products. In-depth understanding of every step of custom jewelry, from initial design to final delivery.',
    date: 'March 5, 2026',
    category: 'Custom Services',
    image: '/blog-5.jpg'
  },
  {
    id: 6,
    title: 'Brass vs. Silver Jewelry: Material Comparison Analysis',
    excerpt: 'Compare the differences between brass and sterling silver in terms of cost, durability, appearance, and market positioning to help you choose the right material for your target market.',
    date: 'February 18, 2026',
    category: 'Material Knowledge',
    image: '/blog-6.jpg'
  }
];

export default function Blog() {
  return (
    <div className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#143c69]">Blog</h1>
          <p className="text-lg sm:text-xl text-gray-600">Industry insights, product knowledge, and best practices</p>
        </div>

        {/* Featured Post */}
        <div className="mb-8 sm:mb-12 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 sm:h-80 lg:h-auto flex items-center justify-center">
              <span className="text-gray-400">Featured Article Image</span>
            </div>
            <div className="p-4 sm:p-8 flex flex-col justify-center">
              <div className="text-xs sm:text-sm text-[#143c69] font-semibold mb-2">FEATURED ARTICLE</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">{blogPosts[0].title}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].category}</span>
              </div>
              <Link
                to={`/blog/${blogPosts[0].id}`}
                className="self-start bg-[#143c69] text-white px-4 sm:px-6 py-2 rounded-md font-semibold hover:bg-[#0f2f52] transition-colors text-sm sm:text-base"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.slice(1).map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-40 sm:h-48 flex items-center justify-center">
                <span className="text-gray-400 text-sm sm:text-base">Article Image</span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-[#143c69] font-semibold mb-2">{post.category}</div>
                <h3 className="font-bold mb-2 line-clamp-2 text-gray-900 text-sm sm:text-base">{post.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-xs sm:text-sm text-[#143c69] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 sm:mt-12 lg:mt-16 bg-[#143c69] text-white rounded-lg p-6 sm:p-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-4 sm:mb-6 text-gray-100 text-sm sm:text-base">Get the latest industry news, product updates, and exclusive offers</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            />
            <button className="bg-white text-[#143c69] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
