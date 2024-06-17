import personTwo from "../../public/assets/images/HeroPerson_Two.png"
import Hero from "../../components/Hero"
import Performances from "../../components/Performances"
import AIFeatures from "../../components/AIFeatures"
import GenerationModel from "../../components/GenerationModel"

const BlogPage = () => {
  return (
    <>
      <Hero personImg={personTwo} title={"Image Generation API"}>
        Generate images from a suit of different models, including most SDXL, SDXL turbo,
        SD1.5 and inpainting models. This API is perfect for powering AI art and image
        editing apps.
      </Hero>
      <Performances />
      <AIFeatures />
      <GenerationModel />
    </>
  )
}

export default BlogPage
