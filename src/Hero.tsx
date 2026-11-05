import useScrollPosition from "./Hooks/useScrollPosition";
import { cn } from "./lib/utils";

type NavProps = {
  text: string;
};

export default function Hero() {
  const scrollPosition = useScrollPosition();

  function NavText(props: NavProps) {
    return (
      <div className="group flex flex-col gap-2">
        <span className="cursor-pointer">{props.text}</span>
        <div className="h-[1.25px] origin-center scale-x-0 group-hover:scale-x-100 bg-white transition-all duration-300"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* nav */}
      <div
        className={cn(
          "text-white border-white/15 fixed transition-all duration-300 border-b h-[6rem] top-0 left-0 right-0 z-1 text-2xl justify-center items-center flex gap-36 font-medium",
          scrollPosition > 0 ? " bg-black/25 backdrop-blur-md" : " border-none"
        )}
      >
        <NavText text="Home" />
        <NavText text="Work" />
        <NavText text="Contact" />
      </div>
      {/* container */}

      <div className="absolute z-0 top-0 bottom-0 left-0 right-0 bg-black/50 flex items-center justify-center">
        <div className="max-w-[1440px] w-full">
          <p className="text-white text-[2.5rem] font-light tracking-tight mb-4">
            Joanne Gisella Yusmita
          </p>
          <h1 className="text-white text-[10rem] mb-5">
            Turning Vision <br /> into Reality.
          </h1>
          <p className="text-white text-[2rem] bg-white/15 w-fit px-10 py-1.5 rounded-full border-white/50 border backdrop-blur-sm">
            © Gisella
          </p>
        </div>
      </div>
      <video
        src="/img/trailer-mid.mp4"
        autoPlay
        muted
        loop
        className="w-full"
      ></video>
    </div>
  );
}
