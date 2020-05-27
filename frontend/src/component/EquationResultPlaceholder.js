
import React from 'react'


/**
 * Placeholder component for equation result section
 * 
 */
export const EquationResultPlaceHolder = () => {

    return (
        <div className="equation-solution"> 
           <h1> Please enter the equation in the box below</h1> 
           <h4>Equation Examples</h4>
           <div>
               <ul>
                   <li>Addition (+)</li>
                   <li>Subtraction (-)</li>
                   <li>Division (/)</li>
                   <li>Modulo (%)</li>
                   <li>Power (**)</li>
               </ul>
           </div>
        </div>
    )



}