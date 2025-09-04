import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Smartphone, Building, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const donationOptions = [
    {
      icon: Heart,
      title: 'General Fund',
      description: 'Support all our programs and let us allocate funds where they\'re needed most',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: CreditCard,
      title: 'Education',
      description: 'Fund scholarships, school infrastructure, and educational resources',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'Healthcare',
      description: 'Support mobile clinics, health camps, and medical equipment',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Building,
      title: 'Infrastructure',
      description: 'Help build schools, clinics, and community centers',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    toast({
      title: `🚧 Donation processing for ₹${amount} isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
      duration: 4000,
    });
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Make a <span className="gradient-text">Difference</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your contribution, no matter the size, creates lasting impact in communities. 
            Join us in building a better future for those who need it most.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Choose Your Impact</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {donationOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-2 border-gray-200 rounded-2xl p-4 hover:border-green-300 transition-colors cursor-pointer group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{option.title}</h4>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-4">Donation Type</h4>
              <div className="flex space-x-4">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                    donationType === 'one-time'
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                    donationType === 'monthly'
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">Select Amount</h4>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-xl font-medium transition-colors ${
                      selectedAmount === amount
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <Button
              onClick={handleDonate}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-4 text-lg"
            >
              <Gift className="mr-2 w-5 h-5" />
              Donate ₹{(customAmount || selectedAmount).toLocaleString()}
              {donationType === 'monthly' && '/month'}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-4 text-gray-800">Your Impact</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">₹500</span>
                  <span className="text-sm text-gray-600">Educates a child for 1 month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">₹1,500</span>
                  <span className="text-sm text-gray-600">Provides healthcare for a family</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">₹5,000</span>
                  <span className="text-sm text-gray-600">Funds a skill development course</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">₹10,000</span>
                  <span className="text-sm text-gray-600">Supports a community project</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-4 text-gray-800">Why Donate?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span>100% transparency in fund utilization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Direct impact on community development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Regular updates on project progress</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Tax benefits under Section 80G</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl overflow-hidden">
                <img  className="w-full h-48 object-cover" alt="Children benefiting from SAMKAKSHA FOUNDATION programs" src="https://images.unsplash.com/photo-1577459572581-1525359ef0b3" />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 text-gray-800">Every Rupee Counts</h4>
                <p className="text-gray-600 text-sm">
                  Your donation directly transforms lives and builds stronger communities. 
                  Join thousands of supporters who believe in our mission.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Donate;