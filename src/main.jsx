import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import About from './components/About.jsx'
import Team from './components/team.jsx'
import FAQ from './components/Faq.jsx'
import LogoCloud from './components/LogoCloud.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { ThemeProvider as NextThemesProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextThemesProvider attribute="class" defaultTheme="dark">
    <Hero />
    <Features />
    <About />
    <LogoCloud />
    <Team />
    <Contact />
    <FAQ />
    <Footer />
    </NextThemesProvider>
  </React.StrictMode>,
)
