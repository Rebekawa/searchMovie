import React from 'react';
import './App.css';
import { forInStatement } from '@babel/types';
import Results from "./components/Results"
import axios from "axios"
class App extends React.Component {
  constructor(props) {
    super(props);


    //   //const movies = 
    this.state = {
      movie: "",
      year: "",

    }
  } 
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.movie);
      console.log(this.state.year);

      var APIurl = 'http://www.omdbapi.com/movie?query=' + this.state.movie + '&year?query=' + this.state.year + '?i=tt3896198&apikey=c3901c76'
      console.log(APIurl);

      
      
  }

      
    render() {
      return (
        <div>
          <form className='form' onSubmit={(e) => {
            this.handleSubmit(e)
          }}>
            <label>
              movie
          </label>
            <input required type="text" placeholder='Enter Movie Name' onChange={(e) => this.setState({
              movie: e.target.value
            })} value={this.state.movie}></input>
            <label>
              year
          </label>
            <input type="number" placeholder='Enter Movie Year' onChange={(e) => this.setState({
              year: e.target.value
            })} value={this.state.year}></input>
            <button type="submit" >Submit</button>
          </form>

        </div>

      );
    }
  }




  export default App;
