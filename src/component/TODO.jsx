import './TODO.css';

function TODO({title, p, btn, onTodoDelet}){
  
    return(
        <div className='Todo'>
        <h2> {title } </h2>
        <p>{p}</p>
        <button onClick={(onTodoDelet)}>{btn}</button>
      </div>
    )
}
export default TODO