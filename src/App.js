import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor");
  }

  state = {
    isLoading: true,
    movie: []
  };

  getMovies= async ()=> {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    console.log("render");
    return <div>{this.state.isLoading?"Loading...": "We are Ready!"}</div>
  }
}

export default App;
