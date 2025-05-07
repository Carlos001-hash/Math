"use client"

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Image from "next/image";


export default function MyApp() {
  const [numero1, setNumero1] = useState<number[]>([]);
  const [numero2, setNumero2] = useState<number[]>([]);
  const [ddd, setDdd] = useState<number[]>([]);
  const [polygon, setPolygon] = useState(0);
  const [rectangle, setRectangle] = useState(0);
  const [ellipse, setEllipse] = useState(0);
  const [count, setCount] = useState(0);
  const [soma, setSoma] = useState(0);
  const [tr, setTr] = useState(Math.floor(Math.random() *3));
  const [switchBtn,setSwitchBtn] = useState(false);
  const [parar, setParar] = useState(true);
  const [resultado, setResultado] = useState(0);
  const [historicoResultados, setHistoricoResultados] = useState<React.ReactNode[]>([]);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [showM, setShowM] = useState(false);
  const [opM, setOpM] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);
  

  let ft = ['/Ellipse.svg', '/Rectangle.svg', '/Polygon.svg'];

  
  const handleClickMath = () => {
    let t = Math.floor(Math.random() * 100) + 1;
    let w = Math.floor(Math.random() * 100) + 1;
    let y = Math.floor(Math.random() *5)

    let res: number[] = [] ;

    if (opM == 0) {
      res[0] = t + w;
    }else if (opM == 1) {
      res[0] = t * w;
    } else if (opM == 2) {
      res[0] = w - t;
    }

    let outroNumero = [res[0] -5, res[0] -10, res[0] +2, res[0] +1, res[0] +10];
    outroNumero[y] = res[0];
    setDdd(outroNumero);

    const mt = [t];
    const mt2 = [w];

    if(t >= w) {
      setNumero1(mt);
      setNumero2(mt2);
    }else {
      setNumero1(mt2)
      setNumero2(mt)
    };

    setSoma(res[0]);
    setTr(Math.floor(Math.random() *3));
    setSwitchBtn(true);
  };

  if (tr == 1) {
    console.log("one")
  }
  const handlePoint = () => {
    if (tr == 0 ) {
      if (ellipse <= 4) {setEllipse(ellipse + 1)}
    }if (tr == 1) {
      if (rectangle <= 4) {setRectangle(rectangle + 1)}
    }else if (tr == 2) {
      if (polygon <= 4) {setPolygon(polygon + 1)}
    }
    setCount(0)
  }

  if (count == 4) {setCount(0)};

  let poly= [];
  let rect= [];
  let elli= [];

  for (let i = 0; i <= polygon -1; i++ ) {
    poly.push(<Image src="/Polygon.svg" width={336} height={336} alt="" className="w-9 md:w-10 xs:w-9 xl:w-11" />)
  }
  for (let i = 0; i <= rectangle -1; i++ ) {
    rect.push(<Image src="/Rectangle.svg" width={336} height={336} alt="" className="w-9 md:w-10 xs:w-9 xl:w-11" />)
  }
  for (let i = 0; i <= ellipse -1; i++ ) {
    elli.push(<Image src="/Ellipse.svg" width={336} height={336} alt="" className="w-9 md:w-10 xs:w-9 xl:w-11" />)
  }

  let mto: React.ReactNode[] = [];
const handlePonts = () => {
  let mps: number[] = [];
  let text = `${numero1} + ${numero2} = ${resultado}`
  if (resultado == soma) {
    mto.push(<p className="text-green-400 font-semibold">{`${text}`}</p>)
   } else {
    mto.push(<p className="text-red-400 font-semibold">{`${text}`}</p>)
   }
}




const adicionarResultado = (numero1: number, numero2: number, resultado: number, soma: number) => {
  const text = `${numero1} + ${numero2} = ${resultado}`;
  setResultado(resultado);
  setHistoricoResultados(prevResultados => [
    
      
      <p key={prevResultados.length} className={resultado === soma ? `text-green-400 font-semibold ${setAcertos(acertos +1)}` : `text-red-400 font-semibold ${setErros(erros +1)}`}>
          {text}
      </p>,
      ...prevResultados,
  ]);
};




    return (
      <div className="w-full h-screen overflow-auto">
        {parar  || (
          <div className="absolute w-full h-screen flex items-center justify-center bg-black/60 z-50">
            <div className="w-10/12 xs:w-3/12 h-auto bg-amber-100 flex flex-col gap-4 items-center justify-center  rounded-xl border-2 border-black drop-shadow-sm p-2">
              <div className="w-full h-auto text-2xl font-semibold text-center "><h2>Somatoria</h2></div>
              <div className=" w-full h-auto flex flex-col gap-2">
                <div className="flex flex-row">
                  <Image src="/Polygon.svg" width={310} height={310} alt="" className="w-12" />
                  <div className="relative w-full h-12 flex flex-row items-start ml-2  bg-gray-200 rounded-full border-2 border-black pl-2 pt-1.5">{poly}</div>  
                </div>
                <div className="flex flex-row">
                  <Image src="/Rectangle.svg" width={310} height={310} alt="" className="w-12" />
                  <div className="relative w-full h-12 flex flex-row items-start ml-2  bg-gray-200 rounded-full border-2 border-black pl-2 pt-1">{rect}</div>  
                </div>
                <div className="flex flex-row">
                  <Image src="/Ellipse.svg" width={310} height={310} alt="" className="w-12" />
                  <div className="relative w-full h-12 flex flex-row items-start ml-2  bg-gray-200 rounded-full border-2 border-black pl-2 pt-1">{elli}</div>  
                </div>
              </div>
              <div className="w-full h-14 flex flex-row items-center justify-evenly">
                <a href="https://carlos001-hash.github.io/Portifolio/" className="bg-cyan-200 w-32 h-12 flex items-center justify-center rounded-xl text-lg order-2 border-2 xs:hover:scale-110 border-black">Menu</a>
                <a href="/" className="bg-green-200 w-32 h-12 flex items-center justify-center rounded-xl text-lg order-2 border-2 xs:hover:scale-110 border-black">Denovo</a>
              </div>
            </div>
          </div>
        )}
        
        <div className="w-full h-auto flex justify-center xs:justify-between items-start gap-4 pt-5 px-12 mt-5 md:mt-0">
          <div className="relative hidden xs:flex gap-3 w-48 xl:w-56 h-32 ">
            <motion.div
              initial={{ y: '-70vh',}}
              animate={{ y: isAnimating ? 0 : '-100vh' }}
              transition={{ type: 'spring', duration: 1, delay: 2 }}
              className=" w-full h-auto flex  flex-row gap-3 ">
                <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
                
                <Image src="/Polygon.svg" width={336} height={336} alt="" className="w-12" />
                <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                  <p className="text-xl">{polygon}/5</p>
                </div>
              </div>
              <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
                
                <Image src="/Rectangle.svg" width={336} height={336} alt="" className="w-12" />
                <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                  <p className="text-xl">{rectangle}/5</p>
                </div>
              </div>
              <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
                
                <Image src="/Ellipse.svg" width={336} height={336} alt="" className="w-12" />
                <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                  <p className="text-xl">{ellipse}/5</p>
                </div>
              </div>
            </motion.div>
            
          </div>
  
          <motion.div
            initial={{ y: '-100vh',}}
            animate={{ y: isAnimating ? 0 : '-100vh' }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
            className=" w-auto h-auto flex  flex-row gap-4 ws:gap-6 mt-5">
            <div className="size-[110px]  xl:size-[160px] ws:size-[140px] flex justify-center items-center bg-amber-50 rounded-md cursor-default  text-6xl ws:text-[76px] xl:text-[86px] font-semibold border-2 border-black  drop-shadow-lg">{numero1}</div>
            {opM == 0 ? (<button onClick={() => {setOpM(opM +1)}}><Image src="/Mais.svg"  width={32} height={32} alt="" className="w-7 ws:w-20"/></button>) : null}
            {opM == 1 ? (<button onClick={() => {setOpM(opM +1)}}><Image src="/Vezes.svg"  width={32} height={32} alt="" className="w-7 ws:w-20"/></button>) : null}
            {opM == 2 ? (<button onClick={() => {setOpM(opM -2)}}><Image src="/Menos.svg"  width={32} height={32} alt="" className="w-7 ws:w-20"/></button>) : null}
            <div className="size-[110px] xl:size-[160px] ws:size-[140px] flex justify-center items-center bg-amber-50 rounded-md cursor-default text-6xl ws:text-[76px] xl:text-[86px] font-semibold border-2 border-black drop-shadow-lg">{numero2}</div>
          </motion.div>

          <div className="hidden xs:flex w-48 xl:w-56 h-auto">
            <motion.div
              initial={{ y: '-100vh',}}
              animate={{ y: isAnimating ? 596 : '-100vh' }}
              transition={{ type: 'spring', delay: 0.8, stiffness: 100, damping: 20  }}
              className=" w-full h-auto ">
              <Image src="/Tapete.svg" width={83} height={155} alt="" className=" absolute bottom-10 right-[61px] w-60 "/>
            </motion.div>
            
            {count == 2 && (
              <motion.div
              initial={{ y: '-100vh',}}
              animate={{ y: isAnimating ? 228 : '-100vh' }}
              transition={{ type: 'tween', duration: 0.7 }}
              className="absolute bottom-[350px] right-[125px] z-50">
                <Image src="/Fechado.svg" width={83} height={155} alt="" className="w-48 flex z-50 "/>
              </motion.div>
            )}
             <motion.div
                initial={{ y: '-100vh',}}
                animate={{ y: isAnimating ? 228 : '-100vh' }}
                transition={{ type: 'tween', duration: 0.7 }}
                className=" group absolute w-48 h-auto bottom-[350px] right-[125px] z-50">
                  
                
              {count == 3 && (
                
                  <Image src="/Aberto.svg" width={83} height={155} alt="" className="w-48 flex z-50 "/>
               
              )}
              {count == 3 && (
                <button onClick={handlePoint} className="absolute bottom-10 right-[75px] transition-all duration-500 group-hover:bottom-20  z-50"><Image src={ft[tr]} width={336} height={336} alt="" className="w-12" /></button>
              )}
            </motion.div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center mt-9">
            <motion.div
              initial={{ y: '-20vh',}}
              animate={{ y: isAnimating ? 0 : '-100vh' }}
              transition={{ type: 'spring', duration: 1, delay: 1 }}
              className=" w-auto h-auto flex  flex-row gap-6 mt-5">
                {switchBtn ? (
                  <button className="bg-yellow-200 py-4 px-7 rounded-3xl border-2 border-black hover:scale-105 drop-shadow-lg " onClick={() => {setParar(false)}}>Parar</button>  
                ):(
                  <button className="bg-green-300 py-4 px-6 rounded-3xl border-2 border-black hover:scale-105 drop-shadow-lg " onClick={handleClickMath}>Começar</button>
                )}
              
              
            </motion.div>
          
        </div>
        <div className="relative w-full h-64 flex justify-center">
        <motion.div
          initial={{ x: '-150vh' }}
          animate={{ x: isAnimating ? 0 : '-100vh' }}
          transition={{ type: 'tween', duration: 1, delay: 0.8, stiffness: 50, damping: 6  }}
          className="absolute left-[0px] w-auto h-64 flex justify-start items-center  bg-gay-100/70 rounded-full drop-shadow-sm z-50">
            <div className={ showM ? "flex  justify-center items-center w-[256px] h-[160px]  bg-yellow-50 border-2 border-black rounded-lg z-50" : "hidden  justify-center items-centerw-[256px] h-[160px]  bg-yellow-50 border-2 border-black rounded-lg z-50"}>
              <div className="w-[234px] h-[138px] flex flex-col bg-black border-2 border-black rounded-lg overflow-y-auto p-2">
                <div className="w-full h-auto p-1">
                  <h3 className="text-green-400 font-semibold">Erros e acertos</h3>
                  <p className="text-green-400 font-semibold">Acertos: {acertos}</p>
                  <p className="text-green-400 font-semibold">Erros: {erros}</p>
                  <p className="text-green-400 font-semibold">----------------------------------</p>
                </div>
                {historicoResultados.map((item, index) => (
                  <div key={index} className="w-full h-auto flex flex-col">
                   {item}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => {showM ? setShowM(false) : setShowM(true)}} className="relative w-16 h-64 flex items-center bg-red-500y -ml-1">
                <Image src="/grip.svg" width={140} height={194}  alt="" className="-ml-3" />
            </button>
        </motion.div>

          <motion.div
          initial={{ x: '-150vh' }}
          animate={{ x: isAnimating ? 0 : '-100vh' }}
          transition={{ type: 'spring', duration: 1, delay: 0.8, stiffness: 50, damping: 6  }}
          className="w-[286px] h-64 flex justify-center items-center  bg-gay-100/70 rounded-full drop-shadow-sm">
              <button onClick={() => {if (ddd[0] == soma) {setCount(count + 1); handleClickMath();}adicionarResultado(numero1[0], numero2[0], ddd[0], soma);}} className="size-14 bg-red-400/70  mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl xs:hover:translate-y-2 xs:hover:scale-125  hover:border-white cursor-default">{ddd[0]}</button>
              <button onClick={() => {if (ddd[1] == soma) {setCount(count + 1); handleClickMath();}adicionarResultado(numero1[0], numero2[0], ddd[1], soma);}} className="size-14 bg-red-400/70  mb-mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl xs:hover:-translate-y-2 xs:hover:scale-125  hover:border-white cursor-default">{ddd[1]}</button>
              <button onClick={() => {if (ddd[2] == soma) {setCount(count + 1); handleClickMath();}adicionarResultado(numero1[0], numero2[0], ddd[2], soma);}} className="size-14 bg-red-400/70  mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl xs:hover:translate-y-2 xs:hover:scale-125  hover:border-white cursor-default">{ddd[2]}</button>
              <button onClick={() => {if (ddd[3] == soma) {setCount(count + 1); handleClickMath();}adicionarResultado(numero1[0], numero2[0], ddd[3], soma);}} className="size-14 bg-red-400/70  mb-mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl xs:hover:-translate-y-2 xs:hover:scale-125  hover:border-white cursor-default">{ddd[3]}</button>
              <button onClick={() => {if (ddd[4] == soma) {setCount(count + 1); handleClickMath();}adicionarResultado(numero1[0], numero2[0], ddd[4], soma);}} className="size-14 bg-red-400/70  mt-16 rounded-full border-2 border-black drop-shadow-lg text-2xl xs:hover:translate-y-2 xs:hover:scale-125  hover:border-white cursor-default">{ddd[4]}</button>
          </motion.div>
        </div>
        <motion.div
                initial={{ y: '100vh',}}
                animate={{ y: isAnimating ? 0 : '-100vh' }}
                transition={{ type: 'spring', delay: 0, stiffness: 100, damping: 20  }}
                className="fixed bottom-3 flex items-center justify-center w-full hauto ">

          <div className=" fixed bottom-3  z-50 w-10/12 h-20 rounded-full border-2 border-black flex  xs:hidden flex-row justify-around items-center gap-4">
            <div className="relative flex gap-3 w-32 xl:w-56 h-16 ">
              <div className=" w-full h-auto flex  flex-row gap-3 ">
                <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
                  <Image src="/Polygon.svg" width={336} height={336} alt="" className="w-12" />
                  <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                    <p className="text-xl">{polygon}/5</p>
                  </div>
                </div>
                <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
                  
                  <Image src="/Rectangle.svg" width={336} height={336} alt="" className="w-6" />
                  <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                    <p className="text-xl">{rectangle}/5</p>
                  </div>
                </div>
                <div className="relative flex flex-col justify-end items-center w-14 h-auto bg-pink-300/30 rounded-t-full pt-4 border-2 border-black drop-shadow-xl">
                  
                  <Image src="/Ellipse.svg" width={336} height={336} alt="" className="w-6" />
                  <div className="w-full h-10 flex  justify-center items-center border-t-2 border-black">
                    <p className="text-xl">{ellipse}/5</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="relative bg-red-400 size-[70px] rounded-full flex justify-center items-center xs:hidden">
              <div className="absolute flex justify-center w-full h-auto ">
                <Image src="/Tapete.svg" width={83} height={155} alt="" className=" absolute   size-[50px] "/>
              </div>
              
              {count == 2 && (
                <motion.div
                initial={{ y: '-100vh',}}
                animate={{ y: isAnimating ? 0 : '-100vh' }}
                transition={{ type: 'tween', duration: 0.7 }}
                className=" rounded-full right-[125px] z-50">
                  <Image src="/Fechado.svg" width={83} height={155} alt="" className="w-7 flex z-50 "/>
                </motion.div>
              )}
                <motion.div
                  initial={{ y: '-100vh',}}
                  animate={{ y: isAnimating ? 0 : '-100vh' }}
                  transition={{ type: 'tween', duration: 0.7 }}
                  className=" group absolute flex justify-centerd  w-auto h-auto z-50">
                  {count == 3 && (
                    
                      <Image src="/Aberto.svg" width={83} height={155} alt="" className="w-7  z-50 "/>
                  
                  )}
                  {count == 3 && (
                    <button onClick={handlePoint} className="absolute bottom-0 transition-all duration-500 group-hover:bottom-16  z-50"><Image src={ft[tr]} width={336} height={336} alt="" className="w-12" /></button>
                  )}
                </motion.div>
            </div>
          </div>
        </motion.div>
        
      </div>
    )
}

