"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Olaribo Business Solution
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "700px" }}>
        Managed IT Services, Procurement, Cybersecurity, Cloud Solutions,
        Hardware & Software Supply.
      </p>

      <div style={{ marginTop: "40px" }}>
        <img
          src="/images/olaribo.png"
          alt="Olaribo Logo"
          style={{ width: "300px" }}
        />
      </div>
    </main>
  );
}
