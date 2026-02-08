import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, ChevronRight, BookOpen, UserCircle, Zap, TrendingUp } from "lucide-react";

export default function Blog() {
  return (
    <div className="h-full flex flex-col p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-display font-bold text-white mb-1">Perspective</h2>
        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Knowledge Sharing</p>
      </div>

      <div className="space-y-4">
        {[
          { icon: <Zap className="w-5 h-5" />, title: "Edge AI Lessons", context: "What shipping on constrained hardware actually teaches.", type: "TECHNICAL" },
          { icon: <UserCircle className="w-5 h-5" />, title: "From Systems to Product", context: "Why engineers must think like users.", type: "OPINION" },
          { icon: <BookOpen className="w-5 h-5" />, title: "MVP Mindset", context: "Speed without losing fundamentals.", type: "BUILDER" },
          { icon: <TrendingUp className="w-5 h-5" />, title: "Markets & ML", context: "Decision systems beyond pure accuracy.", type: "STRATEGY" }
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all cursor-pointer flex gap-4 group">
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-tighter">{item.type}</span>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-xs text-white/50 leading-relaxed">{item.context}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto p-4 rounded-xl border border-white/5 bg-white/5 text-center italic">
        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Articles will live here</p>
      </div>
    </div>
  );
}
