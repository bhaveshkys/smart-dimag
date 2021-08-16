import React from 'react';
import './rank.css';
function Rank({name,entries}) {
    return (
        <div className='br4 ma4 mt0 tc ba blue   b--black-10 mv4 w-150 w-50-m w-60-l mw6 center shadow-5 '>
            <p className="f3 near-white "> {`${name}, your current entry count is...`}</p>
            <p className="f2 near-white"> {entries}</p> 
            <h3 className="near-white">This smart brain will detect faces in any picture.Give it a try(paste a link ending with .jpg)</h3>
       </div>
    );
}
export default Rank;  