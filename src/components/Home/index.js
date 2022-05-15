import LogoTitle from '../../assets/images/logo-lc.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ','L','u','c','a','s']
    const jobArray1 = ['a',' ','s','o','f','t','w','a','r','e',' ']
    const jobArray2 = ['e','n','g','i','n','e','e','r','i','n','g',' ','s','t','u','d','e','n','t','.']
    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 5500)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                {/* Hi I'm Lucas software engineering student. */}
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _11`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'</span>
                <span className={`${letterClass} _15`}>m</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={16}/>
                <img src={LogoTitle} alt='developer'/>      {/* Logo image */}
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray1} index={21}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray2} index={31}/>
                </h1>
                <h2>Software Developer @ Exchange Solutions</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='ball-pulse'/>
        </>
    );
}

export default Home