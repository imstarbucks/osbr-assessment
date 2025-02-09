import CTA from "../cta";

const importFlags = import.meta.glob("@assets/flags/*.png", { eager: true });
const flags = Object.entries(importFlags)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]: any) => mod.default);

const About = () => {
  return (
    <section className="container mx-auto flex flex-col items-end gap-8 px-4 py-12 md:flex-row lg:p-24">
      <div className="">
        <h3 className="mb-12 text-xl font-semibold md:text-3xl">Who we are</h3>
        <div className="space-y-12">
          <p className="text-shadow text-3xl font-semibold xl:text-5xl xl:leading-12">
            With offices in Tokyo, Osaka, and five countries in ASEAN and
            Europe, we leverage strong local relations to plan and produce
            numerous promotions and events for public sector and Japanese
            companies.
          </p>
          <p className="text-lg xl:text-2xl">
            私たちは東京・大阪、海外ではASEAN諸国とフランスに拠点を展開しております。現地のリレーションを活かし、政府機関、自治体・DMO、日本の企業の海外プロモーションやイベントを企画・プロデュースしております。
          </p>
          <div className="grid w-full grid-cols-7 gap-4 lg:w-4/5 xl:grid-cols-14">
            {flags.map((f) => (
              <img className="w-full" src={f} alt="Country Flags" key={f} />
            ))}
          </div>
        </div>
      </div>
      <CTA href="/about-us" label="About Us" detail="AABについて" />
    </section>
  );
};

export default About;
