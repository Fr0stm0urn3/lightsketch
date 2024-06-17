import Image from "next/image"
import featuresMaleImg from "../public/assets/images/Warm White.png"
import featuresFemaleImg from "../public/assets/images/Modern Interior.png"

const QualityGuaranty = () => {
  return (
    <>
      <div className="border border-slate-800 mt-24 container mx-auto" />
      <section className="container mx-auto my-16 flex flex-col justify-center items-center lg:flex-row md:justify-center lg:justify-between relative pb-8 lg:px-20 xl:px-28 ">
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-2xl self-start font-[700]">Quality guaranty</h3>
          <p className=" text-gray-300 w-[334px] lg:w-[412px] leading-[19.36px]">
            Thanks to two of our in-hose improvements to the training process, we can
            guaranty the best quality when it comes to AI generated headshots.
          </p>
          <div className="space-y-5">
            <div className="bg-[#151C31] pl-5 py-2  rounded-md">
              <h5 className="flex items-center gap-2 font-[700] mb-1.5">
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="7.5" cy="5" r="2.5" fill="#6366F1" />
                    <path
                      d="M3.2874 11.0435C3.68547 9.15248 5.56758 8.125 7.5 8.125C9.43242 8.125 11.3145 9.15248 11.7126 11.0435C11.7569 11.2541 11.7942 11.4698 11.8218 11.6883C11.8782 12.1343 11.5106 12.5 11.061 12.5H3.93898C3.48943 12.5 3.1218 12.1343 3.17817 11.6883C3.20578 11.4698 3.24306 11.2541 3.2874 11.0435Z"
                      fill="#6366F1"
                    />
                  </svg>
                </span>{" "}
                LS-Headshots
              </h5>
              <p className="lg:w-[352px] text-gray-300 w-[307.77px] leading-[19.36px]">
                Our in-house model has been specially trained on a large dataset to make
                high quality photorealistic profile pictures.
              </p>
            </div>
            <div className="bg-[#151C31] pl-5 py-2 rounded-md">
              <h5 className="flex items-center gap-2 font-[700] mb-1.5">
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.89486 1.25C8.38031 1.25 8.78679 1.61786 8.83509 2.1009C8.9101 2.85103 9.79021 3.21558 10.3737 2.73821C10.7494 2.4308 11.2969 2.45811 11.6402 2.80137L12.1986 3.35979C12.5419 3.70306 12.5692 4.25059 12.2618 4.62631C11.7844 5.20978 12.149 6.0899 12.8991 6.16491C13.3821 6.21321 13.75 6.61969 13.75 7.10515V7.89493C13.75 8.38034 13.3822 8.78679 12.8991 8.83509C12.1491 8.91009 11.7845 9.7901 12.2619 10.3735C12.5692 10.7492 12.5419 11.2966 12.1987 11.6399L11.6402 12.1983C11.2969 12.5416 10.7494 12.5689 10.3737 12.2615C9.79024 11.7841 8.91012 12.1488 8.8351 12.8989C8.7868 13.382 8.38027 13.75 7.89477 13.75H7.10515C6.61969 13.75 6.21321 13.3821 6.16491 12.8991C6.0899 12.149 5.20977 11.7844 4.6263 12.2618C4.25057 12.5692 3.70303 12.5419 3.35975 12.1986L2.80135 11.6402C2.45808 11.2969 2.43078 10.7494 2.73819 10.3737C3.21557 9.79022 2.85102 8.9101 2.10089 8.83509C1.61785 8.78678 1.25 8.38031 1.25 7.89486V7.10522C1.25 6.61972 1.61788 6.21321 2.10097 6.1649C2.85117 6.08988 3.21572 5.20965 2.7383 4.62614C2.43085 4.25037 2.45815 3.70274 2.80146 3.35943L3.35978 2.8011C3.70306 2.45783 4.25065 2.43056 4.62637 2.73798C5.20978 3.21531 6.08991 2.85088 6.16492 2.10082C6.21322 1.61782 6.61965 1.25 7.10506 1.25H7.89486ZM7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10Z"
                      fill="#6366F1"
                    />
                  </svg>
                </span>{" "}
                Headshot Optimizer
              </h5>
              <p className="lg:w-[352px] text-gray-300 w-[311.27px] leading-[19.36px]">
                Our enhanced training method incorporates a suit of optimisation and will
                ensure that you always get the best results possible.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            alt="Person-male"
            sizes="100vw"
            height={0}
            width={0}
            priority
            src={featuresMaleImg}
            className="z-0 absolute mt-10 top-[25.5rem] left-32 lg:relative md:mt-[11.65rem] md:top-64 md:left-48 lg:mt-0 lg:-left-44 lg:-top-20 mx-auto"
          />
          <Image
            alt="Person-female"
            sizes="100vw"
            height={0}
            width={0}
            priority
            src={featuresFemaleImg}
            className="z-10 absolute mt-48 right-32 top-[25.25rem] md:mt-36 md:top-[27.8rem] md:right-44  lg:top-36 lg:mt-0 lg:right-[5.5rem] xl:right-[8.7rem]"
          />
        </div>
      </section>
      <div className="border border-slate-800 mt-[29rem] lg:mt-0 container mx-auto" />
    </>
  )
}

export default QualityGuaranty
