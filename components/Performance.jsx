import Image from "next/image"

const Performance = ({ logo, title, subtitle }) => {
  return (
    <div className="flex flex-col text-center space-y-2">
      <Image
        sizes="100vw"
        height={0}
        width={0}
        alt="Logo"
        src={logo}
        className="mb-2 mx-auto"
      />
      <h4 className="text-[1.35rem] text-gray-100">{title}</h4>
      <p className="text-gray-300 max-w-[18.5rem] mx-auto">{subtitle}</p>
    </div>
  )
}

export default Performance
