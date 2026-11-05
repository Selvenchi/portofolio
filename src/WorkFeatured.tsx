import WorkCard from "./WorkCard";

export default function WorkFeatured() {
  return (
    <div className="grid grid-cols-2 gap-[4rem] mt-[4rem] mb-[5rem]">
      <WorkCard
        image="/img/porto1.svg"
        title="Askara"
        description="official teaser & trailer"
        year="2025"
      />
      <WorkCard
        image="/img/porto2.svg"
        title="FLS3N 2025"
        description="2nd winner"
        year="2025"
      />
      <WorkCard
        image="/img/porto6.svg"
        title="HUT 75th SMAK 1 PENABUR"
        description="lcd, banner, poster, nametag"
        year="2025"
      />
      <WorkCard
        image="/img/porto4.svg"
        title="One Last Dance"
        description="main poster"
        year="2025"
      />
      <WorkCard
        image="/img/porto3.svg"
        title="SMAKONECUP 2024 | Invictus"
        description="nametag, keychain, farewell & merch poster"
        year="2024"
      />
      <WorkCard
        image="/img/porto8.svg"
        title="P2's MOMENT | Exypnos"
        description="main poster, banner, nametag, flazz cards, grid post"
        year="2024"
      />
    </div>
  );
}
