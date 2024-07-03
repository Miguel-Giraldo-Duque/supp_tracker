import { Routes, Route } from "react-router-dom";
import { TrackDay } from './trackDay.js';
import React from 'react'
import { Home } from "./home.js";
import { Progess } from "./progess.js";
import { NewGoals } from "./newgoals.js";
import { Newtracker } from "./Newtracker.js";
import { DataProvider } from "./dataContext.js";


export const RouterApp = () => {
  return (
    <DataProvider>
      <Routes>
        <Route  index path="/" element={<Home />} />
        <Route path="/track" element={<TrackDay />} />
        <Route path="/newTracker" element={<Newtracker />} />
        <Route path="/progress" element= {<Progess></Progess>}/> 
        <Route path="/newGoals" element={<NewGoals />} />
      </Routes>
    </DataProvider>
  )
}
