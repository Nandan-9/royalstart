import Image from "next/image";
import PageHero from "@/components/PageHero";
import MobileCarousel from "@/components/MobileCarousel";

export const metadata = {
  title: "Production Capacity | Royal Star Crusher LLC",
  description: "Learn about the present and future production capacity of Royal Star Crusher LLC.",
};

const cards = [
  {
    heading: "Operational Capacity",
    body: "1.4 million metric tonnes per annum to more than 2.6 million metric tonnes and further to more than 5.2 million metric tonnes in the near future.",
  },
  {
    heading: "Sequential Operation & Quality Output",
    body: "We undertake a scientifically sequenced set of processes which are strictly screened and quality controlled at all niches to obtain the optimal output with the finest quality by equipping the Unit with the best-in-class internationally standardized machinery sourced from pioneers and valuable human assets, thereby ensuring the quality of our output.",
  },
  {
    heading: "Natural Quarry & Quality Input",
    body: "As a highlight, we possess a unique huge Mountain considered as the best source of gabbro stones which records the highest specific gravity in the whole area reaching from 2.93-3.00gn/cm3, thereby ensuring the quality of our input.",
  },
];

function FeatureCard({ card }: { card: typeof cards[0] }) {
  return (
    <div className="bg-gray-100 flex flex-col gap-8 p-5 h-full">
      <h3 className="text-xl font-extrabold uppercase tracking-wide text-red-500!">
        {card.heading}
      </h3>
      <p className="text-gray-700 leading-8">{card.body}</p>
    </div>
  );
}

export default function ProductionCapacityPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb="Production Capacity – Present To Future"
        title="Our Production Capacity – Present to Future"
      />

      <section className="py-16 mt-10">
        <div className="max-w-6xl mx-auto px-8">

          {/* Two-column intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-28!">
            <div className="relative w-full" style={{ height: "240px" }}>
              <Image
                src="/assets/image2.png"
                alt="Royal Star Crusher operations"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              We presently possess a crushing capacity of 400TPH. We shall increase the same to
              700TPH after installing an additional new 300TPH Cone crusher. Once we completely
              achieve the upgrades, we are even expecting to further enhance our capacity in double
              shifts to 1,400TPH. Thus we expect to move forward from present installed capacity
              per annum of more than 1.4 million metric tonnes to more than 2.6 million metric
              tonnes and further to more than 5.2 million metric tonnes in the near future.
            </p>
          </div>

          {/* Three feature cards — desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 mb-10!">
            {cards.map((card) => (
              <FeatureCard key={card.heading} card={card} />
            ))}
          </div>

          {/* Three feature cards — mobile carousel */}
          <div className="md:hidden mb-10!">
            <MobileCarousel>
              {cards.map((card) => (
                <FeatureCard key={card.heading} card={card} />
              ))}
            </MobileCarousel>
          </div>

        </div>
      </section>
    </div>
  );
}
