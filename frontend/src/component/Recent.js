import React from 'react';

import {Equation} from "./Equation"
import {Loading} from './LoadingPlaceholder'


export const Recent = ({equations, newData}) => {


    return (
        
            <div className="col-5 px-0">
                <div className="bg-white">

                    <div className="bg-gray px-4 py-2 bg-light">
                        <p className="h5 mb-0 py-1">Recent </p>
                    </div>

                    <div className="recent-box" >
                        {
                            (equations.length > 0)
                            ? 
                            <div className="list-group rounded-0">
                                {
                                    equations.map(
                                        equation => <Equation equation={equation} key={equation.id} />

                                    )
                                }
                            </div>
                            : <Loading />

                        }

             
                    </div>
                </div>
             </div>
    )

}