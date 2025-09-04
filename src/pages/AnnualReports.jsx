import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, BookOpen } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { toast } from '@/components/ui/use-toast';

const reports = [
  { year: 2024, title: 'Annual Impact Report 2024', summary: 'A comprehensive overview of our activities, achievements, and financial performance in 2024.', coverImage: 'Modern abstract cover design for 2024 report' },
  { year: 2023, title: 'Year in Review 2023', summary: 'Highlighting key projects and milestones from our work in 2023.', coverImage: 'Geometric pattern cover for 2023 report' },
  { year: 2022, title: 'Foundation Report 2022', summary: 'Detailing our community outreach and program outcomes for 2022.', coverImage: 'Vibrant gradient cover for 2022 report' },
];

const AnnualReports = () => {

  const handleReportAction = (year) => {
    toast({
      title: `🚧 The ${year} report is not available yet—but you can request it in your next prompt! 🚀`,
      duration: 4000,
    });
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Annual Reports - SAMKAKSHA FOUNDATION</title>
        <meta name="description" content="Access and download annual reports from SAMKAKSHA FOUNDATION to review our impact, transparency, and financial accountability." />
        <meta property="og:title" content="Annual Reports - SAMKAKSHA FOUNDATION" />
        <meta property="og:description" content="Access and download annual reports from SAMKAKSHA FOUNDATION to review our impact, transparency, and financial accountability." />
      </Helmet>
      <div className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
              Our <span className="gradient-text">Transparency</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency. Explore our annual reports to see how your support translates into real-world impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reports.map((report, index) => (
              <motion.div
                key={report.year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-56">
                  <img  alt={`Cover for ${report.title}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1679521358679-301c295e2cd4" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-5xl font-bold tracking-wider">{report.year}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{report.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{report.summary}</p>
                  <div className="flex space-x-4 mt-auto">
                    <Button onClick={() => handleReportAction(report.year)} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
                      <BookOpen className="w-4 h-4 mr-2" /> View
                    </Button>
                    <Button onClick={() => handleReportAction(report.year)} variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AnnualReports;