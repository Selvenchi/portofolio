import Button from "./Button";
import WorkFeatured from "./WorkFeatured";

export default function About() {
  return (
    <div className="max-w-[1440px] w-full mx-auto mt-24 mb-30">
      <div className="flex justify-between">
        <p className="text-[3rem] tracking-tight max-w-[38rem] leading-tight">
          Creating visuals that speak louder than words. Driven by passion,
          powered by precision.
        </p>
        <p className="text-[2rem] tracking-tight max-w-[30rem] leading-tight">
          I bring a unique perspective by blending creativity with purposeful
          design.
        </p>
      </div>
      <div className="mt-24">
        <p className="text-xl font-bold tracking-[0.4rem] leading-tight mb-4">
          FEATURED WORKS
        </p>
        <div className="h-0.5 bg-black"></div>
      </div>

      <WorkFeatured />

      <Button className="mx-auto block">More Work</Button>
    </div>
  );
}
