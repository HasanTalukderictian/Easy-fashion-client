import React, { useEffect, useState } from 'react';
import ProductsRow from './ProductsRow';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mx-auto'>
      <div className='my-8 text-center'>
        <h2 className='text-4xl md:text-6xl font-semibold my-4'>Our Best Collection </h2>
        <h3 className='text-bold italic my-2 text-lg md:text-xl'>For You</h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {currentItems.map((product) => (
          <ProductsRow key={product._id} product={product}></ProductsRow>
        ))}
      </div>

      <div className='flex justify-center mt-4'>
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-2 px-3 py-1 bg-blue-500 text-white rounded text-sm md:text-base ${
              currentPage === index + 1 ? 'bg-blue-700' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;