'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const lineData = [
  { name: 'Jan', value: 240 },
  { name: 'Feb', value: 400 },
  { name: 'Mar', value: 300 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 600 },
];

const barData = [
  { name: 'Email', uv: 400 },
  { name: 'Social', uv: 300 },
  { name: 'Organic', uv: 500 },
  { name: 'Paid Ads', uv: 200 },
];

const pieData = [
  { name: 'Desktop', value: 55 },
  { name: 'Mobile', value: 30 },
  { name: 'Tablet', value: 15 },
];

const COLORS = ['#6366f1', '#3b82f6', '#06b6d4'];

export default function AnalyticsCharts() {
  return (
    <div className="grid gap-10 lg:grid-cols-3 py-10">
      {/* Line Chart */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
          📈 Growth Trend
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
          📊 Campaign Performance
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="uv" fill="#06b6d4" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
          🧭 Traffic Sources
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
