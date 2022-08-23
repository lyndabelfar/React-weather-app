import React from 'react'

function Form({city, setCity, index, setIndex}) {
  const handleSubmit=(e)=>{
      e.preventDefault()
      let newIndex = index +1;
      setIndex(newIndex)
  }
  const handleInputChange = (e)=>{
      setCity(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={city} onChange={handleInputChange} />
    </form>
  )
}

export default Form