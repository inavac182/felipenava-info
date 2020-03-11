import * as React from "react";
import * as ReactDOM from "react-dom";
import './less/main.less';
import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("main")
);