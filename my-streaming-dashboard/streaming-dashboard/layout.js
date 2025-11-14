export const metadata = {
  title: "Streaming Dashboard",
  description: "Basic Netflix-style dashboard using Next.js, HTML, CSS, JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}