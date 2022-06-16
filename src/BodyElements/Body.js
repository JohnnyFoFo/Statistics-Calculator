import './Body.css';
import Cards from './Cards.js'
import { useState } from 'react';
import React from 'react'
import { PropaneTankSharp } from '@mui/icons-material';

function Body({ cards, click }) {
  return (
    <div className='Body'>

      	{ cards.length > 0 &&
			cards.map((card) => {
				return (
					<div className='indCard'> 
						<Cards text={card.name} distribution={card.distribution} type={card.type} click={click} cardd={card} />
					</div>
				)
			})
		}
      
    </div>
  )
}

export default Body