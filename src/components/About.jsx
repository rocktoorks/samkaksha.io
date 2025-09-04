import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, User2 as UserTie, UserCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const About = () => {
  const values = [{
    icon: Target,
    title: 'Our Mission',
    description: 'To empower underserved communities through comprehensive education, healthcare, and sustainable development programs that create lasting positive change.',
    color: 'from-green-500 to-teal-500'
  }, {
    icon: Eye,
    title: 'Our Vision',
    description: 'A world where every individual has access to quality education, healthcare, and opportunities to thrive regardless of their background or circumstances.',
    color: 'from-blue-500 to-cyan-500'
  }, {
    icon: Heart,
    title: 'Our Values',
    description: 'Compassion, integrity, transparency, and community-driven solutions guide everything we do in our mission to create meaningful impact.',
    color: 'from-purple-600 to-pink-500'
  }, {
    icon: Award,
    title: 'Our Impact',
    description: 'Through dedicated partnerships and innovative programs, we have transformed hundreds of lives and continue to expand our reach to new communities.',
    color: 'from-orange-500 to-amber-500'
  }];
  return <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">SAMKAKSHA FOUNDATION</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to create sustainable change, SAMKAKSHA FOUNDATION works tirelessly 
            to bridge gaps in education, healthcare, and community development across underserved regions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => <motion.div key={value.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="glass-effect rounded-2xl p-8 hover-lift group">
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Inspiring <span className="gradient-text">Founders</span></h3>
          <Tabs defaultValue="ldnarwal" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ldnarwal">L.D. Narwal</TabsTrigger>
              <TabsTrigger value="bharpaidevi">Bharpai Devi</TabsTrigger>
            </TabsList>
            <TabsContent value="ldnarwal">
              <div className="glass-effect rounded-2xl p-8 mt-6 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex flex-col items-center text-center">
                  <div className="relative">
                    <img class="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white" alt="L.D. Narwal, retired IPS Officer" src="https://horizons-cdn.hostinger.com/2bd608ca-1826-4fa8-947d-e9cc2eae5f69/rpc_7234---edited---edited-e2f7U.jpg" />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                      <UserTie className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mt-4">L.D. Narwal</h4>
                  <p className="text-gray-600">Retired IPS Officer</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-2xl font-bold mb-4 gradient-text">A Journey of Resilience</h4>
                  <p className="text-gray-600 leading-relaxed space-y-3">
                    <span>L.D. Narwal's life is a testament to the power of perseverance. Born into a poor family, he faced immense challenges but never lost sight of his dreams.</span>
                    <span>Through sheer determination and hard work, he overcame every obstacle to rise through the ranks of the Haryana Police, eventually reaching one of its top positions. His journey inspires our mission to provide opportunities for others to overcome adversity and achieve their full potential.</span>
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="bharpaidevi">
              <div className="glass-effect rounded-2xl p-8 mt-6 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex flex-col items-center text-center">
                  <div className="relative">
                    <img class="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white" alt="Bharpai Devi, social worker" src="https://horizons-cdn.hostinger.com/2bd608ca-1826-4fa8-947d-e9cc2eae5f69/302eefec-88a0-47a7-89fa-de701579c803-p3G7S.jpg" />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mt-4">Bharpai Devi</h4>
                  <p className="text-gray-600">Social Worker</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-2xl font-bold mb-4 gradient-text">A Legacy of Empowerment</h4>
                  <p className="text-gray-600 leading-relaxed space-y-3">
                    <span>Bharpai Devi was a dedicated social worker whose life was a beacon of strength and selflessness. She faced immense struggles but devoted her life to ensuring her children received the best education possible.</span>
                    <span>Her unwavering support and sacrifice empowered them to achieve some of the highest administrative positions in India. Her legacy fuels our commitment to supporting families and creating an environment where every child can succeed.</span>
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>;
};
export default About;