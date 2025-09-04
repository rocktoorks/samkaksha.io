import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AnnualReports from '@/pages/AnnualReports';
import Volunteer from '@/pages/Volunteer';
import PartnerWithUs from '@/pages/PartnerWithUs';
import DonatePage from '@/pages/DonatePage';
import Careers from '@/pages/Careers';
import NotFound from '@/pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="annual-reports" element={<AnnualReports />} />
              <Route path="volunteer" element={<Volunteer />} />
              <Route path="partner-with-us" element={<PartnerWithUs />} />
              <Route path="donate" element={<DonatePage />} />
              <Route path="careers" element={<Careers />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AnimatePresence>
        <Toaster />
      </div>
    </>
  );
}

export default App;