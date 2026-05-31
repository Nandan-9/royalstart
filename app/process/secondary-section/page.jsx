import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Secondary Section | Royal Star Crusher LLC",
  description: "Learn about the secondary crushing section at Royal Star Crusher LLC.",
};

export default function SecondarySectionsPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb="Secondary Sections"
        title="Secondary Sections"
      />

      <section className="py-16">
        <div className="auto-container">
          <div className="mb-10">
            <Image
              src="/assets/image6.png"
              alt="Secondary Section"
              width={500}
              height={500}
              className="w-full object-cover rounded"
            />
          </div>

          <h2 className="text-3xl font-bold text-blue-700 uppercase mb-4">
            Secondary Section
          </h2>
          <p className="text-gray-600 mb-10">
            The secondary section is consisted of three crushing stages to get the materials fully crushed and shaped, involving
          </p>

          <h3 className="text-xl font-bold text-blue-600 mb-3">
            Cone Crusher RC-54 HP 300 Cederapids (USA) 2 nos
          </h3>
          <p className="text-gray-600 mb-10">
            To assure premium quality, we have mantled two Cone crushers which work as a first and second crushing process for the oversize material passed again, this process result in to fully crushed materials. One more such Cone Crusher is intended to raise the Capacity to more than 700 TPH
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-gray-200 rounded p-6">
              <h4 className="text-base font-bold mb-3">48S Style &lsquo;D&rsquo; Gyrasphere Crusher - Telsmith TP40 USA</h4>
              <p className="text-gray-600 text-sm leading-relaxed">It is a gyratory reduction crusher of the spring relief type.</p>
            </div>
            <div className="border border-gray-200 rounded p-6">
              <h4 className="text-base font-bold mb-3">Screens 3 deck 5.5 x 1.5 Meter LJ series Cederapids (USA) 2nos</h4>
              <p className="text-gray-600 text-sm leading-relaxed">These are for screening the output materials from the Cone crushers to sort them as per the required dimensions/sizes and distribute those materials into the next level HP 600 Nordberg barmac B1000 series VSI.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-blue-600 mb-3">
            HP 600 Nordberg Barmac B9100 series VSI- Metso (France)
          </h3>
          <p className="text-gray-600">
            This is the most important process that shapes the stones and gives it the best physical attributes and appearance properties like flakiness and elongation, in which we believe to excel our competitors. The machine shapes the products and removes the edges to transform the product to a cubical aggragate that complies with the best international standards including both BSI and ASTM.
          </p>
        </div>
      </section>
    </div>
  );
}
