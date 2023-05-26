import React, { useState } from "react";

function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [module, setModule] = useState('')


  return (
    <form>
      <label>
        <input
        type="text"
        name="name"
        value={name}
        placeholder="Digite seu nome completo"
        onChange={({target}) => setName(target.value)}/>
        <input
        type="number"
        name="age"
        value={age}
        placeholder="Digite sua idade" 
        onChange={({target}) => setAge(target.value)}/>
        <input
        type="text"
        name="city"
        value={city}
        placeholder="Digite sua cidade" 
        onChange={({target}) => setCity(target.value)}/>
        <input
        type="radio"
        name="content"
        value="fundamentos"
        checked={module === 'fundamentos'}
        onChange={({ target }) => setModule(target.value)}
        />
        <label>Fundamentos</label>
        <input
        type="radio"
        name="content"
        value="front-end"
        checked={module === 'front-end'}
        onChange={({ target }) => setModule(target.value)} />
        <label>Front-end</label>
        <input
        type="radio"
        name="content"
        value="back-end"
        checked={module === 'back-end'}
        onChange={({ target }) => setModule(target.value)}/>
        <label>Back-end</label>
        <input
        type="radio"
        name="content"
        value="ciencia da computação"
        checked={module === 'ciencia da computação'}
        onChange={({ target }) => setModule(target.value)}/>
        <label>Ciência da Computação</label>
        <button>Enviar</button>
      </label>
    </form>
  )
}

export default Form;