import React from "react"
import Performance from "./Performance"

type DataHome = {
  id?: number
  logo: React.ReactNode
  title: string
  subtitle: string
}

type DataBlog = {
  id?: number
  logo: React.ReactNode
  title: string
  subtitle: string
}

const dataHome: DataHome[] = [
  {
    id: 1,
    logo: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1056 4.19721L6.78885 7.85557C6.00831 8.24585 5.61803 8.44098 5.61803 8.75C5.61803 9.05902 6.00831 9.25415 6.78886 9.64443L14.1056 13.3028L14.1056 13.3028C14.5445 13.5222 14.7639 13.632 15 13.632C15.2361 13.632 15.4555 13.5222 15.8944 13.3028L23.2111 9.64443C23.9917 9.25415 24.382 9.05902 24.382 8.75C24.382 8.44098 23.9917 8.24585 23.2111 7.85557L15.8944 4.19721C15.4555 3.97776 15.2361 3.86803 15 3.86803C14.7639 3.86803 14.5445 3.97776 14.1056 4.19721Z"
          fill="#FBFFFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75103 13.1248C9.03633 13.2688 9.33779 13.4195 9.65541 13.5783L13.2111 15.3562L13.2112 15.3562C14.089 15.7951 14.5279 16.0145 15 16.0145C15.4721 16.0145 15.911 15.7951 16.7888 15.3562L20.3446 13.5783C20.6622 13.4195 20.9637 13.2688 21.249 13.1248L23.2112 14.1059C23.9917 14.4962 24.382 14.6913 24.382 15.0003C24.382 15.3094 23.9917 15.5045 23.2112 15.8948L15.8944 19.5531C15.4555 19.7726 15.2361 19.8823 15 19.8823C14.7639 19.8823 14.5445 19.7726 14.1056 19.5531L14.1056 19.5531L6.78886 15.8948C6.00832 15.5045 5.61804 15.3094 5.61804 15.0003C5.61804 14.6913 6.00832 14.4962 6.78886 14.1059L8.75103 13.1248Z"
          fill="#FBFFFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75042 19.3748C9.03591 19.5189 9.33759 19.6697 9.65544 19.8287L13.2112 21.6065L13.2112 21.6065C14.089 22.0454 14.5279 22.2649 15 22.2649C15.4722 22.2649 15.9111 22.0454 16.7889 21.6065L20.3446 19.8287C20.6625 19.6697 20.9641 19.5189 21.2496 19.3749L23.2112 20.3556L23.2112 20.3556C23.9917 20.7459 24.382 20.941 24.382 21.2501C24.382 21.5591 23.9917 21.7542 23.2112 22.1445L23.2112 22.1445L15.8944 25.8028C15.4555 26.0223 15.2361 26.132 15 26.132C14.7639 26.132 14.5445 26.0223 14.1056 25.8028L6.78886 22.1445C6.00832 21.7542 5.61804 21.5591 5.61804 21.2501C5.61804 20.941 6.00831 20.7459 6.78885 20.3556L6.78886 20.3556L8.75042 19.3748Z"
          fill="#FBFFFF"
        />
      </svg>
    ),
    title: "Specialised headshot models",
    subtitle: "Use our specially trained models for the best photorealistic headshots.",
  },
  {
    id: 2,
    logo: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.8667 21.6617C26.3133 19.9949 26.3705 18.2477 26.0338 16.5552C25.6972 14.8628 24.9757 13.2705 23.9252 11.9014C22.8747 10.5324 21.5234 9.4234 19.9757 8.66018C18.4281 7.89696 16.7256 7.5 15 7.5C13.2744 7.5 11.5719 7.89696 10.0243 8.66018C8.4766 9.4234 7.12526 10.5324 6.07477 11.9014C5.02429 13.2705 4.30282 14.8628 3.96617 16.5552C3.62952 18.2477 3.68671 19.9949 4.13333 21.6617"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.9571 19.4779C16.5665 20.3646 16.1379 21.7173 15 22.4993C13.8621 23.2812 12.4456 23.1963 11.8363 22.3096C11.1512 21.3126 8.69335 15.4523 7.36735 12.2406C7.16281 11.7451 7.77013 11.3278 8.15932 11.6963C10.6823 14.0856 15.272 18.4808 15.9571 19.4779Z"
          stroke="#FBFFFF"
          strokeWidth="2"
        />
        <path d="M15 7.5V10" stroke="#FBFFFF" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M22.955 10.7947L21.1873 12.5624"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25.8667 21.6614L23.4519 21.0143"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.1333 21.6614L6.54812 21.0143"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "99.99% uptime",
    subtitle: "No more outage-anxiety thanks to our state-of-the art infrastructure.",
  },
  {
    id: 3,
    logo: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 25L5.6797 13.3496C5.34718 12.934 5.18092 12.7262 5.13625 12.4757C5.09159 12.2252 5.17575 11.9728 5.34407 11.4678L6.5883 7.73509C7.02832 6.41505 7.24832 5.75503 7.7721 5.37752C8.29587 5 8.99159 5 10.383 5H19.617C21.0084 5 21.7041 5 22.2279 5.37752C22.7517 5.75503 22.9717 6.41505 23.4117 7.73509L24.6559 11.4678C24.8243 11.9728 24.9084 12.2252 24.8637 12.4757C24.8191 12.7262 24.6528 12.934 24.3203 13.3496L15 25ZM15 25L19.375 11.25M15 25L10.625 11.25M24.375 12.5L19.375 11.25M19.375 11.25L17.5 6.25M19.375 11.25H10.625M12.5 6.25L10.625 11.25M10.625 11.25L5.625 12.5"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Not just a Dreambooth API",
    subtitle:
      "Access a suit of optimisations specially designed to give you the best results.",
  },
]

const dataBlog: DataBlog[] = [
  {
    id: 1,
    logo: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.1056 4.19721L6.78885 7.85557C6.00831 8.24585 5.61803 8.44098 5.61803 8.75C5.61803 9.05902 6.00831 9.25415 6.78886 9.64443L14.1056 13.3028L14.1056 13.3028C14.5445 13.5222 14.7639 13.632 15 13.632C15.2361 13.632 15.4555 13.5222 15.8944 13.3028L23.2111 9.64443C23.9917 9.25415 24.382 9.05902 24.382 8.75C24.382 8.44098 23.9917 8.24585 23.2111 7.85557L15.8944 4.19721C15.4555 3.97776 15.2361 3.86803 15 3.86803C14.7639 3.86803 14.5445 3.97776 14.1056 4.19721Z"
          fill="#FBFFFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75103 13.1248C9.03633 13.2688 9.33779 13.4195 9.65541 13.5783L13.2111 15.3562L13.2112 15.3562C14.089 15.7951 14.5279 16.0145 15 16.0145C15.4721 16.0145 15.911 15.7951 16.7888 15.3562L20.3446 13.5783C20.6622 13.4195 20.9637 13.2688 21.249 13.1248L23.2112 14.1059C23.9917 14.4962 24.382 14.6913 24.382 15.0003C24.382 15.3094 23.9917 15.5045 23.2112 15.8948L15.8944 19.5531C15.4555 19.7726 15.2361 19.8823 15 19.8823C14.7639 19.8823 14.5445 19.7726 14.1056 19.5531L14.1056 19.5531L6.78886 15.8948C6.00832 15.5045 5.61804 15.3094 5.61804 15.0003C5.61804 14.6913 6.00832 14.4962 6.78886 14.1059L8.75103 13.1248Z"
          fill="#FBFFFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75042 19.3748C9.03591 19.5189 9.33759 19.6697 9.65544 19.8287L13.2112 21.6065L13.2112 21.6065C14.089 22.0454 14.5279 22.2649 15 22.2649C15.4722 22.2649 15.9111 22.0454 16.7889 21.6065L20.3446 19.8287C20.6625 19.6697 20.9641 19.5189 21.2496 19.3749L23.2112 20.3556L23.2112 20.3556C23.9917 20.7459 24.382 20.941 24.382 21.2501C24.382 21.5591 23.9917 21.7542 23.2112 22.1445L23.2112 22.1445L15.8944 25.8028C15.4555 26.0223 15.2361 26.132 15 26.132C14.7639 26.132 14.5445 26.0223 14.1056 25.8028L6.78886 22.1445C6.00832 21.7542 5.61804 21.5591 5.61804 21.2501C5.61804 20.941 6.00831 20.7459 6.78885 20.3556L6.78886 20.3556L8.75042 19.3748Z"
          fill="#FBFFFF"
        />
      </svg>
    ),
    title: "Use any model",
    subtitle:
      "We solve your model headache by hosting all popular Stable Diffusion models along with any private model you request.",
  },
  {
    id: 2,
    logo: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.8667 21.6617C26.3133 19.9949 26.3705 18.2477 26.0338 16.5552C25.6972 14.8628 24.9757 13.2705 23.9252 11.9014C22.8747 10.5324 21.5234 9.4234 19.9757 8.66018C18.4281 7.89696 16.7256 7.5 15 7.5C13.2744 7.5 11.5719 7.89696 10.0243 8.66018C8.4766 9.4234 7.12526 10.5324 6.07477 11.9014C5.02429 13.2705 4.30282 14.8628 3.96617 16.5552C3.62952 18.2477 3.68671 19.9949 4.13333 21.6617"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.9571 19.4779C16.5665 20.3646 16.1379 21.7173 15 22.4993C13.8621 23.2812 12.4456 23.1963 11.8363 22.3096C11.1512 21.3126 8.69335 15.4523 7.36735 12.2406C7.16281 11.7451 7.77013 11.3278 8.15932 11.6963C10.6823 14.0856 15.272 18.4808 15.9571 19.4779Z"
          stroke="#FBFFFF"
          strokeWidth="2"
        />
        <path d="M15 7.5V10" stroke="#FBFFFF" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M22.955 10.7947L21.1873 12.5624"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25.8667 21.6614L23.4519 21.0143"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.1333 21.6614L6.54812 21.0143"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "99.99% uptime",
    subtitle: "No more outage-anxiety thanks to our state-of-the art infrastructure.",
  },
  {
    id: 3,
    logo: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 25L5.6797 13.3496C5.34718 12.934 5.18092 12.7262 5.13625 12.4757C5.09159 12.2252 5.17575 11.9728 5.34407 11.4678L6.5883 7.73509C7.02832 6.41505 7.24832 5.75503 7.7721 5.37752C8.29587 5 8.99159 5 10.383 5H19.617C21.0084 5 21.7041 5 22.2279 5.37752C22.7517 5.75503 22.9717 6.41505 23.4117 7.73509L24.6559 11.4678C24.8243 11.9728 24.9084 12.2252 24.8637 12.4757C24.8191 12.7262 24.6528 12.934 24.3203 13.3496L15 25ZM15 25L19.375 11.25M15 25L10.625 11.25M24.375 12.5L19.375 11.25M19.375 11.25L17.5 6.25M19.375 11.25H10.625M12.5 6.25L10.625 11.25M10.625 11.25L5.625 12.5"
          stroke="#FBFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "4s generations",
    subtitle:
      "Because your users shouldn't have to wait for their results to come through",
  },
]

const Performances = ({ isHomePage = false }) => {
  return (
    <>
      {isHomePage ? (
        <section className="flex flex-col container mx-auto px-8 2xl:px-9 mt-20 lg:flex-row lg:space-y-0 lg:justify-between 2xl:gap-10">
          {/* <Performance
            logo={logoOne}
            title={"Specialised headshot models"}
            subtitle={
              "Use our specially trained models for the best photorealistic headshots."
            }
          />
          <Performance
            logo={logoTwo}
            title={"99.99% uptime"}
            subtitle={
              "No more outage-anxiety thanks to our state-of-the art infrastructure."
            }
          />
          <Performance
            logo={logoThree}
            title={"Not just a Dreambooth API"}
            subtitle={
              "Access a suit of optimisations specially designed to give you the best results."
            }
          /> */}
          {dataHome.map((item: DataHome) => (
            <Performance {...item} key={item.id} />
          ))}
        </section>
      ) : (
        <section className="flex flex-col container mx-auto px-8 2xl:px-9 mt-20 lg:flex-row lg:space-y-0 lg:justify-between 2xl:gap-10">
          {/* <Performance
            logo={logoOne}
            title={"Use any model"}
            subtitle={
              "We solve your model headache by hosting all popular Stable Diffusion models along with any private model you request."
            }
          />
          <Performance
            logo={logoTwo}
            title={"99.99% uptime"}
            subtitle={
              "No more outage-anxiety thanks to our state-of-the art infrastructure."
            }
          />
          <Performance
            logo={logoThree}
            title={"4s generations"}
            subtitle={
              "Because your users shouldn't have to wait for their results to come through"
            }
          /> */}
          {dataBlog.map((item: DataBlog) => (
            <Performance {...item} key={item.id} />
          ))}
        </section>
      )}
    </>
  )
}

export default Performances
