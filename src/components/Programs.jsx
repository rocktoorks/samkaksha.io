import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Sprout, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Education Initiative',
      description: 'Providing quality education, scholarships, and learning resources to children in underserved communities.',
      features: ['School Infrastructure', 'Teacher Training', 'Scholarship Programs', 'Digital Learning'],
      color: 'from-blue-500 to-indigo-600',
      image: 'Students in a modern classroom with computers and educational technology'
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Ensuring basic healthcare services and health education reach every community member.',
      features: ['Mobile Clinics', 'Health Camps', 'Vaccination Drives', 'Health Education'],
      color: 'from-red-500 to-pink-600',
      image: 'Healthcare workers providing medical care in a rural community setting'
    },
    {
      icon: Sprout,
      title: 'Sustainable Development',
      description: 'Implementing eco-friendly projects that promote environmental sustainability and economic growth.',
      features: ['Clean Water Projects', 'Renewable Energy', 'Organic Farming', 'Waste Management'],
      color: 'from-green-500 to-emerald-600',
      image: 'Community members working on sustainable farming and renewable energy projects'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Building local capacity through skill development and leadership training programs.',
      features: ['Skill Development', 'Leadership Training', 'Women Empowerment', 'Youth Programs'],
      color: 'from-purple-500 to-violet-600',
      image: 'Diverse group of community members participating in skills training workshop'
    }
  ];

  const handleLearnMore = (programTitle) => {
    toast({
      title: `🚧 ${programTitle} details aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
      duration: 4000,
    });
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We run comprehensive programs designed to address the most pressing needs of communities 
            while building sustainable solutions for long-term impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl overflow-hidden hover-lift group"
            >
              <div className="relative h-64 overflow-hidden">
                <img  
                  alt={`${program.title} - ${program.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1591206246224-04b4624adef4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={() => handleLearnMore(program.title)}
                  variant="outline"
                  className="w-full group-hover:bg-gray-50 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;