import Image from "next/image"
import featuresMaleImg from "@/assets/images/Warm White.png"
import featuresFemaleImg from "@/assets/images/Modern Interior.png"
import { FaUser, FaCog } from "react-icons/fa"

const QualityGuaranty = () => {
  return (
    <>
      <div className="border border-slate-800 mt-24" />
      <section className="container mx-auto my-16 px-4 flex flex-col justify-center items-center lg:flex-row lg:justify-between relative">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h3 className="text-2xl self-start font-semibold">Quality guaranty</h3>
          <p className="max-w-md text-gray-300">
            Thanks to two of our in-hose improvements to the training process, we can
            guaranty the best quality when it comes to AI generated headshots.
          </p>
          <div className="space-y-4 max-w-sm">
            <div>
              <h5 className="flex items-center gap-2">
                <FaUser className="inline text-blue-500" /> LS-Headshots
              </h5>
              <p className="max-w-md text-gray-300">
                Our in-house model has been specially trained on a large dataset to make
                high quality photorealistic profile pictures.
              </p>
            </div>
            <div>
              <h5 className="flex items-center gap-2">
                <FaCog className="inline text-blue-500" /> Headshot Optimizer
              </h5>
              <p className="max-w-md text-gray-300">
                Our enhanced training method incorporates a suit of optimisation and will
                ensure that you always get the best results possible.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            alt="Person-male"
            sizes="100vw"
            height={0}
            width={0}
            priority
            src={featuresMaleImg}
            className="z-0 absolute mt-10 top-96 left-20 lg:relative md:mt-[7.65rem] md:top-64 md:left-44 lg:mt-0 lg:-left-44 lg:-top-20 mx-auto"
          />
          <Image
            alt="Person-female"
            sizes="100vw"
            height={0}
            width={0}
            priority
            src={featuresFemaleImg}
            className="z-10 absolute mt-48 right-32 top-96 md:mt-36 md:top-96 md:right-48 lg:right-3 lg:top-32 lg:mt-0"
          />
        </div>
      </section>
      <div className="border border-slate-800 mt-[29rem] lg:mt-0" />
    </>
  )
}

export default QualityGuaranty
