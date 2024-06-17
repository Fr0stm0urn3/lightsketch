import Image from "next/image"
import bunnyAI from "../public/assets/images/BunnyAI.png"

type Data = {
  id: number
  text: string
}

const data: Data[] = [
  {
    id: 1,
    text: "Text to Image",
  },
  {
    id: 2,
    text: "Image to Image",
  },
  {
    id: 3,
    text: "Impainting & Outpainting",
  },
  {
    id: 4,
    text: "Controlnet",
  },
  {
    id: 5,
    text: "Upscaling",
  },
  {
    id: 6,
    text: "All the latest models",
  },
  {
    id: 7,
    text: "Upload your own private models",
  },
]

const AIFeatures = () => {
  return (
    <>
      <div className="border border-slate-800 container mx-auto mt-10" />
      <div className="border border-slate-800 container mx-auto mt-[0.32px]" />
      <article className="container mx-auto flex flex-col justify-around items-center mt-12 lg:gap-56 lg:flex-row">
        <div className="space-y-5">
          <h3 className="text-2xl max-w-sm lg:max-w-md -mb-2 font-bold leading-[29.05px]">
            Access a suit of powerful AI features{" "}
          </h3>
          <p className="max-w-[330px] lg:max-w-[400px] text-gray-300 text-base leading-[19.36px]">
            Our image generation API is composed of a suit of endpoints with powerful AI
            features. This gives you the flexibility to build you own image generation
            pipeline with the most up to date technology.{" "}
          </p>
          <ul className="text-gray-200 bg-slate-900 p-4 rounded-lg max-w-xs lg:max-w-[385px]">
            {data.map((item) => (
              <li key={item.id} className="flex items-center gap-1.5">
                <span>
                  {" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16.7682 9.64018C17.1218 9.21591 17.0645 8.58534 16.6402 8.23178C16.2159 7.87821 15.5853 7.93554 15.2318 8.35982L11.6338 12.6774C11.2871 13.0934 11.0922 13.3238 10.9366 13.4653L10.9306 13.4707L10.9242 13.4659C10.7564 13.339 10.5415 13.1272 10.1585 12.7443L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L8.74428 14.1585L8.78511 14.1993L8.78512 14.1993C9.11161 14.526 9.4257 14.8402 9.71794 15.0611C10.0453 15.3087 10.474 15.5415 11.0234 15.5165C11.5728 15.4916 11.9787 15.221 12.2823 14.9448C12.5534 14.6983 12.8377 14.3569 13.1333 14.0021L13.1333 14.0021L13.1703 13.9577L16.7682 9.64018Z"
                      fill="#6366F1"
                    />
                  </svg>
                </span>{" "}
                {item.text}
              </li>
            ))}

            {/* <li className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-500" /> Text to Image
            </li>
            <li className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-500" /> Image to Image
            </li>
            <li className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-500" /> Inpainting & OutPainting
            </li>
            <li className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-500" /> Controlnet
            </li>
            <li className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-500" /> Upscaling
            </li>
            <li className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-500" /> All the latest models
            </li>
            <li className="flex items-center gap-1.5">
              <FaCheckCircle className="text-blue-500" /> Upload your own private models
            </li> */}
          </ul>
        </div>
        <Image
          sizes="100vw"
          height={0}
          width={0}
          alt="BunnyAI"
          src={bunnyAI}
          className="mt-8 lg:mt-0"
          priority
        />
      </article>
      <div className="border border-slate-800 container mx-auto mt-20" />
      <div className="border border-slate-800 container mx-auto mt-[0.32px]" />
    </>
  )
}

export default AIFeatures
