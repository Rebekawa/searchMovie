import React from 'react';
import './App.css';
import Results from "./components/Results"
import axios from "axios"
class App extends React.Component {
  constructor(props) {
    super(props);
    //   //const movies = 
    this.state = {
      movie: "",
      year: "",
      movieObj: null
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

    var APIurl = `http://www.omdbapi.com/?apikey=c3901c76&t=${this.state.movie}&y=${this.state.year}`
    let that = this;
    axios.get(APIurl)
      .then(function (response) {
        console.log(response.data);
        
        
        that.setState({
          movieObj: response.data
        })
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
          <button className='button' onClick={(e) => this.setState({
            movie: '',
            year:'',
            movieObj: null
          })}>Clear</button>
        </form>
        
        <Results movie={this.state.movieObj} />

      </div>

    );
  }
}




export default App;