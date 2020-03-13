import * as React from "react";
//@ts-ignore
import Person from '../img/Person.png';

export const Portrait = () => <div className='portrait'>
    <div className='image-container'>
        <img src={Person} alt='portrait design' className='portrait-image'/>
    </div>
    <div className='name-container'>
        <h1 className='name lobster'>Felipe Nava</h1>
    </div>
</div>;