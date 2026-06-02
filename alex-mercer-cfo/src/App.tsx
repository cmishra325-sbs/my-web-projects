import { useState, useEffect, useRef } from 'react';
import {
  TrendingUp,
  BarChart3,
  Layers,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Linkedin,
  Menu,
  X,
  Calendar,
  Clock,
  Star,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

const STATS = [
  { value: '$250M+', label: 'Capital Raised' },
  { value: '15+', label: 'Years Board Advisor' },
  { value: '45+', label: 'Successful Exits' },
  { value: '2.8Ã—', label: 'Avg Revenue Growth' },
];

const SERVICES = [
  {
    icon: BarChart3,
    title: 'Financial Architecture & Forecasting',
    description:
      'Design institutional-grade financial models, multi-year projections, and scenario analysis frameworks that give your leadership team clarity and investor-grade confidence.',
    highlights: ['3-Statement Modeling', 'Rolling Forecast Systems', 'KPI Dashboard Design'],
  },
  {
    icon: TrendingUp,
    title: 'Capital Sourcing & Series Aâ€“D Advisory',
    description:
      'Navigate venture rounds and institutional financing with a seasoned operator at your sideâ€”from data room construction to term sheet negotiation and close management.',
    highlights: ['Investor Targeting & Outreach', 'Data Room Architecture', 'Term Sheet Negotiation'],
  },
  {
    icon: Layers,
    title: 'Operational Scale & Efficiency Metrics',
    description:
      'Build the operational finance infrastructure that transforms a high-growth startup into a scalable, repeatable business: unit economics, cohort analysis, and board reporting.',
    highlights: ['Unit Economics Modeling', 'Board Reporting Cadence', 'Burn Rate Optimization'],
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Alex restructured our entire financial reporting infrastructure in under 90 days. During our Series C, investors specifically commented on the quality of our data room and projections. We closed $42Mâ€”$7M above our target.',
    name: 'Marcus T.',
    title: 'CEO, Veritas Health Technologies',
    revenue: 'ARR at close: $18M',
    rating: 5,
  },
  {
    quote:
      'We were hemorrhaging cash with no visibility into why. Alex built a cost attribution model that exposed $2.4M in inefficiencies in our first month together. Within two quarters, we extended our runway by 14 months.',
    name: 'Priya S.',
    title: 'Founder & CEO, Luminary Commerce',
    revenue: 'Runway extended: 14 months',
    rating: 5,
  },
  {
    quote:
      "Our acquisition process was stalling due to diligence gaps. Alex stepped in as our de facto CFO, navigated the entire M&A process, and helped us close a $91M transaction on our timeline, not the buyer's.",
    name: 'Daniel W.',
    title: 'Co-Founder, Archon Logistics',
    revenue: 'Transaction value: $91M',
    rating: 5,
  },
];

const CALENDAR_DAYS = [
  { day: 'Mon', date: 26, available: true },
  { day: 'Tue', date: 27, available: true },
  { day: 'Wed', date: 28, available: false },
  { day: 'Thu', date: 29, available: true },
  { day: 'Fri', date: 30, available: true },
  { day: 'Sat', date: 31, available: false },
];

const TIME_SLOTS = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prevTestimonial = () =>
    setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextTestimonial = () =>
    setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);

  const handleBook = () => {
    if (selectedDay && selectedTime) setBooked(true);
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans antialiased">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/60 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5" aria-label="Alex Mercer Home">
            <span className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center text-zinc-950 font-bold text-sm tracking-tight">
              AM
            </span>
            <span className="hidden sm:block text-zinc-100 font-semibold text-sm tracking-wide">
              Alex Mercer
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:flex items-center text-sm font-medium px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all duration-200 tracking-wide"
          >
            Book Consultation
          </a>

          <button
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="overview"
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        aria-labelledby="hero-headline"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/3 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
          {/* Left copy */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-medium tracking-widest uppercase">
                Available for Engagements
              </span>
            </div>

            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-50 leading-[1.1] tracking-tight"
            >
              Strategic Financial
              <br />
              Leadership For{' '}
              <span className="text-emerald-400">High-Growth</span>
              <br />
              Companies.
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              Helping mid-market companies scale profitably, optimize cash flow, and navigate complex
              M&amp;A events without the overhead of a full-time CFO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#insights"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-zinc-50 text-sm font-medium transition-all duration-200"
              >
                View Case Studies
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                Secure an Advisory Session
              </a>
            </div>
          </div>

          {/* Right â€“ executive portrait */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
              <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Alex Mercer â€“ Fractional CFO & Corporate Advisor"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent">
                  <p className="text-zinc-100 font-semibold text-lg">Alex Mercer</p>
                  <p className="text-emerald-400 text-sm font-medium mt-0.5">
                    Fractional CFO &amp; Corporate Advisor
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 shadow-xl backdrop-blur">
                <p className="text-emerald-400 font-bold text-lg leading-none">$91M</p>
                <p className="text-zinc-500 text-xs mt-1">Largest Exit Advised</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 shadow-xl backdrop-blur">
                <p className="text-emerald-400 font-bold text-lg leading-none">45+</p>
                <p className="text-zinc-500 text-xs mt-1">Successful Exits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section aria-label="Key performance metrics" className="border-y border-zinc-800/60 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-zinc-800">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2 lg:px-8">
                <dt className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                  {stat.value}
                </dt>
                <dd className="text-sm text-zinc-500 font-medium tracking-wide uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section id="expertise" className="py-24 lg:py-32" aria-labelledby="expertise-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-medium text-emerald-400 tracking-widest uppercase mb-4">
              Core Expertise
            </p>
            <h2
              id="expertise-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight leading-tight"
            >
              Financial strategy that moves the needleâ€”not just the spreadsheet.
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Each engagement is scoped for measurable impact. From pre-Series A infrastructure to
              pre-exit diligence, the work is designed to make your company fundable, scalable, and
              acquirable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 hover:border-emerald-500/40 hover:bg-zinc-900/80 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 group-hover:from-emerald-500/5 to-transparent transition-all duration-500 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/40 transition-all duration-300">
                    <service.icon size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="text-zinc-50 font-semibold text-lg mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="flex flex-col gap-2">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-zinc-500">
                        <CheckCircle size={12} className="text-emerald-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS / TESTIMONIALS */}
      <section
        id="insights"
        className="py-24 lg:py-32 bg-zinc-900/30 border-y border-zinc-800/60"
        aria-labelledby="insights-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-medium text-emerald-400 tracking-widest uppercase mb-4">
                Client Outcomes
              </p>
              <h2
                id="insights-heading"
                className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight leading-tight"
              >
                Results that compound.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-zinc-700 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-zinc-700 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${testimonialIdx * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <blockquote className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 lg:p-10 max-w-4xl">
                    <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={14} className="fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>
                    <p className="text-zinc-200 text-lg lg:text-xl leading-relaxed font-light italic mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-6 border-t border-zinc-800">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-zinc-100 font-semibold text-sm">{t.name}</p>
                        <p className="text-zinc-500 text-sm mt-0.5">{t.title}</p>
                      </div>
                      <div className="sm:ml-auto px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                        <p className="text-emerald-400 text-xs font-medium">{t.revenue}</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === testimonialIdx}
                onClick={() => setTestimonialIdx(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === testimonialIdx ? 'w-8 bg-emerald-400' : 'w-4 bg-zinc-700'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR BOOKING */}
      <section id="contact" className="py-24 lg:py-32" aria-labelledby="booking-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-medium text-emerald-400 tracking-widest uppercase mb-4">
              Schedule a Call
            </p>
            <h2
              id="booking-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight leading-tight mb-6"
            >
              Optimize Your Capital Structure
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10">
              A focused 30-minute diagnostic call is the fastest way to identify the highest-leverage
              financial opportunities in your business. No pitch. No fluff. Pure insight.
            </p>

            <ul className="flex flex-col gap-6">
              {[
                {
                  title: 'Current Financial Infrastructure Assessment',
                  desc: 'Rapid evaluation of your reporting, forecasting, and cash management systems to expose gaps investors will find before you do.',
                },
                {
                  title: 'Funding Readiness Analysis',
                  desc: 'Identify the delta between your current financial state and institutional investor-grade readiness across models, metrics, and narrative.',
                },
                {
                  title: 'Priority Action Roadmap',
                  desc: 'Leave with a clear set of high-impact financial actions specific to your stage, sector, and strategic objectives.',
                },
                {
                  title: 'No Sales Pressureâ€”Guaranteed',
                  desc: 'This is a diagnostic session, not a pitch. You receive tangible value regardless of whether we engage further.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={11} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-zinc-200 text-sm font-semibold">{item.title}</p>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right â€“ Calendly-style widget */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 lg:p-8 sticky top-24">
            {booked ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle size={26} className="text-emerald-400" />
                </div>
                <h3 className="text-zinc-50 font-semibold text-xl">Session Confirmed</h3>
                <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                  Your 30-minute diagnostic call has been scheduled for May {selectedDay}, 2026
                  at {selectedTime} EST. A calendar invite will be sent to your inbox shortly.
                </p>
                <button
                  onClick={() => {
                    setBooked(false);
                    setSelectedDay(null);
                    setSelectedTime(null);
                  }}
                  className="mt-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4"
                >
                  Schedule another session
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <h3 className="text-zinc-50 font-semibold">30-Minute Diagnostic Call</h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <Clock size={11} />
                        30 min
                      </span>
                      <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <Calendar size={11} />
                        May 2026
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    Complimentary
                  </span>
                </div>

                {/* Day picker */}
                <div className="mb-7">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-3">
                    Select a Date
                  </p>
                  <div className="grid grid-cols-6 gap-2">
                    {CALENDAR_DAYS.map((d) => (
                      <button
                        key={d.date}
                        disabled={!d.available}
                        onClick={() => {
                          setSelectedDay(d.date);
                          setSelectedTime(null);
                        }}
                        className={`flex flex-col items-center gap-1 py-3 rounded-lg text-xs font-medium transition-all duration-200 ${
                          !d.available
                            ? 'text-zinc-700 cursor-not-allowed'
                            : selectedDay === d.date
                            ? 'bg-emerald-500 text-zinc-950'
                            : 'border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <span className="text-[10px] uppercase tracking-wider">{d.day}</span>
                        <span className="text-sm font-bold">{d.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slots */}
                {selectedDay && (
                  <div className="mb-7">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-3">
                      Select a Time (EST)
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                            selectedTime === slot
                              ? 'bg-emerald-500 text-zinc-950 border-emerald-500'
                              : 'border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTime && (
                  <div className="mb-5 px-4 py-3.5 rounded-lg bg-emerald-500/8 border border-emerald-500/20">
                    <p className="text-emerald-400 text-sm font-semibold">
                      May {selectedDay}, 2026 &middot; {selectedTime} EST
                    </p>
                    <p className="text-zinc-500 text-xs mt-0.5">
                      30-Minute Diagnostic Call with Alex Mercer
                    </p>
                  </div>
                )}

                <button
                  onClick={handleBook}
                  disabled={!selectedDay || !selectedTime}
                  className={`w-full py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    selectedDay && selectedTime
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-lg shadow-emerald-500/20 cursor-pointer'
                      : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                  }`}
                >
                  {selectedDay && selectedTime ? 'Confirm Booking' : 'Select a Date & Time Above'}
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-md bg-emerald-500 flex items-center justify-center text-zinc-950 font-bold text-xs">
              AM
            </span>
            <span className="text-zinc-500 text-sm">
              Alex Mercer &middot; Fractional CFO &amp; Corporate Advisor
            </span>
          </div>

          <p className="text-zinc-600 text-sm order-last md:order-none">
            &copy; {new Date().getFullYear()} Alex Mercer Advisory. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
              Terms of Use
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Alex Mercer on LinkedIn"
              className="w-8 h-8 rounded-md border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-zinc-500 hover:text-zinc-200 transition-all"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
