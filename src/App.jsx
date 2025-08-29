import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2, BrainCircuit, Smartphone, ArrowRight, Sparkles, CheckCircle,
  Mail, Phone, MapPin, Linkedin, Twitter
} from "lucide-react";

// ⛔️ Removed the import; file lives in public/img so we use an absolute path
// import logoUrl from "./img/KtechAI.png";

export default function App() {
  // smooth scroll for in-page links
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-br from-[var(--ktech-50)] via-white to-[var(--ktech-100)]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* BRAND: image only (served from public/img/KtechAI.png) */}
          <a href="#home" className="shrink-0" aria-label="KtechAI home">
            <img
              src="/img/KtechAI.png?v=1"   // absolute path from public/ (+cache-bust)
              alt="KtechAI"
              width={140}
              height={40}
              className="h-9 w-auto block select-none pointer-events-none"
              loading="eager"
              decoding="async"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              ["#about","About"],["#services","Services"],["#work","Work"],
              ["#insights","Insights"],["#contact","Get in touch"]
            ].map(([href,label],i)=>(
              <a
                key={i}
                href={href}
                className={label==="Get in touch"
                  ? "px-4 py-2 rounded-xl bg-[var(--ktech-700)] text-white font-semibold shadow-sm hover:shadow-lg"
                  : "hover:text-[var(--ktech-700)]"}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        {/* soft gradient beams */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--ktech-200)]/40 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-[var(--ktech-400)]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <motion.div
            initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:.5}}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-slate-200 px-3 py-1 text-xs shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[var(--ktech-700)]" />
              Building with Web • AI • Apps
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Ship polished <span className="text-[var(--ktech-700)]">websites</span>, smart{" "}
              <span className="text-[var(--ktech-700)]">AI solutions</span>, and delightful{" "}
              <span className="text-[var(--ktech-700)]">apps</span>—fast.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              KtechAI helps startups and enterprises design, build, and launch digital products with
              modern design systems and production-grade engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--ktech-700)] text-white font-semibold shadow-lg hover:shadow-xl">
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-[var(--ktech-50)]">
                See our work
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-90">
              {["Next.js","Python","Swift","AWS"].map(t=>(
                <div key={t} className="text-sm rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-center">{t}</div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-[var(--ktech-100)] via-[var(--ktech-200)] to-[var(--ktech-700)]"/>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About KtechAI</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We’re a multidisciplinary team blending UX strategy, front-end craft, and AI engineering.
              From research and design sprints to development and cloud deployment, we partner end-to-end
              to deliver measurable outcomes.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Design systems that scale across web & mobile",
                "Production-ready AI features (RAG, chatbots, automations)",
                "Battle-tested architectures (Next.js, Django/FastAPI, Node)",
                "App store deployments and CI/CD pipelines",
              ].map(li=>(
                <li key={li} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-[var(--ktech-700)]"/>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5, delay:.05}} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[var(--ktech-100)]/60 via-[var(--ktech-200)]/30 to-transparent blur-2xl"/>
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[var(--ktech-100)] via-[var(--ktech-200)] to-[var(--ktech-700)]">
              <div className="rounded-2xl bg-white p-8">
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { icon: <Code2 className="h-6 w-6"/>, title:"Web Development", copy:"Responsive sites, dashboards, e-commerce."},
                    { icon: <BrainCircuit className="h-6 w-6"/>, title:"AI Solutions", copy:"RAG, chatbots, automations, analytics."},
                    { icon: <Smartphone className="h-6 w-6"/>, title:"App Development", copy:"iOS, Android, cross-platform."},
                  ].map(({icon,title,copy})=>(
                    <div key={title} className="col-span-3 sm:col-span-1 rounded-xl border border-slate-200 p-5 hover:shadow-md transition bg-white">
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--ktech-700)]">{icon}</span>
                        <h3 className="font-semibold">{title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-slate-600">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 bg-[var(--ktech-50)]/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--ktech-100)]/60 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">A focused service lineup inspired by the best of your references—blue/white, clean, confident.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {serviceCards.map((s)=> <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected work</h2>
            <a href="#contact" className="text-[var(--ktech-700)] inline-flex items-center gap-2">Start a brief <ArrowRight className="h-4 w-4"/></a>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {projects.map((p)=> <CaseStudy key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-20 bg-[var(--ktech-50)]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Insights</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">Short reads on UX, engineering, and applied AI for founders and product teams.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {posts.map((p)=> <ArticleCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something great</h2>
              <p className="mt-3 text-slate-600 max-w-xl">Tell us about your goals. We’ll follow up with a short discovery call and a tailored proposal.</p>
              <div className="mt-8 space-y-3 text-slate-700">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-[var(--ktech-700)]"/> hello@ktechai.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-[var(--ktech-700)]"/> (555) 123-4567</p>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[var(--ktech-700)]"/> Chicago • Remote-first</p>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200"><Linkedin className="h-4 w-4"/>LinkedIn</a>
                <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200"><Twitter className="h-4 w-4"/>Twitter</a>
              </div>
            </div>
            <form className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Name" placeholder="Jane Doe" />
                <Input label="Company" placeholder="Acme Inc." />
                <Input label="Email" type="email" placeholder="jane@acme.com" className="sm:col-span-2" />
                <Input label="Budget" placeholder="$10k–$50k" />
                <Input label="Timeline" placeholder="4–8 weeks" />
                <Textarea label="Project details" placeholder="Tell us about your product, users, and goals…" className="sm:col-span-2" />
              </div>
              <button type="button" className="mt-6 w-full h-11 rounded-xl bg-[var(--ktech-700)] text-white font-semibold hover:shadow-lg">
                Send request
              </button>
              <p className="mt-2 text-xs text-slate-500">This demo form does not submit. Hook it up to your backend or a form service.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} KtechAI. All rights reserved.</p>
          <nav className="text-sm flex gap-6">
            {["#about","#services","#work","#insights","#contact"].map(href=>(
              <a key={href} href={href} className="hover:text-[var(--ktech-700)]">{href.slice(1)}</a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

/* ---- small presentational components ---- */
function Input({ label, className = "", ...props }) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input {...props}
        className="h-11 rounded-xl border border-slate-200 px-3 focus:outline-none focus:ring-4 focus:ring-[var(--ktech-200)]/50" />
    </label>
  );
}
function Textarea({ label, className = "", ...props }) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <textarea {...props} rows={6}
        className="rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-[var(--ktech-200)]/50" />
    </label>
  );
}
function ServiceCard({ icon, title, copy, bullets }) {
  return (
    <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.35}}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl grid place-items-center bg-[var(--ktech-100)] text-[var(--ktech-700)]">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600">{copy}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map(b => (
          <li key={b} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-4 w-4 text-[var(--ktech-700)]"/> <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
function CaseStudy({ title, tag, blurb }) {
  return (
    <motion.article initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.35}}
      className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
      <div className="h-40 bg-gradient-to-br from-[var(--ktech-100)] via-[var(--ktech-200)] to-[var(--ktech-700)]" />
      <div className="p-6">
        <span className="inline-block text-xs font-medium px-2 py-1 rounded-lg bg-[var(--ktech-50)] border border-slate-200 text-slate-600">{tag}</span>
        <h3 className="mt-3 font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{blurb}</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[var(--ktech-700)]">Request case study <ArrowRight className="h-4 w-4"/></a>
      </div>
    </motion.article>
  );
}
function ArticleCard({ title, minutes, excerpt }) {
  return (
    <motion.article initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.35}}
      className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{excerpt}</p>
      <div className="mt-3 text-xs text-slate-500">{minutes} min read</div>
      <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[var(--ktech-700)]">Talk to us <ArrowRight className="h-4 w-4"/></a>
    </motion.article>
  );
}

/* data */
const serviceCards = [
  { icon:<Code2 className="h-5 w-5"/>, title:"Web Development",
    copy:"High-performance sites and dashboards with accessibility and SEO baked in.",
    bullets:["Next.js apps and CMS integrations","E-commerce & headless storefronts","Design systems & component libraries"] },
  { icon:<BrainCircuit className="h-5 w-5"/>, title:"AI Solutions",
    copy:"Practical, secure AI built on your data and workflows.",
    bullets:["RAG search & chat for docs/data","Process automations & copilots","Analytics & summarization pipelines"] },
  { icon:<Smartphone className="h-5 w-5"/>, title:"App Development",
    copy:"Native and cross-platform apps with CI/CD and analytics.",
    bullets:["iOS/Android (Swift/Kotlin)","React Native/Flutter","App store launches & telemetry"] },
];
const projects = [
  { title:"AI knowledge base for a support team", tag:"AI • RAG", blurb:"Unified search over tickets, docs, and wikis with role-based access and analytics." },
  { title:"B2B dashboard redesign", tag:"Web • UX", blurb:"Design system + Next.js migration increased activation by 18%." },
  { title:"Consumer wellness app", tag:"Mobile • React Native", blurb:"Cross-platform app with offline mode and push notifications." },
];
const posts = [
  { title:"When to pick Next.js vs. pure React", minutes:4, excerpt:"A quick decision tree for marketing sites, apps, and dashboards." },
  { title:"RAG without tears: a pragmatic checklist", minutes:6, excerpt:"From data cleaning to evals—how to avoid common pitfalls." },
  { title:"Swift vs. React Native in 2025", minutes:5, excerpt:"Trade-offs for team skillsets, velocity, and long-term maintenance." },
];
