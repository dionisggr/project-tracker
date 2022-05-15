import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Project from 'pages/Project';
import Projects from 'pages/Projects';
import AddProject from 'pages/AddProject';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/projects/add' element={<AddProject />} />
        <Route path='/projects/:projectId' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};
