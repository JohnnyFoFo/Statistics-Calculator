import React from 'react';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header(props) {
    return (
        <div className='header'>
            <div className='Title'>
                <h1>Ap Stats Calculator</h1>
            </div>  
            <div className='icons'>

                <HomeIcon className='Materialicon'
                    onClick={
                        props.cards
                    }/>
                <HelpIcon className='Materialicon'
                    onClick={
                        props.help
                    }/>
            </div>

            <div className='About'>

                <div className='aboutLinks'>

                    <div className='indivIcon'>
                        <a href="https://www.instagram.com/johnny.fofo" target='_blank'>
                            <InstagramIcon/>
                        </a>
                        <p>Instagram</p>
                    </div>

                    <div className='indivIcon'>
                        <a href="https://www.github.com/JohnnyFoFo" target='_blank'>
                            <GitHubIcon/>
                        </a>
                        <p>Github</p>
                    </div>

                    <a href="https://www.linkedin.com/in/john-fortin-742824233" target='_blank' className='toLink'>
                        <div className='indivIcon'>
                            <LinkedInIcon />
                            <p >linkedIn</p>
                        </div>
                    </a>

                </div>

            </div>


        </div>
    )
}

export default Header
