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
      <body suppressHydrationWarning={true} className=" bg-light-400">
        <h1 style={{opacity:"0", position:"absolute", height:"0",width:"0", pointerEvents:"none"}}>Personal Finance app | Your personal Finance made by professionals for your daily uses!</h1>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
