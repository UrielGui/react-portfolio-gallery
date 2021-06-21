import React, { useState, useEffect } from 'react';
import data from './data';
import './Components/style.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {

  let [categoryProduct, setCategoryProduct] = useState("all");
  let [active, setActive] = useState("m-1");
  let [showMore, setShowMore] = useState(8);
  let [categoryQty, setCategoryQty] = useState(8);

  const CategoryQtyFunc = (props) => {
    useEffect(() => {
      setCategoryQty(categoryQty = props.category);
    }, []);
    return null;
  };

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
      }).slice(0, showMore).map((product, a, b) => {
        return (
          <CSSTransition key={product.id} timeout={300} classNames="item">
            <li className="product" key={product.id}>
              <CategoryQtyFunc category={b.length} />
              <img className="product-img" alt={product.name} src={product.image} />
            </li>
          </CSSTransition>
        );
      }
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
        {categoryQty === 8
          ? <div className="show-more">
            <button onClick={
              () => { setShowMore(showMore + 4); }
            } className="show-more-button">Mostrar Mais</button>
          </div>
          : null}
      </div>
    </section>
  );
};