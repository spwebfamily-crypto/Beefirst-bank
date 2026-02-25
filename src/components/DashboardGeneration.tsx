import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Mon', satisfaction: 4.2, tickets: 240 },
  { name: 'Tue', satisfaction: 4.5, tickets: 198 },
  { name: 'Wed', satisfaction: 4.8, tickets: 150 },
  { name: 'Thu', satisfaction: 4.7, tickets: 180 },
  { name: 'Fri', satisfaction: 4.9, tickets: 160 },
  { name: 'Sat', satisfaction: 4.9, tickets: 90 },
  { name: 'Sun', satisfaction: 5.0, tickets: 85 },
];

const DashboardGeneration: React.FC = () => {
  return (
    <section className="py-24 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-anthracite mb-4 font-display">Actionable Customer Insights</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto font-sans">
                Identify friction points and track sentiment trends automatically.
            </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="border-b border-gray-200 p-4 flex justify-between items-center bg-white">
                <div className="flex space-x-6 text-sm font-medium font-display">
                    <button className="text-brand-anthracite border-b-2 border-brand-blue pb-4 -mb-4 font-bold">Performance</button>
                    <button className="text-brand-gray hover:text-brand-anthracite pb-4 -mb-4">Topics</button>
                    <button className="text-brand-gray hover:text-brand-anthracite pb-4 -mb-4">Agents</button>
                </div>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-brand-ice rounded-md text-sm font-bold text-brand-anthracite font-display">Last 7 Days</button>
                </div>
            </div>

            <div className="p-8 bg-brand-ice/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-sm font-bold text-brand-gray mb-4 uppercase tracking-wider font-display">Ticket Volume</h4>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} fontFamily="Space Grotesk" />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} fontFamily="Space Grotesk" />
                                    <Tooltip cursor={{fill: '#EAEAEA'}} wrapperStyle={{fontFamily: 'Inter'}} />
                                    <Bar dataKey="tickets" fill="#0505E3" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="text-sm font-bold text-brand-gray mb-4 uppercase tracking-wider font-display">Customer Satisfaction</h4>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} fontFamily="Space Grotesk" />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} domain={[0, 5]} fontFamily="Space Grotesk" />
                                    <Tooltip wrapperStyle={{fontFamily: 'Inter'}} />
                                    <Line type="monotone" dataKey="satisfaction" stroke="#FACC00" strokeWidth={3} dot={{r: 4, fill: '#FACC00'}} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardGeneration;