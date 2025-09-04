import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
const Hero = () => {
  const handleGetInvolved = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000
    });
  };
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-orange-100/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="text-center lg:text-left">
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-5xl lg:text-7xl font-extrabold mb-6 text-gray-900">
              Empowering
              <span className="gradient-text block">Communities</span>
              Through Hope
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-xl text-gray-600 mb-8 leading-relaxed">
              SAMKAKSHA FOUNDATION is dedicated to creating lasting change through education, 
              healthcare, and sustainable development programs that transform lives and build stronger communities.
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={handleGetInvolved} size="lg" className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-4 text-lg shadow-lg">
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button onClick={scrollToAbout} variant="outline" size="lg" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }} className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">25+</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">10+</div>
                <div className="text-sm text-gray-600">Communities</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative">
            <div className="relative">
              <img alt="Children learning in a classroom supported by SAMKAKSHA FOUNDATION" className="rounded-2xl shadow-2xl w-full h-[600px] object-cover" src="https://horizons-cdn.hostinger.com/2bd608ca-1826-4fa8-947d-e9cc2eae5f69/272986589_100119825930391_3799560224470422084_n-czjRq.jpg" />
              
              <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 1
            }} className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Community First</div>
                    <div className="text-sm text-gray-600">Building together</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 1.2
            }} className="absolute -top-6 -right-6 glass-effect rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Global Impact</div>
                    <div className="text-sm text-gray-600">Worldwide reach</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>;
};
export default Hero;