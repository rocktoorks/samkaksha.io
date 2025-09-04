import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { toast } from '@/components/ui/use-toast';

const jobOpenings = [
  { title: 'Program Manager', location: 'New Delhi', type: 'Full-time', description: 'Lead the planning and execution of our educational programs.' },
  { title: 'Fundraising Coordinator', location: 'Remote', type: 'Part-time', description: 'Develop and implement fundraising campaigns to support our mission.' },
  { title: 'Field Officer', location: 'Rohini, Delhi', type: 'Full-time', description: 'Work directly with communities to implement and monitor our projects.' },
  { title: 'Communications Intern', location: 'New Delhi', type: 'Internship', description: 'Support our digital marketing and communication efforts.' },
];

const Careers = () => {

  const handleApply = (title) => {
    toast({
      title: `🚧 Applying for "${title}" isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
      duration: 4000,
    });
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Careers - SAMKAKSHA FOUNDATION</title>
        <meta name="description" content="Explore career opportunities at SAMKAKSHA FOUNDATION and join our team to build a better future." />
        <meta property="og:title" content="Careers - SAMKAKSHA FOUNDATION" />
        <meta property="og:description" content="Explore career opportunities at SAMKAKSHA FOUNDATION and join our team to build a better future." />
      </Helmet>
      <div className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
              Work With <span className="gradient-text">Purpose</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a dedicated team passionate about creating sustainable change. A career at SAMKAKSHA FOUNDATION is more than a job—it's a mission.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.length > 0 ? jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:items-center justify-between transition-shadow hover:shadow-xl"
                >
                  <div className="flex-grow mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2"><Briefcase className="w-5 h-5 mr-3 text-purple-500" />{job.title}</h3>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" />{job.location}</div>
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5" />{job.type}</div>
                    </div>
                  </div>
                  <Button onClick={() => handleApply(job.title)} className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white md:ml-6 flex-shrink-0">
                    Apply Now
                  </Button>
                </motion.div>
              )) : (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-10 glass-effect rounded-2xl"
                >
                    <p className="text-xl text-gray-600">There are no open positions at the moment. Please check back later!</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Careers;