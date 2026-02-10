import React, { useMemo, useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    title: "Top 10 Beste Smartphones 2025",
    desc: "Van budget tot premium: ontdek de beste smartphones van dit jaar.",
    img: "https://s3.eu-north-1.amazonaws.com/media.redshell.nl/wp-content/uploads/2023/10/12011213/1b38869130e05d346de906fc47c1c9b5-scaled.webp",
    priceRange: "€199–€1.299",
    rating: 5.0,
    reviews: 1,
    tags: ["Electronica", "Topkeuze"],
    link: "/top-10-smartphones-2025",
  },
  {
    id: 2,
    title: "Top 5 Noise Cancelling Koptelefoons",
    desc: "Ervaar ultieme stilte met deze top noise cancelling koptelefoons.",
    img: "",
    priceRange: "€99–€399",
    rating: 5.0,
    reviews: 1,
    tags: ["Electronica", "Smart"],
    link: "https://example.com/aff?pid=2",
  },
  {
    id: 3,
    title: "Top 7 Stofzuigers met Laser Stofdetectie",
    desc: "Nooit meer stof missen dankzij geavanceerde laser technologie.",
    img: "",
    priceRange: "€149–€499",
    rating: 5.0,
    reviews: 1,
    tags: ["Huishouden", "Premium"],
    link: "https://example.com/aff?pid=3",
  },
  {
    id: 4,
    title: "Top 5 Hybride Gaming Consoles",
    desc: "Speel thuis en onderweg met deze veelzijdige gaming consoles.",
    img: "",
    priceRange: "€299–€499",
    rating: 5.0,
    reviews: 1,
    tags: ["Electronica", "Topkeuze"],
    link: "https://example.com/aff?pid=4",
  },
  {
    id: 5,
    title: "Top 6 Airfryers voor Gezond Frituren",
    desc: "Knapperige snacks met minder olie dankzij deze top airfryers.",
    img: "",
    priceRange: "€129–€199",
    rating: 5.0,
    reviews: 1,
    tags: ["Electronica", "Deals"],
    link: "https://example.com/aff?pid=5",
  },
  {
    id: 6,
    title: "Top 8 Ergonomische Muizen",
    desc: "Comfort en ondersteuning voor lange werkdagen achter de computer.",
    img: "",
    priceRange: "€29–€99",
    rating: 5.0,
    reviews: 1,
    tags: ["Electronica", "Topkeuze"],
    link: "https://example.com/aff?pid=6",
  },
  {
    id: 7,
    title: "Top 4 Elektrische Tandenborstels met App",
    desc: "Slimme reiniging en persoonlijke coaching voor een stralend gebit.",
    img: "",
    priceRange: "€49–€199",
    rating: 5.0,
    reviews: 1,
    tags: ["Verzorging", "Smart"],
    link: "https://example.com/aff?pid=7",
  },
  {
    id: 8,
    title: "Top 5 Gasbarbecues voor Beginners",
    desc: "Eenvoudig grillen met deze gebruiksvriendelijke gasbarbecues.",
    img: "",
    priceRange: "€199–€499",
    rating: 5.0,
    reviews: 1,
    tags: ["Hobby's", "Budget"],
    link: "https://example.com/aff?pid=8",
  },
  {
    id: 9,
    title: "Top 10 QLED Televisies",
    desc: "Levendige kleuren en diepe contrasten met QLED technologie.",
    img: "",
    priceRange: "€399–€2.499",
    rating: 5.0,
    reviews: 1,
    tags: ["Electronica", "Premium"],
    link: "https://example.com/aff?pid=9",
  },
  {
    id: 10,
    title: "Top 5 powerbanks met Snelladen",
    desc: "Altijd en overal je apparaten snel opladen met deze powerbanks.",
    img: "",
    priceRange: "€19–€79",
    rating: 5.0,
    reviews: 1,
    tags: ["Electronica", "Budget"],
    link: "https://example.com/aff?pid=10",
  },
  {
    id: 11,
    title: "Top 6 Accuboormachines voor Thuisgebruik",
    desc: "Krachtige en veelzijdige accuboormachines voor al je klusprojecten.",
    img: "",
    priceRange: "€49–€199",
    rating: 5.0,
    reviews: 1,
    tags: ["Huishouden", "Deals"],
    link: "https://example.com/aff?pid=11",
  },
  {
    id: 12,
    title: "Top 7 Smartwatches voor Sporters",
    desc: "Houd je prestaties bij en blijf verbonden met deze sportieve smartwatches.",
    img: "",
    priceRange: "€99–€399",
    rating: 5.0,
    reviews: 1,
    tags: ["Sport", "Smart"],
    link: "https://example.com/aff?pid=12",
  },
];


const CATEGORIES = [
  "Alles",
  "Electronica",
  "Huishouden",
  "Verzorging",
  "Hobby's",
  "Sport",
  "Huisdieren",
  "Topdeals",
];

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold">RenCo Affiliate Overzicht</h1>
      </header>
      
      <main className="container mx-auto p-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="border p-4 rounded-lg bg-white">
            <h2 className="text-xl font-semibold">Product Naam</h2>
            <p>Beschrijving voor SEO-waarde...</p>
            <a href="#" className="text-blue-600">Bekijk product</a>
          </article>
        </section>
      </main>
    </div>
  );
}

function StarRating({ value = 0, outOf = 5 }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1" aria-label={`Beoordeling ${value} van ${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < full ? "currentColor" : "none"}
          stroke="currentColor"
          className={`h-4 w-4 ${i < full ? "opacity-100" : "opacity-40"}`}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11.48 3.5c.3-.9 1.74-.9 2.04 0l1.4 4.18a1.1 1.1 0 001.04.76h4.39c.95 0 1.35 1.22.58 1.77l-3.56 2.58a1.1 1.1 0 00-.4 1.23l1.4 4.18c.3.9-.74 1.65-1.5 1.1l-3.56-2.58a1.1 1.1 0 00-1.29 0l-3.56 2.58c-.77.55-1.8-.2-1.5-1.1l1.4-4.18a1.1 1.1 0 00-.4-1.23L2.07 10.2c-.77-.55-.37-1.77.58-1.77h4.39c.48 0 .91-.31 1.04-.76l1.4-4.18z"
          />
        </svg>
      ))}
      <span className="ml-1 text-xs text-neutral-600">{value.toFixed(1)}</span>
    </div>
  );
}

function ProductCard({ p }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <img
          src={p.img}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {p.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-tight text-neutral-900">{p.title}</h3>
        <p className="line-clamp-2 text-sm text-neutral-600">{p.desc}</p>
        <div className="mt-1 flex items-center justify-between">
          <StarRating value={p.rating} />
          <span className="text-xs text-neutral-500">{p.reviews} reviews</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900">{p.priceRange}</span>
          <a
            href={p.link}
            className="rounded-xl bg-amber-400 px-3 py-2 text-xs font-bold text-neutral-900 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label={`Ontdek meer over ${p.title}`}
          >
            Ontdek meer
          </a>
        </div>
      </div>
    </article>
  );
}

export default function RencoAffiliate() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("Alles");
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      const inCategory =
        cat === "Alles" ||
        p.tags.includes(cat) ||
        p.title.toLowerCase().includes(cat.toLowerCase());
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);
      return inCategory && inQuery;
    });

    if (sort === "priceUp") {
      list = [...list].sort(
        (a, b) =>
          parseFloat(a.priceRange.replace(/[^0-9.]/g, "")) -
          parseFloat(b.priceRange.replace(/[^0-9.]/g, ""))
      );
    } else if (sort === "priceDown") {
      list = [...list].sort(
        (a, b) =>
          parseFloat(b.priceRange.replace(/[^0-9.]/g, "")) -
          parseFloat(a.priceRange.replace(/[^0-9.]/g, ""))
      );
    } else if (sort === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    } else {
      // popular (by reviews)
      list = [...list].sort((a, b) => b.reviews - a.reviews);
    }

    return list;
  }, [cat, query, sort]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Topbar */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl"></span>
            <a href="#" className="text-lg font-bold tracking-tight">
              R&Co
            </a>
          </div>
          <div className="ml-auto hidden flex-1 items-center justify-center md:flex">
            <div className="relative w-full max-w-xl">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek naar producten…"
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2 pr-9 text-sm shadow-sm outline-none focus:ring-2 focus:ring-amber-500"
              />
              <span
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
                aria-hidden
              >
                
              </span>
            </div>
          </div>
          <a
            href="#how-it-works"
            className="rounded-xl border border-neutral-300 px-3 py-2 text-xs font-semibold hover:bg-neutral-100"
          >
            Hoe het werkt
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-3xl bg-gradient-to-br from-amber-100 to-white p-6 md:p-10 shadow-sm border border-amber-200/60">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
                Ontdek de beste produten — getest & geselecteerd
              </h1>
              <p className="mt-2 max-w-3xl text-neutral-700">
                We vergelijken prijzen, lezen reviews en speuren naar deals.
                Elke knop "Ontdek meer" bevat een affiliate link; jij betaalt
                niets extra, wij krijgen een kleine vergoeding.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex gap-3">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full md:w-auto rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-medium shadow-sm focus:ring-2 focus:ring-amber-500"
                >
                  <option value="popular">Sorteer: Populair</option>
                  <option value="rating">Sorteer: Beoordeling</option>
                  <option value="priceUp">Prijs: laag → hoog</option>
                  <option value="priceDown">Prijs: hoog → laag</option>
                </select>
                <div className="md:hidden">
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Zoeken…"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-5 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium border shadow-sm transition ${
                  cat === c
                    ? "bg-amber-400 border-amber-400 text-neutral-900"
                    : "bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                }`}
                aria-pressed={cat === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-4 pb-16">
        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed border-neutral-300 bg-white p-8 text-center text-neutral-600">
            Geen producten gevonden. Pas je filters of zoekopdracht aan.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </main>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "1. Curatie",
              text: "We selecteren producten op kwaliteit, prijs en verkrijgbaarheid.",
            },
            {
              title: "2. Vergelijk",
              text: "Filter op categorie, beoordeel en vind de beste deal.",
            },
            {
              title: "3. Steun ons",
              text: "Via affiliate links ontvangen we soms commissie – kost jou niets.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 text-neutral-700">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} R&Co. Alle rechten voorbehouden.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-neutral-900">
                Privacy
              </a>
              <a href="#" className="hover:text-neutral-900">
                Cookies
              </a>
              <a href="#" className="hover:text-neutral-900">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
