import * as React from "react";
import { Portrait, MyInfo, PortraitBackground } from '.';

export const HomePage = () => 
    <div>
        <PortraitBackground color={'orange'}/>
        <PortraitBackground />
        <div className='page'>
            <Portrait />
            <MyInfo />
        </div>
    </div>;