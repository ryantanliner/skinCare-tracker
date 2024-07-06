import { useState, useEffect } from 'react'
import NewProduct from './components/NewProduct'
import ShowRoutine from './components/ShowRoutine'
import routineService from './services/routines'
import './App.css';

const time = function (dur) {
  if (dur == "Both") {
    return null
  }
  else if (dur == "Night") {
    return false
  }
  else {
    return true
  }
}


const App = () => {
  const [routine, setRoutine] = useState([])
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [purpose, setPurpose] = useState('')
  const [am, setAm] = useState('')
  const [showAm, setShowAm] = useState(true)

  

  useEffect(() => {
    routineService
      .getAll()
      .then(routineI => {
        setRoutine(routineI)
      })
  }, [])

  const addProduct = (event) => {
    event.preventDefault()

    const productObj = {
      name: name,
      type: type,
      purpose: purpose,
      am: time(am),
      id: (routine.length + 1).toString()
    }

    routineService
      .create(productObj)
      .then(products => {
        setRoutine(routine.concat(products))
        setName('')
        setType('')
        setPurpose('')
        setAm('')
      })
  }

  const removeProduct = (id) => {
    const confirm = window.confirm('Are you sure you want to remove this item?');
    if (!confirm) return;

    routineService
      .remove(id)
      .then(response => {
        setRoutine(routine.filter(produc => produc.name !== id));
      })
      .catch(error => {
        alert('Failed to remove product');
        console.error('Deletion error:', error);
      });
  };

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value)
  }

  const handleAmChange = (event) => {
    setAm(event.target.value)
  }

  const routineToShow = showAm ? routine.filter(produc => produc.am !== false) : routine.filter(produc => produc.am !== true)

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-6 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">My Skincare Routine</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <NewProduct
          addProduct={addProduct}
          name={name} handleNameChange={handleNameChange}
          type={type} handleTypeChange={handleTypeChange}
          purpose={purpose} handlePurposeChange={handlePurposeChange}
          am={am} handleAmChange={handleAmChange}
        />
        <ol className="mt-6 space-y-4">
          <ShowRoutine
            routine={routineToShow}
            showAm={showAm}
            setShowAm={setShowAm}
            removeProduct={removeProduct}
          />
        </ol>
      </div>
    </div>
  )
}

export default App