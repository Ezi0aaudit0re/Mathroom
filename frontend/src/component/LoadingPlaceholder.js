/**
 * This component serves as a placeholder for loading data
 */


import React from 'react';

 export const Loading = () => {
    console.log("Loaing rendering   ")
     return (
         <div className="loading-gif">
            <img src="/loading.gif" alt="Loading .." />
         </div>
     )
 }