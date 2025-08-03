import { ReactNode } from 'react';

export default function StatCard({
  icon,
  label,
  value,
  growth,
  color = 'from-indigo-500 to-purple-600',
}: {
  icon: ReactNode;
  label: string;
  value: string;
  growth: string;
  color?: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${color} text-white p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm uppercase tracking-wider font-semibold">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      <div className="text-sm text-green-300 mt-1">{growth}</div>
    </div>
  );
}
