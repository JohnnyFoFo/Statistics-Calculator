import './Cards.css';
import React from 'react';
import AssessmentIcon from '@mui/icons-material/Assessment';
import {colors} from '@material-ui/core';
import CalculateIcon from '@mui/icons-material/Calculate';
import CompareIcon from '@mui/icons-material/Compare';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';


function Cards({text, type, click,cardd}) {

    
    

    return (
        <div className='card' onClick={()=> click(cardd)}>

            <div className='imgg'>
                {
                type == 'distribution' && <AssessmentIcon className='icon'
                    style={
                        {color: 'blue'}
                    }
                    />
            }
                {
                type == 'enter' && <CalculateIcon className='icon'
                    style={
                        {color: 'yellow'}
                    }/>
            }
                {
                type == 'compare' && <CompareIcon className='icon'
                    style={
                        {color: 'orange'}
                    }/>
            } 
             {
                type == 'sample' && <PeopleAltIcon className='icon'
                style={
                    {color: 'purple'}
                }/>
            }
            {
                type == 'miscellaneous' && <BubbleChartIcon className='icon'
                style={
                    {color: 'red'}
                }/>
            }
            </div>
           


            <div className='title'>
                <p>{text}</p>
            </div>


        </div>

    )
}

export default Cards
