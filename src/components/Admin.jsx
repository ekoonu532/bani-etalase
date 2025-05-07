import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useProjectData, categories } from './ProjectDataContext';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [newUpload, setNewUpload] = useState({
    title: '',
    category: 'etalase',
    file: null,
    previewUrl: null
  });
  const [isUploading, setIsUploading] = useState(false);

  // Get projects and functions from context
  const { projects, addProject, deleteProject } = useProjectData();

  // Filter out "all" category for admin
  const adminCategories = categories.filter(cat => cat.id !== 'all');

  // Mock login check - In a real app, this would connect to a backend
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple mock authentication (in a real app, this would be a secure auth system)
    if (credentials.username === 'admin' && credentials.password === 'password123') {
      setIsLoggedIn(true);
      // In a real app, you'd store a token in localStorage or use a proper auth system
      localStorage.setItem('banietalase_admin', 'true');
    } else {
      alert('Username atau password salah!');
    }
  };

  // Check if user is already logged in
  useEffect(() => {
    const isAdmin = localStorage.getItem('banietalase_admin');
    if (isAdmin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleCredentialsChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('banietalase_admin');
  };

  const handleUploadChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'file' && files.length > 0) {
      const selectedFile = files[0];
      // Create a preview URL for the selected image
      const previewUrl = URL.createObjectURL(selectedFile);
      
      setNewUpload({
        ...newUpload,
        file: selectedFile,
        previewUrl
      });
    } else {
      setNewUpload({
        ...newUpload,
        [name]: value
      });
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!newUpload.title || !newUpload.category || !newUpload.file) {
      alert('Mohon lengkapi semua field!');
      return;
    }
    
    // Mock upload process
    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      // Create a new project object
      const newProject = {
        id: Date.now(),
        title: newUpload.title,
        category: newUpload.category,
        image: newUpload.previewUrl, // In a real app, this would be a URL from your server
        date: new Date().toLocaleDateString()
      };
      
      // Add to projects list via context
      addProject(newProject);
      
      // Reset form
      setNewUpload({
        title: '',
        category: 'etalase',
        file: null,
        previewUrl: null
      });
      
      setIsUploading(false);
      
      alert('Foto berhasil diupload!');
    }, 1500);
  };

  const handleDeleteImage = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus foto ini?')) {
      // Delete project via context
      deleteProject(id);
      alert('Foto berhasil dihapus!');
    }
  };

  // Login page
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Admin Panel</h2>
            <p className="text-gray-600">Bani Etalase</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleCredentialsChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleCredentialsChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300"
            >
              Login
            </motion.button>
          </form>
          
          <div className="mt-6 text-center">
            <a href="/" className="text-blue-600 hover:text-blue-800 text-sm">Kembali ke website</a>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin dashboard (when logged in)
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-900 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold">Bani Etalase Admin</h1>
            <button 
              onClick={handleLogout}
              className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Upload Foto Baru</h2>
            
            <form onSubmit={handleUploadSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 mb-2">Judul Foto</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newUpload.title}
                  onChange={handleUploadChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Contoh: Etalase Toko Modern"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 mb-2">Kategori</label>
                <select
                  id="category"
                  name="category"
                  value={newUpload.category}
                  onChange={handleUploadChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {adminCategories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="file" className="block text-gray-700 mb-2">Pilih Foto</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleUploadChange}
                  accept="image/*"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {newUpload.previewUrl && (
                <div className="mb-6">
                  <p className="text-gray-700 mb-2">Preview:</p>
                  <img 
                    src={newUpload.previewUrl} 
                    alt="Preview" 
                    className="w-full h-48 object-cover rounded-lg shadow" 
                  />
                </div>
              )}
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isUploading}
                className="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isUploading ? 'Mengupload...' : 'Upload Foto'}
              </motion.button>
            </form>
          </div>
          
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Galeri Foto</h2>
              
              {projects.length === 0 ? (
                <p className="text-gray-600 text-center py-8">Belum ada foto yang diupload.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map((project) => (
                    <motion.div 
                      key={project.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 rounded-lg overflow-hidden shadow"
                    >
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {adminCategories.find(c => c.id === project.category)?.name || project.category}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{project.date}</span>
                          <button 
                            onClick={() => handleDeleteImage(project.id)}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;