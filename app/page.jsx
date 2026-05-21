"use client";

import {
  ShieldCheck,
  Server,
  Cloud,
  Headphones,
  Lock,
  Network,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const logoUrl = "/images/olaribo.png";

const services = [
  { icon: Cloud, title: "IT Procurement", text: "Supply of business software, laptops, desktops, networking equipment, printers, and office technology." },
  { icon: Server, title: "Office Supplies", text: "Sourcing office accessories, IT peripherals, productivity tools, and workplace essentials." },
  { icon: Headphones, title: "Managed IT Support", text: "Day-to-day IT management, monitoring, maintenance, and user support for growing businesses." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Protection for devices, networks, email, and business data using practical security controls." },
  { icon: Cloud, title: "Cloud Solutions", text: "Microsoft 365, cloud backup, secure collaboration, migration support, and productivity setup." },
  { icon: Network, title: "Network Management", text: "Business Wi-Fi, routers, firewalls, troubleshooting, and resilient connectivity." },
  { icon: Lock, title: "Backup & Recovery", text: "Backup planning, recovery testing, and continuity support to keep business data protected." },
  { icon: Server, title: "Device Onboarding", text: "User setup, device configuration, software installation, and secure offboarding support." },
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#000" }}>
        <img src={logoUrl} alt="Olaribo Logo" style={{ height: "55px", width: "auto", borderRadius: "10px" }} />
        <nav style={{ display: "flex", gap: "25px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </nav>
      </header>

      <section style={{ padding: "80px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
        <div>
          <p style={{ display: "inline-block", background: "#111827", padding: "10px 18px", borderRadius: "999px", color: "#22d3ee" }}>
            Managed IT Services
          </p>

          <h1 style={{ fontSize: "clamp(38px, 6vw, 60px)", lineHeight: "1.1" }}>
            Reliable IT support that keeps your business running.
          </h1>

          <p style={{ color: "#cbd5e1", fontSize: "20px", lineHeight: "1.7", maxWidth: "700px" }}>
            Olaribo Business Solution provides managed IT services, cybersecurity, cloud solutions, procurement, and device support for modern businesses.
          </p>
        </div>

        <div style={{ background: "#111", borderRadius: "30px", padding: "40px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <img src={logoUrl} alt="Olaribo Business Solution" style={{ width: "220px", maxWidth: "100%", margin: "0 auto", display: "block", borderRadius: "20px" }} />
        </div>
      </section>

      <section id="services" style={{ padding: "80px 40px" }}>
        <h2 style={{ fontSize: "48px" }}>Our Services</h2>
        <p style={{ color: "#cbd5e1", marginBottom: "50px", fontSize: "18px" }}>
          Complete managed IT and procurement support for growing businesses.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px" }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} style={{ background: "#111", borderRadius: "24px", padding: "30px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Icon size={28} color="#22d3ee" />
                <h3 style={{ fontSize: "24px" }}>{service.title}</h3>
                <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" style={{ padding: "80px 40px" }}>
        <div style={{ background: "#111", borderRadius: "30px", padding: "50px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h2 style={{ fontSize: "48px" }}>Ready to make IT easier?</h2>
          <p style={{ color: "#cbd5e1", fontSize: "18px", lineHeight: "1.8" }}>
            Contact Olaribo Business Solution for managed IT support, procurement assistance, cloud solutions, and cybersecurity services.
          </p>

          <p><Mail color="#22d3ee" /> info@olaribo.com</p>
          <p><Phone color="#22d3ee" /> +44 0000 000000</p>
          <p><MapPin color="#22d3ee" /> United Kingdom</p>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "30px", textAlign: "center", color: "#94a3b8" }}>
        © {new Date().getFullYear()} Olaribo Business Solution. All rights reserved.
      </footer>
    </main>
  );
}
