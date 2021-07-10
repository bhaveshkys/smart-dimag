import React from 'react';
import './FaceRecog.css';
import 'tachyons';
const FaceRecog=( { imageurl, boxes } )=> {
    return (
        <div className='mw6 center '>
            <div className='  absolute mt2' >
                <img id="inputimage" className='mt2'   src={imageurl} alt='' width='500px' height='auto' />
                
                    {boxes.map((box,i)=>{   
                        const {topRow,rightCol,bottomRow,leftCol}=box;
                        return(<div key={i} className="bounding-box" style={{top:topRow, right:rightCol,bottom:bottomRow,left:leftCol}}></div>);
                    })
                    }
            </div>
       </div>
    )
}
export default FaceRecog;  