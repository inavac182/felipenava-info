import * as React from "react";
//@ts-ignore
import Person from '../img/Person.png';

export const Portrait = () => 
    <section className='portrait'>
        <div className='image-container'>
            <img src={Person} alt='portrait design' className='portrait-image'/>
            <div className='clearer'></div>
        </div>
        <div className='name-container'>
            <div className='vertical-center'>
                <h1 className='name lobster'>Felipe Nava</h1>
                <small>Software Engineer at Expedia Group</small>
            </div>
        </div>
    </section>;