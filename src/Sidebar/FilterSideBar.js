import React from 'react';
import './FilterSideBar.css';
import AssessmentIcon from '@mui/icons-material/Assessment';

function FilterSideBar({setCards, allCards}) {

    function filterDistribution() {
        const arr = allCards.filter((card) => {
            if (card.type == 'distribution') 
                return true;
             else {
                return false;
            }   
        })
        setCards(arr);
    }

    function filterEnterData() {
        const arr = allCards.filter((card) => {
            if (card.type == 'enter') 
                return true;
             else {
                return false;
            }
            
        })
        setCards(arr);
        console.log('enterrr');
    }

    function filterSampleData(){
        const arr = allCards.filter((card) => {
            if (card.type == 'sample') 
                return true;
             else {
                return false;
            }
            
        })
        setCards(arr);
    }
    function filterMisc(){
        const arr = allCards.filter((card) => {
            if (card.type == 'miscellaneous') 
                return true;
             else {
                return false;
            }
            
        })
        setCards(arr);
    }
    function resetCards(){
        setCards(allCards)
    }
    

    return (<div className='SideBar'>


        <div className='title'>
            <h4>Quick Filter:</h4>
        </div>

        <div className='options'>

            <div className='sideOption'> 
                  <h1></h1>
        </div>

        <div className='sideOption' onClick={() => resetCards()}>
            <h1>
                All
            </h1>
        </div>

        <div className='sideOption' onClick={() => filterEnterData()}>
            <h1>
                Enter Data
            </h1>
        </div>

        <div className='sideOption' onClick={() => filterDistribution()}>
            <h1>
                Distributions
            </h1>
        </div>

        <div className='sideOption' onClick={() => filterSampleData()}>
            <h1>
                Sample
            </h1>
        </div>
        <div className='sideOption' onClick={() => filterMisc()}>
            <h1>
                 miscellaneous
            </h1>
        </div>

        



    </div>


</div>
    )
}

export default FilterSideBar
