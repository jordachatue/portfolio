import "./index.css";
export const metadata = {
  title: "Ic Elect inc",
  description: "Ic Elect inc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
