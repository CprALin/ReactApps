import { useState } from "react";


function Steps({steps , addStep , decStep}) {

    return(
       <div className="steps">
            <button className="steps-btn" onClick={decStep}>-</button>
              <p>{`Step : ${steps}`}</p>
            <button className="steps-btn" onClick={addStep}>+</button>
       </div>
    );
}

function Count({ steps ,count , addCount , decCount}){

    return(
      <div className="steps">
          <button className="steps-btn" onClick={decCount}>-</button>
            <p>{`Count : ${count}`}</p>
          <button className="steps-btn" onClick={addCount}>+</button>
      </div>
    );
}

function Content({count}){
    const date = new Date("February 8 2024");
    date.setDate(date.getDate() + count);

    return(
      <div>
         <span>
            {
              count === 0 ? (
                  "Today is "
              ) : count > 0 ? (
                  `${count} days from today is `
              ) : (
                  `${Math.abs(count)} days ago was `
              )
            }
         </span>
         <span>{date.toDateString()}</span>
      </div>
    );
}

function App() {
  const[steps , setSteps] = useState(1);
  const[count , setCount] = useState(0);


  function handleAddStep(){
    setSteps((s) => s + 1);
  }

  function handleDecStep(){
    if(steps > 1)
    {
      setSteps((s) => s - 1);
    }  
  }

  function handleAddCount(){
    setCount((s) => s + steps );
  }

  function handleDecCount(){
    setCount((s) => s - steps);
  }

  return (
   <div className="App">
      <Steps steps={steps} addStep={handleAddStep} decStep={handleDecStep}/>
      <Count steps={steps} count={count} addCount={handleAddCount} decCount={handleDecCount}/>
      <Content count={count}/>
   </div>
  );
}

export default App;
