"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaBars, FaAngleDown } from "react-icons/fa"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="relative flex justify-between items-center pt-8 px-6">
      <Link href={"/"} className="text-gray-100 text-2xl cursor-pointer">
        LightSketch
      </Link>
      <ul className="hidden md:flex md:gap-6 md:items-center mx-auto list-none">
        <Link href={"/apis"}>
          <li>
            APIs
            <FaAngleDown className="inline ml-0.5" />
          </li>
        </Link>
        <Link href={"/playground"}>
          <li>Playground</li>
        </Link>
        <Link href={"/blog"}>
          <li>Blog</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
      <FaBars
        className="text-xl md:hidden mt-1 cursor-pointer"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      />
      {isMobileMenuOpen && (
        <ul className="absolute flex-col text-center rounded-md list-none right-12 top-16 bg-blue-300 text-black py-4 px-8 ">
          <Link href={"/apis"}>
            <li className="my-1">
              APIs
              <FaAngleDown className="inline ml-0.5" />
            </li>
          </Link>
          <Link href={"/playground"}>
            <li className="my-1">Playground</li>
          </Link>
          <Link href={"/blog"}>
            <li className="my-1">Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li className="my-1">Contact</li>
          </Link>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
