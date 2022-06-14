import React from 'react'
import './Help.css';


function Help() {
  return (
    <div className='Help'>
        <h1>FAQs</h1>
        <ul className='suggestions'>
            <li>Entering a value/s of wrong type (integer, float, etc.)</li>
            <ul className='solutions'><li>Check Description for the expected input for calculation </li></ul>
            <li>Not properly entering data from List (i.e sample data)</li>
            <ul className='solutions'><li>Make sure to have each value seperated by a coma</li></ul>
            <li>Compare Samples Calculation crashing page</li>
            <ul className='solutions'><li>For the Compare Two Samples calculation you need to samples with equal size, or else the calculation will not work</li></ul>
            <li>Issues when entering lists of data</li>
            <ul className='solutions'><li>All calculations require at least two values in a list of data, so make sure to meet that requirement</li></ul>
            <li>If you still are having issues check the simple statistics javascript library to see if you are entering in incorrect values</li>
            <ul className='solutions'><li><a href='https://simplestatistics.org/docs/' target='_blank'>Click Here</a></li></ul>
        </ul>
        <h3>If you still have issues email: John.fortin2004@gmail.com</h3>
    </div>
  )
}

export default Help