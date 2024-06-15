import Image from "next/image"
import codeImg from "../assets/images/CodeImg.png"

const Hero = ({ title, children, personImg }) => {
  return (
    <>
      <div className="border border-slate-900  mt-3" />
      <header className="container justify-around mx-auto flex flex-col space-y-10 lg:items-center lg:flex-row lg:space-y-0 lg:justify-between mt-20 lg:space-x-10">
        <div className="mb-32 lg:mb-0 mx-auto">
          <h1 className="text-5xl text-white text-center mb-6">{title}</h1>
          <p className="text-gray-300 text-center max-w-lg lg:max-w-sm mx-auto text-lg lg:text-base">
            {children}
          </p>
          <div className="flex justify-center gap-8 items-center lg:ml-3 mt-4">
            <button className="bg-blue-600 rounded-3xl py-3 px-12 text-white">
              Try for free
            </button>
            <button className="bg-blue-600 rounded-3xl py-3 px-8 text-white">
              Documentation
            </button>
          </div>
        </div>
        <div className="relative mx-auto lg:pr-40">
          <Image
            sizes="100vw"
            height={0}
            width={0}
            priority
            className="-mt-28 mr-20 lg:-mt-40"
            alt="Person"
            src={codeImg}
          />
          <Image
            sizes="100vw"
            height={0}
            width={0}
            priority
            className="w-56 lg:w-60 z-10 absolute left-52 -top-4 lg:-top-16"
            alt="Person"
            src={personImg}
          />
        </div>
      </header>
      <div className="border border-slate-900 mt-40 lg:mt-20" />
    </>
  )
}

export default Hero
