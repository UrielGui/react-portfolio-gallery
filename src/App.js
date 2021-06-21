import React, { useState } from 'react';
import data from './data';
import './Components/style.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {

  let [categoryProduct, setCategoryProduct] = useState("all");
  let [active, setActive] = useState("m-1");

  const menuItems = () => (
    <React.Fragment>
      <span className={active === "m-1" ? 'menu-itens menu-active' : 'menu-itens'}
        onClick={() =>
          setCategoryProduct((categoryProduct = "all"),
            setActive(active = "m-1")
          )}>Todos</span>

      <span className={active === "m-2" ? 'menu-itens menu-active' : 'menu-itens'}
        onClick={() =>
          setCategoryProduct((categoryProduct = "cars"),
            setActive(active = "m-2")
          )}>Carros</span>

      <span className={active === "m-3" ? 'menu-itens menu-active' : 'menu-itens'}
        onClick={() =>
          setCategoryProduct((categoryProduct = "models"),
            setActive(active = "m-3")
          )}>Modelos</span>

      <span className={active === "m-4" ? 'menu-itens menu-active' : 'menu-itens'}
        onClick={() =>
          setCategoryProduct((categoryProduct = "party"),
            setActive(active = "m-4")
          )}>Eventos</span>

      <span className={active === "m-5" ? 'menu-itens menu-active' : 'menu-itens'}
        onClick={() =>
          setCategoryProduct((categoryProduct = "city"),
            setActive(active = "m-5")
          )}>Cidade</span>
    </React.Fragment>
  );

  const items = () => (
    <TransitionGroup component="ul" className="products">
      {data.products.sort((a, b) =>
        a.name > b.name ? 1 : -1
      ).filter((val) => {
        if (categoryProduct === "all") {
          return val.category;
        }
        else {
          return val.category === categoryProduct;
        }
      }).slice(0, 8).map((product) => (
        <CSSTransition key={product.id} timeout={300} classNames="item">
          <li className="product" key={product.id}>
            <img className="product-img" alt={product.name} src={product.image} />
          </li>
        </CSSTransition>
      )
      )}
    </TransitionGroup>
  );

  return (
    <section id="portfolio-gallery">
      <div className="container">
        <div className="menu-items">
          {menuItems()}
        </div>
        {items()}
      </div>
    </section>
  );
};