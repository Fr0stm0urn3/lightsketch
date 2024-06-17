import React from "react"

type PerformanceProps = {
  logo: React.ReactNode
  title: string
  subtitle: string
}

const Performance: React.FC<PerformanceProps> = ({ logo, title, subtitle }) => {
  return (
    <div className="flex flex-col text-center space-y-1">
      {/* <Image
        sizes="100vw"
        height={0}
        width={0}
        alt="Logo"
        src={logo}
        className="mb-2 mx-auto"
      /> */}
      <span className="mx-auto bg-[#151C31] p-2 rounded-xl">{logo}</span>
      <h4 className="text-2xl text-gray-100">{title}</h4>
      <p className="text-gray-300 max-w-[18.5rem] mx-auto leading-[19.36px]">
        {subtitle}
      </p>
    </div>
  )
}

export default Performance
