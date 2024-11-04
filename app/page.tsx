import { ModeToggle } from "@/components/mode-toggle";
import BnxLogo from "@/components/bnx-logo";
import BlurFade from "@/components/ui/blur-fade";
import BrasilSorrisoLogo from "@/components/brasil-sorriso-logo";

export default function Home() {
  return (
    <div className="min-h-screen text-sm p-4 flex items-center justify-center w-full font-[family-name:var(--font-geist-mono)] text-gray-300">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <main className="max-w-[600px] mx-auto">
        <header className="mb-8">
          <p className="font-bold text-white">mohan elias</p>
          <p className="text-[#666]">sao paulo, br.</p>
        </header>
        <section>
          <BlurFade delay={0.25} inView>
            <div className="items-center gap-2">

              <div className="flex items-center gap-2">
                <BnxLogo className="w-10 h-10 fill-foreground" />
                <p className="text-white">BNX</p>
                <p className="text-[#666]">Help Desk Technician</p>
              </div>


              <div className="flex items-center gap-2">
                <p>Currently working as a help desk technician and aiming to transition into the field of development. Driven to apply my technical foundation and problem-solving skills to create impactful digital solutions.</p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.5} inView className="my-10">
            <div className="gap-2">
              <p className="text-white font-bold">interests</p>
              <p>- Front-end Development</p>
              <p>- UI/UX Design</p>
              <p>- Open Source</p>
              <p>- Cybersecurity</p>
              <p>- Linux</p>
            </div>
          </BlurFade>
          <BlurFade delay={0.6} inView className="my-10">
            <div className="gap-2">
              <p className="text-white font-bold">education</p>
              <p>CCAA - English Course - 2011 - 2019</p>
              <p>SOS Informatics - Course C# Fundamentals - 2016 - 2017</p>
              <p>UNISANTOS - Degree in System Analysis and Development - 2023 - 2025</p>
            </div>
          </BlurFade>

          <BlurFade delay={0.75} inView className="my-10">
            <div className="gap-2">
              <p className="text-white font-bold">previous experience</p>
              <div className="flex items-center gap-2">
                <BnxLogo className="fill-foreground" />
                <p className="text-white">BNX</p>
                <p className="text-[#666]">Administrative Assistant 2023 - 2024</p>
              </div>

              <div className="flex items-center gap-2">
                <BrasilSorrisoLogo className="fill-foreground" />
                <p className="text-white">Brasil Sorriso</p>
                <p className="text-[#666]">Customer Service 2022 - 2023</p>
              </div>
            </div>
          </BlurFade>
        </section>
      </main>
    </div >
  );
}
