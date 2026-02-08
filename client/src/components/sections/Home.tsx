import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, FileText, Trophy, Star, Zap, Cpu, Code, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-mono text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            SYSTEMS READY
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            Akshatt <br/><span className="text-white/40 text-3xl md:text-5xl">Tayal</span>
          </h1>
          <p className="text-base md:text-lg text-primary font-mono font-medium">
            AI / ML Engineer • Edge AI • Systems
          </p>
          <p className="text-sm md:text-base text-white/70 font-light max-w-sm leading-relaxed">
            I build intelligent systems that work on real devices — from models to production under real constraints.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] uppercase tracking-wider py-1 px-3">
            <Trophy className="w-3 h-3 mr-1 text-yellow-500" /> Patent Holder
          </Badge>
          <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] uppercase tracking-wider py-1 px-3">
            <Star className="w-3 h-3 mr-1 text-purple-400" /> ProtoStar 2024
          </Badge>
          <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] uppercase tracking-wider py-1 px-3">
            <Zap className="w-3 h-3 mr-1 text-blue-400" /> Hackathon Finalist
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <Cpu className="w-5 h-5 text-primary" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Edge AI in Production</h3>
            <p className="text-[10px] text-white/50 leading-relaxed">Deployed computer vision & audio models across Samsung devices using SNPE, Vivante & Tizen.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <Code className="w-5 h-5 text-primary" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Systems + ML</h3>
            <p className="text-[10px] text-white/50 leading-relaxed">C++ performance, on-device training, model optimization for constrained hardware.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <Rocket className="w-5 h-5 text-primary" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Builder Mindset</h3>
            <p className="text-[10px] text-white/50 leading-relaxed">Now focused on rapid MVPs, AI-first workflows, and product thinking.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button data-testid="button-projects" className="bg-primary hover:bg-primary/90 text-white rounded-md flex-1 font-bold tracking-tight">
          VIEW WORKS <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost" className="rounded-md border border-white/10 hover:bg-white/5 text-white/70">
            <Github className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-md border border-white/10 hover:bg-white/5 text-white/70">
            <FileText className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
