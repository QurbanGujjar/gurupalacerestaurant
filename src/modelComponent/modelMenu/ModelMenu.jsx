import React from "react";
import MenuItem from "./MenuItem";
import "./modelMenu.css";
import data from "./../../OutputData.json";
function ModelMenu() {

  return (
    <>
    <section id='menubody'>
      <div className='menuhead'></div>
      {data.map((item,index) => (
        <MenuItem articles={item.articles} title={item.title} subtitle={item.subtitle} img={item.img} key={index} />
      ))}
    </section>


    </>


  );
}
export default ModelMenu;
