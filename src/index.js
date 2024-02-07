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

    return(
      <main className="menu"> 
        <h2>Our menu</h2>

        {pizzas && (
            <ul className="pizzas">
                {pizzaData.map(pizza => <Pizza pizzaObject={pizza} key={pizza.name}/>)}
            </ul>
        )} 

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

    return(
        <footer className="footer">
           {isOpen && (
              <div className="order">
                <p>We're open until {closeHour}:00. Come visit us or order online.</p>
                <button className="btn">Order</button>
              </div>    
            )}
        </footer>
        
        //React.createElement('footer', null, "We're currently open!")
    );
}

function Pizza(props){
    return(
       <li className="pizza">
          <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name}/>
          <div>
            <h3>{props.pizzaObject.name}</h3>
            <p>{props.pizzaObject.ingredients}</p>
            <span>{props.pizzaObject.price}</span>
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