"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaBars, FaAngleDown } from "react-icons/fa"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileMenuOpen(false)
    })
  }, [])

  return (
    <nav className="relative flex justify-between items-center pt-8 px-6">
      <Link
        href={"/"}
        className="text-gray-100 text-2xl cursor-pointer pl-2"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        LightSketch
      </Link>
      <ul className="hidden md:flex md:gap-6 md:items-center mx-auto list-none">
        <Link href={"/apis"} className={`${pathname === "/apis" ? "text-pink-600" : ""}`}>
          <li>
            APIs
            <FaAngleDown className="inline ml-0.5" />
          </li>
        </Link>
        <Link
          href={"/playground"}
          className={`${pathname === "/playground" ? "text-pink-600" : ""}`}
        >
          <li>Playground</li>
        </Link>
        <Link href={"/blog"} className={`${pathname === "/blog" ? "text-pink-600" : ""}`}>
          <li>Blog</li>
        </Link>
        <Link
          href={"/contact"}
          className={`${pathname === "/contact" ? "text-pink-600" : ""}`}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <FaBars
        className="text-xl md:hidden mt-1 cursor-pointer"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      />
      {isMobileMenuOpen && (
        <ul className="absolute flex-col text-center rounded-md list-none right-12 top-16 bg-pink-700 text-black py-4 px-8 font-semibold">
          <Link
            href={"/apis"}
            className={`${pathname === "/apis" ? "text-white" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="my-1">
              APIs
              <FaAngleDown className="inline ml-0.5" />
            </li>
          </Link>
          <Link
            href={"/playground"}
            className={`${pathname === "/playground" ? "text-white" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="my-1">Playground</li>
          </Link>
          <Link
            href={"/blog"}
            className={`${pathname === "/blog" ? "text-white" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="my-1">Blog</li>
          </Link>
          <Link
            href={"/contact"}
            className={`${pathname === "/contact" ? "text-white" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li className="my-1">Contact</li>
          </Link>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
