import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Code2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="h-full flex flex-col p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-bold text-white mb-2">Let’s Talk</h2>
        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">I’m open to roles in ML Engineer, AI Engineer, or SDE-2</p>
      </div>

      <div className="space-y-4 mb-12">
        <ContactLink icon={<Mail className="w-5 h-5" />} label="Email" value="akshatttayal@gmail.com" href="mailto:akshatttayal@gmail.com" />
        <ContactLink icon={<Github className="w-5 h-5" />} label="GitHub" value="github.com/Akshatt17" href="https://github.com/Akshatt17" />
        <ContactLink icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" value="akshatt-tayal" href="https://linkedin.com/in/akshatt-tayal" />
        <ContactLink icon={<Code2 className="w-5 h-5" />} label="Leetcode" value="/u/Akshatt17" href="https://leetcode.com/u/Akshatt17" />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-auto">
        <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 uppercase tracking-tight">
          DOWNLOAD RESUME
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="icon" className="h-12 w-full border-white/10 hover:bg-white/5">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-full border-white/10 hover:bg-white/5">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center text-[10px] font-mono text-white/10 uppercase tracking-[0.3em]">
        Akshatt Tayal // Professional Hub
      </div>
    </div>
  );
}

function ContactLink({ icon, label, value, href }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-primary/40 transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          {icon}
        </div>
        <div className="space-y-0.5">
          <p className="text-[10px] font-mono text-white/30 uppercase">{label}</p>
          <p className="text-sm font-bold text-white/80">{value}</p>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-primary transition-all" />
    </a>
  );
}
