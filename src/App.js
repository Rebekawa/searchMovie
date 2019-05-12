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

      // how to get the informations in the url????

      var APIurl = 'http://www.omdbapi.com/movie=' + this.state.movie + '&year=' + this.state.year + '?i=tt3896198&apikey=c3901c76'
      console.log(APIurl);

      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c3901c76')
        .then(function (response) {

          console.log(response.data)
          var results=response.results
           var movieList = [];

           results.forEach((movie) => {
            var movie = <Results movie={movie}/>

            movieList.push(movie)
            console.log(movieList);
            

           })

           this.setState({list: movieList })

          
        })
        .catch(function (e) {
          console.log("ERROR ", e);
        })
      
  }

      
    render() {
      return (
        <div>
          <form className='form' onSubmit={(e) => {
            this.handleSubmit(e)
          }}>
            <label>
              
          </label>
            <input id='movieInput' className='input' required type="text" placeholder='Enter Movie Name' onChange={(e) => this.setState({
              movie: e.target.value
            })} value={this.state.movie}></input>
            <label>
              
          </label>
            <input id='yearInput' className='input' type="number" placeholder='Enter Movie Year' min='1900' onChange={(e) => this.setState({
              year: e.target.value
            })} value={this.state.year}></input>
            <button className='button' type="submit" >Submit</button>
            <button className='button' >Clear</button>
          </form>
          <Results/>

        </div>

      );
    }
  }




  export default App;
