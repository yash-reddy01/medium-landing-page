import { DownloadApp } from "./components/DownloadApp"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { Join } from "./components/Join"
import { LearnMore } from "./components/LearnMore"
import { Membership } from "./components/Membership"
import { Navbar } from "./components/Navbar"
import { NetworkSection } from "./components/NetworkSection"
import { Stats } from "./components/Stats"

function App() {

  return (
    <>
     <Navbar />
     <HeroSection />
     <NetworkSection /> 
     <Stats />
     <Membership />
     <DownloadApp />
     <LearnMore />
     <Join />
     <Footer />
    </>
  )
}

export default App
