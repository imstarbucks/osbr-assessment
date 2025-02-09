import { ServiceType } from "@/lib/types";
import CTA from "../cta";
import Speaker from "@assets/icons/animate-speaker.svg";
import Stage from "@assets/icons/animate-stage.svg";
import Mic from "@assets/icons/animate-mic.svg";
import Computer from "@assets/icons/animate-computer.svg";
import Food from "@assets/icons/animate-food.svg";
import Japan from "@assets/icons/animate-japan.svg";
import Digital from "@assets/icons/animate-digital.svg";
import Creative from "@assets/icons/animate-creative.svg";
import { useServiceCursorStore } from "@/store/useServiceCursorStore";
import { useCursorStore } from "@/store/useCursorStore";

const promotionServices: ServiceType[] = [
  {
    iconUrl: Speaker,
    name: "Exhibition, PR Event, Ceremony",
    japaneseName: "展示会 / PRイベント / セレモニー",
  },
  {
    iconUrl: Stage,
    name: "Cultural Exchange Festival",
    japaneseName: "文化交流フェスティバル",
  },
  {
    iconUrl: Mic,
    name: "Seminar Meeting, Reception, Media Conference",
    japaneseName: "展示会 / PRイベント / セレモニー",
  },
  {
    iconUrl: Computer,
    name: "KOL / Media promotion",
    japaneseName: "展示会 / PRイベント / セレモニー",
  },
  {
    iconUrl: Food,
    name: "Japanese Food, Sake & Product Promotion",
    japaneseName: "展示会 / PRイベント / セレモニー",
  },
  {
    iconUrl: Japan,
    name: "Japan Tourism (Inbound) Promotion",
    japaneseName: "日本観光（インバウンド）プロモーション",
  },
];

const produceServices: ServiceType[] = [
  {
    iconUrl: Digital,
    name: "Interactive Digital Contents",
    japaneseName: "インタラクティブデジタルコンテンツ",
  },
  {
    iconUrl: Creative,
    name: "Space Creative & Design",
    japaneseName: "空間演出・デザイン",
  },
];

const Service = () => {
  const setShow = useServiceCursorStore((state) => state.setShow);
  const setLabel = useCursorStore((state) => state.setLabel);

  const handleMouseEnter = () => {
    setLabel("もっと詳しく");
    setShow(true);
  };

  return (
    <section className="relative overflow-x-hidden bg-[#F0F0F0]">
      <div className="container mx-auto space-y-12 px-4 py-12 lg:p-24">
        <div className="space-y-12">
          <h3 className="mb-12 text-xl font-semibold md:text-3xl">
            Our service menu
          </h3>
          <p className="text-3xl font-semibold md:text-4xl xl:text-6xl xl:leading-16">
            Our promotions are tailored to the unique characteristics of each
            target country and market.
          </p>
          <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-center">
            <p className="text-2xl md:text-3xl">
              対象国や市場の特性に合わせて柔軟に最適な対応が可能です。 
            </p>
            <CTA label="Show All" href="/service" detail="サービス一覧" />
          </div>
        </div>
        <div className="mt-36">
          <h3 className="mb-8 text-3xl">Promotion</h3>
          <ul
            className="sm:pl-6 xl:pl-24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setShow(false)}
          >
            {promotionServices.map((p, i) => (
              <HoverItem
                index={i}
                key={p.name}
                name={p.name}
                japaneseName={p.japaneseName}
                iconUrl={p.iconUrl}
              />
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <h3 className="mb-8 text-3xl">Produce</h3>
          <ul
            className="sm:pl-6 xl:pl-24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setShow(false)}
          >
            <HoverItem
              index={6}
              key={produceServices[0].name}
              name={produceServices[0].name}
              japaneseName={produceServices[0].japaneseName}
              iconUrl={produceServices[0].iconUrl}
            />
            <HoverItem
              index={7}
              key={produceServices[1].name}
              name={produceServices[1].name}
              japaneseName={produceServices[1].japaneseName}
              iconUrl={produceServices[1].iconUrl}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

interface HoverItemProps extends ServiceType {
  index: number;
}

const HoverItem = ({ index, name, japaneseName, iconUrl }: HoverItemProps) => {
  const setIndex = useServiceCursorStore((state) => state.setIndex);
  const setSize = useCursorStore((state) => state.setSize);

  const handleMouseEnter = () => {
    setSize("bigger");
    setIndex(index);
  };
  return (
    <a
      href="/"
      className="group flex gap-4 py-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setSize("none")}
    >
      <img src={iconUrl} alt="Icon" className="size-24" />
      <div className="space-y-2">
        <h4 className="group-hover:text-outline text-3xl font-semibold transition-all group-hover:text-white sm:text-5xl">
          {name}
        </h4>
        <p className="text-lg sm:text-2xl">{japaneseName}</p>
      </div>
    </a>
  );
};

export default Service;
