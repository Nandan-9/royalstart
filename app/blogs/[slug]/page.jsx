import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { blogs } from "../../../data";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Royal Star Crusher LLC`,
    description: blog.content[0],
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb={blog.title}
        title={blog.title}
      />

      <section className="py-16">
        <div className="auto-container max-w-3xl mx-auto">
          <div className="relative w-full h-80 mb-8 rounded overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-8 leading-snug">
            {blog.title}
          </h1>

          <div className="space-y-5">
            {blog.content.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
