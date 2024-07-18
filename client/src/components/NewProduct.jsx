import React from 'react';

const NewProduct = ({ addProduct, name, handleNameChange, type, handleTypeChange, purpose, handlePurposeChange, am, handleAmChange }) => {

  let arr = ["Morning", "Night", "Both"]



  return (
    <form onSubmit={addProduct} className="bg-gray-800 p-4 rounded mb-8">
      <div className="mb-4">
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Product Name"
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          value={type}
          onChange={handleTypeChange}
          placeholder="Product Type"
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          value={purpose}
          onChange={handlePurposeChange}
          placeholder="Product Purpose"
          className="w-full p-2 bg-gray-700 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Morning/Night/Both</label>
        <select value={am} onChange={handleAmChange} className="w-full p-2 bg-gray-700 rounded">
          {arr.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
          {/* <option value="Morning">Morning</option>
          <option value="Night">Night</option>
          <option value="Both">Both</option> */}
        </select>
      </div>
      <div className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
        <button type="submit" className="w-50 p-2 bg-green-600 rounded">Add Product</button>
      </div>
    </form>
  );
};

export default NewProduct;
