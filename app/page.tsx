import Hero from "../components/Hero"
import personOne from "../public/assets/images/HeroPerson_One.png"
import Performances from "../components/Performances"
import QualityGuaranty from "../components/QualityGuaranty"
import Models from "../components/Models"

const HomePage = () => {
  return (
    <>
      <Hero personImg={personOne} title={"Headshot API"}>
        Turn selfies into photorealistic headshots or avatar using the specially designed
        LightSketch API. Our headshot optimizer goes beyond traditional dreambooth so that
        you can get the best quality possible.
      </Hero>
      <Performances isHomePage={true} />
      <QualityGuaranty />
      <Models />
    </>
  )
}

export default HomePage
