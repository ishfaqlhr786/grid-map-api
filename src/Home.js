import React from "react";
import "./Grids.css";

export const Home = () => {
  const Users = [
    { id: 1, name: "ali", city: "lahore", img: "../pic1.jpg" },
    { id: 2, name: "naveed", city: "lahore", img: "../pic2.jpg" },
    { id: 3, name: "asim", city: "mtn", img: "../pic3.jpg" },
    { id: 4, name: "ghafoor", city: "khi", img: "../pic4.jpg" },
    { id: 5, name: "amir", city: "lahore", img: "../pic5.jpg" },
    { id: 6, name: "nasir", city: "lahore", img: "../pic6.jpg" },
    { id: 7, name: "asiq", city: "mtn", img: "../pic7.jpg" },
    { id: 8, name: "bilal", city: "khi", img: "../pic8.jpg" },
    { id: 9, name: "moazzam", city: "lahore", img: "../pic9.jpg" },
  ];
  // console.log("element", elem);
  return (
    <>
      <div id="cover">
        <div className="container"></div>
      </div>
    </>
  );
};
