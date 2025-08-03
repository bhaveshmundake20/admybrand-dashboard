'use client';

import { useState, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';

interface User {
  name: string;
  email: string;
  signups: number;
  campaign: string;
  status: string;
}

const mockUsers: User[] = [
  { name: 'Bhavesh Mundake', email: 'bhavesh@email.com', signups: 12, campaign: 'Alpha', status: 'Active' },
  { name: 'Yash Pawar', email: 'yashpawar@abc.com', signups: 8, campaign: 'Beta', status: 'Inactive' },
  { name: 'John Doe', email: 'john@example.com', signups: 22, campaign: 'Gamma', status: 'Active' },
  { name: 'Nikita Sharma', email: 'nikita@demo.com', signups: 5, campaign: 'Delta', status: 'Paused' },
  { name: 'Ravi Rao', email: 'ravi@xyz.com', signups: 9, campaign: 'Beta', status: 'Active' },
];

export default function UserTable() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const filtered = mockUsers.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.campaign.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate load
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">User Activity</h2>
        <button
          onClick={() => {
            const headers = ['Name', 'Email', 'Signups', 'Campaign', 'Status'];
            const rows = filtered.map(user => [user.name, user.email, user.signups, user.campaign, user.status]);
            const csv = [headers, ...rows].map(e => e.join(',')).join('\n');
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'user_data.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm transition"
        >
          Export CSV
        </button>
      </div>

      <input
        type="text"
        placeholder="Search users..."
        className="mb-4 p-2 w-full rounded-md border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Signups</th>
              <th className="text-left p-3">Campaign</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="p-3 text-gray-800 dark:text-white">{user.name}</td>
                <td className="p-3 text-gray-600 dark:text-gray-300">{user.email}</td>
                <td className="p-3 text-gray-800 dark:text-white">{user.signups}</td>
                <td className="p-3 text-gray-600 dark:text-gray-300">{user.campaign}</td>
                <td className={`p-3 font-medium ${user.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
