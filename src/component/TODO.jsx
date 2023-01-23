import './TODO.css';

function TODO({title, p, btn}){
    function deletTodo(){
        
    }

    return(
        <div className='Todo'>
        <h2> {title } </h2>
        <p>{p}</p>
        <button onClick={() => {
            alert("clicked")
        }}>{btn}</button>
      </div>
    )
}
export default TODO