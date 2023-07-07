import React from "react";
import "./index.scss";
import { images } from '../../constants'
import { motion } from "framer-motion"
import {Appwrap} from '../../wrapper'
import BallCanvas from '../../components/canvas/Ball'

const scaleVariants = {
whileInView :{
  scale: [0,1],
  opacity: [0,1],
  transition:{
    duration:1,
    ease: 'easeInOut'
  }
}
}
const headers = () => {
  return (
    <div id="home" className="app__header app__flex">    
   
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Indresh B S</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack</p>
          <p className="p-text">Web Developer</p>
          </div>
        </div>
        <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles2"
      >
      {[images.python, images.devops, images.git].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>        
          <BallCanvas icon={circle}/>
         {/* <img src={circle} alt='TechnologyLogo'/> */}
        </div>
      ))}
      </motion.div>
      </motion.div>
      <motion.div
      whileInView={{opacity: [0, 1] }}
      transition={{ duration: 0.5 , delayChildren: 0.5}}
      className="app__header-img"
      >
      <img src={images.profile} alt="ProfileImage" className="ProfileImage" />
      <div className="profileAbout">      
      <h3 className="title">Indresh B S</h3>
      <h4 className="subtitle">Full stack Web Developer</h4>
      <p className="description">A motivated individual with good knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p>
      </div>
            <motion.img
      whileInView={{scale: [0, 1] }}
      transition={{ duration: 1 , ease: "easeInOut"}}
      className="overlay_circle"
      src={images.circle}
      alt="imageCircle"
      />      
      </motion.div>
      
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
      {[images.linux, images.all5, images.vue].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
           <BallCanvas icon={circle}/>
       {/* <img src={circle} alt='TechnologyLogo'/>*/}
        </div>
      ))}
      </motion.div>
    </div>
  );
};

export default Appwrap(headers, 'home');
