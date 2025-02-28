"use client"

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MyApp() {
  const [numero1, setNumero1] = useState<number[]>([]);
  const [numero2, setNumero2] = useState<number[]>([]);
  const [ddd, setDdd] = useState<number[]>([]);
  const [polygon, setPolygon] = useState(0);
  const [rectangle, setRectangle] = useState(0);
  const [ellipse, setEllipse] = useState(0);
  const [count, setCount] = useState(0);
  const [soma, setSoma] = useState(0);
  const [tr, setTr] =useState(Math.floor(Math.random() *3));

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);
  

  let ft = ['/Ellipse.svg', '/Rectangle.svg', '/Polygon.svg'];

  
  const handleClickMath = () => {
    let t = Math.floor(Math.random() * 100) + 1;
    let w = Math.floor(Math.random() * 100) + 1;
    let y = Math.floor(Math.random() *5)

    let res = t + w;

    let outroNumero = [res -5, res -9, res +2, res +1, res -15];
    outroNumero[y] = res;
    setDdd(outroNumero);

    const mt = [t];
    const mt2 = [w];

    if(t >= w) {
      setNumero1(mt);
      setNumero2(mt2);
    }else {
      setNumero1(mt2)
      setNumero2(mt)
    }

    setSoma(res)
    setTr(Math.floor(Math.random() *3))
  };


  if (tr == 1) {
    console.log("one")
  }
  const handlePoint = () => {
    if (tr == 0) {
      setEllipse(ellipse + 1)
    }if (tr == 1) {
      setRectangle(rectangle + 1)
    }else if (tr == 2) {
      setPolygon(polygon + 1)
    }
    setCount(0)
  }
  
    return (
      <div className="w-full h-screen bg-amber-100">
        <div className="w-full h-auto flex justify-between items-start gap-4 pt-5 px-12">
          <div className="relative flex gap-3 w-56 h-auto ">
            <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
              
              <Image src="/Polygon.svg" width={336} height={336} alt="" className="w-12" />
              <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                <p className="text-xl">{polygon}</p>
              </div>
            </div>
            <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
              
              <Image src="/Rectangle.svg" width={336} height={336} alt="" className="w-12" />
              <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                <p className="text-xl">{rectangle}</p>
              </div>
            </div>
            <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
              
              <Image src="/Ellipse.svg" width={336} height={336} alt="" className="w-12" />
              <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                <p className="text-xl">{ellipse}</p>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex  flex-row gap-6 mt-5">
            <div className="size-[160px] flex justify-center items-center bg-amber-50 rounded-md text-8xl font-semibold border-2 border-black  drop-shadow-lg">{numero1}</div>
            <Image src="/Mais.svg"  width={32} height={32} alt="" className="w-20"/>
            <div className="size-[160px] flex justify-center items-center bg-amber-50 rounded-md text-8xl font-semibold border-2 border-black drop-shadow-lg">{numero2}</div>
          </div>
          <div className="w-56 bg-red-500">
            <Image src="/Tapete.svg" width={83} height={155} alt="" className="absolute bottom-28 right-32 w-60 "/>
            {count == 2 && (
              <motion.div
              initial={{ y: '-100vh',}}
              animate={{ y: isAnimating ? 0 : '-100vh' }}
              transition={{ type: 'tween', duration: 0.5 }}
              className="absolute bottom-32 right-[154px] z-50">
                <Image src="/Fechado.svg" width={83} height={155} alt="" className="w-48 flex z-50 "/>
              </motion.div>
            )}
            <div className="group">
              {count == 3 && (
                <div className="absolute bottom-32 right-[154px] z-50">
                  <Image src="/Aberto.svg" width={83} height={155} alt="" className="w-48 flex z-50 "/>
                </div>
              )}
              {count == 3 && (
                <button onClick={handlePoint} className="absolute bottom-44 right-[226px] transition-all duration-500 group-hover:bottom-56  z-50"><Image src={ft[tr]} width={336} height={336} alt="" className="w-12" /></button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center mt-9">
          <button className="bg-green-300 py-4 px-6 rounded-3xl border-2 border-black drop-shadow-lg " onClick={handleClickMath}>Click Here!</button>
        </div>
        <div className="w-full h-64 flex justify-center  bg-red-5">
          <div className=" w-64 h-64 flex justify-center items-center animate-spin-slow an transition delay-75 duration-200 bg-gay-100/70 rounded-full drop-shadow-sm">
            
          <motion.div
          initial={{ x: '-150vh' }}
          animate={{ x: isAnimating ? 0 : '-100vh' }}
          transition={{ type: 'spring', duration: 0 }}
          className="w-64 h-64 flex justify-center items-center animate-spin-slow an transition delay-75 duration-200 bg-gay-100/70 rounded-full drop-shadow-sm">
            <button onClick={() => {if(ddd[0] == soma){setCount(count +1) ;handleClickMath(); console.log(count)}else if (count > 0) {setCount(count -1); console.log(count)}}} className="size-12 bg-red-400/70  mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl hover:translate-y-2 hover:scale-125  hover:border-white">{ddd[0]}</button>
            <button onClick={() => {if(ddd[1] == soma){setCount(count +1) ;handleClickMath(); console.log(count)}else if (count > 0) {setCount(count -1); console.log(count)}}} className="size-12 bg-red-400/70  mb-mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl hover:-translate-y-2 hover:scale-125  hover:border-white">{ddd[1]}</button>
            <button onClick={() => {if(ddd[2] == soma){setCount(count +1) ;handleClickMath(); console.log(count)}else if (count > 0) {setCount(count -1); console.log(count)}}} className="size-12 bg-red-400/70  mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl hover:translate-y-2 hover:scale-125  hover:border-white">{ddd[2]}</button>
            <button onClick={() => {if(ddd[3] == soma){setCount(count +1) ;handleClickMath(); console.log(count)}else if (count > 0) {setCount(count -1); console.log(count)}}} className="size-12 bg-red-400/70  mb-mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl hover:-translate-y-2 hover:scale-125  hover:border-white">{ddd[3]}</button>
            <button onClick={() => {if(ddd[4] == soma){setCount(count +1) ;handleClickMath(); console.log(count)}else if (count > 0) {setCount(count -1); console.log(count)}}} className="size-12 bg-red-400/70  mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl hover:translate-y-2 hover:scale-125  hover:border-white">{ddd[4]}</button>
          </motion.div>
            

          </div>
        </div>
      </div>
    )
}

