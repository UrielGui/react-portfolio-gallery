import React, { useState } from 'react';
import data from './data';
import './Components/style.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {

  let [categoryProduct, setCategoryProduct] = useState("Todos");
  let [active, setActive] = useState("m-1");

  return (
    <React.Fragment>
      <span className={active === "m-1" ? 'menu-itens menu-active' : 'menu-itens'}
        onClick={() =>
          setCategoryProduct((categoryProduct = "Todos"),
            setActive(active = "m-1")
          )}>Todos</span>

      <span className={active === "m-2" ? 'menu-itens menu-active' : 'menu-itens'}
        onClick={() =>
          setCategoryProduct((categoryProduct = "back end"),
            setActive(active = "m-2")
          )}>Front End</span>

      <span className={active === "m-3" ? 'menu-itens menu-active' : 'menu-itens'}
        onClick={() =>
          setCategoryProduct((categoryProduct = "front end"),
            setActive(active = "m-3")
          )}>Back End</span>

      <TransitionGroup component="ul" className="products">
        {data.products.filter((val) => {
          if (categoryProduct === "Todos") {
            return val.category;
          }
          else {
            return val.category === categoryProduct;
          }
        }).map((product) => (
          <CSSTransition key={product.id} timeout={300} classNames="item">
            <li className="product" key={product.id}>
              <img className="product-img" alt={product.name} src={product.image} />
            </li>
          </CSSTransition>
        )
        )}
      </TransitionGroup>
    </React.Fragment>
  );
};