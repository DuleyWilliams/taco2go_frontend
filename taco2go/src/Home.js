import React from "react";
import { PropsAndState } from './components/PropsAndState'

export const Home = () => (
    <>
        <h1>🌮Taco2️⃣Go🌮</h1>
        <small>Get your fix no matter the mix</small>
        <address>
            <div>Get More Tacos</div>
            <div>Anywhere you Go</div>
        </address>
        <PropsAndState yourName={"Duley"} />
    </>
)