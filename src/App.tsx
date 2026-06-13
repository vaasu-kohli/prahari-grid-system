import { motion } from 'motion/react';
import { Shield, Radio, Presentation, Mic, Cloud, BarChart3, ChevronRight, Mail, MapPin, Map, Building2, TrainFront, Plane, Trees, Store } from 'lucide-react';
import React, { useState } from 'react';

// Make sure to use paths matching the generated assets
const ASSETS = {
  hero: '/src/assets/images/prahari_hero_1781336856368.jpg',
  detailSos: '/src/assets/images/prahari_detail_sos_1781336873979.jpg',
  detailCamera: '/src/assets/images/prahari_detail_camera_1781336891214.jpg',
  render: '/src/assets/images/prahari_render_1781336908914.jpg',
founder: 'https://raw.githubusercontent.com/vaasu-kohli/prahari-grid-system/main/src/assets/images/vaasu_picture.png',
};
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 1.11, 0.81, 0.99] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-white font-heading font-bold text-2xl tracking-tighter">
            PRAHARI<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#deployment" className="hover:text-white transition-colors">Deployment</a>
            <a href="#advantages" className="hover:text-white transition-colors">Advantages</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="px-5 py-2.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-gray-200 transition-colors">
            Inquire Now
          </a>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center bg-black overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.hero} 
            alt="PRAHARI deployed in a smart city" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Smart Urban Infrastructure</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6">
                The Foundation of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Resilient Cities.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
                Combining public safety, emergency assistance, smart monitoring, and digital communication into a single deployable system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#product" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors group">
                  Explore Product
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Product Section */}
      <section id="product" className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6 tracking-tight">An Integrated Platform</h2>
              <p className="text-lg text-gray-600">
                PRAHARI replaces multiple fragmented urban systems with a cohesive, beautifully engineered hardware enclosure and intelligent software backbone.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* 360 Viewer / Main Render */}
            <div className="lg:col-span-5 h-[600px] bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center justify-center relative group">
              <div className="absolute top-6 left-6 inline-flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">System Active</span>
              </div>
              <img 
                src={ASSETS.render} 
                alt="PRAHARI 360 Product Render" 
                className="w-auto h-full max-h-[500px] object-contain group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-full font-medium">Interactive 360° Explorer</span>
              </div>
            </div>

            {/* Features */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Emergency SOS", desc: "Instantly connects citizens to local dispatch with two-way audio." },
                { icon: Radio, title: "Smart Monitoring", desc: "Environmental sensors and 360° high-definition analytics cameras." },
                { icon: Presentation, title: "Digital Display", desc: "High-brightness out-of-home (OOH) displays for advertising." },
                { icon: Mic, title: "Public Communication", desc: "Broadcast emergency alerts and public service announcements." },
                { icon: Cloud, title: "Remote Management", desc: "Secure cloud dashboard to monitor unit health and update content." },
                { icon: BarChart3, title: "Smart Analytics", desc: "Edge AI processes foot traffic and environmental metrics locally." }
              ].map((feature, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                      <feature.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <FadeIn delay={0.2} className="relative h-80 rounded-3xl overflow-hidden group">
              <img src={ASSETS.detailSos} alt="SOS Button Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <h4 className="text-white font-medium text-lg">Tactile SOS Interface</h4>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="relative h-80 rounded-3xl overflow-hidden group">
              <img src={ASSETS.detailCamera} alt="Camera Array Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <h4 className="text-white font-medium text-lg">Integrated Sensor Array</h4>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Deployment Environments */}
      <section id="deployment" className="py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <h2 className="text-4xl font-heading font-bold text-gray-900 tracking-tight max-w-md">Scalable across any urban landscape</h2>
              <p className="text-gray-500 max-w-md">Designed to blend seamlessly into modern architectural environments while providing maximum utility.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
             {[
               { title: "Smart Cities", icon: Building2 },
               { title: "Universities", icon: Trees },
               { title: "Metro Stations", icon: TrainFront },
               { title: "Airports", icon: Plane },
               { title: "Tourist Areas", icon: MapPin },
               { title: "Commercial Districts", icon: Store },
             ].map((env, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                 <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-black hover:border-black transition-colors duration-300 cursor-default h-full flex flex-col justify-center items-center text-center">
                    <env.icon strokeWidth={1} className="w-10 h-10 mb-4 text-gray-400 group-hover:text-white/80 transition-colors" />
                    <h3 className="font-heading font-medium text-lg text-gray-900 group-hover:text-white transition-colors">{env.title}</h3>
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Why PRAHARI */}
      <section id="advantages" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-heading font-bold mb-16 tracking-tight">Platform Advantages</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Public Safety", text: "Drastically reduce emergency response times with direct-to-dispatch communication and live video feeds." },
              { num: "02", title: "Smart Monitoring", text: "Continuous environmental assessment and crowd analytics processed entirely at the edge." },
              { num: "03", title: "Public Communication", text: "A unified network for broadcasting critical alerts and civic information to pedestrians." },
              { num: "04", title: "Revenue Generation", text: "Offset deployment costs quickly through premium DOOH (Digital Out-Of-Home) advertising networks." }
            ].map((adv, i) => (
              <FadeIn key={i} delay={i * 0.1} className="border-t border-white/20 pt-6">
                <span className="text-sm font-mono text-blue-400 mb-4 block">{adv.num}.</span>
                <h3 className="text-2xl font-heading font-semibold mb-3">{adv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{adv.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Founder Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <img
              src="https://raw.githubusercontent.com/vaasu-kohli/prahari-grid-system/refs/heads/main/src/assets/images/vaasu_picture.png"
              alt="Vasu Kohli"
              className="w-40 h-40 border-4 border-red-500"
              />
            <div>
              <div className="mb-2">
                <h4 className="text-2xl font-heading font-bold text-gray-900">Vasu Kohli</h4>
                <p className="text-blue-600 font-medium text-sm tracking-wide uppercase">Founder & CEO</p>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg 2xl:text-xl font-light">
                Our vision is to transform passive city streets into active, intelligent environments that prioritize civilian safety while establishing a sustainable technological foundation for modern municipalities.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Contact & Partnerships */}
      <section id="contact" className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6 tracking-tight">Deploy PRAHARI in your city.</h2>
            <p className="text-gray-600 mb-12 text-lg">We partner with municipalities, transit authorities, and institutional campuses to modernize urban infrastructure.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <Building2 size={18} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-heading font-semibold text-gray-900">Government & Municipalities</h4>
                  <p className="text-gray-500 text-sm">Smart city integrations and public-private partnerships.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <Trees size={18} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-heading font-semibold text-gray-900">Institutional Campuses</h4>
                  <p className="text-gray-500 text-sm">University and enterprise safety networks.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 size={18} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-heading font-semibold text-gray-900">Investor Inquiries</h4>
                  <p className="text-gray-500 text-sm">Strategic investments to accelerate production scale.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" placeholder="City of..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" placeholder="john@domain.gov" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-600">
                  <option>Deployment Information</option>
                  <option>Partnership</option>
                  <option>Investment</option>
                  <option>Other</option>
                </select>
              </div>
              <button className="w-full mt-4 bg-black text-white font-semibold rounded-xl py-4 hover:bg-gray-800 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-heading font-bold tracking-tighter mb-4 md:mb-0">
            PRAHARI<span className="text-blue-500">.</span>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PRAHARI Grid Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
