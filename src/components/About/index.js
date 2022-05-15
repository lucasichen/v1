import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faHtml5, faJava, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={["A",'b','o','u','t',' ','m','e']}
                    index={15}
                    />
                </h1>
                <p>
                    I am a studying software engineering at McMaster University
                    and I am currently working as a software developer at Exchange Solutions.
                </p>
                <p>
                    I am a passionate software developer and I love to create new things. 
                    I am always looking for new challenges and I am always trying to learn new things.
                </p>
                <p>
                    I am experienced in the following languages: Java, JavaScript, Python, NodeJS, React, HTML5, CSS3.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EFD81D' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJava} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color='#215732' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color='#5ED4F4' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='ball-pulse'/>
        </>
    )
}

export default About