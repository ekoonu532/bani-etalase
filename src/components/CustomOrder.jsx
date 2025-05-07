import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'Etalase',
    dimensions: '',
    materials: [],
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Handle checkboxes (materials)
      if (checked) {
        setFormData({
          ...formData,
          materials: [...formData.materials, value]
        });
      } else {
        setFormData({
          ...formData,
          materials: formData.materials.filter(item => item !== value)
        });
      }
    } else {
      // Handle other inputs
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `*Pemesanan Custom dari Website*%0A%0A*Nama:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telepon:* ${formData.phone}%0A*Produk:* ${formData.product}%0A*Ukuran:* ${formData.dimensions}%0A*Material:* ${formData.materials.join(', ')}%0A*Budget:* ${formData.budget}%0A*Timeline:* ${formData.timeline}%0A*Detail Pesanan:* ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/6285201981511?text=${message}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      product: 'Etalase',
      dimensions: '',
      materials: [],
      budget: '',
      timeline: '',
      message: ''
    });
  };

  return (
    <section id="order" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pemesanan Custom</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Isi form di bawah untuk memesan produk custom sesuai kebutuhan Anda
          </p>
        </motion.div>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nama Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Nomor Telepon/WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0812xxxx"
                  />
                </div>
                
                <div>
                  <label htmlFor="product" className="block text-gray-700 mb-2">Jenis Produk</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Etalase">Etalase Toko</option>
                    <option value="Lemari">Lemari Pakaian</option>
                    <option value="Rak">Rak Piring/Buku</option>
                    <option value="Kitchen">Kitchen Set</option>
                    <option value="Kusen">Kusen Aluminium</option>
                    <option value="Pintu">Pintu/Jendela</option>
                    <option value="Kaca">Produk Kaca/Akuarium</option>
                    <option value="Pagar">Pagar/Railing</option>
                    <option value="Folding">Folding Gate</option>
                    <option value="Rolling">Rolling Door</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="dimensions" className="block text-gray-700 mb-2">Ukuran yang Diinginkan (P x L x T)</label>
                <input
                  type="text"
                  id="dimensions"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="mis. 100cm x 50cm x 200cm"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Material yang Digunakan</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="aluminium"
                      name="materials"
                      value="Aluminium"
                      checked={formData.materials.includes('Aluminium')}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="aluminium">Aluminium</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="kaca"
                      name="materials"
                      value="Kaca"
                      checked={formData.materials.includes('Kaca')}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="kaca">Kaca</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="besi"
                      name="materials"
                      value="Besi"
                      checked={formData.materials.includes('Besi')}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="besi">Besi</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="kayu"
                      name="materials"
                      value="Kayu"
                      checked={formData.materials.includes('Kayu')}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="kayu">Kayu</label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <div>
                  <label htmlFor="budget" className="block text-gray-700 mb-2">Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih budget</option>
                    <option value="< Rp 1 juta"> Rp 1 juta</option>
                    <option value="Rp 1 - 3 juta">Rp 1 - 3 juta</option>
                    <option value="Rp 3 - 5 juta">Rp 3 - 5 juta</option>
                    <option value="Rp 5 - 10 juta">Rp 5 - 10 juta</option>
                    <option value="> Rp 10 juta"> Rp 10 juta</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div> */}
                
                <div>
                  <label htmlFor="timeline" className="block text-gray-700 mb-2">Estimasi Waktu Pengerjaan</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih timeline</option>
                    <option value="Segera (1-3 hari)">Segera (1-3 hari)</option>
                    <option value="Minggu ini">Minggu ini</option>
                    <option value="Bulan ini">Bulan ini</option>
                    <option value="Fleksibel">Fleksibel</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Detail Pesanan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jelaskan detail pesanan Anda, seperti desain, warna, dan kebutuhan khusus lainnya..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Lanjutkan ke WhatsApp
              </motion.button>
              
              <p className="text-gray-600 text-sm text-center mt-4">
                Setelah mengklik tombol di atas, Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi dan pemesanan
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;