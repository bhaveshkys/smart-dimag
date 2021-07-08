import React from 'react';

function Rank({name,entries}) {
    return (
        <div className='ma4 mt0 tc '>
            <p className="f3 white"> {`${name}, your current entry count is...`}</p>
            <p className="f2 white"> {entries}</p> 
       </div>
    );
}
export default Rank;  