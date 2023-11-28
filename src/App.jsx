import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { isMobile } from "react-device-detect";
//import 3d scene
import Scene from "./components/Scene";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
// import components
import RightSlide1 from "./components/RightSlider/RightSLide1";
import RightSlide2 from "./components/RightSlider/RightSLide2";
import RightSlide3 from "./components/RightSlider/RightSLide3";
import RightSlide4 from "./components/RightSlider/RightSLide4";
import RightSlide5 from "./components/RightSlider/RightSLide5";
import RightSlide6 from "./components/RightSlider/RightSLide6";
import RightSlide7 from "./components/RightSlider/RightSLide7";
import RightSlide8 from "./components/RightSlider/RightSLide8";
import RightSlide9 from "./components/RightSlider/RightSLide9";

import LeftSlide1 from "./components/LeftSlider/LeftSLide1";
import LeftSlide2 from "./components/LeftSlider/LeftSLide2";
import LeftSlide3 from "./components/LeftSlider/LeftSLide3";
import LeftSlide4 from "./components/LeftSlider/LeftSLide4";
import LeftSlide5 from "./components/LeftSlider/LeftSLide5";
import LeftSlide6 from "./components/LeftSlider/LeftSLide6";
import LeftSlide7 from "./components/LeftSlider/LeftSLide7";
import LeftSlide8 from "./components/LeftSlider/LeftSLide8";
import LeftSlide9 from "./components/LeftSlider/LeftSLide9";

import "./App.css";
import "./style.css";

// import required modules
import { EffectCube, Pagination, Controller, Autoplay } from "swiper/modules";

export default function App() {

  const [started, setStarted] = useState(0);

  
  let [width,setWidth] = useState()
  useEffect(()=>{
    setWidth(window.innerWidth)
    window.addEventListener('resize',(e)=>{
      setWidth(e.currentTarget.innerWidth)
    },[null])
  })
  const pagination = {
    clickable: true,
    
  };

  const quotes = [
    {
        quote: "\"The craziest goddamn thing I've read in a long time.\"",
        author: "Alexander Payne",
        affiliation: "Academy Award winning writer / director of Sideways and The Descendants"
    },
    {
        quote: "\" “Julia Phillips meets William S. Burroughs, a sort of You’ll Never Eat Naked Lunch In This Town Again.” \"",
        author: "Steven Friedlander",
        affiliation: "CBS Films"
    },
    {
        quote: "\" I'm sniffing a breakthrough. It's like Bret Easton Ellis and Philip K. Dick had a baby, and the baby wrote a book. \"",
        author: "Jerry Stahl",
        affiliation: "author of Permanent Midnight and Bad Sex on Speed"
    },
    {
        quote: "\" The ghost of F. Scott Fitzgerald nods in approval. \"",
        author: "Lem Dobbs",
        affiliation: "writer of The Limey"
    },
    {
        quote: "\" Adam Novak has a merciless eye for a society in which striving replaces every consideration of morality. \"",
        author: "Michael Tolkin",
        affiliation: "author of The Player"
    }
  ];

  const speed = 1000
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [controlledSwiper2, setControlledSwiper2] = useState(null);
  let [open,isOpen] = useState(false)
  const [hideIcon, sethideIcon] = useState(false);
  const [start, setStart] = useState(0);
  const handleClick = (num) => {
    if (controlledSwiper) {
      controlledSwiper.slideTo(num);
    }
  };
  let mobileStyle = `
  .navBar{
    flex-direction: column !important;
    width: 100vw !important;
    height: 100vh !important;
    gap: 80px !important;
   
  }
  .navBar .book{
    font-size: 80px !important;
  }
  `
  return (
    <>
    <style>{isMobile?mobileStyle:null}</style>
    
      <span style={{display:!isMobile?'none':""}} className="burgerMenu" onClick={()=>isOpen(!open)}>{open?<AiOutlineClose/>:<AiOutlineMenu/>}</span>
      <div style={{display:!open&&isMobile?'none':''}} className={`navBar ${open?'slide':null}`}>
        <span className="book" onClick={()=>{handleClick(0);isOpen(false)}}>Rat Park</span>
        <span className="book" onClick={()=>{handleClick(1);isOpen(false)}}>the non-pro</span>
        <span className="book" onClick={()=>{handleClick(2);isOpen(false)}}>take fountain</span>
        <span className="book" onClick={()=>{handleClick(3);isOpen(false)}}>freaks of the industry</span>
        <span className="book" onClick={()=>{handleClick(4);isOpen(false)}}>rat park (audiobook)</span>
        <span className="book" onClick={()=>{handleClick(5);isOpen(false)}}>Excerpts</span>
        <span className="book" onClick={()=>{handleClick(6);isOpen(false)}}>Podcasts</span>
        <span className="book" onClick={()=>{handleClick(7);isOpen(false)}}>Swag</span>
      </div>

        <div className="container">
        <div
      className="moveIcon"
       style={{
          display:isMobile && !hideIcon?'block':'none',
          bottom:"48px",
          position: "absolute",
          zIndex: "1000"
    }}>
        <img width={150} height={150} src="assets/move.png"></img>
      </div>
      <Swiper
      onSlideChange={(e)=>{sethideIcon(true);console.log(e);setStart(e.realIndex)}}
      cubeEffect={{
        shadow:false,
        }
      }
       loop={true}
       autoplay={{
        delay: 5000,
        disableOnInteraction:true
      }}
      slidesPerView={0}
       onSwiper={setControlledSwiper2}
        effect={"cube"}
        direction={!isMobile?"vertical":"horizontal"}
        pagination={pagination}
        modules={[EffectCube, Pagination, Controller]}
        className="mySwiper"
        controller={{ control: controlledSwiper }}
        speed={speed}
      >
        <SwiperSlide>
            <RightSlide1 start={start ===0?true:false} type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
            <RightSlide2 start={start === 1?true:false} type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
            <RightSlide3 start={start === 2?true:false} type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide4 start={start === 3?true:false} type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide5 start={start === 4?true:false} type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide6 start={start === 5?true:false} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide7 start={start === 6?true:false}/>
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide8 start={start === 7?true:false}/>
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide9 start={start === 8?true:false} />
        </SwiperSlide>
      </Swiper>

      <Swiper
      loop={true}
      // loopedSlides={1}
      // slidesPerView={0}
        effect={"cube"}
        cubeEffect={{
          shadow:false,
        }}
        direction={!isMobile?"vertical":"horizontal"}
        modules={[EffectCube, Pagination, Controller, Autoplay]}
        controller={{ control: controlledSwiper2 }}
        reverseDirection={true}
        onSwiper={setControlledSwiper}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction:true
        // }}
        draggable={false}
        speed={speed}
        className={`mySwiper left ${start >=5 && start <8?'toLeft':null}`}
      >
        <div className="content">
          <SwiperSlide>
            {/* <Scene></Scene> */}
            <LeftSlide1 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide2 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide3 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide4 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide5 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide6 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide7 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide8 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide9 />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
    </>
  );
}
