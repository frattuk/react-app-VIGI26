// susikurti pagal reikiama standarta portfolio.js

//pasikeisti indexe i Items,
// turint duomenis

import "./Items.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";

//  jei norime, kad useEffect suveiktu tik viena karta, naudojame tuscia dependency masyva []

const Items = () => {
  const [products, setProducts] = useState([]); // useState butinai su reiksme
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("first time");
    fetch("https://golden-whispering-show.glitch.me")
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.id !== productId)
    );
  };

  return (
    <div className="products">
      {isLoading && <h1>Duomenys kraunasi...</h1>}

      {products.map((item) => (
        <div key={item.id} onClick={() => handleDeleteProduct(item.id)}>
          <Card imageUrl={item.image} text={`${item.title} ($${item.price})`} />
        </div>
      ))}
    </div>
  );
};

export default Items;
