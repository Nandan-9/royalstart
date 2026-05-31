import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Certificates | Royal Star Crusher LLC",
  description: "View the certifications and licenses held by Royal Star Crusher LLC.",
};

export default function CertificatesPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb="Certificates"
        title="Our Certificates"
      />

      <section className="py-16">
        <div className="auto-container">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </section>
    </div>
  );
}
