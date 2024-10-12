import "@/app/globals.css";
import Header from "@/components/header/Header"
// import Footer from "@/components/Footer"

export const metadata = {
  title: "Personal finance app",
  description: "Personal Finance platform | Challenge propsed by Frontendmentor coded by Ahmed Lemssiah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
