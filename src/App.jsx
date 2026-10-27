import Header from "@/Section Components/Header.jsx"
import Hero from "@/Section Components/Hero.jsx"
import OurImpact from "@/Section Components/OurImpact.jsx"
import QualityCommitment from "@/Section Components/QualityCommitment.jsx"
import MeetOurTrainers from "@/Section Components/MeetOurTrainers.jsx"
import MissionVisionValues from "@/Section Components/MissionVisionValues.jsx"
import WhoWeEmpower from "@/Section Components/WhoWeEmpower.jsx"
import ProgramsAndServices from "@/Section Components/ProgramsAndServices.jsx"
import OurApproach from "@/Section Components/OurApproach.jsx"
import PartnerWithUs from "@/Section Components/PartnerWithUs.jsx"
import ContactAndGetStarted from "@/Section Components/ContactAndGetStarted.jsx"
import SiteFooter from "@/Section Components/SiteFooter.jsx"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurImpact />
        <QualityCommitment />
        <MeetOurTrainers />
        <MissionVisionValues />
        <WhoWeEmpower />
        <ProgramsAndServices />
        <OurApproach />
        <PartnerWithUs />
        <ContactAndGetStarted />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
