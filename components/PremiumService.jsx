import { FaAngleRight } from "react-icons/fa"
import Link from "next/link"

const PremiumService = () => {
  return (
    <div className="bg-slate-900  mt-24 py-8">
      <div className="flex justify-between items-center container mx-auto  ">
        <div>
          <h3 className="text-gray-100 text-xl mb-4">
            The most powerful AI APIs at your fingertips
          </h3>
          <Link href={"/"} className="text-blue-500">
            Get started for free now
          </Link>
        </div>
        <button className="flex items-center gap-2 bg-blue-500 py-3 px-7 rounded-3xl text-sm">
          Get Started <FaAngleRight className="mt-0.5" />
        </button>
      </div>
    </div>
  )
}

export default PremiumService
