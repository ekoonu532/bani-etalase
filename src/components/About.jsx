import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Kualitas Premium",
      description: "Menggunakan material aluminium, kaca, dan besi berkualitas tinggi"
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pengerjaan Cepat",
      description: "Ketepatan waktu adalah komitmen kami dalam setiap pengerjaan"
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Harga Bersaing",
      description: "Memberikan harga terbaik untuk kualitas yang tidak mengecewakan"
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      ),
      title: "Desain Custom",
      description: "Membantu mewujudkan desain yang sesuai kebutuhan dan keinginan Anda"
    }
  ];

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <img src="/api/placeholder/600/400" alt="Workshop Bani Etalase" className="rounded-lg shadow-xl" />
          </motion.div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Tentang Kami</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Bani Etalase adalah workshop custom furniture yang menyediakan berbagai produk berkualitas dari aluminium, kaca, dan besi. 
                Dengan pengalaman bertahun-tahun, kami berkomitmen untuk menghadirkan produk premium dengan harga terjangkau.
              </p>
              <p className="text-gray-600 mb-8">
                Kami mengerjakan berbagai proyek dari skala kecil hingga besar, baik untuk keperluan rumah tangga maupun bisnis. 
                Setiap produk kami kerjakan dengan detail dan ketelitian tinggi untuk memastikan hasil yang memuaskan.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="mr-4 text-blue-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;