import {useState} from 'react';
import './App.css';
import Header from './Header/Header.js';
import Body from './BodyElements/Body';
import React from 'react';
import FilterSideBar from './Sidebar/FilterSideBar';
import CalculatorSideBar from './Sidebar/CalculatorSideBar';
import {DEFAULT_CARDS} from './manageCards/StartingCards';
import Help from './Help/Help';



function App() {

    const [cards, setCards] = useState(DEFAULT_CARDS);
    const [screen, setScreen] = useState(0);
    const [currentCalc, setCurrentCalc] = useState({
        type: 'distribution',
            name: '',
            func: null,
            args:[
                
            ]    
    } 
    );

    return (
        <div className="App">

            <Header cards = {()=>  setScreen(0)} help = {()=> setScreen(1)} className='header' />

               {
               screen == 0 && <div className='bodys'>
                <div className='sideBar'>
                    <FilterSideBar className='SideBar' setCards={(newCards) => setCards(newCards) } allCards={DEFAULT_CARDS}/>
                 </div>
                <div className='Body'>
                    <Body cards={cards}  click={(current) => setCurrentCalc(current)}/>
                </div>
                <div className='sideBar'>
                    <CalculatorSideBar className='SideBar'calculation={currentCalc} buttons={currentCalc.func!= null ? true:false} help={()=> setScreen(1)}/>
                </div>
            </div>
            }
            {
            screen == 1 && <div classname='helpBody'>
                <Help/>
            </div>
            }
        </div>
    );
}

export default App;
