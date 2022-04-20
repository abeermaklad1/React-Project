import React from 'react';
// import jj from '../assets/images/thumbnail-10'
export default function Card (props) {
    let {title, btnTitle} = props;
    return(
        <div style={{backgroundColor: 'rgb(242, 245, 246 )'}} className=' p-3 rounded-3 text-center mb-3'>
            
            {props.children}
            <h4 className='text-danger'>{title}</h4>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, quod?</p>
            <button className='btn btn-outline-primary'>{btnTitle}</button>
        </div>
    )
    
} 
//../assets/images/thumbnail-10.jpg