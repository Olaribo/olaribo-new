"use client";

import React from "react";
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
  {
    icon: Cloud,
    title: "IT Procurement",
    text: "Supply of business software, laptops, desktops, networking equipment, printers, and office technology.",
  },
  {
    icon: Server,
    title: "Office Supplies",
    text: "Sourcing office accessories, IT peripherals, productivity tools, and workplace essentials.",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    text: "Day-to-day IT management, monitoring, maintenance, and user support for growing businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Protection for devices, networks, email, and business data using practical security controls.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    text: "Microsoft 365, cloud backup, secure collaboration, migration support, and productivity setup.",
  },
  {
    icon: Network,
    title: "Network Management",
    text: "Business Wi-Fi, routers, firewalls, troubleshooting, and resilient connectivity.",
  },
  {
    icon: Lock,
    title: "Backup & Recovery",
    text: "Backup planning, recovery testing, and continuity support to keep business data protected.",
  },
  {
    icon: Server,
    title: "Device Onboarding",
    text: "User setup, device configuration, software installation, and secure offboarding support.",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "#000000",
          zIndex: 1000,
        }}
      >
        <img
          src={logoUrl}
          alt="Olaribo Logo"
          style={{
            height: "55px",
            width: "auto",
            borderRadius: "10px",
          }}
        />

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>
            Services
          </a>

          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "#0f172a",
              padding: "10px 18px",
              borderRadius: "999px",
              marginBottom: "20px",
              color: "#22d3ee",
              fontSize: "14px",
            }}
          >
            Managed IT Services
          </div>

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              marginBottom: "25px",
            }}
          >
            Reliable IT support that keeps your business running.
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              lineHeight: "1.7",
              maxWidth: "700px",
            }}
          >
            Olaribo Business Solution provides managed IT services,
            cybersecurity, cloud solutions, procurement, and device support for
            modern businesses.
          </p>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#06b6d4",
                color: "black",
                padding: "16px 28px",
                borderRadius: "14px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Book Free IT Review
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                padding: "16px 28px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
              }}
            >
              View Services
            </button>
          </div>
        </div>

        <div
          style={{
            background: "#111111",
            borderRadius: "30px",
            padding: "40px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <img
            src={logoUrl}
            alt="Olaribo Business Solution"
            style={{
              width: "260px",
              margin: "0 auto",
              display: "block",
              borderRadius: "20px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                background: "#000000",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h2 style={{ color: "#22d3ee", fontSize: "32px" }}>24/7</h2>
              <p style={{ color: "#cbd5e1" }}>Monitoring options</p>
            </div>

            <div
              style={{
                background: "#000000",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h2 style={{ color: "#f97316", fontSize: "32px" }}>Fast</h2>
              <p style={{ color: "#cbd5e1" }}>Remote support</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 40px" }}>
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          Our Services
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Complete managed IT and procurement support for growing businesses.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                style={{
                  background: "#111111",
                  borderRadius: "24px",
                  padding: "30px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    background: "#0f172a",
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={28} color="#22d3ee" />
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.7",
                  }}
                >
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 40px",
        }}
      >
        <div
          style={{
            background: "#111111",
            borderRadius: "30px",
            padding: "50px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Ready to make IT easier?
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "700px",
            }}
          >
            Contact Olaribo Business Solution for managed IT support,
            procurement assistance, cloud solutions, and cybersecurity services.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Mail color="#22d3ee" />
              <span>info@olaribo.com</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Phone color="#22d3ee" />
              <span>+44 0000 000000</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <MapPin color="#22d3ee" />
              <span>United Kingdom</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "30px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © {new Date().getFullYear()} Olaribo Business Solution. All rights reserved.
      </footer>
    </main>
  );
}"use client";

import React from "react";
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
  {
    icon: Cloud,
    title: "IT Procurement",
    text: "Supply of business software, laptops, desktops, networking equipment, printers, and office technology.",
  },
  {
    icon: Server,
    title: "Office Supplies",
    text: "Sourcing office accessories, IT peripherals, productivity tools, and workplace essentials.",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    text: "Day-to-day IT management, monitoring, maintenance, and user support for growing businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Protection for devices, networks, email, and business data using practical security controls.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    text: "Microsoft 365, cloud backup, secure collaboration, migration support, and productivity setup.",
  },
  {
    icon: Network,
    title: "Network Management",
    text: "Business Wi-Fi, routers, firewalls, troubleshooting, and resilient connectivity.",
  },
  {
    icon: Lock,
    title: "Backup & Recovery",
    text: "Backup planning, recovery testing, and continuity support to keep business data protected.",
  },
  {
    icon: Server,
    title: "Device Onboarding",
    text: "User setup, device configuration, software installation, and secure offboarding support.",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "#000000",
          zIndex: 1000,
        }}
      >
        <img
          src={logoUrl}
          alt="Olaribo Logo"
          style={{
            height: "55px",
            width: "auto",
            borderRadius: "10px",
          }}
        />

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>
            Services
          </a>

          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "#0f172a",
              padding: "10px 18px",
              borderRadius: "999px",
              marginBottom: "20px",
              color: "#22d3ee",
              fontSize: "14px",
            }}
          >
            Managed IT Services
          </div>

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              marginBottom: "25px",
            }}
          >
            Reliable IT support that keeps your business running.
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              lineHeight: "1.7",
              maxWidth: "700px",
            }}
          >
            Olaribo Business Solution provides managed IT services,
            cybersecurity, cloud solutions, procurement, and device support for
            modern businesses.
          </p>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#06b6d4",
                color: "black",
                padding: "16px 28px",
                borderRadius: "14px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Book Free IT Review
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                padding: "16px 28px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
              }}
            >
              View Services
            </button>
          </div>
        </div>

        <div
          style={{
            background: "#111111",
            borderRadius: "30px",
            padding: "40px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <img
            src={logoUrl}
            alt="Olaribo Business Solution"
            style={{
              width: "260px",
              margin: "0 auto",
              display: "block",
              borderRadius: "20px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                background: "#000000",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h2 style={{ color: "#22d3ee", fontSize: "32px" }}>24/7</h2>
              <p style={{ color: "#cbd5e1" }}>Monitoring options</p>
            </div>

            <div
              style={{
                background: "#000000",
                padding: "20px",
                borderRadius: "20px",
              }}
            >
              <h2 style={{ color: "#f97316", fontSize: "32px" }}>Fast</h2>
              <p style={{ color: "#cbd5e1" }}>Remote support</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 40px" }}>
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          Our Services
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Complete managed IT and procurement support for growing businesses.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                style={{
                  background: "#111111",
                  borderRadius: "24px",
                  padding: "30px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    background: "#0f172a",
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={28} color="#22d3ee" />
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "15px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.7",
                  }}
                >
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 40px",
        }}
      >
        <div
          style={{
            background: "#111111",
            borderRadius: "30px",
            padding: "50px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Ready to make IT easier?
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
              maxWidth: "700px",
            }}
          >
            Contact Olaribo Business Solution for managed IT support,
            procurement assistance, cloud solutions, and cybersecurity services.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Mail color="#22d3ee" />
              <span>info@olaribo.com</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Phone color="#22d3ee" />
              <span>+44 0000 000000</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <MapPin color="#22d3ee" />
              <span>United Kingdom</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "30px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © {new Date().getFullYear()} Olaribo Business Solution. All rights reserved.
      </footer>
    </main>
  );
}
