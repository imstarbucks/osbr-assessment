import Marquee from "react-fast-marquee";

const marquee1 = import.meta.glob("@assets/marquee/1/*.jpg", { eager: true });
const marquee2 = import.meta.glob("@assets/marquee/2/*.jpg", { eager: true });
const marquee3 = import.meta.glob("@assets/marquee/3/*.jpg", { eager: true });

const convertToArr = (a: Record<string, unknown>) =>
  Object.entries(a)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]: any) => mod.default);

const MarqueeSection = () => {
  const m1 = convertToArr(marquee1);
  const m2 = convertToArr(marquee2);
  const m3 = convertToArr(marquee3);
  return (
    <section className="space-y-10 py-12 xl:py-24">
      <Marquee>
        {m1.map((m) => (
          <img src={m} alt="partner icon" key={m} className="mr-8 h-8" />
        ))}
      </Marquee>
      <Marquee direction="right">
        {m2.map((m) => (
          <img src={m} alt="partner icon" key={m} className="mr-8 h-8" />
        ))}
      </Marquee>
      <Marquee>
        {m3.map((m) => (
          <img src={m} alt="partner icon" key={m} className="mr-8 h-8" />
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
