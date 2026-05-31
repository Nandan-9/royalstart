import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogs } from "../../data";

export const metadata = {
  title: "Blogs | Royal Star Crusher LLC",
  description: "Read the latest news and updates from Royal Star Crusher LLC.",
};

export default function BlogPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb="Blogs"
        title="Our Blogs"
      />

      <section className="py-16 !p-10">
        <div className="auto-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group border border-gray-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full h-52">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                  <h3 className="text-base font-bold text-gray-800 leading-snug group-hover:text-blue-700 transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
