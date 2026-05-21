"use client";

import React from "react";
import {
  ShieldCheck,
  Server,
  Globe,
  Lock,
  Database,
  Cloud,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Cyber Security",
      description:
        "Protect your systems and data with enterprise-grade security solutions.",
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Cloud Infrastructure",
      description:
        "Scalable and reliable cloud infrastructure for modern businesses.",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Web Solutions",
      description:
        "Modern, responsive, and high-performance web applications.",
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Data Protection",
      description:
        "Advanced encryption and protection for critical business data.",
    },
    {
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      title: "Database Management",
      description:
        "Efficient database architecture and optimization services.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: "Cloud Backup",
      description:
        "Secure cloud backup and disaster recovery solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Secure. Scalable. Modern.
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          We provide world-class IT infrastructure, cloud services,
          cybersecurity, and modern web solutions for businesses worldwide.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-semibold">
          Get Started
        </button>
      </section>

      {/* Services */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
              >
                <div className="mb-5">{service.icon}</div>

                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
