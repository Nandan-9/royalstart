import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Certificates | Royal Star Crusher LLC",
  description: "View the certifications and licenses held by Royal Star Crusher LLC.",
};
const products = [
  {
    image: '/assets/armoured_rock1.jpg',
    name: 'Armor Rock',
    items: ['0 -1000 KG', '1 Ton to 3 Ton', '3 Ton to 7 Ton'],
  },
  {
    image: '/assets/crushed_aggrigate.jpg',
    name: 'Crushed Aggregate',
    items: ['5 -10mm', 'to 10 -20 mm'],
  },
  {
    image: '/assets/m-sand.jpg',
    name: 'Manufactured Sand',
    items: ['Washed Crushed', 'Road base Sub base'],
  },
  {
    image: '/assets/road_base.jpg',
    name: 'Road base and sub base',
    items: [],
  },
];
export default function CertificatesPage() {
  return (
    <div className="page-wrapper">
      <PageHero
        breadcrumb="Our Products"
        title="Our Products"
      />

      <section className="products-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="big-text">PRODUCTS</div>
            <div className="title">Our Products</div>
            <h2>Our Major Products</h2>
          </div>
          <div className="row clearfix ">
            {products.map(product => (
              <div key={product.name} className="col-lg-4 col-md-6 col-sm-12 mb-10">
                <div className="group relative overflow-hidden rounded shadow-sm bg-white cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex flex-col px-8 pt-8 pb-6">
                      <h5 className="font-bold text-lg mb-3 ml-10 px-10">{product.name}</h5>
                      {product.items.map(item => (
                        <p key={item} className="text-sm text-gray-800 mb-1">{item}</p>
                      ))}
                      <a href="/contact" className="inline-block mt-4 bg-[#e41f1f] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 no-underline">
                        READ MORE &rsaquo;
                      </a>
                    </div>
                  </div>
                  <div className="p-4 overflow-hidden">
                    <h5 className="font-bold text-base text-gray-900 translate-y-0 group-hover:translate-y-[300%] transition-transform duration-500 ease-in-out">{product.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
