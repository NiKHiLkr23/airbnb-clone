import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          fill
          alt="largecard"
          style={{ objectFit: "cover" }}
          className=" rounded-2xl "
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 rounded-lg mt-5 px-4 py-2 ">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
