"use client"

import { FaAngleRight } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"

const PremiumService = () => {
  const pathname = usePathname()

  return (
    <div className="bg-slate-900  mt-10 py-8">
      <div className="px-4 flex flex-col justify-center lg:flex-row lg:justify-between items-center container mx-auto  ">
        <div>
          <h3 className="text-gray-100 text-2xl lg:text-xl lg:mb-4 max-w-64">
            The most powerful AI APIs at your fingertips
          </h3>
          <Link href={pathname === "/" ? "blog" : "/"} className="text-blue-500">
            Get started for free now
          </Link>
        </div>
        <button className="flex items-center gap-2 bg-blue-500 py-3 px-4 lg:px-7 rounded-3xl text-sm mt-4 lg:mt-0">
          Get Started <FaAngleRight className="mt-0.5" />
        </button>
      </div>
    </div>
  )
}

export default PremiumService
