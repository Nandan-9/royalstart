import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Final Screen | Royal Star Crusher LLC",
  description: "Learn about the final screen and environmental processes at Royal Star Crusher LLC.",
};

export default function FinalScreenPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb="Final Screen"
        title="Final Screen"
      />

      <section className="py-16">
        <div className="auto-container">
          <div className="mb-10">
            <Image
              src="/assets/image7.png"
              alt="Final Screen"
              width={500}
              height={500}
              className="w-full object-cover rounded"
            />
          </div>

          <h2 className="text-3xl font-bold text-blue-700 uppercase mb-4">
            Final Screen
          </h2>
          <p className="text-gray-600 mb-12">
            This is the last process in producing the aggregates and piling involving the best in class quality assurance. The screens work simultaneously to sort the product and spread it into 3 stock piles of final product, being RE 3/16, 3/8 and 3/4 through long sophisticated conveyor belts.
          </p>

          <h2 className="text-3xl font-bold text-blue-700 uppercase mb-4">
            Environmental
          </h2>
          <p className="text-gray-600 mb-6">
            We value the human, animal and plant life in and around. Our system of environment friendly production processes including the management of inputs, outputs and wastes are always well regarded by the respective Government agencies.
          </p>
          <p className="text-gray-600">
            To prevent spreading of the dust particles by not allowing it to pollute the atmosphere, we have one of the best dust suppression and management systems in the world. To control dust in each and every process during the aggregate production, there is also a water tanker splashing water on the ground of the whole plant 24 hours a day to make sure that we have removed the dust completely.
          </p>
        </div>
      </section>
    </div>
  );
}
