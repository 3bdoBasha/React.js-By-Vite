import   { useState } from 'react';
import './App.css';
// import Header from './components/Header';
// import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';
import Posts from './components/Posts';

export default function App() {

  return (
    <div>
      <NavBar />
      <div className="mt-[95px]">
        <Posts />
      </div>
    </div>
  );
}
