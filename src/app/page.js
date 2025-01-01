import Header1 from "@/pageComponents/header/header1";
import Header2 from "@/pageComponents/header/header2";
import Hero from "./hero";
import Categories from "./categories";
import Footer from "@/pageComponents/footer";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-40 w-full">
        <Header1 />
        <Header2 />
      </div>

      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}
