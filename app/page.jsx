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

const benefits = [
  "Proactive monitoring to reduce downtime",
  "Clear monthly support plans",
  "Security-first approach",
  "Remote and onsite support options",
  "Hardware, software, and office supply procurement",
];

const steps = [
  "Assess your IT setup",
  "Recommend the right support plan",
  "Secure and maintain systems",
  "Support your team as you grow",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home">
            <img
              src={logoUrl}
              alt="Olaribo Business Solution logo"
              className="h-12 w-auto rounded-lg"
            />
          </a>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#about" className="hover:text-cyan-300">Why Us</a>
            <a href="#process" className="hover:text-cyan-300">Process</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-400"
          >
            Get IT Support
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.35),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(249,115,22,0.22),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Managed IT Services for modern businesses
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Reliable IT support that keeps your business running.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Olaribo Business Solution helps startups and small businesses manage technology,
              secure systems, support users, procure equipment, and scale with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Book a Free IT Review <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
            <img
              src={logoUrl}
              alt="Olaribo Business Solution logo large"
              className="mx-auto w-full max-w-xl rounded-3xl object-contain shadow-2xl"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-950/70 p-5">
                <p className="text-3xl font-bold text-cyan-300">24/7</p>
                <p className="mt-1 text-sm text-slate-300">Monitoring options</p>
              </div>

              <div className="rounded-2xl bg-slate-950/70 p-5">
                <p className="text-3xl font-bold text-orange-400">Fast</p>
                <p className="mt-1 text-sm text-slate-300">Remote support response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Complete IT and procurement support.
          </h2>
          <p className="mt-5 text-slate-300">
            From troubleshooting to cybersecurity, cloud systems, software procurement,
            hardware supply, and office equipment, Olaribo gives your team dependable support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="bg-slate-900/70 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              IT that feels simple, secure, and dependable.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              We work as your outsourced IT department, helping you avoid downtime,
              improve security, manage devices, support users, and source the right technology.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-orange-400" />
                <p className="text-slate-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            A clear path to better IT.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold">
                {index + 1}
              </div>
              <p className="text-lg font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-cyan-500 to-orange-500 p-1 shadow-2xl">
          <div className="grid gap-10 rounded-[1.8rem] bg-slate-950 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">
                Ready to make IT easier?
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Contact Olaribo Business Solution for managed IT support,
                procurement assistance, security advice, or a free review.
              </p>

              <div className="mt-8 space-y-4 text-slate-300">
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-300" /> info@olaribo.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-cyan-300" /> +44 0000 000000
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-cyan-300" /> United Kingdom
                </p>
              </div>
            </div>

            <form className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <div className="grid gap-4">
                <input
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
                  placeholder="Your name"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
                  placeholder="Email address"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
                  placeholder="Company name"
                />
                <textarea
                  className="min-h-32 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300"
                  placeholder="How can we help?"
                />
                <button
                  type="button"
                  className="rounded-2xl bg-orange-500 py-4 text-base font-semibold text-white hover:bg-orange-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Olaribo Business Solution. IT Managed Services.
      </footer>
    </main>
  );
}
