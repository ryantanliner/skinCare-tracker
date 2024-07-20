import React from 'react';
import NewProduct from '../components/NewProduct';
import ShowRoutine from '../components/ShowRoutine';
import { useState, useEffect } from 'react';
import routineService from '../services/routines';
import Navbar from '../components/Navbar'

const time = function (dur) {
  if (dur === "Both") {
    return null;
  } else if (dur === "Night") {
    return false;
  } else {
    return true;
  }
};

export default function Main() {
  const loggedInUser = JSON.parse(window.localStorage.getItem('loggedUser'));
  const [routine, setRoutine] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [purpose, setPurpose] = useState('');
  const [am, setAm] = useState('');
  const [showAm, setShowAm] = useState(true);


  useEffect(() => {
    routineService.getAll().then(routineI => setRoutine(routineI));
  }, []);

  const addProduct = async (event) => {
    event.preventDefault();
    const productObj = {
      name: name,
      type: type,
      purpose: purpose,
      am: time(am),
    };

    try {
      const newProduct = await routineService.create(productObj);
      setRoutine(routine.concat(newProduct));
      setName('');
      setType('');
      setPurpose('');
      setAm('');
      console.log('Product added successfully:', newProduct);
    } catch (error) {
      console.error('Failed to add product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  const removeProduct = async (id) => {
    const confirm = window.confirm('Are you sure you want to remove this item?');
    if (!confirm) return;

    try {
      await routineService.remove(id);
      const updatedRoutine = routine.filter(produc => produc.id !== id);
      setRoutine(updatedRoutine);
      console.log('Product removed successfully. Updated routine:', updatedRoutine);
    } catch (error) {
      alert('Failed to remove product');
      console.error('Deletion error:', error);
    }
  };

  const userRoutine = routine.filter(a => a.user.username === loggedInUser.username)
  const routineToShow = showAm ? userRoutine.filter(produc => produc.am !== false) : userRoutine.filter(produc => produc.am !== true);

  console.log(loggedInUser)
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Navbar username={loggedInUser.name}/>
      <div className="flex-grow p-8 ml-64">
        <h1 className="text-5xl font-bold mb-8 zain-extrabold ">Skincare Routine</h1>
        <NewProduct
          addProduct={addProduct}
          name={name} handleNameChange={(e) => setName(e.target.value)}
          type={type} handleTypeChange={(e) => setType(e.target.value)}
          purpose={purpose} handlePurposeChange={(e) => setPurpose(e.target.value)}
          am={am} handleAmChange={(e) => setAm(e.target.value)}
        />
        <div className="mt-8">
          <button onClick={() => setShowAm(!showAm)} className="px-4 py-2 bg-blue-600 rounded mb-4 zain-regular text-xl">
            Show {showAm ? 'Night' : 'Morning'} Routine
          </button>
          <div className="flex flex-col gap-4">
            <ShowRoutine routine={routineToShow} removeProduct={removeProduct} />
          </div>
        </div>
      </div>
    </div>
  )
}