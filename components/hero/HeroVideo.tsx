
"use client";
import React, { useRef, useEffect, useState } from "react";
export default function HeroVideo({ videoSrc="/videos/hero/coastal-dental-hero.mp4", posterSrc="/videos/hero/hero-poster.jpg", className="" }:{ videoSrc?:string; posterSrc?:string; className?:string }){
  const ref=useRef<HTMLVideoElement|null>(null);
  const [ok,setOk]=useState(false);
  useEffect(()=>{ const v=ref.current; if(!v||!videoSrc) return; const on=()=>setOk(true); v.addEventListener("loadeddata",on); v.play().catch(()=>void 0); return ()=>v.removeEventListener("loadeddata",on); },[videoSrc]);
  return (<div className={`relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden ${className}`}>
    <video ref={ref} className="absolute inset-0 w-full h-full object-cover" poster={posterSrc} autoPlay muted loop playsInline preload={videoSrc?"metadata":"none"}>
      {videoSrc && <source src={videoSrc} type="video/mp4" />}
    </video>
    <div className="absolute inset-0 hero-mask" />
    <div className="absolute inset-0 grid place-items-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">Experience Luxury</h1>
        <p className="mt-4 text-lg text-white/90">Coastal Dental Care — advanced 3D dentistry in Shoreham-by-Sea.</p>
      </div>
    </div>
  </div>);
}
