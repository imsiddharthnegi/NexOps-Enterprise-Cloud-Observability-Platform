'use client'
import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

import { AnalyticsData } from '@/types/analytics';

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-300 rounded w-3/4"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-300 rounded-lg shadow-sm h-72"></div>
      <div className="bg-gray-300 rounded-lg shadow-sm h-72"></div>
    </div>
    <div className="bg-gray-300 rounded-lg shadow-sm h-48"></div>
  </div>
);

export default function DashboardPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn');
      if (!loggedIn) {
        router.push('/login');
      }
    }

    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/analytics');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: AnalyticsData = await response.json();
        setData(result);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50 relative">
      {/* Hamburger menu for mobile */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
          {isSidebarOpen ? <XIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" /> : <MenuIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
        </button>
      </div>

      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-100 p-4 border-r dark:border-gray-800 dark:bg-gray-900 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex md:flex-col`}>
          <nav className="space-y-2">
            <a className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 font-medium hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-800" href="#">
              Dashboard
            </a>
            <a className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 font-medium hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800" href="#">
              Analytics
            </a>
            <a className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 font-medium hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800" href="#">
              Reports
            </a>
            <a className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 font-medium hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800" href="#">
              Settings
            </a>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-500 font-medium hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              Log Out
            </button>
          </nav>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <SkeletonLoader />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">Failed to load data: {error}</div>;
  }

  if (!data) {
    return <div className="p-6 text-gray-500">No data available.</div>;
  }

  const { apiRequestsData, serverLoadData, recentAlertsData } = data;

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Hamburger menu for mobile */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
          {isSidebarOpen ? <XIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" /> : <MenuIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />}
        </button>
      </div>

      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-100 p-4 border-r dark:border-gray-800 dark:bg-gray-900 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex md:flex-col`}>
        <nav className="space-y-2">
          <a className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 font-medium hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-800" href="#">
            Dashboard
          </a>
          <a className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 font-medium hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800" href="#">
            Analytics
          </a>
          <a className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 font-medium hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800" href="#">
            Reports
          </a>
          <a className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 font-medium hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800" href="#">
            Settings
          </a>
        </nav>
      </div>
      {/* Main Content Placeholder */}
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        {/* Charts Section Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Chart 1 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-4">API Requests over last 24h</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={apiRequestsData || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold mb-4">Server Load</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={serverLoadData || []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
        </div>
        {/* Recent Activity Table Placeholder */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold mb-4">Recent Alerts</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(recentAlertsData || []).map((alert) => (
                  <tr key={alert.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alert.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.severity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.timestamp}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.severity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}