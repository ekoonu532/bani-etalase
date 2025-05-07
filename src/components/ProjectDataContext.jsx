import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context
export const ProjectDataContext = createContext();

// Categories data
export const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'etalase', name: 'Etalase' },
  { id: 'lemari', name: 'Lemari & Rak' },
  { id: 'kitchen', name: 'Kitchen Set' },
  { id: 'kusen', name: 'Kusen' },
  { id: 'kaca', name: 'Kaca' },
  { id: 'besi', name: 'Besi' },
];

// Sample project data
const initialProjects = [
  {
    id: 1,
    title: 'Etalase Toko Modern',
    category: 'etalase',
    image: '/api/placeholder/400/300',
    date: '05/05/2025'
  },
  {
    id: 2,
    title: 'Lemari Pakaian Sliding',
    category: 'lemari',
    image: '/api/placeholder/400/300',
    date: '04/05/2025'
  },
  {
    id: 3,
    title: 'Kitchen Set Minimalis',
    category: 'kitchen',
    image: '/api/placeholder/400/300',
    date: '03/05/2025'
  },
  {
    id: 4,
    title: 'Pintu Aluminium',
    category: 'kusen',
    image: '/api/placeholder/400/300',
    date: '02/05/2025'
  },
  {
    id: 5,
    title: 'Akuarium Custom',
    category: 'kaca',
    image: '/api/placeholder/400/300',
    date: '01/05/2025'
  },
  {
    id: 6,
    title: 'Pagar Besi Minimalis',
    category: 'besi',
    image: '/api/placeholder/400/300',
    date: '30/04/2025'
  }
];

export const ProjectDataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  
  // Load data from localStorage on initial render
  useEffect(() => {
    const storedProjects = localStorage.getItem('banietalase_projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      setProjects(initialProjects);
      localStorage.setItem('banietalase_projects', JSON.stringify(initialProjects));
    }
  }, []);

  // Save to localStorage whenever projects change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('banietalase_projects', JSON.stringify(projects));
    }
  }, [projects]);

  // Add new project
  const addProject = (project) => {
    const newProjects = [project, ...projects];
    setProjects(newProjects);
  };

  // Delete project
  const deleteProject = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
  };

  return (
    <ProjectDataContext.Provider value={{ projects, addProject, deleteProject }}>
      {children}
    </ProjectDataContext.Provider>
  );
};

// Custom hook for using the context
export const useProjectData = () => useContext(ProjectDataContext);

export default ProjectDataProvider;