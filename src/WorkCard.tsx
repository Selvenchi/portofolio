type WorkCardProps = {
  image: string;
  title: string;
  description: string;
  year: string;
};

export default function WorkCard({
  image,
  title,
  description,
  year,
}: WorkCardProps) {
  return (
    <div className="cursor-pointer">
      <img src={image} alt={title} />
      <div className="mt-6 flex flex-col gap-3">
        <h3 className="text-3xl">{title}</h3>
        <div className="h-[1px] bg-neutral-300 w-full"></div>
        <div className="flex justify-between text-xl">
          <p>{description}</p>
          <p className="font-extrabold">{year}</p>
        </div>
      </div>
    </div>
  );
}
