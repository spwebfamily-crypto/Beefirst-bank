
import React from 'react';
import { Database, MessageSquare, Headphones, Layers, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../lib/languageContext';
import { BeeFirstLogo } from './BeeFirstLogo';

// Animated Ball Component
const FlowBall = ({
  animationName,
  className = ""
}) => (
  <div
    className={`absolute w-3 h-3 bg-brand-yellow rounded-full z-40 shadow-[0_0_10px_#FACC00] ${className}`}
    style={{
      animation: `${animationName} 10s linear infinite`, // Linear easing for constant speed
      opacity: 0,
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%'
    }}
  />
);

interface DataSourcesProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'contact') => void;
}

const DataSources: React.FC<DataSourcesProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const { title, desc, cta, tree } = t.integrations;

  const handleNav = () => {
    if (onNavigate) {
      onNavigate('contact');
      window.scrollTo(0, 0);
    }
  };

  const middleIcons = [
    { icon: Headphones, color: "text-purple-500", bg: "bg-purple-100" },
    { icon: MessageSquare, color: "text-green-500", bg: "bg-green-100" },
    { icon: Layers, color: "text-orange-500", bg: "bg-orange-100" },
    { icon: Database, color: "text-blue-500", bg: "bg-blue-100" }
  ];

  return (
    <section className="py-24 bg-white border-t border-brand-ice overflow-hidden">
      {/* Animation Keyframes 
            Cycle Duration: 10s (Linear Flow)
            
            Timeline Distribution (Calculated for constant pixel velocity):
            00-10% (1.0s): Root Drop (Vertical 50px)
            10-45% (3.5s): Spread (Horizontal ~180px) -> Slowed down to match vertical speed
            45-55% (1.0s): Drop to Icon (Vertical 50px)
            55-65% (1.0s): Processing Pause
            65-75% (1.0s): Drop from Icon (Vertical 50px)
            75-90% (1.5s): Gather (Horizontal ~90px)
            90-100% (1.0s): Final Drop (Vertical 50px)
        */}
      <style dangerouslySetInnerHTML={{
        __html: `
            /* Phase 1: Root Drop */
            @keyframes phase1_root {
               0% { opacity: 0; top: 0%; }
               1% { opacity: 1; }
               10% { opacity: 1; top: 100%; }
               10.1% { opacity: 0; top: 100%; }
               100% { opacity: 0; }
            }

            /* Phase 2: Spread from Center */
            @keyframes phase2_to_12 {
               0%, 10% { opacity: 0; left: 50%; }
               10.1% { opacity: 1; left: 50%; }
               45% { opacity: 1; left: 12.5%; }
               45.1% { opacity: 0; }
               100% { opacity: 0; }
            }
            @keyframes phase2_to_37 {
               0%, 10% { opacity: 0; left: 50%; }
               10.1% { opacity: 1; left: 50%; }
               45% { opacity: 1; left: 37.5%; }
               45.1% { opacity: 0; }
               100% { opacity: 0; }
            }
            @keyframes phase2_to_62 {
               0%, 10% { opacity: 0; left: 50%; }
               10.1% { opacity: 1; left: 50%; }
               45% { opacity: 1; left: 62.5%; }
               45.1% { opacity: 0; }
               100% { opacity: 0; }
            }
            @keyframes phase2_to_87 {
               0%, 10% { opacity: 0; left: 50%; }
               10.1% { opacity: 1; left: 50%; }
               45% { opacity: 1; left: 87.5%; }
               45.1% { opacity: 0; }
               100% { opacity: 0; }
            }

            /* Phase 3: Drop To Item */
            @keyframes phase3_drop {
               0%, 45% { opacity: 0; top: 0%; }
               45.1% { opacity: 1; top: 0%; }
               55% { opacity: 1; top: 100%; }
               55.1% { opacity: 0; }
               100% { opacity: 0; }
            }
            
            /* Icon Pulse Animation (Synced to Pause Phase 55-65%) */
            @keyframes pulse_icon {
                0%, 55% { transform: scale(1); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
                60% { transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
                65% { transform: scale(1); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
                100% { transform: scale(1); }
            }

            /* Phase 5: Drop From Item */
            @keyframes phase5_drop {
               0%, 65% { opacity: 0; top: 0%; }
               65.1% { opacity: 1; top: 0%; }
               75% { opacity: 1; top: 100%; }
               75.1% { opacity: 0; }
               100% { opacity: 0; }
            }

            /* Phase 6: Gather on Bottom Bus */
            @keyframes phase6_1_to_exit {
               0%, 75% { opacity: 0; left: 12.5%; }
               75.1% { opacity: 1; left: 12.5%; }
               90% { opacity: 1; left: 31.25%; }
               90.1% { opacity: 0; }
               100% { opacity: 0; }
            }
            @keyframes phase6_2_to_exit {
               0%, 75% { opacity: 0; left: 37.5%; }
               75.1% { opacity: 1; left: 37.5%; }
               90% { opacity: 1; left: 31.25%; }
               90.1% { opacity: 0; }
               100% { opacity: 0; }
            }
             @keyframes phase6_3_to_exit {
               0%, 75% { opacity: 0; left: 62.5%; }
               75.1% { opacity: 1; left: 62.5%; }
               90% { opacity: 1; left: 68.75%; }
               90.1% { opacity: 0; }
               100% { opacity: 0; }
            }
             @keyframes phase6_4_to_exit {
               0%, 75% { opacity: 0; left: 87.5%; }
               75.1% { opacity: 1; left: 87.5%; }
               90% { opacity: 1; left: 68.75%; }
               90.1% { opacity: 0; }
               100% { opacity: 0; }
            }

            /* Phase 7: Final Drop */
            @keyframes phase7_final {
               0%, 90% { opacity: 0; top: 0%; }
               90.1% { opacity: 1; top: 0%; }
               100% { opacity: 1; top: 100%; } /* Stays visible briefly at end or fades */
               100% { opacity: 0; }
            }
        `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-anthracite tracking-tight font-display leading-tight">
              {title}
            </h2>
            <p className="text-xl text-brand-gray leading-relaxed font-sans">
              {desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-2">
              <button
                onClick={handleNav}
                className="px-8 py-4 bg-brand-anthracite text-white rounded-xl font-bold transition-all shadow-lg hover:bg-black font-display hover:-translate-y-1"
              >
                {cta}
              </button>
            </div>
          </div>

          {/* Right Side: Strictly Aligned Grid Architecture */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-[550px] flex flex-col items-center relative">

              {/* 1. Root Node */}
              <div className="relative z-20">
                <div className="w-20 h-20 bg-brand-anthracite rounded-2xl flex items-center justify-center shadow-2xl border-4 border-brand-ice z-10 relative">
                  <BeeFirstLogo variant="full" className="h-10 w-auto brightness-0 invert" />
                </div>
              </div>

              {/* 2. Main Vertical Stem (Phase 1) */}
              <div className="h-12 w-0.5 bg-gray-200 relative">
                <FlowBall animationName="phase1_root" className="left-1/2" />
              </div>

              {/* 3. Top Common Bus (Phase 2) */}
              {/* This spans the width of our columns. We spawn 4 balls here that travel to the 4 columns. */}
              <div className="w-full h-0.5 relative">
                <div className="absolute left-[12.5%] right-[12.5%] top-0 h-full bg-gray-200">
                </div>
                <FlowBall animationName="phase2_to_12" className="top-1/2" />
                <FlowBall animationName="phase2_to_37" className="top-1/2" />
                <FlowBall animationName="phase2_to_62" className="top-1/2" />
                <FlowBall animationName="phase2_to_87" className="top-1/2" />
              </div>

              {/* 4. Drops to Middle Items (Phase 3) */}
              <div className="w-full h-12 relative">
                {[12.5, 37.5, 62.5, 87.5].map((pos, i) => (
                  <div key={i} className="absolute top-0 h-full w-0.5 bg-gray-200" style={{ left: `${pos}%` }}>
                    <FlowBall animationName="phase3_drop" className="left-1/2" />
                  </div>
                ))}
              </div>

              {/* 5. Middle Items Row (Phase 4 - Processing) */}
              <div className="w-full grid grid-cols-4 gap-2 relative z-10">
                {middleIcons.map((style, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    {/* We add a subtle pulse to the icon itself when the ball is 'inside' it (Phase 4) */}
                    <div
                      className={`w-14 h-14 ${style.bg} rounded-xl flex items-center justify-center border border-gray-100 shadow-sm transition-transform duration-300 bg-white relative overflow-hidden`}
                      style={{ animation: `pulse_icon 10s infinite` }} // Synced with global loop
                    >
                      <style.icon className={`w-6 h-6 ${style.color}`} />
                      {/* Processing indicator */}
                      <div className="absolute bottom-0 left-0 h-1 bg-current opacity-20 w-full animate-pulse"></div>
                    </div>
                    <div className="mt-2 text-center h-4 w-full">
                      <p className="text-[9px] font-bold text-brand-anthracite font-display leading-tight truncate px-1">{tree.middle[i].label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 6. Drops from Middle Items (Phase 5) */}
              <div className="w-full h-12 relative -mt-3 z-0">
                {[12.5, 37.5, 62.5, 87.5].map((pos, i) => (
                  <div key={i} className="absolute top-4 h-full w-0.5 bg-gray-200" style={{ left: `${pos}%` }}>
                    <FlowBall animationName="phase5_drop" className="left-1/2" />
                  </div>
                ))}
              </div>

              {/* 7. Bottom Common Bus (Phase 6) */}
              {/* Balls travel from their column stems to the two exit points */}
              <div className="w-full h-0.5 relative mt-4">
                <div className="absolute left-[12.5%] right-[12.5%] h-full bg-gray-200"></div>
                <FlowBall animationName="phase6_1_to_exit" className="top-1/2" />
                <FlowBall animationName="phase6_2_to_exit" className="top-1/2" />
                <FlowBall animationName="phase6_3_to_exit" className="top-1/2" />
                <FlowBall animationName="phase6_4_to_exit" className="top-1/2" />
              </div>

              {/* 8. Final Drops to Beneficiaries (Phase 7) */}
              <div className="w-full h-12 relative">
                <div className="absolute left-[31.25%] top-0 h-full w-0.5 bg-gray-200">
                  <FlowBall animationName="phase7_final" className="left-1/2" />
                </div>
                <div className="absolute left-[68.75%] top-0 h-full w-0.5 bg-gray-200">
                  <FlowBall animationName="phase7_final" className="left-1/2" />
                </div>
              </div>

              {/* 9. Bottom Items (Beneficiaries) */}
              <div className="w-full h-12 relative">
                <div className="absolute left-[31.25%] -translate-x-1/2 top-0 z-10">
                  <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl shadow-md whitespace-nowrap">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-50 text-brand-blue">
                      <Users size={14} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-brand-anthracite font-display">{tree.bottom[0].label}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[68.75%] -translate-x-1/2 top-0 z-10">
                  <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl shadow-md whitespace-nowrap">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-yellow-50 text-yellow-600">
                      <Briefcase size={14} />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-brand-anthracite font-display">{tree.bottom[1].label}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataSources;
