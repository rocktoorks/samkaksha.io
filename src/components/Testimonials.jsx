import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Anjali Mehta',
      role: 'Community Health Officer',
      location: 'Mumbai',
      content: 'SAMKAKSHA FOUNDATION\'s approach to community development is truly remarkable. Their healthcare initiatives have transformed our rural clinics and improved access to quality care.',
      rating: 5,
      image: 'Professional Indian female doctor in white coat smiling confidently'
    },
    {
      name: 'Vikram Singh',
      role: 'Village Sarpanch',
      location: 'Rajasthan',
      content: 'The education programs have brought hope to our village. Children who never dreamed of higher education are now pursuing their goals with confidence.',
      rating: 5,
      image: 'Elderly Indian man in traditional attire speaking at a community gathering'
    },
    {
      name: 'Sunita Patel',
      role: 'Women\'s Group Leader',
      location: 'Gujarat',
      content: 'Through SAMKAKSHA\'s women empowerment program, I learned to read and write at age 35. Now I help other women in my community achieve their dreams.',
      rating: 5,
      image: 'Middle-aged Indian woman teaching other women in a community center'
    },
    {
      name: 'Arjun Reddy',
      role: 'Local Entrepreneur',
      location: 'Andhra Pradesh',
      content: 'The skill development program gave me the tools to start my own business. Today, I employ 15 people from my community, creating a cycle of prosperity.',
      rating: 5,
      image: 'Young Indian man in business attire standing proudly in front of his shop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from community leaders, beneficiaries, and partners about the impact 
            SAMKAKSHA FOUNDATION has made in their lives and communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 hover-lift relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img  
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Join Our <span className="gradient-text">Community</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Be part of a growing network of changemakers, volunteers, and supporters 
              who are committed to creating positive impact in communities across India.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;