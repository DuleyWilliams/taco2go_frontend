import React, { useState } from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import "./Taco2Go.css"


export const Taco2Go = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)