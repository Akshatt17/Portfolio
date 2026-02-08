import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="h-full flex flex-col p-6 md:p-8 overflow-y-auto custom-scrollbar">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Journey</h2>
        <p className="text-sm text-white/70 leading-relaxed border-l-2 border-primary/30 pl-4 mb-8">
          I work at the intersection of machine learning, systems engineering, and real-world constraints. My focus is turning research ideas into deployable products.
        </p>
      </div>
      
      <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
        <div className="relative pl-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary/50 z-10"></div>
          <span className="text-[10px] font-mono text-primary uppercase tracking-widest block mb-1">Oct 2025 – Present</span>
          <h3 className="text-lg font-bold text-white mb-2">Independent Phase</h3>
          <ul className="text-xs text-white/50 leading-relaxed space-y-1 list-disc list-inside">
            <li>Building AI MVPs</li>
            <li>Exploring markets + ML</li>
            <li>Adopting AI-assisted workflows</li>
            <li>Deepening system design</li>
          </ul>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-white/20 z-10"></div>
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block mb-1">2022 – 2025</span>
          <h3 className="text-lg font-bold text-white mb-2">Samsung R&D</h3>
          <ul className="text-xs text-white/50 leading-relaxed space-y-1 list-disc list-inside">
            <li>On-device ML deployment</li>
            <li>C++ performance engineering</li>
            <li>Production CV & audio models</li>
            <li>Cross-SDK integration</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
        <div>
          <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Core Skills</h4>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-white/40 mb-2 uppercase font-mono">ML</p>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "ONNX"].map(s => <Badge key={s} variant="secondary" className="bg-white/5 text-[10px]">{s}</Badge>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-white/40 mb-2 uppercase font-mono">Edge</p>
              <div className="flex flex-wrap gap-2">
                {["SNPE", "NNTrainer", "Tizen"].map(s => <Badge key={s} variant="secondary" className="bg-white/5 text-[10px]">{s}</Badge>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-white/40 mb-2 uppercase font-mono">Systems</p>
              <div className="flex flex-wrap gap-2">
                {["C++", "Linux", "Optimization"].map(s => <Badge key={s} variant="secondary" className="bg-white/5 text-[10px]">{s}</Badge>)}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Philosophy</h4>
            <p className="text-xs text-white/60 bg-white/5 p-4 rounded-xl border border-white/10 italic">
              "Build → Measure → Improve. Real users over toy demos."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
