'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: 'Booking & Services',
      questions: [
        { q: 'How do I book a service?', a: 'You can book a service by calling us at +91 8623038373, through our mobile app, or by filling the contact form on our website.' },
        { q: 'How quickly can I get a service?', a: 'Most services can be scheduled within 2-4 hours. Emergency services are available 24/7 with immediate response.' },
        { q: 'Can I schedule a service for a specific date and time?', a: 'Yes, you can choose your preferred date and time slot while booking. We offer flexible scheduling options.' },
        { q: 'What areas do you serve?', a: 'We currently serve Gangakhed, Parbhani, and surrounding areas in Maharashtra. Contact us to check service availability in your area.' },
        { q: 'Do you provide emergency services?', a: 'Yes, we offer 24/7 emergency services for electricians, plumbers, and other critical home services.' }
      ]
    },
    {
      category: 'Payments',
      questions: [
        { q: 'What payment methods do you accept?', a: 'We accept cash, UPI, credit/debit cards, net banking, and digital wallets like Paytm, PhonePe, and Google Pay.' },
        { q: 'When do I need to pay?', a: 'Payment is due after the service is completed to your satisfaction. For monthly services, advance payment may be required.' },
        { q: 'Are there any hidden charges?', a: 'No, we believe in transparent pricing. The quoted price includes all charges unless additional work is required with your approval.' },
        { q: 'Do you provide invoices?', a: 'Yes, we provide detailed invoices for all services with GST details.' },
        { q: 'Is there a cancellation fee?', a: 'Cancellations made 2 hours before the scheduled time are free. Late cancellations may incur a nominal fee.' }
      ]
    },
    {
      category: 'Service Quality',
      questions: [
        { q: 'Are your professionals verified?', a: 'Yes, all our service professionals are background verified, trained, and experienced in their respective fields.' },
        { q: 'What if I\'m not satisfied with the service?', a: 'We offer a 100% satisfaction guarantee. If you\'re not happy, we\'ll redo the service for free or provide a full refund.' },
        { q: 'Do you provide warranty on services?', a: 'Yes, most services come with a warranty period ranging from 30 to 90 days depending on the service type.' },
        { q: 'Can I request the same professional again?', a: 'Yes, you can request your preferred professional for future bookings based on availability.' },
        { q: 'What safety measures do you follow?', a: 'All professionals follow strict safety protocols, carry proper tools, and maintain hygiene standards.' }
      ]
    },
    {
      category: 'Cancellation & Rescheduling',
      questions: [
        { q: 'How do I cancel a booking?', a: 'You can cancel by calling our customer support at +91 8623038373 or through the mobile app.' },
        { q: 'Can I reschedule my appointment?', a: 'Yes, you can reschedule up to 2 hours before the scheduled time without any charges.' },
        { q: 'What is your refund policy?', a: 'If you cancel before the professional arrives, you\'ll get a full refund. Refunds are processed within 5-7 business days.' },
        { q: 'What if the professional doesn\'t show up?', a: 'In the rare case this happens, we\'ll immediately send a replacement or provide a full refund with additional compensation.' }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Find answers to common questions</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-yellow-500">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const globalIndex = `${catIndex}-${index}`;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border-2 border-transparent hover:border-yellow-500 transition-all">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 flex justify-between items-center text-left"
                        >
                          <span className="font-bold text-lg pr-4">{item.q}</span>
                          {isOpen ? <FiChevronUp className="text-yellow-500 text-2xl flex-shrink-0" /> : <FiChevronDown className="text-gray-400 text-2xl flex-shrink-0" />}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 text-lg">Our customer support team is here to help you 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918623038373" className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all">
              Call Us: +91 8623038373
            </a>
            <a href="mailto:ashpakhyd@gmail.com" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all">
              Email: ashpakhyd@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
