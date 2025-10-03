import React, { useState, useEffect } from "react";
import { mockProducts } from "./mockproducts";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    const filtered = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.category &&
          product.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.brand &&
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
    setSearchTerm("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  const getSimilarProducts = () => {
    if (!selectedProduct) return [];
    return mockProducts.filter(
      (product) =>
        product.category === selectedProduct.category &&
        product.id !== selectedProduct.id
    );
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-teal-50 to-pink-50  mt-16">
        <header className="text-center py-10">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            All Product List
          </h1>
        </header>

        <main className="max-w-6xl mx-auto p-6">
          {!selectedProduct ? (
            <div>
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products by name, category, or brand..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg shadow focus:ring-2 focus:ring-blue-400"
                  />
                  <span className="absolute right-3 top-3">🔍</span>
                </div>
              </div>

              {/* Product Grid */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onDetailsClick={openModal}
                      onSelectClick={handleProductSelect}
                    />
                  ))
                ) : (
                  <div className="text-center text-gray-500 col-span-full">
                    No products found matching "{searchTerm}"
                  </div>
                )}
              </motion.div>
            </div>
          ) : (
            <ProductPage
              product={selectedProduct}
              similarProducts={getSimilarProducts()}
              onBack={handleBackToHome}
              onProductSelect={handleProductSelect}
              onDetailsClick={openModal}
            />
          )}
        </main>
      </div>

      {/* Modal Popup */}
      {modalOpen && modalProduct && (
        <QuoteModal product={modalProduct} onClose={() => setModalOpen(false)} />
      )}
          <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </>
  );
}

// Product Card Component
function ProductCard({ product, onDetailsClick, onSelectClick }) {
  return (
    <>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="flex items-center justify-center mb-4 h-40">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-40 max-w-full object-contain rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h4 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h4>
        
        {product.brand && (
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-gray-600 mr-2">Brand:</span>
            <span className="text-sm text-gray-800">{product.brand}</span>
          </div>
        )}
        
        {product.category && (
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-gray-600 mr-2">Category:</span>
            <span className="text-sm text-gray-800">{product.category}</span>
          </div>
        )}
        
        {product.price && (
          <div className="flex items-center mb-3">
            <span className="text-lg font-bold text-blue-600">RS : {product.price.toLocaleString()}</span>
          </div>
        )}

        {/* Description Preview */}
        {product.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2 mt-auto">
        {/* Get Details Button - Primary Action */}
   

        {/* View Product Button - Secondary Action */}
        <button
          onClick={() => onSelectClick(product)}
          className="w-full h-10 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Product
        </button>
      </div>
      
    </motion.div>
    </>
  );
}

// Product Page Component
function ProductPage({ product, similarProducts, onBack, onProductSelect, onDetailsClick }) {
 
  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto p-6"
    >
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Product Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-contain rounded-xl shadow"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl font-bold mb-3 text-gray-800">{product.name}</h1>
          
          {product.category && (
            <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-3">
              {product.category}
            </span>
          )}
          
          {product.brand && (
            <div className="mb-4">
              <span className="text-lg font-semibold text-gray-700">Brand: </span>
              <span className="text-lg text-gray-800">{product.brand}</span>
            </div>
          )}
          
          {product.price && (
            <div className="mb-4">
              <span className="text-3xl text-green-600 font-extrabold">
                RS : {product.price.toLocaleString()}
              </span>
            </div>
          )}
          
          {product.description && (
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">{product.description}</p>
          )}

          {/* Specifications */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Specifications:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid gap-2">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-700">Compatibility:</span>
                  <span className="text-gray-800">HPN Machines</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-700">Material:</span>
                  <span className="text-gray-800">High-grade Plastic/Metal</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Warranty:</span>
                  <span className="text-gray-800">6 Months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Features:</h3>
            <div className="grid gap-2">
              {['Durable', 'Reliable', 'Easy to replace', 'Ensures smooth operation'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Get Details Button - Replacing Add to Cart and Buy Now */}
          <div className="mt-8">
            <button 
              onClick={() => onDetailsClick(product)}
              className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Get Details
            </button>
          </div>
        </motion.div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarProducts.map((item) => (
              <ProductCard 
                key={item.id} 
                product={item} 
                onSelectClick={onProductSelect}
                onDetailsClick={onDetailsClick}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>

    </>
  );
}

export default Search;