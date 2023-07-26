
import './App.css';
import {Component} from "react";
import Clicker from "./components/clicker/clicker";
import Movie from "./components/movie/movie";

class App extends Component {


  render() {

    return (
        <div className="App">
         <Movie/>
        </div>
    );
  }
}
export default App;
