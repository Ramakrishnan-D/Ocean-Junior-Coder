import React, { useState } from 'react'
import './test.css'


export default function Test() {
    const [selectedBox, setSelectedBox] = useState(1)
  const  myBox = [0,1,2,3,4,5,6]

  function inc(){
      let boxlength = myBox.length
      if(boxlength-1 === selectedBox ){
          console.log('end')
      }else{
          setSelectedBox(selectedBox+1)
      }
  }
  function dec(){
    let boxlength = myBox.length
    if( selectedBox === 0 ){
        console.log('end')
    }else{
        setSelectedBox(selectedBox-1)
    }
}
  return (
<div className='full-div'>
<div className='btns'>
<button className='btn' onClick={dec}>-</button>
<h1>{selectedBox}</h1>
<button className='btn' onClick={inc}>+</button>
</div>
<div className='f'>
        <div className='slider-div' style={{width:(myBox.length+1) * 100,left:`${-(selectedBox*100)+60}px`}}>
        {
            myBox.map((item,index)=>{
                return    <div key={index} className={`box ${selectedBox === index && 'isSelect'}`}>{item}</div>
            })           
        }
 

    </div>
   </div>
</div>
  )
}
