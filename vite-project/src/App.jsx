import   { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
// import LoginForm from './components/Form';

export default function App() {

  return (
    <div>
      <NavBar />
      <div className="mt-[120px]">
        <Posts />
      </div>
    </div>
  );
}
