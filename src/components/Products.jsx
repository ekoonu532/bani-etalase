import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const Products = () => {
  const categories = [
    {
      id: 1,
      title: "Etalase Toko",
      description: "Etalase kaca premium untuk display produk toko Anda",
      image: "/assets/images/etalase-toko.jpg"
    },
    {
      id: 2,
      title: "Lemari & Rak",
      description: "Lemari pakaian, rak piring & rak buku custom",
      image: "/assets/images/lemari.jpg"
    },
    {
      id: 3,
      title: "Kitchen Set",
      description: "Kitchen set modern dengan desain sesuai kebutuhan",
      image: "/assets/images/kitchen-set.jpg"
    },
    {
      id: 4,
      title: "Kusen Aluminium",
      description: "Kusen, pintu & jendela aluminium berkualitas",
      image: "/assets/images/kusen.jpg"
    },
    {
      id: 5,
      title: "Produk Kaca",
      description: "Akuarium dan berbagai produk kaca custom",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Produk Besi",
      description: "Pagar, railing, folding gate & rolling door",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Produk Kami</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai produk custom berkualitas untuk kebutuhan rumah dan bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <ProductCard key={category.id} product={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;