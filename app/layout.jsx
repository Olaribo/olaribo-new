export const metadata = {
  title: "Olaribo Business Solution",
  description: "Managed IT Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
