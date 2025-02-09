import { Nav } from "@components/nav";
import Landing from "@/components/sections/landing";
import TopKV from "@assets/top-kv.png";
import About from "./components/sections/about";
import Service from "./components/sections/service";
import CursorWrapper from "./components/cursor";
import ServiceWrapper from "@components/service-showcase";
import OurWork from "./components/sections/our-work";
import MarqueeSection from "./components/sections/marquee";
import Footer from "./components/sections/footer";
import CookiePrompt from "./components/cookie-prompt";
import { useCookieStore } from "./store/useCookieStore";

function App() {
  const agreed = useCookieStore((state) => state.agreed);
  return (
    <main className="relative">
      <CursorWrapper>
        <ServiceWrapper>
          <img
            src={TopKV}
            alt="KV image"
            className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full object-contain object-left-top"
          />
          {!agreed && <CookiePrompt />}
          <Nav />
          <Landing />
          <About />
          <Service />
          <OurWork />
          <MarqueeSection />
          <Footer />
        </ServiceWrapper>
      </CursorWrapper>
    </main>
  );
}

export default App;
