import React from "react";

const TOP10_SMARTPHONES_2025 = [
  {
    rank: 1,
    name: "Apple iPhone 15 Pro",
    short: "Ultrasnelle A17 Pro-chip, topcamera’s en ProMotion-scherm.",
    img: "https://s3.eu-north-1.amazonaws.com/media.redshell.nl/wp-content/uploads/2023/10/12011213/1b38869130e05d346de906fc47c1c9b5-scaled.webp",
    priceRange: "€1.150–€1.350",
    pros: ["Zeer snelle prestaties", "Uitstekende foto- en videokwaliteit", "Lange software-ondersteuning"],
    cons: ["Hoge prijs"],
    link: "https://example.com/aff/iphone15pro",
    tag: "Onze #1 keuze",
  },
  {
    rank: 2,
    name: "Samsung Galaxy S24 Ultra",
    short: "Grote QHD+ 120Hz display en extreme zoomcamera.",
    img: "https://files.refurbed.com/ii/samsung-galaxy-s24-ultra-1705563165.jpg",
    priceRange: "€1.250–€1.450",
    pros: ["200MP camera + sterke zoom", "S Pen ondersteuning", "Helder scherm"],
    cons: ["Groot en zwaar"],
    link: "https://example.com/aff/s24ultra",
    tag: "Beste Android",
  },
  {
    rank: 3,
    name: "Google Pixel 9 Pro",
    short: "De koning van foto’s met slimme AI-features.",
    img: "https://files.refurbed.com/ii/google-pixel-9-pro-fold-1724827563172605395.jpg",
    priceRange: "€1.000–€1.200",
    pros: ["Fantastische camera", "Pure Android + snelle updates", "Handige AI-tools"],
    cons: ["Beperkte beschikbaarheid in NL"],
    link: "https://example.com/aff/pixel9pro",
    tag: "Beste camera",
  },
  {
    rank: 4,
    name: "OnePlus 13",
    short: "Razendsnel en strak, met snelle OxygenOS-software.",
    img: "https://image01-eu.oneplus.net/media/202412/16/19774146b6cba4bdcbe55de31e3ae621.png",
    priceRange: "€800–€1.000",
    pros: ["Heel snel en soepel", "Schone interface", "Sterke prijs-prestatie"],
    cons: ["Camera iets minder dan topklasse"],
    link: "https://example.com/aff/oneplus13",
    tag: "Performance king",
  },
  {
    rank: 5,
    name: "Samsung Galaxy S24",
    short: "Compacte allrounder met high-end specs.",
    img: "",
    priceRange: "€800–€950",
    pros: ["Fijn formaat", "Sterk AMOLED-scherm", "Goede camera’s"],
    cons: ["Geen periscope-zoom"],
    link: "https://example.com/aff/s24",
    tag: "Beste compact",
  },
  {
    rank: 6,
    name: "Apple iPhone 15",
    short: "Instap-iPhone met sterke chip en goede camera.",
    img: "",
    priceRange: "€850–€1.000",
    pros: ["Goede prestaties", "Top ecosysteem", "Lange support"],
    cons: ["Geen 120Hz-scherm"],
    link: "https://example.com/aff/iphone15",
    tag: "Beste iPhone prijs/kwaliteit",
  },
  {
    rank: 7,
    name: "Xiaomi 14",
    short: "Flagship specs met scherpe prijs.",
    img: "",
    priceRange: "€700–€900",
    pros: ["120Hz OLED-scherm", "Snelladen", "Sterke hardware"],
    cons: ["Software niet ieders smaak"],
    link: "https://example.com/aff/xiaomi14",
    tag: "Beste deal",
  },
  {
    rank: 8,
    name: "Google Pixel 9",
    short: "Goedkoper dan de Pro, zelfde slimme features.",
    img: "",
    priceRange: "€750–€900",
    pros: ["Topcamera", "Pure Android", "AI-features"],
    cons: ["Geen periscoope-zoom"],
    link: "https://example.com/aff/pixel9",
    tag: "Slimste keuze",
  },
  {
    rank: 9,
    name: "Samsung Galaxy A55",
    short: "Sterke midranger met OLED-scherm en goede batterij.",
    img: "",
    priceRange: "€350–€450",
    pros: ["Goede accuduur", "Mooi scherm", "Betaalbaar"],
    cons: ["Geen draadloos laden"],
    link: "https://example.com/aff/a55",
    tag: "Beste midrange",
  },
  {
    rank: 10,
    name: "Nothing Phone (3)",
    short: "Uniek design met LED-“Glyph”-interface.",
    img: "",
    priceRange: "€600–€750",
    pros: ["Opvallend design", "Schone software", "Goede prijs/kwaliteit"],
    cons: ["Camera niet topsegment"],
    link: "https://example.com/aff/nothing3",
    tag: "Meest uniek",
  },
];

function Top10SmartphonesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Topbar */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="/" className="text-lg font-bold tracking-tight">
            R&Co
          </a>
          <nav className="hidden gap-4 text-sm md:flex">
            <a href="/" className="hover:text-neutral-600">
              Home
            </a>
            <a href="/" className="hover:text-neutral-600">
              Categorieën
            </a>
            <a href="/" className="hover:text-neutral-600">
              Top 10&apos;s
            </a>
          </nav>
          <a
            href="#top10-list"
            className="rounded-xl border border-neutral-300 px-3 py-1.5 text-xs font-semibold hover:bg-neutral-100"
          >
            Naar lijst
          </a>
        </div>
      </header>

      {/* Hero / Intro */}
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
        <article className="prose prose-neutral max-w-none">
          <header className="mb-8 border-b border-neutral-200 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              Top 10 · 2025
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-neutral-900">
              Top 10 Beste Smartphones van 2025
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              Laatst bijgewerkt: December 2025
            </p>

            <div className="mt-4 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
              <img
              /* Hier staat de top foto*/
                src="https://cdn.thewirecutter.com/wp-content/media/2025/09/BG-IPHONE-2048px_TOP_ART_3X2.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
                alt="Verschillende smartphones naast elkaar"
                className="h-auto w-full object-cover"
              />
            </div>

            <p className="mt-4 text-neutral-700">
              Op zoek naar de beste smartphone van dit moment? Wij hebben de meest interessante modellen van 2025
              vergeleken op prestaties, camera, batterij, scherm en prijs. In deze top 10 vind je onze favorieten –
              van premium vlaggenschepen tot sterke midrange deals.
            </p>
            <p className="text-xs text-neutral-500">
              R&Co maakt gebruik van affiliate links. Klik je door naar een webshop en koop je iets, dan kunnen wij
              een kleine commissie ontvangen. Jij betaalt niets extra.
            </p>
          </header>

          {/* De eigenlijke Top 10 lijst */}
          <section id="top10-list" className="space-y-8">
            {TOP10_SMARTPHONES_2025.map((item) => (
              <section
                key={item.rank}
                className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row">
                  {/* Afbeelding */}
                  <div className="md:w-2/5">
                    <div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-square">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading={item.rank > 3 ? "lazy" : "eager"}
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-neutral-900 shadow">
                        #{item.rank}
                      </span>
                      {item.tag && (
                        <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tekstblok */}
                  <div className="flex flex-1 flex-col justify-between gap-3 md:w-3/5">
                    <div>
                      <h2 className="text-xl font-bold leading-snug">{item.name}</h2>
                      <p className="mt-1 text-sm text-neutral-700">{item.short}</p>

                      <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                            Pluspunten
                          </h3>
                          <ul className="mt-1 list-disc pl-4">
                            {item.pros.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                            Minpunten
                          </h3>
                          <ul className="mt-1 list-disc pl-4">
                            {item.cons.map((c) => (
                              <li key={c}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-col text-sm">
                        <span className="text-neutral-500">Prijs</span>
                        <span className="text-lg font-semibold text-neutral-900">
                          {item.priceRange}
                        </span>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-bold text-neutral-900 shadow-sm transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        Bekijk deals
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </section>

          {/* Afsluiting */}
          <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700">
            <h2 className="text-base font-semibold text-neutral-900">
              Hoe hebben we deze top 10 samengesteld?
            </h2>
            <p className="mt-2">
              We hebben diverse reviewsites, gebruikersbeoordelingen en shops vergeleken. Belangrijke factoren waren:
              prestaties, camera, batterijduur, schermkwaliteit, software-ondersteuning en prijs. Deze lijst is een
              momentopname en kan worden aangepast wanneer er nieuwe modellen verschijnen of prijzen veranderen.
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} R&Co. Sommige links zijn affiliate links.</p>
        </div>
      </footer>
    </div>
  );
}

export default Top10SmartphonesPage;
