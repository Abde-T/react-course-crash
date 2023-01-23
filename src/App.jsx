import logo from './logo.svg';
import './App.css';
import TODO from './component/TODO.jsx';
import Title from './component/Title';
import Modal from './component/Modal';

function App() {
  return (
    <div>
      <Title />
      <div className='Todo__wrapper'>
      <TODO title="finish FES" btn="delet" p="ssuh keuhfkds dshf pezh edfhpiqe"/>
      <TODO title="get a job" btn="add" p="qhi dsifjh dfhjiq ^p"/>
      <TODO title="a better job" btn="submit" p="sdf jdsifoqp sdijf "/>
      </div>
{    /* <Modal ques="wanna leave!!?" /> */}
    </div>
  );
}

export default App;
