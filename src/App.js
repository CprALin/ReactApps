import { useState } from "react";

const faqs = [
  {
    title : "What is object-oriented programming (OOP) ?",
    text : "Object-oriented programming (OOP) is a programming paradigm based on the concept of objects, which can be defined as entities containing data, knowing their state, and behavior, and can interact with each other. "
  },
  {
    title : "What is an interpreted programming language ?",
    text : "An interpreted programming language is a type of programming language for which most of its implementations execute instructions directly, without the need for compilation."
  },
  {
    title : " What is the difference between synchronous and asynchronous programming ?",
    text : "Synchronous programming executes code sequentially, one instruction at a time, waiting for each operation to complete before moving to the next. Asynchronous programming allows multiple operations to be performed concurrently, with the ability to continue executing code while waiting for certain operations to complete."
  }
]


function App() {
  return (
    <div className="App">
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}){
  const [currOpen , setCurrOpen] = useState(null);

  return(
     <div className="accordion">
        {data.map((el,i) => 
            <AccordionItem currOpen={currOpen} onOpen={setCurrOpen} title={el.title} num={i} key={i}>
                {el.text}
            </AccordionItem>)}
     </div>
  );
}

function AccordionItem({num , title , children , currOpen , onOpen}){

    const isOpen = num === currOpen;

    function handleToggle(){
        onOpen(num);
    } 

    return(
        <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num+1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>
        
            {isOpen && (
                <div className="content-box">
                   {children}
                </div>
            )} 
        </div>
    );
}

export default App;
