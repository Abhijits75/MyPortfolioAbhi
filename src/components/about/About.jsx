import "./about.css";
import Award from "../../img/award.png";
import logo from "../../img/logo.gif";

const About = () => {
  return (
    <div className="a">
      <h1 className="a-mobiletitle">About Me</h1>  
      <div className="a-left">
        <div className="a-card bg"></div>
        
        <div className="a-card">
        <img src={logo} 
            alt=""
            className="a-img"
          />
        </div>
      </div>
      
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Professional Application Developer with more than 6 years’ experience in  Developing web-based application, Data analysis, 
        Process Automation. 

        </p>
        <p className="a-desc">
        <li> Python Django Framework, VBA Programming, Python Automation,, etc.</li><br/>
        <li>Experience in writing SQL queries, table, views, triggers.</li><br/>
        <li>Web development using Angular JS, React JS, Python-Django.</li><br/>
        <li>Data analysis using python numpy, pandas, Matplotlib , Scikit-Learn libraries.</li>
        </p>
        
      </div>
    </div>
  );
};

export default About;
