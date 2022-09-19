import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { ProteinCard } from './components/protein/ProteinCard'
import { ProteinList } from "./components/protein/ProteinList"
import { ProteinDetail} from "./components/protein/ProteinDetail"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                <Route exact path="/proteins" element={<ProteinList />} />
                <Route path="/proteins/:proteinId" element={<ProteinDetail />} />
                navigate("/proteins");

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/buildataco" element={<ProteinCard />} />
            </Routes>
        </>
    )
}