import  React from "react";

import ProjectsContext  from './components/Data/ProjectsContext'
import ClientsContext from './components/Data/ClientsContext'
import projects from "./components/Data/projects";
import clients from "./components/Data/clients";

import MainPage from './components/Pages/MainPage';
import ProjectsPage from './components/Pages/ProjectsPage'
import DeliveryApp from "./components/Projects/deliveryApp/PagesDelivery/DeliveryApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const projectData = projects;

function App() {
  return (
    <BrowserRouter>
        <ProjectsContext.Provider value={projectData}>
            <ClientsContext.Provider value={clients}>
              <Routes>
                <Route index element={<MainPage/>} />
                <Route path="projects_page" element={<ProjectsPage/>} />
                <Route path="delivery_app" element={<DeliveryApp/>} />
              </Routes>
            </ClientsContext.Provider>
        </ProjectsContext.Provider>
    </BrowserRouter>
  );
}

export default App;