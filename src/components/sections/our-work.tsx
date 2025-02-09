import CTA from "../cta";

const OurWork = () => {
  return (
    <section className="container mx-auto flex flex-col items-end gap-8 px-4 py-12 md:flex-row lg:p-24">
      <div className="space-y-12">
        <h3 className="mb-12 text-xl font-semibold md:text-3xl">Our Work</h3>
        <p className="text-3xl font-semibold md:text-4xl xl:text-6xl xl:leading-16">
          We have extensive experience in overseas promotion, working with
          public institutions and leading Japanese companies.
        </p>
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-center">
          <p className="text-2xl md:text-3xl">
            行政機関、自治体から、業界をリードする日本企業まで数多くの海外プロモーション・プロデュース実績があります。
          </p>
        </div>
      </div>
      <CTA href="/all-works" label="All Works" detail="実績一覧" />
    </section>
  );
};

export default OurWork;
