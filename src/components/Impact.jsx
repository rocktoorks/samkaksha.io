import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Lives Transformed',
      description: 'Individuals directly impacted by our programs',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MapPin,
      number: '15',
      label: 'Communities Served',
      description: 'Villages and urban areas where we operate',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Calendar,
      number: '25+',
      label: 'Active Programs',
      description: 'Ongoing initiatives across all sectors',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Success Rate',
      description: 'Programs achieving their intended outcomes',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const stories = [
    {
      name: 'Priya Sharma',
      age: 16,
      location: 'Rural Maharashtra',
      story: 'Thanks to SAMKAKSHA\'s education program, I received a scholarship and am now the first in my family to attend college.',
      image: 'Young Indian girl in school uniform holding books with a bright smile'
    },
    {
      name: 'Rajesh Kumar',
      age: 34,
      location: 'Urban Delhi',
      story: 'The skill development program helped me start my own small business and support my family with dignity.',
      image: 'Middle-aged Indian man working in his small shop with pride'
    },
    {
      name: 'Meera Devi',
      age: 28,
      location: 'Rural Gujarat',
      story: 'Through the women empowerment initiative, I learned financial literacy and now lead our village savings group.',
      image: 'Indian woman teaching other women about financial planning'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every number tells a story of transformation. See how SAMKAKSHA FOUNDATION 
            is making a real difference in communities across the region.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2 gradient-text"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Stories of <span className="gradient-text">Transformation</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl overflow-hidden hover-lift"
              >
                <div className="relative h-64">
                  <img  
                    alt={`${story.name} - Success story from ${story.location}`}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">{story.name}</h4>
                    <p className="text-sm opacity-90">{story.location}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed italic">
                    "{story.story}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center glass-effect rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-800">
            Join Our <span className="gradient-text">Mission</span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every contribution, no matter how small, creates ripples of positive change. 
            Together, we can transform more lives and build stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">₹500</div>
              <div className="text-sm text-gray-600">Educates a child for 1 month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">₹1,500</div>
              <div className="text-sm text-gray-600">Provides healthcare for a family</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">₹5,000</div>
              <div className="text-sm text-gray-600">Funds a skill development course</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;