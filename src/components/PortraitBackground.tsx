import * as React from "react";

export interface BackgroundProps {
    color?: string;
}

export const PortraitBackground = (BackgroundProps: BackgroundProps) => <div className={BackgroundProps.color ? `portrait-background ${BackgroundProps.color}` : 'portrait-background'}></div>;