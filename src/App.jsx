import logo from './logo.svg';
import './App.css';
import TODO from './component/TODO.jsx';
import Title from './component/Title';
import Modal from './component/Modal';
import React, {useState} from 'react';
import Counter from './component/Counter';

function App() {

  return <Counter /> 

  const [showModal, setShowModal] =  useState(false)


  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) =>{console.log(event.target.value)}}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className='Todo__wrapper'>
      <TODO title="finish FES" btn="delet" p="ssuh keuhfkds dshf pezh edfhpiqe"/>
      <TODO title="get a job" btn="add" p="qhi dsifjh dfhjiq ^p"/>
      <TODO title="a better job" btn="submit" p="sdf jdsifoqp sdijf "/>
      </div>
   { showModal &&<Modal ques="wanna leave!!?" /> }
  </div>
  );
}

export default App;
