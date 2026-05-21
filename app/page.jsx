"use client";

import {
  ShieldCheck,
  Server,
  Cloud,
  Headphones,
  Lock,
  Network,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const logoUrl = "/images/olaribo.png";

const services = [
  { icon: Cloud, title: "IT Procurement", text: "Procurement and supply of business software, laptops, desktops, networking equipment, printers, and office technology solutions." },
  { icon: Server, title: "Office Supplies & Equipment", text: "Reliable sourcing of office accessories, IT peripherals, productivity tools, and workplace essentials for growing businesses." },
  { icon: Server, title: "Managed IT Support", text: "Reliable day-to-day IT management, monitoring, maintenance, and user support for growing businesses." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Protect devices, networks, email, and business data with practical security controls and monitoring." },
  { icon: Cloud, title: "Cloud Solutions", text: "Microsoft 365, cloud backup, secure collaboration, migration support, and productivity setup." },
  { icon: Network, title: "Network Management", text: "Business Wi-Fi, routers, firewalls, structured troubleshooting, and resilient connectivity." },
  { icon: Lock, title: "Backup & Recovery", text: "Keep business data protected with backup planning, recovery testing, and continuity support." },
  { icon: Headphones, title: "Helpdesk Services", text: "Friendly remote and onsite support to resolve issues quickly and reduce downtime." },
];

const benefits = [
  "Proactive monitoring to reduce business downtime",
  "Clear monthly support plans with no IT jargon",
  "Security-first approach for small and growing teams",
  "Remote and onsite support options",
  "Business procurement for hardware, software, and office supplies",
];

const steps = [
  "Assess your current IT setup",
  "Recommend the right support plan",
  "Secure, monitor, and maintain systems",
  "Support your team as your business grows",
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "white", fontFamily: "Arial, sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(2,6,23,0.95)", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "18px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <a href="#home">
            <img src={logoUrl} alt="Olaribo Business Solution logo" style={{ height: 54, width: "auto", borderRadius: 10 }} />
          </a>

          <nav style={{ display: "flex", gap: 22, fontSize: 14 }}>
            <a href="#services" style={{ color: "#cbd5e1", textDecoration: "none" }}>Services</a>
            <a href="#about" style={{ color: "#cbd5e1", textDecoration: "none" }}>Why Olaribo</a>
            <a href="#process" style={{ color: "#cbd5e1", textDecoration: "none" }}>Process</a>
            <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none" }}>Contact</a>
          </nav>

          <a href="#contact" style={{ background: "#f97316", color: "white", padding: "12px 18px", borderRadius: 16, textDecoration: "none", fontWeight: 700 }}>
            Get IT Support
          </a>
        </div>
      </header>

      <section id="home" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 50, alignItems: "center" }}>
          <div>
            <p style={{ display: "inline-block", border: "1px solid rgba(103,232,249,0.3)", background: "rgba(103,232,249,0.08)", color: "#a5f3fc", padding: "10px 16px", borderRadius: 999 }}>
              Managed IT Services for modern businesses
            </p>

            <h1 style={{ fontSize: "clamp(42px, 6vw, 68px)", lineHeight: 1.05, margin: "24px 0" }}>
              Reliable IT support that keeps your business running.
            </h1>

            <p style={{ color: "#cbd5e1", fontSize: 20, lineHeight: 1.7 }}>
              Olaribo Business Solution helps startups and small businesses manage technology, secure systems, support users, procure equipment, and scale with confidence.
            </p>

            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", background: "#06b6d4", color: "#020617", padding: "16px 24px", borderRadius: 16, textDecoration: "none", fontWeight: 800 }}>
                Book a Free IT Review <ArrowRight size={20} style={{ marginLeft: 8 }} />
              </a>
              <a href="#services" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "16px 24px", borderRadius: 16, textDecoration: "none" }}>
                View Services
              </a>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 32, padding: 32 }}>
            <img src={logoUrl} alt="Olaribo Business Solution logo large" style={{ width: 260, maxWidth: "100%", margin: "0 auto", display: "block", borderRadius: 24 }} />

            <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 16 }}>
              <div style={{ background: "rgba(2,6,23,0.75)", padding: 20, borderRadius: 20 }}>
                <p style={{ color: "#67e8f9", fontSize: 34, fontWeight: 800, margin: 0 }}>24/7</p>
                <p style={{ color: "#cbd5e1", margin: "6px 0 0" }}>Monitoring options</p>
              </div>
              <div style={{ background: "rgba(2,6,23,0.75)", padding: 20, borderRadius: 20 }}>
                <p style={{ color: "#fb923c", fontSize: 34, fontWeight: 800, margin: 0 }}>Fast</p>
                <p style={{ color: "#cbd5e1", margin: "6px 0 0" }}>Remote support response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ color: "#fb923c", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>What we do</p>
        <h2 style={{ fontSize: "clamp(34px, 5vw, 54px)", margin: "12px 0" }}>Complete IT support for your business.</h2>
        <p style={{ color: "#cbd5e1", fontSize: 18, maxWidth: 760 }}>
          From everyday troubleshooting to cybersecurity, cloud systems, software and hardware procurement, and office supply solutions.
        </p>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 28 }}>
                <div style={{ width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 16, background: "rgba(34,211,238,0.12)", color: "#67e8f9", marginBottom: 20 }}>
                  <Icon size={26} />
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 12 }}>{service.title}</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" style={{ background: "rgba(15,23,42,0.7)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 50 }}>
          <div>
            <p style={{ color: "#67e8f9", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>Why choose us</p>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 54px)" }}>IT that feels simple, secure, and dependable.</h2>
            <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>We work as your outsourced IT department, helping you avoid downtime, improve security, and support your staff.</p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {benefits.map((benefit) => (
              <div key={benefit} style={{ display: "flex", gap: 14, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 18 }}>
                <CheckCircle2 color="#fb923c" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <p style={{ color: "#fb923c", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>How it works</p>
        <h2 style={{ fontSize: "clamp(34px, 5vw, 54px)" }}>A clear path to better IT.</h2>

        <div style={{ marginTop: 42, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, textAlign: "left" }}>
          {steps.map((step, index) => (
            <div key={step} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 24 }}>
              <div style={{ width: 46, height: 46, borderRadius: 999, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{index + 1}</div>
              <p style={{ fontSize: 19, fontWeight: 700 }}>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ background: "#020617", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 32, padding: 40 }}>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 54px)" }}>Ready to make IT easier?</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>Contact Olaribo Business Solution for managed IT support, security advice, procurement assistance, or a free review.</p>

          <div style={{ marginTop: 28, display: "grid", gap: 14, color: "#cbd5e1" }}>
            <p><Mail size={18} color="#67e8f9" /> info@olaribo.com</p>
            <p><Phone size={18} color="#67e8f9" /> +44 0000 000000</p>
            <p><MapPin size={18} color="#67e8f9" /> United Kingdom</p>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: 30, textAlign: "center", color: "#94a3b8" }}>
        © {new Date().getFullYear()} Olaribo Business Solution. IT Managed Services.
      </footer>
    </main>
  );
}
