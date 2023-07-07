import {React, useState} from 'react'
import './index.scss'
import { AiFillEye, AiFillGithub} from 'react-icons/ai'
import {Appwrap} from '../../wrapper'
import {motion} from 'framer-motion'
import {Tilt} from "react-tilt";
import {images} from '../../constants'


const myfilterWorksCompleted = [
  {title: 'Admission Portal', description: 'This offers many flexible and convenient features, allowing Students to explore the courses offered by the college and take admission through it.',imgUrl:images.bolt, tags:'Web-App', projectLink:'#', codeLink:'https://github.com/Indresh535/Admission_Portal.git'},
{title: 'Password Manager', description: 'The user shall be able to save all the username and passwords information of the accounts he holds in one place using this application',imgUrl:images.password_manager, tags:'Web-App', projectLink:'http://securepasswordmanager.infinityfreeapp.com/', codeLink:'https://github.com/Indresh535/password_manager.git'},
{title: 'Stock Analysis', description: 'This Project includes the description of indicators which can be used for technical analysis of Indian market Nifty stocks.',imgUrl:images.amazon, tags:'Python', projectLink:'#', codeLink:'https://github.com/Indresh535/stock_analysis.git'},
{title: 'Environmental Hazard Predction', description: 'i ama good',imgUrl:images.spotify, tags:'Python', projectLink:'#', codeLink:'https://github.com/Indresh535/Environmental_hazard_prediction.git'}
]

const Works = () => {

  const [tooltipOpen, setTooltipOpen] = useState(false);

const toggleTooltip = () => {
  setTooltipOpen(!tooltipOpen);
};

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
  const [filterWork, setFilterWork] = useState(myfilterWorksCompleted)

  const handlerWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{y:100, opacity:0}])

    setTimeout(() => {
      setAnimateCard([{y:0, opacity:1}])

      if(item === 'All'){
        setFilterWork(myfilterWorksCompleted)
      }else{
        setFilterWork(myfilterWorksCompleted.filter((w) => w.tags.includes(item)))
      }
    },500)
    }
  return (
    <div>
    <h2 className="head-text">I Know that <span>Creativity</span> and <span>Innovations</span> Never Ends</h2>
    <div className='app__work-filter'>
    {['Web-App', 'React Js', 'DevOps', 'Python', 'All'].map((item, index) => (
      <div key={index}
      onClick={() => handlerWorkFilter(item)}
      className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
      {item}
      </div>
    ))}
    </div>
    <motion.div
    animate={animateCard}
    transition={{duration:0.5, delayChildren: 0.5}}
    className='app__work-portfolio'
    >
    {filterWork.map((myWorks, index) => (
    <Tilt options={{ max: 25, scale:1.05 }}>
      <div className='app__work-item app__flex' key={index}>
        <div className='app__work-img app__flex'>
            <img src={myWorks.imgUrl} alt={myWorks.title}/>
          <motion.div
          whileHover={{opacity:[0, 1]}}
          transition={{duration:0.25, ease:'easeInOut', staggerChildren: 0.5}}
          className='app__work-hover app__flex'
          >
          <a href={myWorks.projectLink} target='_blank' rel='noreferrer'>
            <motion.div
            whileInView={{scale:[0, 1]}}
            whileHover={{scale:[1, 0.9]}}
            transition={{duration:0.25}}
            className='app__flex'
            >
                <AiFillEye/>
            </motion.div>
          </a>
          <a href={myWorks.codeLink} target='_blank' rel='noreferrer'>
            <motion.div
            whileInView={{scale:[0, 1]}}
            whileHover={{scale:[1, 0.90]}}
            transition={{duration:0.25}}
            className='app__flex'
            >
               <AiFillGithub/>
            </motion.div>
          </a>
          </motion.div>
        </div>
        <div className='app__work-content app__flex'>
          <h4 className='bold-text'>{myWorks.title}</h4>      
          <p className='p-text' style={{marginTop:10}}>{myWorks.description}</p>
            <div className='app__work-tag app__flex'>
                <p className='p-text'>{myWorks.tags}</p>
            </div>
        </div>
      </div>
      </Tilt>
    ))}
    </motion.div>
    </div>
  )
}

export default Appwrap(Works, 'works')
