export const metadata = {
  title: "Olaribo Business Solution",
  description:
    "Managed IT services, procurement, cybersecurity, cloud solutions, hardware and software supply.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
