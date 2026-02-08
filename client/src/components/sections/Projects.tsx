import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink, Activity, Cpu, Layers, Box, Terminal } from "lucide-react";

export default function Projects() {
  return (
    <div className="h-full flex flex-col p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-display font-bold text-white mb-1 tracking-tight">Works</h2>
        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Engineering Labs</p>
      </div>

      <Tabs defaultValue="industry" className="flex-1 flex flex-col">
        <TabsList className="bg-white/5 border border-white/10 w-full mb-6 p-1">
          <TabsTrigger value="industry" className="flex-1 text-xs py-2 data-[state=active]:bg-primary/20">INDUSTRY SYSTEMS</TabsTrigger>
          <TabsTrigger value="lab" className="flex-1 text-xs py-2 data-[state=active]:bg-primary/20">MVP LAB (IN PROGRESS)</TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1">
          <TabsContent value="industry" className="mt-0 space-y-4 pr-4">
            <ProjectCard 
              title="Distributed Edge AI Offloading" 
              problem="Legacy devices lacked AI hardware"
              solution="3-model pipeline (UltraFace → FaceNet → SVM) with CPU training + NPU inference"
              impact="98.4% accuracy with privacy-first on-device learning"
              stack={["C++", "TensorFlow", "Tizen", "NPU"]}
            />
            <ProjectCard 
              title="Audio Event Detection – Tizen Lite" 
              problem="64KB model, MCU device"
              solution="Custom C++ TF ops, window optimization"
              impact="86% accuracy, 28ms latency → Selected for Y26 commercialization"
              stack={["C++", "TF-Lite", "DSP"]}
            />
            <ProjectCard 
              title="Edge Model Deployment Framework" 
              solution="Deployed YOLO, blur, carpet, food models via SNPE/Vivante"
              impact="SDK integration, performance tuning, real device constraints"
              stack={["SNPE", "Vivante", "Python"]}
            />
            <ProjectCard 
              title="NPU Manager Middleware" 
              solution="Vendor plugin system, HAL decoupling, Tizen migration"
              impact="Unified AI support across SoCs"
              stack={["HAL", "SoC", "Tizen"]}
            />
          </TabsContent>
          <TabsContent value="lab" className="mt-0 space-y-4 pr-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 opacity-60">
              <h3 className="font-bold text-white mb-2">Algo Trading App – No Code</h3>
              <p className="text-xs text-white/50 mb-4">Strategy builder → backtest → paper trade</p>
              <span className="text-[10px] font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">SHIPPING SOON</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 opacity-60">
              <h3 className="font-bold text-white mb-2">AI Interview Coach</h3>
              <p className="text-xs text-white/50 mb-4">Resume-aware mock interviews</p>
              <span className="text-[10px] font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">SHIPPING SOON</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 opacity-60">
              <h3 className="font-bold text-white mb-2">Edge ML Playground</h3>
              <p className="text-xs text-white/50 mb-4">Model convert & benchmark</p>
              <span className="text-[10px] font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">SHIPPING SOON</span>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}

function ProjectCard({ title, problem, solution, impact, stack }: any) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all group">
      <h3 className="font-bold text-white group-hover:text-primary transition-colors mb-2">{title}</h3>
      {problem && <p className="text-[10px] text-white/30 uppercase font-mono mb-1">Problem: {problem}</p>}
      <p className="text-xs text-white/70 mb-2 leading-relaxed">{solution}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {stack.map((t: string) => (
          <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-white/40 border border-white/5">{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[10px] font-bold text-primary/80 uppercase tracking-tighter">
        <Activity className="w-3 h-3" />
        Impact: {impact}
      </div>
    </div>
  );
}
