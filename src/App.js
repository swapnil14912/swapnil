import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import data from "./seeds";
import classes from "./App.module.css";

const App = () => {
  return(
    <BrowserRouter>
      <About/>
      <div className={classes.display}>
        {data.map((i)=>{
          return <Home key={i.id} Title={i.title} Image={i.image} Description={i.description} Url={i.url} Source={i.source} />
        })}
      </div>
    </BrowserRouter>
  );
};

export default App;
