import React from 'react'
import { RiRobot2Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = ({ scrolled , setMenuOpen, menuOpen}) => {

  const navLinks = [{
    title : "Home", 
    to: "/"
  }, {
    title : "About", 
    to: "/about"
  },{
    title : "Pricing", 
    to: "/pricing"
  },{
    title : "Contact", 
    to: "/contact"
  },{
    title : "Dashboard", 
    to: "/dashboard"
  },];
  return (

    <nav className={`fixed top-0 left-0 right-0 z-50 nav-glass bg-black`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                 <img src="https://ik.imagekit.io/cryg162lg/logo-removebg-preview.png?updatedAt=1777623094963" alt="" />
                </div>
                <span className="text-white font-bold text-xl tracking-tight">
                  Hermes<span className="text-amber-400">AI</span>
                </span>
              </div>
    
              {/* Desktop links */}
              <ul className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {navLinks.map((l) => (
                  <li key={l.title}>
                    <Link to ={l.to} className="hover:text-amber-300 transition-colors">{l.title}</Link>
                  </li>
                ))}
              </ul>
    
              {/* CTA */}
              <div className="hidden md:flex items-center gap-3">
                <Link to="/signin" className="text-white/80 text-sm hover:text-white transition-colors px-4 py-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Sign in
                </Link>
                <a
                  href="#"
                  className="btn-primary flex items-center gap-2 bg-amber-400 text-amber-950 text-sm font-semibold px-5 py-2.5 rounded-sm"
                >
                  Get Started <FiArrowRight />
                </a>
              </div>
    
              {/* Mobile hamburger */}
              <Link
                 to = "/signin"
                className="md:hidden text-white text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </Link>
            </div>
    
            {/* Mobile menu */}
            {menuOpen && (
              <div className="md:hidden bg[#1a1208] backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4">
                {["Product", "Solutions", "Pricing", "About"].map((l) => (
                  <Link to={l.to} key={l} href="#" className="text-white/80 hover:text-amber-300 py-1 text-sm font-medium transition-colors">
                    {l.title}
                  </Link>
                ))}
                <a href="#" className="btn-primary text-center bg-amber-400 text-amber-950 font-semibold px-5 py-3 rounded-full text-sm mt-2">
                  Get Started
                </a>
              </div>
            )}
          </nav>
  )
}

export default Navbar
