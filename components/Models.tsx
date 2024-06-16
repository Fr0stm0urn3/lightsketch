import Image from "next/image"
import personImg_one from "../assets/images/personImg1.png"
import personImg_two from "../assets/images/personImg2.png"
import personImg_three from "../assets/images/personImg3.png"

const Models = () => {
  return (
    <>
      <article className="container mx-auto flex flex-col space-y-5 justify-center items-center text-center mt-10">
        <h3 className="font-bold text-2xl max-w-[334px] lg:max-w-md">
          Go beyond professional headshots
        </h3>
        <p className="text-gray-300 max-w-[334px]  lg:max-w-md">
          Let you imagination run wild, the dreambooth API can be used for more than just
          creating professional headshots. Chose from a range of base model specialising
          at different style and edit the prompt to make avatars in any style.
        </p>
        <div className="flex gap-6 lg:gap-14 w-full justify-center px-10 md:px-0">
          <Image
            alt="Person Viking"
            sizes="100vw"
            height={0}
            width={0}
            priority
            src={personImg_one}
            className="mt-2"
          />
          <Image
            alt="Person Art"
            sizes="100vw"
            height={0}
            width={0}
            priority
            src={personImg_two}
            className="mt-2"
          />
          <Image
            alt="Person 3D"
            sizes="100vw"
            height={0}
            width={0}
            priority
            src={personImg_three}
            className="mt-2"
          />
        </div>
      </article>
      <div className="border border-slate-800 mt-10" />
    </>
  )
}

export default Models
