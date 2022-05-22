import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiSkype,SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qhmkad8', 'template_twiimzi', form.current, 'Afz5YLr1jWgSqyiSE')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Lets discuss your website</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pranayprasad42@gmail.com</h5>
            <a href="mailto:pranayprasad42@gmail.com">Send mail</a>
          </article>
          <article className='contact__option'>
            <SiSkype className='contact__option-icon'/>
            <h4>Skype</h4>
            <h5>PranayPrasad</h5>
            <h5>live:.cid.8e15aeb518fe8cf8</h5>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=9373448016" target="_blank">Lets Chat</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact