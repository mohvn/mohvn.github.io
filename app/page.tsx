import { CibGithub } from "@/components/icons/cib-github";
import { IcBaselineEmail } from "@/components/icons/ic-baseline-email";
import { RiLinkedinFill } from "@/components/icons/ri-linkedin-fill";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-jetbrains-mono)] text-[#c9c7cd]">
      <div className="group">
        <h3 className="text-sm text-[#484848] absolute top-0 left-5 p-1 bg-background group-hover:text-[#ffc799] transition-all duration-300">header</h3>
        <header className="flex items-center justify-end p-4 border m-4 border-[#484848] group-hover:border-[#ffc799] transition-all duration-300">
          <div className="flex items-center gap-2">
            <p>
              <span className="font-bold">0x</span>
              <span>9BA6ADCC0F05BE4B</span>
            </p>
            <p className="text-xl text-[#ffc799]">[</p>
            <a href="https://www.linkedin.com/in/mohaneliasv/">
              <RiLinkedinFill fill="currentColor" className="w-6 h-6 hover:text-[#ffc799]" />
            </a>
            <p className="text-xl text-[#ffc799]">,</p>
            <a href="https://github.com/mohvn">
              <CibGithub fill="currentColor" className="w-6 h-6 hover:text-[#ffc799]" />
            </a>
            <p className="text-xl text-[#ffc799]">,</p>
            <a href="mailto:mohvn.elias@hotmail.com">
              <IcBaselineEmail fill="currentColor" className="w-6 h-6 hover:text-[#ffc799]" />
            </a>
            <p className="text-xl text-[#ffc799]">]</p>
          </div>
        </header>
      </div>
      <h3 className="text-sm text-[#484848] absolute top-[87px] left-5 p-1 bg-background">content</h3>
      <div className="flex justify-center mx-4 gap-4 border p-4 border-[#484848]">
        <div>
          <Image
            className="rounded-xl"
            src="https://avatars.githubusercontent.com/u/57570197?v=4"
            width={200}
            height={200}
            alt="pfp"
          />
        </div>
        <div>
          <div className="flex items-center">
            <ChevronRight color="#99ffe4" />
            <h1 className="text-2xl fonte-bold">whoami</h1>
          </div>
          <p className="text-sm ml-6 font-medium">
            I'm Mohan Elias, a developer from São Paulo, Brazil. I'm pursuing a Technology degree in Systems Analysis and Development at Universidade Católica de Santos.
          </p>
        </div>
      </div>
    </div>
  );
}
