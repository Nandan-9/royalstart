import { blogs } from "../data";
import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import MobileCarousel from "@/components/MobileCarousel";

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

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group relative overflow-hidden rounded shadow-sm bg-white cursor-pointer">
      <div className="relative h-56 overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
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
  );
}

export default function HomePage() {
  return (
    <div className="page-wrapper">

      <HeroSlideshow />

      {/* Service Section */}
      <section className="service-section">
        <div className="auto-container">
          <div className="inner-container">

            {/* Desktop grid */}
            <div className="hidden md:block">
              <div className="row clearfix">
                <div className="service-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="shape-one"></div>
                    <div className="shape-two"></div>
                    <div className="image-layer"></div>
                    <h5><a href="/about">Preamble</a></h5>
                    <div className="text">As a Profile describer this document deals with an upward business profile to offer a broad
                      understanding of the company ROYAL STAR CRUSHER LLC,...</div>
                    <a className="read-more" href="/about">Read More <span className="flaticon-right-arrow"></span></a>
                  </div>
                </div>
                <div className="service-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="shape-one"></div>
                    <div className="shape-two"></div>
                    <div className="image-layer"></div>
                    <h5><a href="/about">Vision</a></h5>
                    <div className="text">To be the Premier organization locally and internationally by delivering innovative
                      quality products tailored for the clientele in right quantities,...</div>
                    <a className="read-more" href="/about">Read More <span className="flaticon-right-arrow"></span></a>
                  </div>
                </div>
                <div className="service-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="shape-one"></div>
                    <div className="shape-two"></div>
                    <div className="image-layer"></div>
                    <h5><a href="/about">Mission</a></h5>
                    <div className="text">To lead UAE&apos;s renowned aggregate sector to future by deploying an optimal mix of world class
                      technology, best-in-class equipment and competitive...</div>
                    <a className="read-more" href="/about">Read More <span className="flaticon-right-arrow"></span></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden">
              <MobileCarousel>
                <div className="service-block">
                  <div className="inner-box" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="shape-one"></div>
                    <div className="shape-two"></div>
                    <div className="image-layer"></div>
                    <h5><a href="/about">Preamble</a></h5>
                    <div className="text">As a Profile describer this document deals with an upward business profile to offer a broad
                      understanding of the company ROYAL STAR CRUSHER LLC,...</div>
                    <a className="read-more" href="/about">Read More <span className="flaticon-right-arrow"></span></a>
                  </div>
                </div>
                <div className="service-block">
                  <div className="inner-box" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="shape-one"></div>
                    <div className="shape-two"></div>
                    <div className="image-layer"></div>
                    <h5><a href="/about">Vision</a></h5>
                    <div className="text">To be the Premier organization locally and internationally by delivering innovative
                      quality products tailored for the clientele in right quantities,...</div>
                    <a className="read-more" href="/about">Read More <span className="flaticon-right-arrow"></span></a>
                  </div>
                </div>
                <div className="service-block">
                  <div className="inner-box" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="shape-one"></div>
                    <div className="shape-two"></div>
                    <div className="image-layer"></div>
                    <h5><a href="/about">Mission</a></h5>
                    <div className="text">To lead UAE&apos;s renowned aggregate sector to future by deploying an optimal mix of world class
                      technology, best-in-class equipment and competitive...</div>
                    <a className="read-more" href="/about">Read More <span className="flaticon-right-arrow"></span></a>
                  </div>
                </div>
              </MobileCarousel>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="big-text">ROYAL STAR</div>
                  <h2>ABOUT ROYAL STAR</h2>
                  <div className="text">ROYAL STAR CRUSHER LLC, formed in the year 2016, is a well-established and licensed
                    Quarry mining and crusher unit at Fujairah in UAE. The quarry/ mine possessed by the
                    company is well positioned to take the best advantages of the prime quality natural raw
                    materials that are available in UAE. The facilities are well served by comprehensive road
                    network with easy access to ports in Fujairah, Dubai, Abu Dhabi and beyond.
                    The said property has an abundant stack of granite which can be excavated for more than 100 years.
                  </div>
                  <div className="text">
                    We have taken up the said property for 99 years lease from the corresponding Government agencies.
                    The license provided by the Fujairah Municipality can be renewed 9 times consequently,
                    on its completion of every 10 years. The environmental assets possessed by Royal Star
                    Crusher is considered to be the best source of Gabbro Stones which acquire the highest
                    specific gravity in the whole region that reaches from 2.93 – 3.00gn/cm3.
                  </div>
                </div>
                <div className="lower-box clearfix">
                  <div className="button-box">
                    <a className="btn-style-one theme-btn" href="/contact"><span className="txt">Contact us <i className="arrow fa fa-angle-right"></i></span></a>
                  </div>
                  <div className="phone-box">
                    <div className="box-inner">
                      <span className="icon flaticon-telephone"></span>
                      Call us for help
                      <strong>+971 58 173 2977</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="counter-box">
                  <div className="row clearfix">
                    <div className="counter-column col-lg-6 col-md-6 col-sm-12">
                      <h2>3,010+</h2>
                      <div className="counter-text">Satisfied Clients</div>
                    </div>
                    <div className="counter-column col-lg-6 col-md-6 col-sm-12">
                      <h2>528+</h2>
                      <div className="counter-text">Active Projects</div>
                    </div>
                  </div>
                </div>
                <div className="image relative w-full h-80">
                  <Image src="/assets/image3.png" alt="About Royal Star" fill className="object-cover" sizes="(max-width: 768px) 100vw, 42vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="big-text">PRODUCTS</div>
            <div className="title">Our Products</div>
            <h2>Our Major Products</h2>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:block">
            <div className="row clearfix">
              {products.map(product => (
                <div key={product.name} className="col-lg-4 col-md-6 col-sm-12 mb-10">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <MobileCarousel>
              {products.map(product => (
                <ProductCard key={product.name} product={product} />
              ))}
            </MobileCarousel>
          </div>

        </div>
      </section>

      {/* Welcome Section – Licenses & Supply Orders */}
      <section className="welcome-section style-two bg-white pt-4">
        <div className="pattern-layer"></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title-three">
                  <h2>Our Licenses</h2>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-12">
                    <ul className="list">
                      <li>Fujairah municipality licenses</li>
                      <li>Environment clearance certifications</li>
                      <li>Pollution certifications</li>
                      <li>Health clearance licenses</li>
                      <li>Mining &amp; Geology licenses</li>
                      <li>Explosives licenses</li>
                    </ul>
                    <p>(Vital permits are from FUJAIRAH NATURAL RESOURCES CORPORATION, the pioneer licensing
                      authority in the Emirate of Fujairah. Once the new upgrades are implemented, we also intend
                      to obtain the required ISO certifications.)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title-three">
                  <h2>Our Major Supply Orders</h2>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-12">
                    <ul className="list">
                      <li>300,000 MT of armour rocks/ aggregates to Kuwait, Qatar.</li>
                      <li>200,000MT armour rocks/ aggregates to Bangladesh</li>
                      <li>100,000MT of armour rocks to a crushing unit in Fujairah</li>
                      <li>A positive indication from construction giant ADANI Group in India — the Government of Kerala
                        has in spirits approved our quarry for their procurement of material, and we are awaiting to
                        sign up a contract to start supplying armour rocks and aggregates for that project.</li>
                    </ul>
                    <p>More enquiries are coming from Bangladesh and nearby crushers in Fujairah which can be better
                      fulfilled once our capacity reaches 1,400TPH.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Two – Production Capacity */}
      <section className="about-section-two pt-0">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="big-text">Production Capacity</div>
            <h2>Our Production Capacity - Present to Future</h2>
          </div>
          <div className="row clearfix">
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image wow fadeInLeft relative h-80" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <Image src="/assets/image2.png" alt="Production Capacity" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </div>
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title-two">
                  <div className="text">We presently possess a crushing capacity of 400TPH. We shall increase the same to 700TPH
                    after installing an additional new 300TPH Cone crusher. Once we completely achieve the
                    upgrades, we are even expecting to further enhance our capacity in double shifts to 1,400TPH.
                    Thus we expect to move forward from present installed capacity per annum of more than
                    1.4 million metric tonnes to more than 2.6 million metric tonnes and further to more than 5.2
                    million metric tonnes in the near future.</div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="feature-block-two col-lg-4">
                <div className="inner-box">
                  <h6>Operational Capacity</h6>
                  <div className="text">1.4 million metric tonnes per annum to more than 2.6 million metric tonnes and further
                    to more than 5.2 million metric tonnes in the near future</div>
                </div>
              </div>
              <div className="feature-block-two col-lg-4">
                <div className="inner-box">
                  <h6>Sequential operation &amp; quality output</h6>
                  <div className="text">We undertake a scientifically sequenced set of processes which are strictly screened and
                    quality controlled at all niches to obtain the optimal output with the finest quality.</div>
                </div>
              </div>
              <div className="feature-block-two col-lg-4">
                <div className="inner-box">
                  <h6>Natural quarry &amp; quality input</h6>
                  <div className="text">As a highlight, we possess a unique huge Mountain considered as the best source of
                    gabbro stones which records the highest specific gravity in the whole area reaching
                    from 2.93-3.00gn/cm3.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section Five – Operations */}
      <section className="service-section-five mt-0 pt-0">
        <div className="auto-container">

          {/* Desktop grid */}
          <div className="hidden md:block">
            <div className="row clearfix">
              <div className="service-block-four style-two col-lg-6">
                <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="image-layer"></div>
                  <div className="post-number">01</div>
                  <h5><a href="#">Weighing Bridge</a></h5>
                  <div className="text">We have a world class fully computerized weighing system to facilitate loading material
                    precisely and efficiently. We utilize the latest technology which enables us to precisely
                    control our stock and sales operation.</div>
                </div>
              </div>
              <div className="service-block-four style-two col-lg-6">
                <div className="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                  <div className="image-layer"></div>
                  <div className="post-number">02</div>
                  <h5><a href="#">Human resources</a></h5>
                  <div className="text">We possess presently the best in class work force of requisite numbers both directly and
                    indirectly ranging from Mine/quarry/plant managers to blast man, QA&amp;QC staff and all
                    the required personnel to manage and support the show.</div>
                </div>
              </div>
              <div className="service-block-four style-two col-lg-6">
                <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="image-layer"></div>
                  <div className="post-number">03</div>
                  <h5><a href="#">Administration Office</a></h5>
                  <div className="text">We formaly started our full-fledged Office at 2016. As part of our standardization efforts,
                    we have established well-organized offices at premium levels in this region so as to aid us
                    to administer our whole set of operations smoothly and systematically.</div>
                </div>
              </div>
              <div className="service-block-four style-two col-lg-6">
                <div className="inner-box wow fadeInLeft" data-wow-delay="450ms" data-wow-duration="1500ms">
                  <div className="image-layer"></div>
                  <div className="post-number">04</div>
                  <h5><a href="#">Logistics Management</a></h5>
                  <div className="text">We have made our fleet strong with our own and contract leased 20cbm and 45cbm trailer
                    trucks to make supply of products to any location within the UAE.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <MobileCarousel>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="image-layer"></div>
                  <div className="post-number">01</div>
                  <h5><a href="#">Weighing Bridge</a></h5>
                  <div className="text">We have a world class fully computerized weighing system to facilitate loading material
                    precisely and efficiently. We utilize the latest technology which enables us to precisely
                    control our stock and sales operation.</div>
                </div>
              </div>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="image-layer"></div>
                  <div className="post-number">02</div>
                  <h5><a href="#">Human resources</a></h5>
                  <div className="text">We possess presently the best in class work force of requisite numbers both directly and
                    indirectly ranging from Mine/quarry/plant managers to blast man, QA&amp;QC staff and all
                    the required personnel to manage and support the show.</div>
                </div>
              </div>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="image-layer"></div>
                  <div className="post-number">03</div>
                  <h5><a href="#">Administration Office</a></h5>
                  <div className="text">We formaly started our full-fledged Office at 2016. As part of our standardization efforts,
                    we have established well-organized offices at premium levels in this region so as to aid us
                    to administer our whole set of operations smoothly and systematically.</div>
                </div>
              </div>
              <div className="service-block-four style-two">
                <div className="inner-box">
                  <div className="image-layer"></div>
                  <div className="post-number">04</div>
                  <h5><a href="#">Logistics Management</a></h5>
                  <div className="text">We have made our fleet strong with our own and contract leased 20cbm and 45cbm trailer
                    trucks to make supply of products to any location within the UAE.</div>
                </div>
              </div>
            </MobileCarousel>
          </div>

        </div>
      </section>

      {/* CTA Section – Contact */}
      <section className="cta-section relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex">
          <div className="relative w-1/2 h-full">
            <Image src="/assets/image1.png" alt="" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative w-1/2 h-full">
            <Image src="/assets/image2.png" alt="" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        <div className="gradient-layer absolute inset-0 z-1" />
        <div className="auto-container relative z-2">
          <div className="icon" style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '48px', color: '#c1272d' }}>★</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px]" style={{ color: '#fff', fontWeight: 800, lineHeight: 1.3, textTransform: 'uppercase', marginBottom: '30px' }}>
            Contact To<br />Royal Star Crusher LLC
          </h2>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              backgroundColor: '#c1272d',
              color: '#fff',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Contact Us &gt;
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 !p-5">
        <div className="sec-title centered">
          <div className="big-text">Blog</div>
          <h2 className='pt-5'>Blogs</h2>
        </div>
        <div className="auto-container">

          {/* Desktop grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group border border-gray-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
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

          {/* Mobile carousel */}
          <div className="md:hidden">
            <MobileCarousel>
              {blogs.map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group border border-gray-200 rounded overflow-hidden shadow-sm">
                  <div className="relative w-full h-52">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                    <h3 className="text-base font-bold text-gray-800 leading-snug">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </MobileCarousel>
          </div>

        </div>
      </section>

    </div>
  );
}
