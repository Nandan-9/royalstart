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

      <section className="py-16">
        <div className="auto-container">
          <p className="mb-12 text-gray-700 leading-relaxed">
            Mr. Sukumaran Erulkunnummel, an India national, is a pioneer in mining and contracting
            business with over 20 years of experience in the industry both in production and
            marketing. Apart from this organization, he is successfully operating continued mining
            activities/premises in India, in which region the licencing and running of such
            activities are comparatively strictly scrutinized due to local laws. Some of such
            projects are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.name}>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{project.name}</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="mt-1 w-4 h-4 border border-gray-400 shrink-0" />
                    <span>
                      <span className="font-semibold text-blue-700">Location : </span>
                      <strong>{project.location}</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-4 h-4 border border-gray-400 shrink-0" />
                    <span>
                      <span className="font-semibold text-blue-700">Title : </span>
                      <strong>{project.title}</strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 w-4 h-4 border border-gray-400 shrink-0" />
                    <span>
                      <span className="font-semibold text-blue-700">Licenced capacity : </span>
                      <strong>{project.capacity}</strong>
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
