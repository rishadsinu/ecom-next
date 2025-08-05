"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart, Zap, Sparkles, Cpu } from "lucide-react"
import { useSettings } from "@/lib/contexts/settings-context"
import { useShop } from "@/lib/contexts/shop-context"
import Image from "next/image"

export default function Footer() {
  const { settings } = useSettings()
  const { shop } = useShop()
  const [currentYear] = useState(new Date().getFullYear())

  // Enhanced theming
  const theme =
    shop === "A"
      ? {
          // Cosmetics Theme
          bg: "bg-gradient-to-br from-gray-900 via-pink-900 to-rose-900",
          text: "text-pink-100",
          accent: "text-pink-400",
          hover: "hover:text-pink-300",
          logo: "bg-gradient-to-r from-pink-400 to-rose-500",
          border: "border-pink-800",
          icon: Heart,
          socialHover: "hover:text-pink-400 hover:scale-110",
          description:
            "Step into a world of elegance and self-care, where quality, experience, and empowerment come together to redefine your beauty journey.",
        }
      : {
          // Gadgets Theme
          bg: "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800",
          text: "text-cyan-100",
          accent: "text-cyan-400",
          hover: "hover:text-cyan-300",
          logo: "bg-gradient-to-r from-cyan-400 to-blue-500",
          border: "border-cyan-800",
          icon: Cpu,
          socialHover: "hover:text-cyan-400 hover:scale-110",
          description:
            "Discover cutting-edge technology and innovation, where advanced engineering, superior quality, and user experience converge to revolutionize your digital lifestyle.",
        }

  const IconComponent = theme.icon

  return (
    <footer id="contact" className={`${theme.bg} ${theme.text} relative overflow-hidden`}>
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${
              shop === "A"
                ? "bg-gradient-to-r from-pink-400/20 to-rose-400/20"
                : "bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
            } rounded-full animate-float opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Restaurant Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              {settings.restaurant_logo ? (
                <div className="relative w-12 h-12">
                  <Image
                    src={settings.restaurant_logo || "/placeholder.svg"}
                    alt={settings.restaurant_name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className={`w-12 h-12 ${theme.logo} rounded-xl flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              )}
              <div>
                <h3 className={`${shop === "A" ? "font-serif" : "font-mono"} text-3xl font-bold ${theme.text}`}>
                  {settings.restaurant_name}
                </h3>
                <p className={`${theme.accent} text-lg ${shop === "A" ? "font-script" : "font-mono"}`}>
                  {shop === "A" ? "Beauty" : "Tech"}
                </p>
              </div>
            </div>

            <p className={`${theme.text} leading-relaxed text-lg max-w-md`}>{theme.description}</p>

            <div className="flex space-x-6">
              <a href="#" className={`${theme.text} ${theme.socialHover} transition-all duration-300`}>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className={`${theme.text} ${theme.socialHover} transition-all duration-300`}>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className={`${theme.text} ${theme.socialHover} transition-all duration-300`}>
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className={`font-bold text-xl ${theme.accent} flex items-center`}>
              {shop === "A" ? <Sparkles className="w-5 h-5 mr-2" /> : <Zap className="w-5 h-5 mr-2" />}
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className={`${theme.text} ${theme.hover} transition-colors text-lg`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className={`${theme.text} ${theme.hover} transition-colors text-lg`}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#about" className={`${theme.text} ${theme.hover} transition-colors text-lg`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className={`${theme.text} ${theme.hover} transition-colors text-lg`}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className={`font-bold text-xl ${theme.accent} flex items-center`}>
              <IconComponent className="w-5 h-5 mr-2" />
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className={`w-6 h-6 ${theme.accent} mt-1 flex-shrink-0`} />
                <div>
                  <p className={`${theme.text} text-lg`}>23/384/A62 Near KNH Hospital</p>
                  <p className={`${theme.text} text-lg`}>Railway Station Road Uppala</p>
                  <p className={`${theme.text} text-lg`}>Kasaragod, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className={`w-6 h-6 ${theme.accent} flex-shrink-0`} />
                <p className={`${theme.text} text-lg`}>+91 777 000 3639</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className={`w-6 h-6 ${theme.accent} flex-shrink-0`} />
                <p className={`${theme.text} text-lg`}>sabsonlinestore@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours - Full Width */}
        <div className="mt-16 pt-12 border-t border-opacity-20 ${theme.border}">
          <div className="text-center">
            <h4 className={`font-bold text-2xl ${theme.accent} mb-8 flex items-center justify-center`}>
              <Clock className="w-6 h-6 mr-3" />
              Opening Hours
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className={`${theme.text} text-center`}>
                <p className="font-semibold text-lg mb-2">Monday - Thursday</p>
                <p className="text-lg">5:00 PM - 10:00 PM</p>
              </div>
              <div className={`${theme.text} text-center`}>
                <p className="font-semibold text-lg mb-2">Friday - Saturday</p>
                <p className="text-lg">5:00 PM - 11:00 PM</p>
              </div>
              <div className={`${theme.text} text-center`}>
                <p className="font-semibold text-lg mb-2">Sunday</p>
                <p className="text-lg">4:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${theme.border} border-opacity-20 mt-16 pt-12`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${theme.text} text-lg flex items-center`}>
              <IconComponent className="w-5 h-5 mr-2" />© {currentYear} {settings.restaurant_name}. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link href="/privacy" className={`${theme.text} ${theme.hover} text-lg transition-colors`}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={`${theme.text} ${theme.hover} text-lg transition-colors`}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
