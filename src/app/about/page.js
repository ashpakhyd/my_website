import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl font-bold mb-4">About S.U.GROUP</h1>
          <p className="text-xl">Your Trusted Partner for Home Services</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded by Ashfaq Ahemad Shaikh, S.U.GROUP (Shaikh United Group) started with a simple vision: to make quality home services accessible to everyone. Based in Gangakhed, Parbhani, Maharashtra, we've grown from a small local service provider to a trusted platform connecting thousands of customers with verified professionals.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We understand the challenges homeowners face when looking for reliable service providers. That's why we've built a platform that ensures quality, transparency, and trust in every service interaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FiTarget className="text-5xl text-yellow-500 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To revolutionize the home services industry by providing instant access to verified, skilled professionals. We aim to make every home service experience seamless, reliable, and satisfying for our customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <FiEye className="text-5xl text-yellow-500 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become India's most trusted home service platform, empowering service professionals and delighting customers with quality, convenience, and innovation in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <FiAward />, title: 'Quality Assurance', desc: 'Every professional is verified and trained to deliver excellence' },
              { icon: <FiUsers />, title: 'Customer First', desc: 'Your satisfaction is our top priority, always' },
              { icon: <FiTrendingUp />, title: 'Continuous Growth', desc: 'We constantly improve our services based on your feedback' },
              { icon: <FiHeart />, title: 'Trust & Transparency', desc: 'No hidden charges, clear pricing, honest service' },
              { icon: <FiTarget />, title: 'Quick Response', desc: '24/7 availability for emergency services' },
              { icon: <FiAward />, title: 'Best Prices', desc: 'Competitive pricing without compromising quality' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl text-yellow-500 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {['Integrity', 'Excellence', 'Innovation', 'Customer Satisfaction'].map((value, index) => (
              <div key={index} className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Company Information</h2>
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl">
            <p className="text-lg mb-2"><strong>Company:</strong> Shaikh United Group (S.U.GROUP)</p>
            <p className="text-lg mb-2"><strong>Founder:</strong> Ashfaq Ahemad Shaikh (Arbaz Ahamad Shaikh)</p>
            <p className="text-lg mb-2"><strong>GSTIN:</strong> 27DTBPA7699A1ZP</p>
            <p className="text-lg mb-2"><strong>MSME No:</strong> UDYAM-MH-25-0001872</p>
            <p className="text-lg mb-2"><strong>Contact:</strong> 9881649776</p>
            <p className="text-lg"><strong>Address:</strong> 1st floor, Happy House, Gangakhed, Parbhani, Maharashtra-431514</p>
          </div>
        </div>
      </section>
    </main>
  );
}
