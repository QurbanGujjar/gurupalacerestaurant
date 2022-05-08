import React from "react";
import "./modelShopping.css";
import { useStateValue } from "./../../StateProvider";
import OrderDetails from "./OrderDetails";
import ShoppingFooter from "./ShoppingFooter";
import ContactForm from "./ContactForm";

const ModelShopping = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  let subTotal = 0;
  let tex = 0;
  let Total = 0;

  basket.map((item) => (subTotal = subTotal + Number(item.val)));
  tex = subTotal / 6.625;
  Total = tex + subTotal;
  return (
    <section id='modelShopping'>
      <div className='shopping-container'>
        <ContactForm/>
        <OrderDetails
          basket={basket}
          subTotal={subTotal}
          tex={tex}
          Total={Total}
        />
      </div>
      <ShoppingFooter Total={Total} />
    </section>
  );
};

export default ModelShopping;
