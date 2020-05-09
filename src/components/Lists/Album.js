import React, { useContext } from "react";

const Album = ({ item }) => {
  return (
    <>
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "5px" }}
      >
        <p>{item.name}</p>
        <p>{item.year}</p>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
        <button type="button">Select</button>
      </div>
    </>
  );
};

export default Album;
