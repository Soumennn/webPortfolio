import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';


export default function Intro( { menuOpen , setMenuOpen } ) {

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, {
          showCursor: true, 
          backDelay: 1500,
          backSpeed: 60,
          strings: ['Developer', 'Designer','Freelancer' ] 
        });
        
    }, []);




    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className= "imgContainer">
                      <img src="assets/person.png" alt="" />
                      
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there , I am</h2>
                    <h1> Soumen Nath</h1>
                    <h3> [ Aspiring ] &nbsp;
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="./assets/down.png" alt="" />
                </a>
            </div>
            
        </div>
    );
}


