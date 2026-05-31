import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  breadcrumb: string;
  title: string;
}

export default function PageHero({ breadcrumb, title }: PageHeroProps) {
  return (
    <section className="relative  w-full overflow-hidden pb-10" style={{ minHeight: "460px" }} >
      <Image
        src="/assets/image1.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(13, 71, 161, 0.70)" }}
      />

      <div
        className="auto-container flex flex-col justify-center"
        style={{ minHeight: "260px", position: "relative", zIndex: 10 }}
      >
        <nav aria-label="Breadcrumb">
          <ul className="flex items-center gap-2 text-white text-sm font-medium mb-4 list-none p-0 m-0">
            <li>
              <Link
                href="/"
                className="text-white/90 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/70 text-xs">»</li>
            <li className="text-white/90">{breadcrumb}</li>
          </ul>
        </nav>

        <h1 className="text-white font-bold text-3xl md:text-4xl leading-tight m-0">
          {title}
        </h1>
      </div>
    </section>
  );
}
