import { Routes, Route } from "react-router-dom";
import { TrackDay } from './trackDay.js';
import React from 'react'
import { Home } from "./home.js";
import { Progess } from "./progess.js";
import { NewGoals } from "./newgoals.js";
import { Newtracker } from "./Newtracker.js";
import { DataProvider } from "./dataContext.js";
import { Login } from "./auth/login.js";
import { NewUser } from "./auth/newUser.js";

export const RouterApp = () => {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/newUser" exact element={<NewUser />} />
        <Route path="/track/:id" element={<TrackDay />} />
        <Route path="/newTracker" element={<Newtracker />} />
        <Route path="/progress" element= {<Progess></Progess>}/> 
        <Route path="/newGoals" element={<NewGoals />} />
      </Routes>
    </DataProvider>
  )
}
