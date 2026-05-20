import { Phone, MapPin, Wrench, Snowflake, Clock, ShieldCheck, Star, Mail, Fan, CheckCircle2 } from "lucide-react";

type BusinessInfo = {
  name: string;
  owner: string;
  phone: string;
  email: string;
  address: string;
  mapQuery: string;
};

type Service = {
  title: string;
  description: string;
};

const business: BusinessInfo = {
  name: "Max AC Services",
  owner: "Malang Ch.",
  phone: "+91 8108097837",
  email: "maxacservices@gmail.com",
  address: "office no 3, Gauntam center, raut road, Thane East, Maharashtra, 400603",
  mapQuery: "Gauntam center, raut road, Thane East, Maharashtra, 400603",
};

const services: Service[] = [
  {
    title: "AC Installation",
    description: "New split/window AC installation with safe fitting and proper setup.",
  },
  {
    title: "AC Repair",
    description: "Cooling issue, water leakage, noise problem and electrical fault repair.",
  },
  {
    title: "Gas Refilling",
    description: "AC gas checking and refilling for better cooling performance.",
  },
  {
    title: "Deep Cleaning",
    description: "Indoor and outdoor unit cleaning for fresh air and smooth cooling.",
  },
  {
    title: "Regular Servicing",
    description: "Complete AC servicing for home, office, shop and commercial spaces.",
  },
  {
    title: "AMC Support",
    description: "Annual maintenance support for long-term AC performance.",
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-sky-50 text-slate-900">
      <div className="fixed inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

     <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-100 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="rounded-2xl bg-blue-600 p-2 text-white shadow-lg shadow-blue-200">
              <Snowflake className="h-6 w-6" />
            </span>
            <span className="text-xl font-black text-blue-700">{business.name}</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>

          <a
            href={`tel:${business.phone}`}
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Call Now
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
            <Fan className="h-4 w-4" /> Fast AC Repair & Service
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            Best <span className="text-blue-600">AC Service</span> for Home, Office & Shop
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {business.name} provides professional AC installation, repair, gas refilling, cleaning and maintenance service with quick doorstep support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-extrabold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              <Phone className="h-5 w-5" /> {business.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-white px-7 py-4 font-extrabold text-blue-700 shadow-sm transition hover:-translate-y-1"
            >
              <MapPin className="h-5 w-5" /> View Location
            </a>
          </div>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            <MiniPoint text="Same Day Visit" />
            <MiniPoint text="All AC Brands" />
            <MiniPoint text="Trusted Technician" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-300/40 to-cyan-300/40 blur-2xl" />
          <div className="relative rounded-[2rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-100">
            <div className="rounded-[1.6rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-400 p-8 text-white">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-blue-100">Professional Technician</p>
                  <h2 className="mt-2 text-3xl font-black">{business.owner}</h2>
                </div>
                <div className="rounded-3xl bg-white/15 p-4 backdrop-blur">
                  <Snowflake className="h-12 w-12" />
                </div>
              </div>

              <div className="mt-10 rounded-3xl bg-white/15 p-5 backdrop-blur">
                <p className="text-sm text-blue-100">Available For</p>
                <h3 className="mt-2 text-2xl font-black">Repair • Service • Gas Filling</h3>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <FeatureCard icon={<Clock />} title="Quick Service" />
                <FeatureCard icon={<ShieldCheck />} title="Safe Work" />
                <FeatureCard icon={<Wrench />} title="Expert Repair" />
                <FeatureCard icon={<Star />} title="Good Support" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-extrabold text-blue-600">Our Services</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Complete AC Service Solution</h2>
          <p className="mt-4 text-slate-600">One place for installation, repair, servicing, cleaning and maintenance.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group rounded-3xl border border-blue-100 bg-white p-7 shadow-lg shadow-blue-50 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100">
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                <Wrench className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] bg-blue-700 p-8 text-white shadow-2xl shadow-blue-200 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold text-blue-100">Why Choose Us?</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Cooling service you can trust</h2>
              <p className="mt-5 leading-8 text-blue-50">
                We focus on quick response, clean work, proper checking and customer satisfaction. Suitable for homes, offices, shops and small commercial places.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <BluePoint text="Doorstep Service" />
              <BluePoint text="Proper Diagnosis" />
              <BluePoint text="Affordable Pricing" />
              <BluePoint text="Friendly Support" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-100">
            <p className="font-extrabold text-blue-600">Contact Us</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Book AC Service Today</h2>

            <div className="mt-8 space-y-4">
              <ContactCard icon={<Phone />} label="Phone" value={business.phone} href={`tel:${business.phone}`} />
              <ContactCard icon={<Mail />} label="Email" value={business.email} href={`mailto:${business.email}`} />
              <ContactCard icon={<MapPin />} label="Address" value={business.address} />
              <ContactCard icon={<Wrench />} label="Technician Name" value={business.owner} />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-2xl shadow-blue-100">
            <iframe
              title="Max AC Services Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`}
              className="h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-blue-100 bg-white px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </footer>
    </main>
  );
}

function MiniPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
      <CheckCircle2 className="h-4 w-4 text-blue-600" />
      {text}
    </div>
  );
}

function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="rounded-2xl bg-white/15 p-4 backdrop-blur">
      <div className="mb-2 [&_svg]:h-5 [&_svg]:w-5">{icon}</div>
      <p className="text-sm font-extrabold">{title}</p>
    </div>
  );
}

function BluePoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-5 font-bold backdrop-blur">
      <CheckCircle2 className="h-5 w-5" />
      {text}
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const card = (
    <div className="flex gap-4 rounded-3xl border border-blue-100 bg-sky-50 p-5 transition hover:bg-blue-50">
      <div className="rounded-2xl bg-blue-600 p-3 text-white [&_svg]:h-5 [&_svg]:w-5">{icon}</div>
      <div>
        <p className="text-sm font-bold text-blue-700">{label}</p>
        <p className="mt-1 font-extrabold text-slate-900">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{card}</a> : card;
}

export default App;
