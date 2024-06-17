"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const PremiumService = () => {
  const pathname = usePathname()

  return (
    <div className="bg-[#151C31] px-10 container mx-auto mt-10 mb-10">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between  items-center py-8 lg:space-x-80 rounded-md ">
        <div>
          <h3 className="text-gray-100 text-2xl lg:mb-6 max-w-64  lg:max-w-full  leading-[29.05px]">
            The most powerful AI APIs at your fingertips
          </h3>
          <Link href={pathname === "/" ? "blog" : "/"} className="text-[#6366F1]">
            Get started for free now
          </Link>
        </div>
        <button className="flex items-center gap-2 bg-[#6366F1] py-3 px-4 lg:px-9 rounded-3xl  mt-4 lg:mt-0 lg:w-[200px] xl:w-auto">
          Get Started{" "}
          <span>
            <svg
              width="8"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.26605 1L7.26605 7L1.26605 13"
                stroke="#FBFFFF"
                strokeWidth="2"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default PremiumService
