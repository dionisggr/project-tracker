import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Request from 'pages/Request';
import Project from 'pages/Project';
import Contact from 'pages/Contact';
import 'styles/Main.css';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/request' element={<Request />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project/:projectId' element={<Project />} />
      </Routes>
    </main>
  );
};
