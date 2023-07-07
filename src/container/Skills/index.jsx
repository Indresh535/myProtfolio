import React from 'react'
import './index.scss'
import {Appwrap} from '../../wrapper'
import Resume from './Resume'
import Iframe from 'react-iframe'

const myResumeWorks = [
  {title: 'Education', tags:'school-outline'},
{title: 'Projects', tags:'ribbon-outline'},
{title: 'Works',tags:'logo-github'},
{title: 'Skills', tags:'logo-linkedin'},
{title: 'Certificates', tags:'trophy-outline'}
]



const skills = () => {
  return (
    <div>
    <h2 className="head-text">I Know That <span>Good Skills</span> Means<span> Good Job</span></h2>
    {/*<div className='myResume'>
    <div className='navigation'>
    <ul>
      <li className='list'>
        <a href='#1' alt=''>
          <span className='icon'><ion-icon name="school-outline"></ion-icon></span>    
          <span className='title'>Education</span>
        </a>
      </li>
      <li className='list'>
        <a href='#1' alt=''>
          <span className='icon'><ion-icon name="ribbon-outline"></ion-icon></span>    
          <span className='title'>Cerificates</span>
        </a>
      </li>
      <li className='list'>
      <a href='#1' alt=''>
        <span className='icon'><ion-icon name="logo-github"></ion-icon></span>    
        <span className='title'>Projects</span>
      </a>
      </li>
      <li className='list'>
      <a href='#1' alt=''>
        <span className='icon'><ion-icon name="logo-linkedin"></ion-icon></span>    
        <span className='title'>Work</span>
      </a>
      </li>
      <li className='list'>
      <a href='#1' alt=''>
        <span className='icon'><ion-icon name="trophy-outline"></ion-icon></span>    
        <span className='title'>Hobbies</span>
      </a>
      </li>
  </ul>
  <ul>
    {myResumeWorks.map((item) => (
      <li className='list' key={`link-${item.title}`}>      
      <div/>
      <a href={`#${item.title}`} alt={item.title}>
      <span className='icon'><ion-icon name={item.tags}></ion-icon></span>    
        <span className='title'>{item.title}</span></a>
      </li>
    ))}
    </ul>  
    </div>    
    <div className='pages'>
    {/*<Resume/>    
    </div>
            </div>*/}
            <Iframe src='./Skills_Portfolio/index.html'
            width='140%'
            height='570px'
                id=""
                styles={{marginLeft:'-20%'}}
                className=""
                display="block"
                position="relative"/>
    </div>
  )
}

export default Appwrap(skills, 'skills')
