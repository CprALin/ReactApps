import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
];
  

function Header(){
    //const style = {color : "red" , fontSize : "35px" , textTransform : "uppercase"}
 
    return(
       <header className="header container">
            <h1>React Pizza</h1>
       </header> 
    );
}

function Menu(){
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return(
      <main className="menu"> 
        <h2>Our menu</h2>

        {numPizzas > 0 ? (
            <ul className="pizzas">
                {pizzaData.map(pizza => <Pizza pizzaObject={pizza} key={pizza.name}/>)}
            </ul>
        ):(<p>We're still working on our menu. Please come back later :) </p>)}

      {/*<Pizza 
            name='Pizza Prosciutto' 
            ingredients='Tomato, mozarella, ham, aragula, and burrata cheese' 
            photoName='pizzas/prosciutto.jpg' 
            price={10}
        />
        <Pizza 
            name='Pizza Funghi' 
            ingredients='Tomato, mozarella, onion , mushroom and burrata cheese' 
            photoName='pizzas/funghi.jpg' 
            price={15} 
        /> */}
      </main>   
    );
}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    

    /* if(hour >= openHour && hour <= closeHour) 
    {
        alert("We're currently open!")
    }else{
        alert("Sorry we're closed.")
    } */

    //if(!isOpen) return <p>Message</p>

    return(
        <footer className="footer">
           {isOpen ? (
                <Order closeHour={closeHour}/>
            ) : (<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)}
        </footer>
        
        //React.createElement('footer', null, "We're currently open!")
    );
}

function Order({closeHour}){
    return(
      <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        <button className="btn">Order</button>
      </div>   
    );
}


function Pizza({pizzaObject}){
    
    if(pizzaObject.soldOut) return null;
  
    return(
       <li className="pizza">
          <img src={pizzaObject.photoName} alt={pizzaObject.name}/>
          <div>
            <h3>{pizzaObject.name}</h3>
            <p>{pizzaObject.ingredients}</p>
            <span>{pizzaObject.price}</span>
          </div>
       </li> 
    );
}

function App(){
    return(
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    );  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
    <App />
 </React.StrictMode>
);