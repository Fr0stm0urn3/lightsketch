import Hero from "@/components/Hero"
import personTwo from "@/assets/images/HeroPerson_Two.png"
import Performances from "@/components/Performances"
import AIFeatures from "@/components/AIFeatures"

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
    </>
  )
}

export default BlogPage
