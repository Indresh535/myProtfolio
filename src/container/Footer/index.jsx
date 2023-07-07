import {React, useState} from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast';

import './index.scss'

import {images} from '../../constants'
import {Appwrap} from '../../wrapper'

const Footer = () => {

  const intialValues = {user_name:'',user_email:'', user_message:''}

  const [formData, setformData] = useState(intialValues)

  
  const handleChangeInput = (e) => {
    const {name, value} = e.target
    setformData({...formData, [name]:value})
  }

  const validate = () => {
    const temp = {}  
    //temp.EmailAddress = data.EmailAddress === "" ? false : true   OR
    temp.user_name = formData.user_name !== ""
    temp.user_email = formData.user_email !== ""
    temp.user_message = formData.user_message !== ""
    return Object.values(temp).every(x => x === true)
  }

  const handleSendEmail = (e) => {
    e.preventDefault()
    if (validate()){
      emailjs.sendForm('service_n1d6j0s', 'template_4zw47pk', e.target,'p_Olk90hrauHOMNKC')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent')
      }, (error) => {
          console.log(error.text);
          toast.error('Invalid Server Error')
      })
    }else{
      toast.error('Please fill out the required field')
    }    
  }

  return (
    <form  onSubmit={handleSendEmail}>
    <Toaster />
      <div className='app__footer'>
        <h2 className='head-text'>Hire Me</h2>
        <div className='app__footer-cards'>
        <div className='app__footer-card'>
        <img src={images.email} alt='email'/>
        <a href='mailto: indreshindresh535@gmail.com' className='p-text'>indreshindresh535@gmail.com</a>
        </div>
        <div className='app__footer-card'>
        <img src={images.mobile} alt='mobileNumber'/>
        <a href='tel:9113046388' className='p-text'>tel: +91 9113046388</a>
        </div>
        </div>
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
          <input className='p-text' name='user_name' id='user_name' type='text' placeholder='Your Name' onChange={handleChangeInput} required/>
          </div>
          <div className='app__flex'>
          <input className='p-text' style={{width:'1000px'}} name='user_email' id='user_email' type='email' placeholder='Your Email' onChange={handleChangeInput} required/>
          </div>
           <div>
          <textarea className='p-text' name='user_message' id='user_message' placeholder='Your Message' onChange={handleChangeInput} required/>
          </div>
          <button type='submit' name='send' id='send' className='p-text'>Submit</button>
        </div>
        </div>
      </form>
  )
}

export default Appwrap(Footer, 'contact')
