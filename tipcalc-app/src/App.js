import { useState } from "react";

function App() {
  return (
    <div className="App">
       <TipCalculator />
    </div>
  );
}

function TipCalculator(){
    const [bill , setBill] = useState("");
    const [prtg1 , setPrtg1] = useState(0);
    const [prtg2 , setPrtg2] = useState(0);

    const tip = bill * (((prtg1 + prtg2)/2)/100); 

    function handleReset(){
      setBill('');  
      setPrtg1(0);
      setPrtg2(0);
    }

    return(
        <div>
            <BillInput bill={bill} onSetBill={setBill}/>
            <SelectPercentage prtg={prtg1} onSelect={setPrtg1}>How did you like the service?</SelectPercentage>
            <SelectPercentage prtg={prtg2} onSelect={setPrtg2}>How did your friend like the service ?</SelectPercentage>

            {bill > 0 &&
              <>
                <Output bill={bill} tip={tip}/>
                <Reset onReset={handleReset}/>
              </>
            }
        
        </div>
    );
}

function BillInput({bill , onSetBill}){
    return(
      <div>
         <label>How much was the bill ?</label>
         <input type="text" placeholder="Bill value" value={bill} onChange={e => onSetBill(Number(e.target.value))}/> 
       </div> 
    );
}

function SelectPercentage({children , prtg , onSelect}){
    return(
        <div>
            <label>{children}</label>
            <select value={prtg} onChange={e => onSelect(Number(e.target.value))}>
                <option value='0'>Dissatisfied (0%)</option>
                <option value='5'>It was okay (5%)</option>
                <option value='10'>It was good (10%)</option>
                <option value='15'>Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({bill , tip}){
    return(
       <h3>You pay ${bill + tip} (${bill} + ${tip} tip)</h3>
    );
}

function Reset({onReset}){
    return(
        <button onClick={onReset}>Reset</button>
    );
}

export default App;
