'use client';

import StatCard from '@/components/StatCard';
import AnalyticsCharts from '@/components/AnalyticsCharts';
import ThemeToggle from '@/components/ThemeToggle';
import { FaUser, FaChartLine, FaMoneyBillWave, FaPercent } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f4f8] text-gray-900 dark:bg-[#0f172a] dark:text-white px-6 py-10 max-w-7xl mx-auto transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight"
        >
          ADmyBRAND Insights
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <ThemeToggle />
        </motion.div>
      </div>

      {/* Stat Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        <StatCard icon={<FaMoneyBillWave />} label="Revenue" value="₹1.2M" growth="↑ 8.2%" />
        <StatCard icon={<FaUser />} label="Users" value="8,945" growth="↑ 4.7%" />
        <StatCard icon={<FaChartLine />} label="Conversions" value="1,240" growth="↑ 6.3%" />
        <StatCard icon={<FaPercent />} label="Growth" value="+12.7%" growth="↑ 12.7%" />
      </motion.section>

      {/* Charts Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <AnalyticsCharts />
      </motion.section>
    </main>
  );
}
