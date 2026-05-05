import { Link, useParams } from 'react-router';

const blogPostsData: Record<number, any> = {
  1: {
    id: 1,
    title: '2026 Jewelry Industry Trends: Sustainability & Innovative Design',
    date: 'April 28, 2026',
    category: 'Industry Trends',
    author: 'FUYU JEWELS Team',
    content: `
      <p>The jewelry industry is experiencing significant transformations in 2026, driven by evolving consumer preferences and technological advancements. Here are the key trends shaping our industry:</p>

      <h2>1. Sustainability Takes Center Stage</h2>
      <p>Environmental consciousness has become paramount in jewelry manufacturing. Consumers are increasingly demanding transparency in sourcing and production processes. At FUYU JEWELS, we've implemented eco-friendly practices throughout our supply chain, from responsibly sourced materials to energy-efficient manufacturing processes.</p>

      <h2>2. Personalized Customization</h2>
      <p>The demand for personalized jewelry continues to grow. Our OEM and ODM services allow clients to create unique pieces that reflect their brand identity and customer preferences. From custom engravings to bespoke designs, personalization is no longer a luxury—it's an expectation.</p>

      <h2>3. Digital Technology in Manufacturing</h2>
      <p>Advanced manufacturing technologies, including 3D printing and CAD design, are revolutionizing how we create jewelry. These innovations enable faster prototyping, more intricate designs, and improved quality control. Our investment in modern equipment ensures we stay at the forefront of these technological advances.</p>

      <h2>4. Minimalist Aesthetics</h2>
      <p>Clean lines and simple elegance continue to dominate design trends. Consumers are gravitating toward versatile pieces that can be worn daily and layered for different occasions. Our 925 sterling silver collection reflects this preference for understated sophistication.</p>

      <h2>Looking Forward</h2>
      <p>As we navigate these trends, FUYU JEWELS remains committed to combining traditional craftsmanship with innovative practices. Our 15 years of experience position us perfectly to meet the evolving needs of the global jewelry market.</p>
    `
  },
  2: {
    id: 2,
    title: 'Complete Care Guide for 925 Sterling Silver Jewelry',
    date: 'April 15, 2026',
    category: 'Care Tips',
    author: 'FUYU JEWELS Team',
    content: `
      <p>925 Sterling silver jewelry is treasured for its beauty and durability. With proper care, your silver pieces can maintain their luster for generations. Here's our comprehensive guide to keeping your sterling silver jewelry looking its best.</p>

      <h2>Understanding 925 Sterling Silver</h2>
      <p>925 Sterling silver contains 92.5% pure silver and 7.5% other metals (usually copper). This composition provides the perfect balance of beauty and durability. However, silver naturally tarnishes when exposed to air and moisture.</p>

      <h2>Daily Care Tips</h2>
      <h3>1. Wear Your Silver Regularly</h3>
      <p>Surprisingly, wearing your silver jewelry is one of the best ways to prevent tarnish. The natural oils in your skin help keep silver clean and lustrous.</p>

      <h3>2. Remove Before Activities</h3>
      <p>Always remove silver jewelry before:</p>
      <ul>
        <li>Swimming (chlorine damages silver)</li>
        <li>Exercising (sweat accelerates tarnishing)</li>
        <li>Cleaning with chemicals</li>
        <li>Applying lotions, perfumes, or hairspray</li>
      </ul>

      <h2>Cleaning Methods</h2>
      <h3>Regular Cleaning</h3>
      <p>For routine maintenance, use a soft cloth and warm water with mild dish soap. Gently rub the jewelry, rinse thoroughly, and pat dry with a lint-free cloth.</p>

      <h3>Removing Tarnish</h3>
      <p>Use a specialized silver polishing cloth or silver cleaning solution. For heavily tarnished pieces, consider professional cleaning.</p>

      <h2>Proper Storage</h2>
      <p>Store silver jewelry in:</p>
      <ul>
        <li>Individual soft pouches or lined jewelry boxes</li>
        <li>Anti-tarnish bags or strips</li>
        <li>Cool, dry places away from direct sunlight</li>
        <li>Separate compartments to prevent scratching</li>
      </ul>

      <h2>Long-term Preservation</h2>
      <p>For pieces you don't wear regularly, apply a thin coat of clear nail polish to prevent tarnishing, or wrap them in acid-free tissue paper before storing in anti-tarnish bags.</p>
    `
  },
  3: {
    id: 3,
    title: 'How to Choose the Right Jewelry Plating Process',
    date: 'April 2, 2026',
    category: 'Manufacturing',
    author: 'FUYU JEWELS Team',
    content: `
      <p>Plating is a crucial finishing process that determines both the appearance and durability of jewelry. As a manufacturer with 15 years of experience, we offer multiple plating options to meet diverse market needs.</p>

      <h2>Common Plating Types</h2>

      <h3>1. Silver Plating</h3>
      <p><strong>Best for:</strong> Classic, affordable pieces<br/>
      <strong>Characteristics:</strong> Bright white finish, good conductivity<br/>
      <strong>Durability:</strong> Moderate; requires regular maintenance<br/>
      <strong>Applications:</strong> Everyday wear jewelry, fashion pieces</p>

      <h3>2. Rhodium Plating</h3>
      <p><strong>Best for:</strong> High-end, durable jewelry<br/>
      <strong>Characteristics:</strong> Brilliant white finish, highly reflective<br/>
      <strong>Durability:</strong> Excellent; tarnish-resistant<br/>
      <strong>Applications:</strong> Fine jewelry, wedding bands, luxury pieces</p>

      <h3>3. Gold Plating</h3>
      <p><strong>Best for:</strong> Luxurious appearance at accessible prices<br/>
      <strong>Characteristics:</strong> Warm yellow tone, classic appeal<br/>
      <strong>Durability:</strong> Good with proper thickness<br/>
      <strong>Applications:</strong> Statement pieces, traditional designs</p>

      <h3>4. Rose Gold Plating</h3>
      <p><strong>Best for:</strong> Trendy, romantic designs<br/>
      <strong>Characteristics:</strong> Soft pink tone, contemporary feel<br/>
      <strong>Durability:</strong> Good; increasingly popular<br/>
      <strong>Applications:</strong> Fashion jewelry, feminine designs, gift items</p>

      <h2>Factors to Consider</h2>

      <h3>Target Market</h3>
      <p>Consider your customers' preferences and price points. Rhodium appeals to luxury markets, while silver and gold plating work well for mid-range products.</p>

      <h3>Product Type</h3>
      <p>Daily-wear items benefit from durable rhodium plating, while occasional-wear pieces can use more affordable options.</p>

      <h3>Design Style</h3>
      <p>Match plating to design aesthetics—rose gold suits romantic designs, while rhodium enhances modern minimalist pieces.</p>

      <h3>Cost Considerations</h3>
      <p>Balance quality with budget. Thicker plating costs more but offers better durability and customer satisfaction.</p>

      <h2>Our Expertise</h2>
      <p>At FUYU JEWELS, we provide all four plating options with consistent quality. Our experienced team can recommend the optimal plating process based on your specific requirements, target market, and budget constraints.</p>
    `
  },
  4: {
    id: 4,
    title: 'B2B Jewelry Wholesale: Finding Reliable Suppliers',
    date: 'March 20, 2026',
    category: 'Buying Guide',
    author: 'FUYU JEWELS Team',
    content: `
      <p>Choosing the right jewelry supplier is critical for your business success. The quality of your supplier directly impacts your product quality, delivery times, and ultimately, customer satisfaction. Here's what to look for when selecting a jewelry manufacturer.</p>

      <h2>Key Evaluation Criteria</h2>

      <h3>1. Manufacturing Experience</h3>
      <p>Look for suppliers with proven track records. Years in business indicate stability and accumulated expertise. FUYU JEWELS' 15 years of experience means we understand industry challenges and quality standards.</p>

      <h3>2. Quality Control Systems</h3>
      <p>Ask about quality inspection processes:</p>
      <ul>
        <li>Material verification procedures</li>
        <li>In-process quality checks</li>
        <li>Final product inspection standards</li>
        <li>Compliance with international standards</li>
      </ul>

      <h3>3. Production Capacity</h3>
      <p>Ensure the supplier can handle your volume requirements while maintaining quality. Inquire about:</p>
      <ul>
        <li>Daily/monthly production capacity</li>
        <li>Minimum Order Quantity (MOQ) flexibility</li>
        <li>Scalability for growing orders</li>
        <li>Peak season capabilities</li>
      </ul>

      <h3>4. Customization Services</h3>
      <p>Does the supplier offer OEM/ODM services? Can they work with your designs or create new ones? Flexibility in customization is crucial for building a unique product line.</p>

      <h3>5. Communication & Service</h3>
      <p>Evaluate responsiveness and communication quality:</p>
      <ul>
        <li>Response time to inquiries</li>
        <li>Language capabilities</li>
        <li>Willingness to provide samples</li>
        <li>After-sales support</li>
      </ul>

      <h2>Red Flags to Avoid</h2>

      <h3>Unrealistic Promises</h3>
      <p>Be wary of suppliers offering prices significantly below market rates or promising impossibly short lead times.</p>

      <h3>Poor Communication</h3>
      <p>Slow responses or unclear answers indicate potential issues in order management and problem resolution.</p>

      <h3>No Samples or Certificates</h3>
      <p>Legitimate suppliers readily provide samples and quality certificates. Reluctance to do so is a warning sign.</p>

      <h2>Building Long-term Partnerships</h2>

      <h3>Start Small</h3>
      <p>Begin with smaller test orders to evaluate quality, delivery, and service before committing to large volumes.</p>

      <h3>Clear Agreements</h3>
      <p>Ensure all terms are documented: specifications, pricing, payment terms, delivery schedules, and quality standards.</p>

      <h3>Regular Communication</h3>
      <p>Maintain open dialogue about market trends, design preferences, and potential improvements.</p>

      <h2>Why Choose FUYU JEWELS</h2>
      <p>We meet all the criteria of a reliable supplier:</p>
      <ul>
        <li>15 years of proven manufacturing excellence</li>
        <li>Strict quality control at every production stage</li>
        <li>Flexible MOQ to support businesses of all sizes</li>
        <li>Full OEM/ODM customization services</li>
        <li>Responsive customer service in English</li>
        <li>Competitive pricing without compromising quality</li>
      </ul>
    `
  },
  5: {
    id: 5,
    title: 'Custom Jewelry: Complete Process from Design to Production',
    date: 'March 5, 2026',
    category: 'Custom Services',
    author: 'FUYU JEWELS Team',
    content: `
      <p>Custom jewelry manufacturing allows you to create unique pieces that perfectly match your brand vision and customer preferences. Understanding the custom jewelry process helps you plan timelines, budgets, and expectations. Here's how we transform your ideas into beautiful jewelry.</p>

      <h2>Step 1: Initial Consultation</h2>

      <h3>Understanding Your Vision</h3>
      <p>We begin by discussing your requirements:</p>
      <ul>
        <li>Design concept and inspiration</li>
        <li>Target market and price point</li>
        <li>Material preferences (925 silver, brass)</li>
        <li>Plating options</li>
        <li>Quantity requirements</li>
        <li>Timeline expectations</li>
      </ul>

      <h3>OEM vs. ODM Services</h3>
      <p><strong>OEM (Original Equipment Manufacturing):</strong> You provide designs, we manufacture to your specifications.</p>
      <p><strong>ODM (Original Design Manufacturing):</strong> Our design team creates original pieces based on your requirements.</p>

      <h2>Step 2: Design Development</h2>

      <h3>Concept Sketches</h3>
      <p>For ODM projects, our designers create initial sketches based on your brief, market trends, and technical feasibility.</p>

      <h3>CAD Design</h3>
      <p>Approved concepts are transformed into detailed 3D CAD models, allowing you to visualize the piece from all angles.</p>

      <h3>Design Approval</h3>
      <p>We provide detailed specifications including dimensions, weight, and material requirements for your review and approval.</p>

      <h2>Step 3: Sample Production</h2>

      <h3>Prototype Creation</h3>
      <p>We produce physical samples for evaluation. This stage allows you to:</p>
      <ul>
        <li>Assess actual size and proportions</li>
        <li>Evaluate finish and plating quality</li>
        <li>Test durability and functionality</li>
        <li>Request modifications if needed</li>
      </ul>

      <h3>Sample Revision</h3>
      <p>Based on your feedback, we refine the design and create revised samples until you're completely satisfied.</p>

      <h2>Step 4: Mass Production</h2>

      <h3>Material Sourcing</h3>
      <p>We procure high-quality materials meeting the approved specifications:</p>
      <ul>
        <li>925 sterling silver (92.5% purity guaranteed)</li>
        <li>Premium brass</li>
        <li>Quality plating materials</li>
      </ul>

      <h3>Manufacturing</h3>
      <p>Our production process includes:</p>
      <ul>
        <li>Precise casting or forming</li>
        <li>Expert finishing and polishing</li>
        <li>Professional plating application</li>
        <li>Stone setting (if applicable)</li>
      </ul>

      <h3>Quality Control</h3>
      <p>Every piece undergoes rigorous inspection:</p>
      <ul>
        <li>Material verification</li>
        <li>Dimensional accuracy checks</li>
        <li>Surface finish inspection</li>
        <li>Plating thickness measurement</li>
        <li>Overall quality assessment</li>
      </ul>

      <h2>Step 5: Packaging & Delivery</h2>

      <h3>Professional Packaging</h3>
      <p>We offer various packaging options:</p>
      <ul>
        <li>Standard protective packaging</li>
        <li>Custom branded packaging (available on request)</li>
        <li>Secure export packaging</li>
      </ul>

      <h3>Delivery</h3>
      <p>We arrange shipping via your preferred method and provide complete documentation for customs clearance.</p>

      <h2>Timeline & Pricing</h2>

      <h3>Typical Timeline</h3>
      <ul>
        <li>Design development: 3-7 days</li>
        <li>Sample production: 7-10 days</li>
        <li>Mass production: 15-30 days (depending on quantity)</li>
      </ul>

      <h3>Investment Considerations</h3>
      <p>Custom jewelry costs vary based on:</p>
      <ul>
        <li>Design complexity</li>
        <li>Material choices</li>
        <li>Plating requirements</li>
        <li>Order quantity</li>
        <li>Customization level</li>
      </ul>

      <h2>Partner with FUYU JEWELS</h2>
      <p>Our experienced team guides you through every step, ensuring your custom jewelry project succeeds. Contact us today to discuss your custom jewelry needs!</p>
    `
  },
  6: {
    id: 6,
    title: 'Brass vs. Silver Jewelry: Material Comparison Analysis',
    date: 'February 18, 2026',
    category: 'Material Knowledge',
    author: 'FUYU JEWELS Team',
    content: `
      <p>Choosing between brass and 925 sterling silver is a crucial decision that affects product positioning, pricing, and target market. Both materials have distinct advantages, and understanding their characteristics helps you make informed decisions for your jewelry line.</p>

      <h2>925 Sterling Silver</h2>

      <h3>Composition & Characteristics</h3>
      <p>925 Sterling silver contains 92.5% pure silver and 7.5% other metals (typically copper). This composition offers:</p>
      <ul>
        <li>Beautiful white metallic luster</li>
        <li>Excellent durability for jewelry</li>
        <li>Hypoallergenic properties (suitable for sensitive skin)</li>
        <li>Natural antibacterial qualities</li>
        <li>High intrinsic value</li>
      </ul>

      <h3>Advantages</h3>
      <ul>
        <li><strong>Prestige:</strong> Precious metal status appeals to quality-conscious customers</li>
        <li><strong>Durability:</strong> Maintains appearance with proper care</li>
        <li><strong>Versatility:</strong> Suitable for both casual and fine jewelry</li>
        <li><strong>Skin Safety:</strong> Low allergy risk makes it ideal for sensitive skin</li>
        <li><strong>Investment Value:</strong> Retains metal value</li>
      </ul>

      <h3>Considerations</h3>
      <ul>
        <li><strong>Price:</strong> Higher material cost than brass</li>
        <li><strong>Tarnishing:</strong> Requires regular maintenance to prevent oxidation</li>
        <li><strong>Softness:</strong> More prone to scratches than harder metals</li>
      </ul>

      <h3>Best Applications</h3>
      <ul>
        <li>Fine jewelry collections</li>
        <li>Wedding and engagement jewelry</li>
        <li>High-end fashion pieces</li>
        <li>Jewelry for sensitive skin</li>
        <li>Investment-grade pieces</li>
      </ul>

      <h2>Brass Jewelry</h2>

      <h3>Composition & Characteristics</h3>
      <p>Brass is an alloy of copper and zinc, offering:</p>
      <ul>
        <li>Warm golden appearance</li>
        <li>Excellent malleability for intricate designs</li>
        <li>Cost-effective material</li>
        <li>Good durability with proper finishing</li>
        <li>Vintage aesthetic appeal</li>
      </ul>

      <h3>Advantages</h3>
      <ul>
        <li><strong>Affordability:</strong> Lower material costs enable competitive pricing</li>
        <li><strong>Design Flexibility:</strong> Easy to work with for complex designs</li>
        <li><strong>Aesthetic Options:</strong> Can be plated in various finishes</li>
        <li><strong>Durability:</strong> Resistant to corrosion with proper treatment</li>
        <li><strong>Market Appeal:</strong> Growing trend for brass jewelry</li>
      </ul>

      <h3>Considerations</h3>
      <ul>
        <li><strong>Skin Sensitivity:</strong> May cause reactions in some individuals</li>
        <li><strong>Oxidation:</strong> Requires protective plating</li>
        <li><strong>Perceived Value:</strong> Not a precious metal</li>
        <li><strong>Maintenance:</strong> Needs regular care to maintain appearance</li>
      </ul>

      <h3>Best Applications</h3>
      <ul>
        <li>Fashion jewelry</li>
        <li>Trendy, seasonal pieces</li>
        <li>Vintage-style jewelry</li>
        <li>Budget-friendly collections</li>
        <li>Statement pieces</li>
      </ul>

      <h2>Direct Comparison</h2>

      <table style="width:100%; border-collapse: collapse;">
        <tr style="background-color: #143c69; color: white;">
          <th style="padding: 12px; text-align: left;">Factor</th>
          <th style="padding: 12px; text-align: left;">925 Sterling Silver</th>
          <th style="padding: 12px; text-align: left;">Brass</th>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;"><strong>Material Cost</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Higher</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Lower</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;"><strong>Retail Price Point</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Premium</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Mid to Budget</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;"><strong>Target Market</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Quality-focused buyers</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Fashion-conscious, price-sensitive</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;"><strong>Durability</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Excellent</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Good</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;"><strong>Skin Sensitivity</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Hypoallergenic</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">May cause reactions</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;"><strong>Maintenance</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Regular polishing needed</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Requires protective coating</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;"><strong>Design Versatility</strong></td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Very good</td>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">Excellent</td>
        </tr>
      </table>

      <h2>Making the Right Choice</h2>

      <h3>Consider Your Market</h3>
      <ul>
        <li><strong>Premium Market:</strong> Choose 925 sterling silver for its prestige and quality</li>
        <li><strong>Fashion Market:</strong> Brass offers trendy designs at accessible prices</li>
        <li><strong>Mixed Strategy:</strong> Offer both materials for different customer segments</li>
      </ul>

      <h3>Product Strategy</h3>
      <p>Many successful brands offer both materials:</p>
      <ul>
        <li>Silver for core, timeless collections</li>
        <li>Brass for seasonal, trendy pieces</li>
        <li>Similar designs in both materials at different price points</li>
      </ul>

      <h2>FUYU JEWELS Expertise</h2>
      <p>We specialize in both 925 sterling silver and brass jewelry, offering:</p>
      <ul>
        <li>Premium quality materials sourced from reliable suppliers</li>
        <li>Expert craftsmanship for both material types</li>
        <li>Multiple plating options for enhanced appearance and durability</li>
        <li>Flexible MOQ to support diverse product strategies</li>
        <li>Competitive pricing without compromising quality</li>
      </ul>

      <p>Contact us to discuss which material best suits your brand positioning and market strategy!</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPostsData[Number(id || 0)];

  if (!post) {
    return (
      <div className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Article Not Found</h1>
          <Link to="/blog" className="text-[#143c69] hover:underline font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-6 sm:mb-8">
          <Link to="/blog" className="text-[#143c69] hover:underline font-medium text-sm sm:text-base">
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-6 sm:mb-8">
          <div className="mb-3 sm:mb-4">
            <span className="inline-block bg-[#143c69] text-white px-3 sm:px-4 py-1 rounded-md text-xs sm:text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-600">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-64 sm:h-80 lg:h-96 flex items-center justify-center">
          <span className="text-gray-400 text-sm sm:text-base">Article Featured Image</span>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-12 shadow-sm">
          <div
            className="article-content text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="bg-[#143c69] text-white rounded-lg p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Interested in Our Products?</h3>
            <p className="mb-4 sm:mb-6 text-gray-100 text-sm sm:text-base">
              Contact us for product catalog, quotations, and custom jewelry solutions
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#143c69] px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Contact Us Now
            </Link>
          </div>
        </footer>

        {/* Related Articles */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">More Articles</h3>
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-block bg-[#143c69] text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-[#0f2f52] transition-colors text-sm sm:text-base"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
