
import React from 'react';
import { 
  LayoutGrid, 
  MessageSquare, 
  ShieldBan, 
  RefreshCcw, 
  Info, 
  Settings, 
  ArrowUp,
  MoreHorizontal,
  AlertCircle,
  Activity,
  Users
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  Bar 
} from 'recharts';
import { BeeFirstLogo } from './BeeFirstLogo';
import { useLanguage } from '../lib/languageContext';

const MetricCard = ({ title, value, change, isAlert = false, icon: Icon }: any) => {
  // Logic to determine color: 
  // If it's positive (+), it's usually green (emerald-500).
  // Unless it's an "Alert" metric (like Churn or Error Rate) where positive is bad (red-500).
  // By passing isAlert={false}, we force positive numbers to be green.
  
  const isPositive = change.startsWith('+');
  const textColor = isPositive 
    ? (isAlert ? 'text-red-500' : 'text-emerald-500') 
    : 'text-red-500';

  return (
    <div className="bg-[#252525] p-2 rounded-md border border-[#333] hover:border-[#444] transition-colors group cursor-default flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-1">
        <span className="text-[#888] text-[9px] font-medium uppercase tracking-wide truncate max-w-[80%]">{title}</span>
        {Icon && <Icon className={`w-3 h-3 ${isAlert ? 'text-amber-500' : 'text-[#666] group-hover:text-white transition-colors'}`} />}
      </div>
      <div className="flex items-baseline gap-1.5 mt-auto">
        <span className="text-white text-sm font-bold font-sans tracking-tight">{value}</span>
        <span className={`text-[9px] font-bold ${textColor}`}>
          {change}
        </span>
      </div>
    </div>
  );
};

const DashboardMockup: React.FC = () => {
  const { t } = useLanguage();
  const { dashboard } = t;

  // Weekly Activity Data constructed with localized day names
  const activityData = [
    { name: dashboard.days[0], value: 10, fill: '#f4c542' },
    { name: dashboard.days[1], value: 35, fill: '#f4c542' },
    { name: dashboard.days[2], value: 25, fill: '#f4c542' },
    { name: dashboard.days[3], value: 30, fill: '#f4c542' },
    { name: dashboard.days[4], value: 15, fill: '#f4c542' },
    { name: dashboard.days[5], value: 45, fill: '#f4c542' },
    { name: dashboard.days[6], value: 55, fill: '#f4c542' },
    { name: dashboard.days[0], value: 30, fill: '#f4c542' },
    { name: dashboard.days[1], value: 15, fill: '#f4c542' },
  ];

  // User Growth Data constructed with localized month names
  const growthData = [
    { name: dashboard.months[0], value: 1000, users: 500 },
    { name: dashboard.months[1], value: 1500, users: 1000 },
    { name: dashboard.months[2], value: 2200, users: 1800 },
    { name: dashboard.months[3], value: 3500, users: 2500 },
    { name: dashboard.months[4], value: 4500, users: 3200 },
    { name: dashboard.months[5], value: 6000, users: 4000 },
    { name: dashboard.months[6], value: 7200, users: 5000 },
    { name: dashboard.months[7], value: 8500, users: 6200 },
    { name: dashboard.months[8], value: 9800, users: 7500 },
    { name: dashboard.months[9], value: 11000, users: 8800 },
    { name: dashboard.months[10], value: 12500, users: 10000 },
    { name: dashboard.months[11], value: 14000, users: 12000 },
  ];

  return (
    <div className="w-full max-w-[700px] mx-auto bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl flex font-sans text-xs selection:bg-[#f4c542] selection:text-[#1a1a1a] transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#333]">
      
      {/* Sidebar - Compact */}
      <div className="w-10 bg-[#2a2a2a] flex flex-col items-center py-3 gap-3 border-r border-[#333] flex-shrink-0">
        <div className="mb-1 hover:scale-105 transition-transform cursor-pointer">
          <BeeFirstLogo variant="full" className="h-6 w-auto brightness-0 invert" />
        </div>
        
        <div className="flex flex-col gap-3 w-full items-center">
          <div className="w-6 h-6 rounded-md bg-[#3a3a3a] flex items-center justify-center cursor-pointer group relative">
            <LayoutGrid className="w-3 h-3 text-[#f4c542]" />
            <div className="absolute left-0 w-0.5 h-3 bg-[#f4c542] rounded-r-full -ml-3"></div>
          </div>
          
          <div className="w-6 h-6 rounded-md hover:bg-[#3a3a3a] flex items-center justify-center cursor-pointer group transition-colors">
            <MessageSquare className="w-3 h-3 text-[#888] group-hover:text-white transition-colors" />
          </div>

          <div className="w-6 h-6 rounded-md hover:bg-[#3a3a3a] flex items-center justify-center cursor-pointer group transition-colors">
            <ShieldBan className="w-3 h-3 text-[#888] group-hover:text-white transition-colors" />
          </div>

          <div className="w-6 h-6 rounded-md hover:bg-[#3a3a3a] flex items-center justify-center cursor-pointer group transition-colors">
            <RefreshCcw className="w-3 h-3 text-[#888] group-hover:text-white transition-colors" />
          </div>

          <div className="w-6 h-6 rounded-md hover:bg-[#3a3a3a] flex items-center justify-center cursor-pointer group transition-colors">
            <Info className="w-3 h-3 text-[#888] group-hover:text-white transition-colors" />
          </div>

          <div className="w-6 h-6 rounded-md hover:bg-[#3a3a3a] flex items-center justify-center cursor-pointer group transition-colors">
            <Settings className="w-3 h-3 text-[#888] group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Content - Ultra Compact */}
      <div className="flex-1 p-3 bg-[#1a1a1a] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-bold text-white font-sans tracking-tight">{dashboard.title}</h2>
          <div className="flex items-center gap-1.5 bg-[#10b981] px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.2)]">
             <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
             <span className="text-white text-[8px] font-bold uppercase tracking-wider">{dashboard.live}</span>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-1.5">
           <h3 className="text-[#888] font-bold text-[9px] mb-2 uppercase tracking-wider">{dashboard.overview}</h3>
        </div>

        {/* Metric Grid 1 - Very Tight Gap */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
           <MetricCard 
             title={dashboard.metrics.total_msg}
             value="12,543" 
             change="+15.2%" 
             icon={Activity}
           />
           <MetricCard 
             title={dashboard.metrics.active_users}
             value="4,567" 
             change="+8.4%" 
             icon={Users}
           />
           <MetricCard 
             title={dashboard.metrics.leads}
             value="890" 
             change="+22.1%" 
             icon={MoreHorizontal}
           />
           <MetricCard 
             title={dashboard.metrics.total_users}
             value="10,000" 
             change="+12.0%" 
             icon={ArrowUp}
           />
        </div>

        {/* Metrics Advanced */}
        <div className="mb-1.5">
           <h3 className="text-[#888] font-bold text-[9px] mb-2 uppercase tracking-wider">{dashboard.advanced}</h3>
        </div>

        {/* Metric Grid 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
           <MetricCard 
             title={dashboard.metrics.escalations}
             value="54" 
             change="+2.5%" 
             icon={AlertCircle}
           />
           <MetricCard 
             title={dashboard.metrics.esc_rate}
             value="2.8%" 
             change="+0.3%"
             isAlert={false} // Force Green
             icon={AlertCircle}
           />
           <MetricCard 
             title={dashboard.metrics.retention}
             value="91.5%" 
             change="+4.0%" 
             icon={Activity}
           />
           <MetricCard 
             title={dashboard.metrics.avg_msg}
             value="2.75" 
             change="+0.2%" 
             icon={MessageSquare}
           />
        </div>

        {/* Charts Row - Significantly Reduced Height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Weekly Activity Chart */}
          <div className="bg-[#252525] p-2.5 rounded-md border border-[#333] flex flex-col h-28">
            <h4 className="text-white font-bold text-[10px] mb-1">{dashboard.charts.weekly}</h4>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f4c542" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f4c542" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#2a2a2a', borderColor: '#333', borderRadius: '4px', color: '#fff', fontSize: '9px', padding: '2px 4px' }}
                    itemStyle={{ color: '#f4c542' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#f4c542" 
                    strokeWidth={1.5}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                  <Bar dataKey="value" fill="#f4c542" barSize={8} radius={[2, 2, 0, 0]} opacity={0.2} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#666', fontSize: 8 }} 
                    dy={2}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#666', fontSize: 8 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Growth Chart */}
          <div className="bg-[#252525] p-2.5 rounded-md border border-[#333] flex flex-col h-28">
            <h4 className="text-white font-bold text-[10px] mb-1">{dashboard.charts.growth}</h4>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={growthData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#2a2a2a', borderColor: '#333', borderRadius: '4px', color: '#fff', fontSize: '9px', padding: '2px 4px' }}
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  />
                  <Bar dataKey="value" fill="#f4c542" barSize={6} radius={[2, 2, 0, 0]} />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#ffffff" 
                    strokeWidth={1} 
                    dot={{ r: 1.5, fill: '#fff', strokeWidth: 0 }} 
                  />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#666', fontSize: 8 }} 
                    dy={2}
                    interval={1}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#666', fontSize: 8 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardMockup;
