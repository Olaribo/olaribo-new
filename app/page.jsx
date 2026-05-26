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

const logoUrl = "/images/Olaribo Business Solutions-03.png";

const formEndpoint = "https://formspree.io/f/YOUR_FORM_ID";

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

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid rgba(131,211,246,0.25)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  fontFamily: "Rajdhani, sans-serif",
  fontSize: 17,
  boxSizing: "border-box",
};

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#002A35", color: "white", fontFamily: "Rajdhani, sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(0,42,53,0.94)", borderBottom: "1px solid rgba(131,211,246,0.18)", padding: "18px 24px", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <a href="#home">
            <img src={logoUrl} alt="Olaribo Business Solutions logo" style={{ height: 64, width: "auto" }} />
          </a>

          <nav style={{ display: "flex", gap: 22, fontSize: 16, fontWeight: 600 }}>
            <a href="#services" style={{ color: "#d8f4ff", textDecoration: "none" }}>Services</a>
            <a href="#about" style={{ color: "#d8f4ff", textDecoration: "none" }}>Why Olaribo</a>
            <a href="#process" style={{ color: "#d8f4ff", textDecoration: "none" }}>Process</a>
            <a href="#contact" style={{ color: "#d8f4ff", textDecoration: "none" }}>Contact</a>
          </nav>

          <a href="#contact" style={{ background: "#83D3F6", color: "#002A35", padding: "12px 20px", borderRadius: 999, textDecoration: "none", fontWeight: 700 }}>
            Get IT Support
          </a>
        </div>
      </header>

      <section id="home" style={{ padding: "95px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <p style={{ display: "inline-block", border: "1px solid rgba(131,211,246,0.35)", background: "rgba(131,211,246,0.10)", color: "#83D3F6", padding: "10px 18px", borderRadius: 999, fontWeight: 700 }}>
              Managed IT Services for modern businesses
            </p>

            <h1 style={{ fontSize: "clamp(46px, 6vw, 76px)", lineHeight: 0.98, margin: "24px 0", letterSpacing: "-1px" }}>
              Reliable IT support that keeps your business running.
            </h1>

            <p style={{ color: "#d8f4ff", fontSize: 22, lineHeight: 1.55, maxWidth: 720 }}>
              Olaribo Business Solution helps startups and small businesses manage technology, secure systems, support users, procure equipment, and scale with confidence.
            </p>

            <div style={{ marginTop: 34, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", background: "#83D3F6", color: "#002A35", padding: "16px 24px", borderRadius: 999, textDecoration: "none", fontWeight: 800 }}>
                Book a Free IT Review <ArrowRight size={20} style={{ marginLeft: 8 }} />
              </a>
              <a href="#services" style={{ border: "1px solid rgba(131,211,246,0.35)", color: "white", padding: "16px 24px", borderRadius: 999, textDecoration: "none", fontWeight: 700 }}>
                View Services
              </a>
            </div>
          </div>

          <div style={{ background: "linear-gradient(145deg, rgba(4,83,162,0.45), rgba(131,211,246,0.08))", border: "1px solid rgba(131,211,246,0.22)", borderRadius: 36, padding: 34, boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}>
            <img src={logoUrl} alt="Olaribo Business Solutions logo large" style={{ width: 460, maxWidth: "100%", margin: "0 auto", display: "block" }} />

            <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 16 }}>
              <div style={{ background: "rgba(0,42,53,0.7)", padding: 22, borderRadius: 22 }}>
                <p style={{ color: "#83D3F6", fontSize: 38, fontWeight: 800, margin: 0 }}>24/7</p>
                <p style={{ color: "#d8f4ff", margin: "6px 0 0" }}>Monitoring options</p>
              </div>
              <div style={{ background: "rgba(0,42,53,0.7)", padding: 22, borderRadius: 22 }}>
                <p style={{ color: "#83D3F6", fontSize: 38, fontWeight: 800, margin: 0 }}>Fast</p>
                <p style={{ color: "#d8f4ff", margin: "6px 0 0" }}>Remote support response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ maxWidth: 1200, margin: "0 auto", padding: "85px 24px" }}>
        <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>What we do</p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)", margin: "12px 0" }}>Complete IT support for your business.</h2>
        <p style={{ color: "#d8f4ff", fontSize: 20, maxWidth: 800 }}>
          From everyday troubleshooting to cybersecurity, cloud systems, software and hardware procurement, and office supply solutions.
        </p>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 28 }}>
                <div style={{ width: 54, height: 54, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 18, background: "rgba(131,211,246,0.14)", color: "#83D3F6", marginBottom: 20 }}>
                  <Icon size={27} />
                </div>
                <h3 style={{ fontSize: 24, marginBottom: 12 }}>{service.title}</h3>
                <p style={{ color: "#d8f4ff", lineHeight: 1.7 }}>{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" style={{ background: "rgba(4,83,162,0.24)", padding: "85px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 50 }}>
          <div>
            <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>Why choose us</p>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>IT that feels simple, secure, and dependable.</h2>
            <p style={{ color: "#d8f4ff", lineHeight: 1.8, fontSize: 19 }}>We work as your outsourced IT department, helping you avoid downtime, improve security, and support your staff.</p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {benefits.map((benefit) => (
              <div key={benefit} style={{ display: "flex", gap: 14, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 22, padding: 18 }}>
                <CheckCircle2 color="#83D3F6" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={{ maxWidth: 1200, margin: "0 auto", padding: "85px 24px", textAlign: "center" }}>
        <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>How it works</p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>A clear path to better IT.</h2>

        <div style={{ marginTop: 42, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, textAlign: "left" }}>
          {steps.map((step, index) => (
            <div key={step} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: 999, background: "#0453A2", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{index + 1}</div>
              <p style={{ fontSize: 21, fontWeight: 700 }}>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 90px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30, background: "linear-gradient(145deg, rgba(4,83,162,0.45), rgba(0,42,53,1))", border: "1px solid rgba(131,211,246,0.22)", borderRadius: 36, padding: 40 }}>
          <div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>Ready to make IT easier?</h2>
            <p style={{ color: "#d8f4ff", lineHeight: 1.8, fontSize: 19 }}>Contact Olaribo Business Solution for managed IT support, security advice, procurement assistance, or a free review.</p>

            <div style={{ marginTop: 28, display: "grid", gap: 14, color: "#d8f4ff" }}>
              <p><Mail size={18} color="#83D3F6" /> info@olaribo.com</p>
              <p><Phone size={18} color="#83D3F6" /> +44 7847 777499</p>
              <p><MapPin size={18} color="#83D3F6" /> United Kingdom</p>
            </div>
          </div>

          <form action={formEndpoint} method="POST" style={{ display: "grid", gap: 14 }}>
            <input name="name" required placeholder="Your name" style={inputStyle} />
            <input name="email" required type="email" placeholder="Email address" style={inputStyle} />
            <input name="company" placeholder="Company name" style={inputStyle} />
            <select name="service" required style={inputStyle} defaultValue="">
              <option value="" disabled>What do you need help with?</option>
              <option>Managed IT Support</option>
              <option>Cybersecurity</option>
              <option>Cloud Solutions</option>
              <option>IT Procurement</option>
              <option>Office Supplies & Equipment</option>
              <option>Other</option>
            </select>
            <textarea name="message" required placeholder="How can we help?" rows="5" style={inputStyle} />
            <input type="hidden" name="_subject" value="New website enquiry from Olaribo website" />
            <button type="submit" style={{ background: "#83D3F6", color: "#002A35", padding: "16px 24px", borderRadius: 999, border: 0, fontWeight: 800, fontFamily: "Rajdhani, sans-serif", fontSize: 18, cursor: "pointer" }}>
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(131,211,246,0.18)", padding: 30, textAlign: "center", color: "#d8f4ff" }}>
        © {new Date().getFullYear()} Olaribo Business Solution. IT Managed Services.
      </footer>
    </main>
  );
}
