import Image from "next/image"
import codeImg from "../assets/images/CodeImg.png"

const Hero = ({ title, children, personImg }) => {
  return (
    <>
      <div className="border border-slate-900 mt-3" />
      <header className="container justify-center md:mx-auto flex flex-col space-y-10  items-center lg:flex-row lg:space-y-0 lg:justify-between mt-20 lg:space-x-10 xl:space-x-72 2xl:space-x-[500px]">
        <div className="flex flex-col items-center mb-32 -mr-10 lg:mb-0 lg:ml-12 xl:ml-32 lg:mr-0  2xl:ml-2">
          <h1 className="text-5xl max-w-[460px] sm:max-w-full 2xl:min-w-[550px] text-white text-center mb-6 mx-auto">
            {title}
          </h1>
          <p className="text-gray-300 text-center w-[364px] lg:max-w-[412px] mx-auto text-lg lg:text-base">
            {children}
          </p>
          <div className="flex justify-center gap-5 items-center lg:ml-3 mt-4 w-[370px]">
            <button className="bg-[#6366F1] rounded-3xl py-3 px-10 text-white">
              Try for free
            </button>
            <button className="bg-[#6366F1] rounded-3xl py-3 px-8 text-white">
              Documentation
            </button>
          </div>
        </div>
        <div className="relative mx-auto pr-20 sm:pr-0 xl:pr-40">
          <Image
            sizes="100vw"
            height={0}
            width={0}
            priority
            className="-mt-28 lg:mr-24 xl:mr-16 lg:mr-54 lg:-mt-40"
            alt="Code Screen Shot"
            src={codeImg}
          />
          <Image
            sizes="100vw"
            height={0}
            width={0}
            priority
            className="lg:w-60 z-10 absolute left-52 -top-4 lg:-top-16"
            alt="Happy Person"
            src={personImg}
          />
        </div>
      </header>
      <div className="border border-slate-900 mt-40 lg:mt-20" />
    </>
  )
}

export default Hero
