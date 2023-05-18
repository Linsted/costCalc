import { useState } from "react";
import { Form } from "./Form/Form";
import { TableCream } from "./TableCream/TableCeam";
import { TableLotion } from "./TableLotion/TableLotion";

export const App = () => {

  const [mlCream, setMlCream] = useState(0);
  const [priceCream, setPriceCream] = useState(0);
  const [mlLotion, setMlLotion] = useState(0);
  const [priceLotion, setPriceLotion] = useState(0);

  const handleSubmitCream = (event) => {
    event.preventDefault();
     const formValue = event.currentTarget.elements;
    setMlCream(formValue.ml.value);
    setPriceCream(formValue.price.value);
    event.currentTarget.reset();
  };

  const handleCleanCream = () => {
    setMlCream(0);
    setPriceCream(0);
  };


   const handleSubmitLotion = (event) => {
     event.preventDefault();
     const formValue = event.currentTarget.elements;
    setMlLotion(formValue.ml.value);
    setPriceLotion(formValue.price.value);
    event.currentTarget.reset();
  };
     const handleCleanLotion = () => {
    setMlLotion(0);
    setPriceLotion(0);
  };
 
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1>Калькулятор собівартості креми</h1>
      <Form handleSubmit={handleSubmitCream} handleClean={ handleCleanCream} /> 
      <TableCream ml={mlCream} price={priceCream} />
      <h1>Калькулятор собівартості лосьйони</h1>
      <Form handleSubmit={handleSubmitLotion} handleClean={ handleCleanLotion}/> 
      <TableLotion ml={mlLotion} price={priceLotion} />
    </div>
  );
};





