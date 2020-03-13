import * as React from "react";
import { Portrait, MyInfo, PortraitBackground } from '.';

export const HomePage = () => 
    <div>
        <PortraitBackground color={'orange'}/>
        <PortraitBackground />
        <section className='page'>
            <Portrait />
            <MyInfo />
        </section>
    </div>;