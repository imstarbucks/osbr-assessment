import { Nav } from "@components/nav";
import Landing from "@/components/sections/landing";
import TopKV from "@assets/top-kv.png";

function App() {
  return (
    <main className="relative">
      <img
        src={TopKV}
        alt="KV image"
        className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full object-contain object-left-top"
      />
      <Nav />

      {/* Landing section */}
      <Landing />
    </main>
  );
}

export default App;
