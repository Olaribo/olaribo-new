"use client";

import {
  Sun,
  BatteryCharging,
  Zap,
  Wrench,
  GraduationCap,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Users,
} from "lucide-react";

const logoUrl = "/images/Olaribo Business Solutions-03.png";
const formEndpoint = "https://formspree.io/f/YOUR_FORM_ID";

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

const solarServices = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    text: "Residential and commercial solar panel installation designed around your energy needs.",
  },
  {
    icon: Zap,
    title: "Inverter Installation",
    text: "Supply and installation of hybrid, grid-tied, and off-grid inverter systems.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage",
    text: "Battery systems that support backup power, energy independence, and reduced reliance on the grid.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    text: "Solar system health checks, fault diagnosis, repairs, replacement, and ongoing support.",
  },
];

const equipment = [
  "Solar panels",
  "Hybrid and off-grid inverters",
  "Battery storage systems",
  "Charge controllers",
  "Mounting systems",
  "Cabling and accessories",
];

const process = [
  "Consultation and energy assessment",
  "System design and recommendation",
  "Equipment sourcing and procurement",
  "Engineer assignment and installation",
  "Testing, handover, and aftercare support",
];

const trainingModel = [
  "Olaribo sponsors approved solar installation training",
  "Trainees receive practical mentoring and field exposure",
  "Qualified installers join the approved Olaribo installer network",
  "Installers receive project assignments based on skill level, location, and availability",
];

const repayment = [
  "Training cost is recovered from future installation earnings",
  "Typical model: small percentage deduction from completed project payments",
  "Alternative model: installer commits to a fixed period within the Olaribo installer network",
  "Clear agreement provided before training begins",
];

const customerTestimonials = [
  {
    name: "Small Business Client",
    text: "Olaribo helped us understand the solar setup we needed and handled the equipment sourcing and installation process professionally.",
  },
  {
    name: "Homeowner Client",
    text: "The team made the process simple, explained the inverter and battery options clearly, and delivered a neat installation.",
  },
  {
    name: "Commercial Client",
    text: "We wanted a reliable renewable energy solution and Olaribo provided a structured approach from consultation to installation.",
  },
];

const engineerTestimonials = [
  {
    name: "Trainee Installer",
    text: "The training support gave me a route into solar installation without needing to pay everything upfront.",
  },
  {
    name: "Approved Engineer",
    text: "The assignment model helps engineers receive projects based on experience, location, and availability.",
  },
  {
    name: "Field Technician",
    text: "Olaribo’s model supports both learning and earning while building real installation experience.",
  },
];

export default function SolarPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#002A35", color: "white", fontFamily: "Rajdhani, sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(0,42,53,0.94)", borderBottom: "1px solid rgba(131,211,246,0.18)", padding: "18px 24px", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <a href="/">
            <img src={logoUrl} alt="Olaribo Business Solutions logo" style={{ height: 64, width: "auto" }} />
          </a>

          <nav style={{ display: "flex", gap: 22, fontSize: 16, fontWeight: 600 }}>
            <a href="/" style={{ color: "#d8f4ff", textDecoration: "none" }}>IT Services</a>
            <a href="#solar-services" style={{ color: "#d8f4ff", textDecoration: "none" }}>Solar Services</a>
            <a href="#installers" style={{ color: "#d8f4ff", textDecoration: "none" }}>Installers</a>
            <a href="#contact" style={{ color: "#d8f4ff", textDecoration: "none" }}>Apply / Enquire</a>
          </nav>

          <a href="#contact" style={{ background: "#83D3F6", color: "#002A35", padding: "12px 20px", borderRadius: 999, textDecoration: "none", fontWeight: 700 }}>
            Get Solar Quote
          </a>
        </div>
      </header>

      <section style={{ padding: "95px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>
          <div>
            <p style={{ display: "inline-block", border: "1px solid rgba(131,211,246,0.35)", background: "rgba(131,211,246,0.10)", color: "#83D3F6", padding: "10px 18px", borderRadius: 999, fontWeight: 700 }}>
              Solar Energy Solutions
            </p>

            <h1 style={{ fontSize: "clamp(46px, 6vw, 76px)", lineHeight: 0.98, margin: "24px 0", letterSpacing: "-1px" }}>
              Simple solar setup for homes and businesses.
            </h1>

            <p style={{ color: "#d8f4ff", fontSize: 22, lineHeight: 1.55, maxWidth: 720 }}>
              Olaribo Business Solutions helps customers source solar equipment, design simple solar systems, and assign engineers for professional installation.
            </p>

            <div style={{ marginTop: 34, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", background: "#83D3F6", color: "#002A35", padding: "16px 24px", borderRadius: 999, textDecoration: "none", fontWeight: 800 }}>
                Request Solar Quote <ArrowRight size={20} style={{ marginLeft: 8 }} />
              </a>
              <a href="#installers" style={{ border: "1px solid rgba(131,211,246,0.35)", color: "white", padding: "16px 24px", borderRadius: 999, textDecoration: "none", fontWeight: 700 }}>
                Become an Installer
              </a>
            </div>
          </div>

          <div style={{ background: "linear-gradient(145deg, rgba(4,83,162,0.45), rgba(131,211,246,0.08))", border: "1px solid rgba(131,211,246,0.22)", borderRadius: 36, padding: 34, boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}>
            <Sun size={110} color="#83D3F6" />
            <h2 style={{ fontSize: 42, marginBottom: 10 }}>Panels. Inverters. Batteries.</h2>
            <p style={{ color: "#d8f4ff", fontSize: 19, lineHeight: 1.7 }}>
              From equipment sourcing to installation, we make solar adoption easier and more structured.
            </p>
          </div>
        </div>
      </section>

      <section id="solar-services" style={{ maxWidth: 1200, margin: "0 auto", padding: "85px 24px" }}>
        <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>What we install</p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)", margin: "12px 0" }}>Solar installation and equipment support.</h2>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {solarServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 28 }}>
                <Icon size={34} color="#83D3F6" />
                <h3 style={{ fontSize: 24 }}>{service.title}</h3>
                <p style={{ color: "#d8f4ff", lineHeight: 1.7 }}>{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ background: "rgba(4,83,162,0.24)", padding: "85px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 50 }}>
          <div>
            <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>Equipment sourcing</p>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>We help source the right solar equipment.</h2>
            <p style={{ color: "#d8f4ff", lineHeight: 1.8, fontSize: 19 }}>
              Customers can request equipment supply only or full supply-and-installation support.
            </p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {equipment.map((item) => (
              <div key={item} style={{ display: "flex", gap: 14, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 22, padding: 18 }}>
                <CheckCircle2 color="#83D3F6" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "85px 24px", textAlign: "center" }}>
        <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>How it works</p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>From enquiry to installation.</h2>

        <div style={{ marginTop: 42, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, textAlign: "left" }}>
          {process.map((step, index) => (
            <div key={step} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: 999, background: "#0453A2", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{index + 1}</div>
              <p style={{ fontSize: 21, fontWeight: 700 }}>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="installers" style={{ background: "rgba(4,83,162,0.24)", padding: "85px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>Solar installer programme</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>Train, qualify, and receive installation assignments.</h2>
          <p style={{ color: "#d8f4ff", lineHeight: 1.8, fontSize: 19, maxWidth: 850 }}>
            Olaribo supports selected candidates by funding solar installation training, mentoring them through practical exposure, and assigning projects once they are approved.
          </p>

          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 28 }}>
              <GraduationCap color="#83D3F6" size={36} />
              <h3 style={{ fontSize: 26 }}>Training Model</h3>
              {trainingModel.map((item) => (
                <p key={item} style={{ color: "#d8f4ff" }}>• {item}</p>
              ))}
            </div>

            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 28 }}>
              <Users color="#83D3F6" size={36} />
              <h3 style={{ fontSize: 26 }}>Payback Structure</h3>
              {repayment.map((item) => (
                <p key={item} style={{ color: "#d8f4ff" }}>• {item}</p>
              ))}
            </div>

            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 28 }}>
              <Wrench color="#83D3F6" size={36} />
              <h3 style={{ fontSize: 26 }}>Assignment Model</h3>
              <p style={{ color: "#d8f4ff" }}>Bronze: Residential projects and supervised installations.</p>
              <p style={{ color: "#d8f4ff" }}>Silver: Residential and small business installations.</p>
              <p style={{ color: "#d8f4ff" }}>Gold: Commercial projects and team leadership.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "85px 24px" }}>
        <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>Client testimonials</p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>What customers say.</h2>

        <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {customerTestimonials.map((testimonial) => (
            <div key={testimonial.name} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 28 }}>
              <Star color="#83D3F6" />
              <p style={{ color: "#d8f4ff", lineHeight: 1.7 }}>"{testimonial.text}"</p>
              <strong>{testimonial.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "rgba(4,83,162,0.24)", padding: "85px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ color: "#83D3F6", textTransform: "uppercase", letterSpacing: 3, fontWeight: 800 }}>Engineer testimonials</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>What solar engineers say.</h2>

          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {engineerTestimonials.map((testimonial) => (
              <div key={testimonial.name} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(131,211,246,0.18)", borderRadius: 26, padding: 28 }}>
                <Star color="#83D3F6" />
                <p style={{ color: "#d8f4ff", lineHeight: 1.7 }}>"{testimonial.text}"</p>
                <strong>{testimonial.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ maxWidth: 1200, margin: "0 auto", padding: "85px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30, background: "linear-gradient(145deg, rgba(4,83,162,0.45), rgba(0,42,53,1))", border: "1px solid rgba(131,211,246,0.22)", borderRadius: 36, padding: 40 }}>
          <div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)" }}>Request solar support.</h2>
            <p style={{ color: "#d8f4ff", lineHeight: 1.8, fontSize: 19 }}>
              Use the form to request a solar quote, equipment sourcing, installation support, or installer training.
            </p>

            <div style={{ marginTop: 28, display: "grid", gap: 14, color: "#d8f4ff" }}>
              <p><Mail size={18} color="#83D3F6" /> info@olaribo.com</p>
              <p><Phone size={18} color="#83D3F6" /> +44 7847 777499</p>
              <p><MapPin size={18} color="#83D3F6" /> GLOBAL</p>
            </div>
          </div>

          <form action={formEndpoint} method="POST" style={{ display: "grid", gap: 14 }}>
            <input name="name" required placeholder="Your name" style={inputStyle} />
            <input name="email" required type="email" placeholder="Email address" style={inputStyle} />
            <input name="phone" placeholder="Phone number" style={inputStyle} />
            <select name="request_type" required style={inputStyle} defaultValue="">
              <option value="" disabled>What do you need?</option>
              <option>Solar installation quote</option>
              <option>Solar equipment sourcing</option>
              <option>Inverter installation</option>
              <option>Battery storage</option>
              <option>Maintenance or repairs</option>
              <option>Apply as solar installer</option>
              <option>Solar installer training</option>
            </select>
            <textarea name="message" required placeholder="Tell us about your requirement" rows="5" style={inputStyle} />
            <input type="hidden" name="_subject" value="New solar enquiry from Olaribo website" />
            <button type="submit" style={{ background: "#83D3F6", color: "#002A35", padding: "16px 24px", borderRadius: 999, border: 0, fontWeight: 800, fontFamily: "Rajdhani, sans-serif", fontSize: 18, cursor: "pointer" }}>
              Send Solar Enquiry
            </button>
          </form>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(131,211,246,0.18)", padding: 30, textAlign: "center", color: "#d8f4ff" }}>
        © {new Date().getFullYear()} Olaribo Business Solution. Solar Energy Solutions.
      </footer>
    </main>
  );
}
