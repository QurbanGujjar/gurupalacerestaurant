import React,{useState} from "react";
import "./modelShopping.css";
import { useStateValue } from "./../../StateProvider";
import OrderDetails from "./OrderDetails";
import ShoppingFooter from "./ShoppingFooter";
import ContactForm from "./ContactForm";

const ModelShopping = () => {
  const [check, setCheck] = useState("As soon as possible");
  const [payMethod, setPayMethod] = useState("Cash");
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
        <ContactForm check={ check} setCheck ={setCheck} payMethod ={payMethod} setPayMethod= { setPayMethod} />
        <OrderDetails
          basket={basket}
          subTotal={subTotal}
          tex={tex}
          Total={Total}
        />
      </div>
      <ShoppingFooter Total={Total} basket={basket} check={check} payMethod={payMethod} />
    </section>
  );
};

export default ModelShopping;
