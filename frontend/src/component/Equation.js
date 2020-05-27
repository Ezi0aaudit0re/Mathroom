
import React from 'react';

export const Equation = ({equation}) => {
    return (
        <a href="#" className="list-group-item list-group-item-action active text-white rounded-0">
           <div className="media">
                {/*<img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" className="rounded-circle" />*/}
               <div className="media-body ml-4">
                   <div className="d-flex align-items-center justify-content-between mb-1">
                       <h6 className="mb-0">{equation.username}</h6><small className="small font-weight-bold">{equation.date_posted}</small>
                   </div>
                   <p className="font-italic mb-0 text-small">{equation.equation}</p>
               </div>
           </div>
        </a>
    )
}