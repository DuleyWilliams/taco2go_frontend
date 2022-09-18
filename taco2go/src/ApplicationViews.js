import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { ProteinCard } from './components/protein/ProteinCard'
import { ProteinList } from "./components/protein/ProteinList"
import { SauceCard } from "./components/sauce/SauceCard"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/buildataco" element={<ProteinCard />} />
                <Route path="/buildataco" element={<ProteinList/>} />
            </Routes>
        </>
    )
}