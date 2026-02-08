import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Target, Trophy, Star, Zap, Activity } from "lucide-react";

export default function Recognitions() {
  return (
    <div className="h-full flex flex-col p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Honours</h2>
        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Recognitions that reflect real impact, not just participation.</p>
      </div>

      <div className="space-y-4 mb-8">
        {[
          { icon: <ShieldCheck className="w-5 h-5" />, title: "International Patent – A1 Grade", context: "Inventor of a vision system that auto-generates visually appealing outfits without user input. Recognized Q1 2025.", type: "IP / SYSTEM" },
          { icon: <Star className="w-5 h-5" />, title: "ProtoStar Award 2024", context: "Awarded for outstanding contribution to AI product development and consistent high-impact delivery.", type: "RECOGNITION" },
          { icon: <Trophy className="w-5 h-5" />, title: "Stellar Project Award 2023 – Best Execution", context: "Recognized for optimizing on-device AI pipeline under strict performance constraints.", type: "AWARD" },
          { icon: <Zap className="w-5 h-5" />, title: "Hackathon 2024 – Top Finalist", context: "Built an MCF-based distributed Edge AI system enabling on-device learning across Samsung ecosystem.", type: "COMPETITION" }
        ].map((cert, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
              {cert.icon}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-sm">{cert.title}</h3>
                <span className="text-[10px] font-mono text-white/30 whitespace-nowrap">{cert.type}</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">{cert.context}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
