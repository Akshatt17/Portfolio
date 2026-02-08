import { Target, Brain, Rocket, Activity, RefreshCw } from "lucide-react";

export default function Now() {
  return (
    <div className="h-full flex flex-col p-6 md:p-8 justify-center">
      <div className="mb-10 border-l-4 border-primary pl-6">
        <h2 className="text-3xl font-display font-bold text-white mb-2">Now</h2>
        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Active Focus // Professional & Personal</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Current Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FocusItem icon={<Rocket className="w-4 h-4" />} text="Building first 4–5 MVPs" />
            <FocusItem icon={<Brain className="w-4 h-4" />} text="Preparing for ML/SDE-2 roles" />
            <FocusItem icon={<Activity className="w-4 h-4" />} text="Learning trading systems & risk" />
            <FocusItem icon={<RefreshCw className="w-4 h-4" />} text="Writing about edge AI" />
          </div>
        </div>

        <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Personal Reset
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Investing in health, creativity, reading, and travel to return with clearer long-term direction.
          </p>
        </div>
      </div>

      <div className="mt-auto text-center">
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Brief, professional tone maintained.</p>
      </div>
    </div>
  );
}

function FocusItem({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 text-white/80">
      <div className="text-primary">{icon}</div>
      <span className="text-xs">{text}</span>
    </div>
  );
}
