import Button from "./Button";

export default function Footer() {
  return (
    <div className="bg-grey-custom h-fit pt-[16rem] pb-[3rem]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[5rem] pb-24">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-[7rem] leading-[100%]">
            Let's work <br /> together.
          </h2>
          <img src="/img/arrow-down-left.svg" className="h-[3rem]" />
        </div>

        <div className="h-0.5 bg-neutral-500"></div>

        <div className="flex gap-10">
          <Button className="border-neutral-500 text-white">
            Get in touch
          </Button>
          <Button className="border-neutral-500 text-white">
            joannegisella@gmail.com
          </Button>
        </div>
      </div>

      {/* socials & version */}
      <div className="text-white flex justify-between mt-[10rem] mx-16">
        <div className="flex flex-col gap-2">
          <p className="font-semibold tracking-wide text-neutral-400">
            VERSION
          </p>
          <p className="text-[1.8rem]">2025 © Edition</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold tracking-wide text-neutral-400">
            SOCIALS
          </p>
          <p className="flex gap-10 text-[1.8rem]">
            <a
              target="blank"
              href="https://www.instagram.com/gisellayusmita/"
              className="cursor-pointer"
            >
              Instagram
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/joanne-gisella-yusmita-5b5b59382/?originalSubdomain=id"
              className="cursor-pointer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
