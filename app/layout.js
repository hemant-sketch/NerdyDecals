
import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from '../components/Cart.jsx';
import EmailInput from "@/components/EmailInput.jsx";
import ProductProvider from "@/context/ProductContext";


export const metadata = {
  title: "NerdyDecals",
  description: "A super cool store for programmers and productivity fiends!",
};

export default function RootLayout({ children }) {
  return (
    <ProductProvider>
    <html lang="en">
      <Head/>
      <body>
        <div id="portal"/>
        <div id="app">
          <header>
            <div className="header-content">
              <Link href={"/"}>
                <h1>NerdyDecals</h1>
              </Link>
            
              <h5 className="mid-text">- Cool stuff for cool people -</h5>
              <Cart/>
            </div>
          </header>

          <main>
            {children}
          </main>
          
          <div className="hr"/>
          <footer>
            <div className="email-container">
              <h5>Get a sneak peak at new additions to the store, special offers,
                and so much more.</h5>
              <EmailInput/>
            </div>

            <div className="links-container">
              <div>
                <h3>Hemant</h3>
                <Link target="_blank" href="/">Github</Link>
                <Link target="_blank" href={"/"}>Roadmap</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link  href={"/"}>Home</Link>
                <Link  href={"/cart"}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link target="_blank" href={"/"}>Contact</Link>
                <Link target="_blank" href={"/"}>FAQs</Link>
              </div>
            </div>
            <div className="socials">
              <p>©<a href="https://portfoliowebsite" target="_blank">Hemant Chauhan
              </a>2025<br/>Built with Next.JS & <a target="_blank" href="https://"></a>🔥</p>
              <div className="social-links">
                <Link href={"/"} target="_blank"><i className="fa-brands fa-github"></i></Link>
                <Link href={"/"} target="_blank"><i className="fa-solid fa-twitter"></i></Link>
                <Link href={"/"} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
        
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
    </ProductProvider>
  ); 
}
