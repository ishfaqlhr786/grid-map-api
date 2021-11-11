import React, { useState, useEffect } from "react";
import "./Grids.css";

export const Home1 = () => {
  const [users, setUsers] = useState({
    id: "",
    category: "",
    description: "",
    image: "",
    price: "",
    title: "",
  });
  useEffect(() => {
    GetProduct();
    console.log(...users);
  }, []);
  const GetProduct = async () => {
    var r = await (await fetch(`https://fakestoreapi.com/products`)).json();
    console.log(r);
    setUsers(r);
    console.log(r);
    return r;
  };

  return (
    <>
      {users.map((el) => {
        return (
          <div>
            {el.category}
            <img src={el.image} alt="title" height="100" />
          </div>
        );
      })}
    </>
  );
};
