import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Promoter | Royal Star Crusher LLC",
  description: "Learn about the promoter behind Royal Star Crusher LLC.",
};

const projects = [
  {
    name: "Tristar Stone Crusher",
    location: "KP6/550 Pannimukku, Karassery, Kozhikode, Kerala, India.",
    title: "Own",
    capacity: "100,000 metric ton per annum.",
  },
  {
    name: "Power Stone Products Mines & Crusher",
    location: "Eranchimavu KP 7/581 A , Kodiyathur(PO), Kozhikode, Kerala, India.",
    title: "Own",
    capacity: "140,000 metric ton per annum.",
  },
  {
    name: "Srikrishna Enterprises",
    location: "Arambodi Village, Sidakkatte, Belthangadi Taluke, Mangalore, Karnataka, India.",
    title: "Own",
    capacity: "150,000 metric ton per annum.",
  },
  {
    name: "Canan Sands Crusher Unit",
    location: "Kolagappara, Wayanad District, Kerala, India",
    title: "Leased",
    capacity: "150,000 metric ton per annum.",
  },
];

export default function OurPromoterPage() {
  return (
    <div className="page-wrapper">
      <PageHero breadcrumb="Our Promoter" title="Our Promoter" />

      <section className="px-4 py-10 sm:px-6 md:px-10 lg:py-16">
        <div className="auto-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600! mb-6 py-4">Our Promoters</h2>
          <p className="mb-10 md:mb-12 text-gray-700 leading-relaxed text-sm sm:text-base">
            Mr. Sukumaran Erulkunnummel, an India national, is a pioneer in mining and contracting
            business with over 20 years of experience in the industry both in production and
            marketing. Apart from this organization, he is successfully operating continued mining
            activities/premises in India, in which region the licencing and running of such
            activities are comparatively strictly scrutinized due to local laws. Some of such
            projects are:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
            {projects.map((project) => (
              <div key={project.name} className="border border-gray-100 rounded-lg p-5 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-5 pb-3 border-b border-gray-200">
                  {project.name}
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="mt-1 w-4 h-4 border border-gray-400 shrink-0" />
                    <span className="text-sm sm:text-base">
                      <span className="font-semibold text-blue-700">Location : </span>
                      <strong className="font-normal text-gray-700">{project.location}</strong>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-1 w-4 h-4 border border-gray-400 shrink-0" />
                    <span className="text-sm sm:text-base">
                      <span className="font-semibold text-blue-700">Title : </span>
                      <strong className="font-normal text-gray-700">{project.title}</strong>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-1 w-4 h-4 border border-gray-400 shrink-0" />
                    <span className="text-sm sm:text-base">
                      <span className="font-semibold text-blue-700">Licenced capacity : </span>
                      <strong className="font-normal text-gray-700">{project.capacity}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}