"use client";


export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d47a1", position: "relative", overflow: "hidden" }} className="text-white">
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/assets/image4.png')", backgroundSize: "50%", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.1, zIndex: 0 }} />
      <div className="px-4 sm:px-10 md:px-17.5 pt-20 pb-14" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About */}
          <div>
            <h3 className="text-white font-bold text-xl mb-3">
              About Royal Star Crusher LLC
            </h3>
            <div className="w-10 h-0.5 mb-5" style={{ backgroundColor: "#e63946" }} />
            <p className="text-white text-sm leading-relaxed">
              ROYAL STAR CRUSHER LLC, formed in the year 2016, is a well-established and
              licensed Quarry mining and crusher unit at Fujairah in UAE. The quarry/ mine
              possessed by the company is well positioned to take the best advantages of the
              prime quality natural raw materials that are available in UAE. The facilities are
              well served by comprehensive road network with easy access to ports in
              Fujairah, Dubai, Abu Dhabi and beyond.
            </p>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-3">Official Info:</h3>
            <div className="w-10 h-0.5 mb-5" style={{ backgroundColor: "#e63946" }} />
            <ul className="space-y-4 text-lg text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-white">&#10148;</span>
                <span>P/O BOX: 1249, AL-HAIL<br />FUJAIRAH, UNITED ARAB<br />EMIRATES</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+971585544456" className="hover:underline">+971 58 554 4456</a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
                <a href="tel:+971506332977" className="hover:underline">+971 50 633 2977</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-xl mb-3">Newsletter</h3>
            <div className="w-10 h-0.5 mb-5" style={{ backgroundColor: "#e63946" }} />
            <p className="text-white text-sm">
              Subscribe our newsletter to get our latest update &amp; news
            </p>
            <form className="flex" style={{ maxWidth: "320px", marginTop: "16px" }} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your mail address"
                className="flex-1 px-4 py-2 text-sm text-white placeholder-white/60 focus:outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "none" }}
              />
              <button
                type="submit"
                className="px-4 py-2 flex items-center justify-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#e63946" }}
                aria-label="Subscribe"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>

            {/* Social icons */}
            <div className="flex gap-4" style={{ marginTop: "24px" }}>
              <a href="https://facebook.com" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 px-4 text-center text-sm text-white/70" style={{ borderColor: "rgba(255,255,255,0.15)", position: "relative", zIndex: 1 }}>
        © 2022 ROYAL STAR CRUSHER LLC - All rights reserved. Design &amp; Develop by{" "}
        <a href="#" style={{ color: "#e63946" }} className="hover:underline">Webs Utility</a>
      </div>
    </footer>
  );
}
