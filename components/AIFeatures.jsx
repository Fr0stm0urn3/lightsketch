import Image from "next/image"
import bunnyAI from "@/assets/images/BunnyAI.png"
import { FaCheckCircle } from "react-icons/fa"

const AIFeatures = () => {
  return (
    <>
      <div className="border border-slate-900 mt-10" />
      <article className="container mx-auto px-4 flex flex-col justify-between items-center mt-12 lg:flex-row">
        <div className="space-y-5">
          <h3 className="text-2xl max-w-sm lg:max-w-md -mb-2">
            Access a suit of powerful AI features{" "}
          </h3>
          <p className="max-w-[330px] lg:max-w-[400px] text-gray-300">
            Our image generation API is composed of a suit of endpoints with powerful AI
            features. This gives you the flexibility to build you own image generation
            pipeline with the most up to date technology.{" "}
          </p>
          <ul className="text-gray-200 bg-slate-900 p-4 rounded-lg max-w-xs lg:max-w-[385px]">
            <li className="flex items-center gap-1.5">
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
            </li>
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
      <div className="border border-slate-900 mt-20" />
    </>
  )
}

export default AIFeatures
