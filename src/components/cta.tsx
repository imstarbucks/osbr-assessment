import { useCursorStore } from "@/store/useCursorStore";

interface CTAProps {
  label: string;
  href: string;
  detail: string;
}

const CTA = ({ label, href, detail }: CTAProps) => {
  const setSize = useCursorStore((state) => state.setSize);
  const setLabel = useCursorStore((state) => state.setLabel);

  const handleMouseEnter = () => {
    setSize("big");
    setLabel(detail);
  };

  const handleMouseLeave = () => {
    setSize("none");
    setLabel("");
  };

  return (
    <a
      href={href}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className="cta flex-col items-end"
    >
      <h2 className="text-5xl font-semibold text-nowrap">{label}</h2>
      <div className="flex items-center justify-end gap-x-2">
        <div className="h-px w-5 bg-black"></div>
        <p>more</p>
      </div>
    </a>
  );
};

export default CTA;
