import Performance from "./Performance"
import logoOne from "../assets/images/logo_one.png"
import logoTwo from "../assets/images/logo_two.png"
import logoThree from "../assets/images/logo_three.png"

const Performances = ({ isHomePage = false }) => {
  return (
    <>
      {isHomePage ? (
        <section className="flex flex-col container mx-auto px-4 mt-20 lg:flex-row lg:space-y-0 lg:justify-between gap-10">
          <Performance
            logo={logoOne}
            title={"Specialised headshot models"}
            subtitle={
              "Use our specially trained models for the best photorealistic headshots."
            }
          />
          <Performance
            logo={logoTwo}
            title={"99.99% uptime"}
            subtitle={
              "No more outage-anxiety thanks to our state-of-the art infrastructure."
            }
          />
          <Performance
            logo={logoThree}
            title={"Not just a Dreambooth API"}
            subtitle={
              "Access a suit of optimisations specially designed to give you the best results."
            }
          />
        </section>
      ) : (
        <section className="flex flex-col container mx-auto px-4 mt-20 lg:flex-row lg:space-y-0 lg:justify-between gap-10">
          <Performance
            logo={logoOne}
            title={"Use any model"}
            subtitle={
              "We solve your model headache by hosting all popular Stable Diffusion models along with any private model you request."
            }
          />
          <Performance
            logo={logoTwo}
            title={"99.99% uptime"}
            subtitle={
              "No more outage-anxiety thanks to our state-of-the art infrastructure."
            }
          />
          <Performance
            logo={logoThree}
            title={"4s generations"}
            subtitle={
              "Because your users shouldn't have to wait for their results to come through"
            }
          />
        </section>
      )}
    </>
  )
}

export default Performances
