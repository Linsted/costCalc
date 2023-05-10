import { useState } from "react";
import { Form } from "./Table/Form/Form";
import { Table } from "./Table/Table";

export const App = () => {

  const [ml, setMl] = useState(0);
  const [price, setPrice] = useState(0);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setMl(event.currentTarget.elements.ml.value);
    setPrice(event.currentTarget.elements.price.value);
    event.currentTarget.reset();
  };
  
  
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Калькулятор собівартості</h1>
      <Form handleSubmit={handleSubmit} /> 
      <Table ml={ml} price={price} />
    </div>
  );
};





