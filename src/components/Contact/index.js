import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect,useState,useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm(
            process.env.REACT_APP_SERVICEID,
            process.env.REACT_APP_TEMPLATEID,
            refForm.current,
            process.env.REACT_APP_PUBLICID
            )
            .then(
              () => {
                alert('Message successfully sent!');
            },
            () => {
                alert('Message failed to send! Please try again');
          });
      };

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    index={15}
                    />
                </h1>
                <p>
                    I am interested in co-op opportunities - especially in large software development. 
                    However, if you have any questions or opporunties, feel free to contact me.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='text' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' />
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='ball-pulse'/>
        </>
    )
}

export default Contact;