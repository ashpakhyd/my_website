import { FiCheck, FiPhone } from 'react-icons/fi';

export default function Pricing() {
  const pricingData = [
    {
      category: 'Home Repair Services',
      services: [
        { name: 'Electrician', price: '₹299 onwards', includes: ['Switch/Socket Installation', 'Wiring Repair', 'Fan Installation', 'Light Fitting'] },
        { name: 'Plumber', price: '₹249 onwards', includes: ['Tap Repair', 'Pipe Leak Fixing', 'Bathroom Fitting', 'Drainage Cleaning'] },
        { name: 'Carpenter', price: '₹399 onwards', includes: ['Door Repair', 'Furniture Assembly', 'Cabinet Installation', 'Wood Polishing'] },
        { name: 'Painter', price: '₹15/sq.ft', includes: ['Wall Painting', 'Texture Work', 'Waterproofing', 'Color Consultation'] }
      ]
    },
    {
      category: 'Appliance Services',
      services: [
        { name: 'AC Service', price: '₹349 onwards', includes: ['Gas Filling', 'General Service', 'Installation', 'Repair'] },
        { name: 'Washing Machine', price: '₹299 onwards', includes: ['All Brands', 'Drum Cleaning', 'Motor Repair', 'Installation'] },
        { name: 'Refrigerator', price: '₹349 onwards', includes: ['Gas Filling', 'Cooling Issue', 'Compressor Repair', 'All Brands'] },
        { name: 'Microwave', price: '₹299 onwards', includes: ['Heating Issue', 'Door Repair', 'All Brands', 'Quick Service'] }
      ]
    },
    {
      category: 'Cleaning Services',
      services: [
        { name: 'Deep Cleaning', price: '₹499 onwards', includes: ['Kitchen Deep Clean', 'Bathroom Cleaning', 'Floor Cleaning', 'Eco-Friendly Products'] },
        { name: 'Sofa Cleaning', price: '₹399 per seat', includes: ['Dry Cleaning', 'Stain Removal', 'Fabric Protection', 'Odor Removal'] },
        { name: 'Carpet Cleaning', price: '₹99/sq.ft', includes: ['Deep Vacuum', 'Stain Treatment', 'Sanitization', 'Quick Drying'] }
      ]
    },
    {
      category: 'Professional Services',
      services: [
        { name: 'Home Tuition', price: '₹500/hour', includes: ['All Subjects', 'Flexible Timing', 'Exam Preparation', 'Personalized Attention'] },
        { name: 'Legal Consultation', price: '₹999 onwards', includes: ['Legal Advice', 'Documentation', 'Court Representation', 'Confidential'] },
        { name: 'Doctor Visit', price: '₹799 onwards', includes: ['Home Visit', 'Consultation', 'Prescription', 'Follow-up'] }
      ]
    },
    {
      category: 'Monthly Services',
      services: [
        { name: 'Cook', price: '₹8,000/month', includes: ['2 Meals Daily', 'All Cuisines', 'Hygienic Cooking', 'Flexible Menu'] },
        { name: 'Driver', price: '₹15,000/month', includes: ['Licensed Driver', 'Background Verified', 'Flexible Hours', 'Professional'] },
        { name: 'Security Guard', price: '₹12,000/month', includes: ['Trained Guard', 'Background Verified', '24/7 Monitoring', 'Uniform Provided'] }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-xl">No hidden charges. Pay only for what you need.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-yellow-50 border-2 border-yellow-500 rounded-xl p-6 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-2">🎉 Special Offer!</h3>
              <p className="text-lg">Book now and get 20% OFF on your first service</p>
            </div>

            {pricingData.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">{category.category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-500">
                      <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                      <div className="text-3xl font-bold text-yellow-500 mb-4">{service.price}</div>
                      <ul className="space-y-2 mb-6">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <FiCheck className="text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a href="tel:+918623038373" className="block text-center bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition-all">
                        Book Now
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'No Hidden Charges', desc: 'What you see is what you pay' },
                { title: 'Flexible Payment', desc: 'Cash, UPI, Card - all accepted' },
                { title: 'Money Back Guarantee', desc: 'Not satisfied? Get refund' },
                { title: 'Free Inspection', desc: 'Get free quote before service' },
                { title: 'Seasonal Discounts', desc: 'Regular offers and deals' },
                { title: 'Loyalty Rewards', desc: 'Earn points on every booking' }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center">
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Quote?</h2>
          <p className="text-xl mb-8">Call us for personalized pricing based on your requirements</p>
          <a href="tel:+918623038373" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
            <FiPhone /> Call +91 8623038373
          </a>
        </div>
      </section>
    </main>
  );
}
