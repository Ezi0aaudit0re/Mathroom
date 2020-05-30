
import React from 'react'
import { Loading } from './LoadingPlaceholder'

/**
 * Placeholder component for equation result section
 * 
 */
export const EquationResultPlaceHolder = ({loading}) => {

    return (
        <div className="equation-solution"> 
        {

            loading
            ? <Loading />
            :
            <div>
                <h1> Please enter the equation in the box below</h1> 
                <h4>Equation Examples</h4>
                <div>
                    <ul>
                        <li>Addition (+)</li>
                        <li>Subtraction (-)</li>
                        <li>Division (/)</li>
                        <li>Modulo (%)</li>
                    </ul>
                </div>
            </div>

        }
           
        </div>
    )



}