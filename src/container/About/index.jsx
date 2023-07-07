import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import './index.scss'
import {Appwrap} from '../../wrapper'
//import { fadeIn, textVariant } from "../../utils/motion";
import Modal from 'react-modal';
import Carousel from 'react-elastic-carousel';
import {Tilt} from "react-tilt";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'550px',
    height:'550px'
  },
};

const customBreakPoints = [
  { width: 1750 },
]


const abouts = [
  {title: 'GitHub', description: 'I have some experience  with Version Control,Pull Requests, Push Requests and Creating Repository.',imgUrl:images.Github_Certificate},
  {title: 'Devops', description: 'Plannig to Start the Projects to gain Some Experienece like AWS, Docker, Linux and to build some secure CI/CD Piplines.',imgUrl:images.IT_MasterDevops},
  {title: 'React', description: 'Completed a Real Time Projectwith react  as FronEnd and >nt Coreas backend Api with JWT Authentication',imgUrl:images.React_Udemy_Certificate},
  {title: 'ISC2', description: 'Targeting to Complete Cyber Security Certificate of CISSP in next 5 Years',imgUrl:images.ISC2_Self_Placed},
  {title: 'Ethical Hacking Essential', description: 'Targeting to full Complete Ethical Hacking Course BBy EC-Council',imgUrl:images.Ethical_Hacking_Essential},
  {title: 'Python', description: 'I am quite proficient in Python.',imgUrl:images.pythonCertificate},
  {title: 'Machine Learning', description: 'Done some Mini Projects on Python Machine Learning Models',imgUrl:images.tcsRandMLCertificate},
  {title: 'Google Digital', description: 'Done Some Basic Certificate with Google Digital',imgUrl:images.googleDigitalCertificate},
  {title: 'Artificial Intelligence ', description: 'Done Some IoT Based, Rasbery Pi Project with Image Recognition',imgUrl:images.udemyMLCertificate}
]


const About = () => {
  const [img, setImg] = useState('');

let subtitle;
const [modalIsOpen, setIsOpen] = useState(false);

function openModal(imgurl) {
  setIsOpen(true)
  setImg(imgurl)
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}


  return (
    <div>
      <h2 className="head-text" >
      My <span>Certificates</span> with my <span>Knowledge</span>   </h2>
  
      <div className="app__profiles">
      
       
      
      
      <Carousel itemPadding={[0, 0]} outerSpacing={10} focusOnSelect={true} itemsToShow={3} breakPoints={customBreakPoints} enableTilt itemsToScroll={2}>
        {abouts.map((about, index) => (
          <Tilt options={{ max: 15, scale:1 }}>
                <motion.div
                whileInView={{opacity:1}}
              // whileHover={{scale:1.1}}
                transition={{duration:0.5, type:'tween'}}
                className="app__profile-item"
                key={about.title + index}
                >
                      <img src={about.imgUrl} alt={about.title} onClick={() => openModal(about.imgUrl)}/> 
                      <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
                      <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
                      
                </motion.div>
            </Tilt>
        ))}
        </Carousel>
        
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Certificate Modal"
      >
        
        <button onClick={closeModal} style={{position:'absolute',left:0, marginTop:'-20px'}}>✖️</button>
        <img src={img} alt='Certificate' width={500} height={500}/>
      </Modal>
      </div>
      
    </div>
  )
}

export default Appwrap(About, 'about')
