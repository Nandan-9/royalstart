import Image from "next/image";
import PageHero from "@/components/PageHero";
import MobileCarousel from "@/components/MobileCarousel";

export const metadata = {
  title: "Primary Section | Royal Star Crusher LLC",
  description: "Learn about the primary crushing section at Royal Star Crusher LLC.",
};

const boxes = [
  {
    title: "Jaw crusher 16159 Burcelic (Turkey)",
    body: "This huge rigid jaw crusher is designed and manufactured to perform for the hard gabbro stones which are extracted from the Quarry in variable sizes up to 2 ton rock to be crushed into materials of maximum 30kg with a capacity of 400 TPH intended to be raised to more than 700 TPH",
  },
  {
    title: "Primary Screens Hailston Double deck- India",
    body: "This process is for screening the output of the jaw crusher to sort and dispose the waste materials and send the selected materials to the main stock pile through conveyor belts. Two more such Screens are intended to raise the Capacity to more than 700 TPH",
  },
  {
    title: "Primary conveyors & tunnels",
    body: "To shift and carry the selected materials for the next process involving Cone crushers, we use a long and strong conveyor belt which is of more than 15 meter length/ height to allow enough stock of materials feeding the Cone crushers with the belt situated inside a 20 meter long concrete tunnel with only one opening to full feed this conveyor",
  },
];

export default function PrimarySectionsPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb="Primary Sections"
        title="Primary Sections"
      />

      <section className="py-9 p-10!">
        <div className="auto-container">
          <div className="mb-10">
            <Image
              src="/assets/image5.png"
              alt="Primary Section"
              width={500}
              height={500}
              className="w-6xl object-cover rounded"
            />
          </div>

          <h2 className="text-2xl font-bold text-blue-700! uppercase mb-8 pt-5 pb-3">
            Primary Section
          </h2>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {boxes.map((box) => (
              <div key={box.title} className="border border-gray-200 rounded p-6!">
                <h3 className="text-lg font-bold mb-3">{box.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{box.body}</p>
              </div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <MobileCarousel>
              {boxes.map((box) => (
                <div key={box.title} className="border border-gray-200 rounded p-6!">
                  <h3 className="text-lg font-bold mb-3">{box.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{box.body}</p>
                </div>
              ))}
            </MobileCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
