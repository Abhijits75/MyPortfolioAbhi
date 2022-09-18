import "./productList.css";

import react from "../../img/react.svg";
import html from "../../img/html.svg";
import css from "../../img/css.svg";
import bootstrap from "../../img/bootstrap.svg";
import python from "../../img/python.svg";
import javascript from "../../img/javascript.svg";
import node from "../../img/node.svg";
import angularjs from "../../img/angularjs.svg";
import django from "../../img/django.svg";
import mysql from "../../img/mysql.svg";
import postgresql from "../../img/postgresql.svg";
import github from "../../img/github.svg";
import excel from "../../img/excel.svg";


const ProductList = () => {
  return (
    <div className="col-lg-12"><h3 className="sea-subheading" >Skills 🔥</h3>
      <div className="technologies-used"> 
      <p>
       <img src={html} alt="" className="sea-tech" />
        <img src={css} alt="" className="sea-tech" /> 
        <img src={bootstrap} alt="" className="sea-tech" />     
        <img src={javascript} alt="" className="sea-tech" />
        <img src={angularjs} alt="" className="sea-tech" />
        <img src={react} alt="" className="sea-tech" />
        <img src={python} alt="" className="sea-tech" />
        <img src={django} alt="" className="sea-tech" />
        <img src={mysql} alt="" className="sea-tech" />
        <img src={postgresql} alt="" className="sea-tech" />
        <img src={github} alt="" className="sea-tech" />
        <img src={excel} alt="" className="sea-tech" /></p>
      </div>
    </div>
  );
};

export default ProductList;
