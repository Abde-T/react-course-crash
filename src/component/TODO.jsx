import './TODO.css';

function TODO({title, p, btn}){
    function deletTodo(){
        console.log('delet')
    }

    return(
        <div className='Todo'>
        <h2> {title } </h2>
        <p>{p}</p>
        <button onClick={(deletTodo)}>{btn}</button>
      </div>
    )
}
export default TODO