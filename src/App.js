import React,{Component} from 'react';
import './App.css';
import MainNavigation from './header/MainNavigation';
import MovieRow from './MovieRow';
import $ from 'jquery';


class App extends Component{
  constructor(props){
    super(props)

    this.state={}


    this.performSearch("ANT MAN")
  }

  performSearch(searchTerm){
    console.log("Perfomr Search using json-server");

    const urlString= "http://localhost:3006/movies/?query="+searchTerm
    //const urlString= "http://localhost:3006/movies/?Title=Harry Potter and the Deathly Hallows: Part 2"
    //const urlString= "http://localhost:3006/movies/?title=json-server&Title=" + searchTerm

    console.log(urlString);
    console.log(searchTerm);

    var searchTitle = searchTerm;

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched Data")
        //console.log(searchResults)

        const results = searchResults
        //console.log(results[0])

        var movieRows= [];

        results.forEach((movie) => {
          if(searchTerm == movie.Title)
          {
            console.log('movie.Title', movie.Title);
            console.log('searchTerm', searchTerm);
            movie.Poster = movie.Poster
            const movieRow= <MovieRow key={movie.id} movie={movie} />
            movieRows.push(movieRow);
          }
          else{
            console.log('1')
            movie.Poster = movie.Poster
            const movieRow1= <MovieRow key={movie.id} movie={movie} />
            movieRows.push(movieRow1);
          }
        })

        console.log('movieRows.count',movieRows.length)
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed Fetched Data");
      }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value);

    const boundObject=this
    const searchTerm=event.target.value
    boundObject.performSearch(searchTerm)
  }

 render() {
   return(
     <div>
      
      <div className="nav">
        <MainNavigation />
      </div>
<div style={{
  paddingLeft: 60,
  paddingRight:60
}}>
      <div style={{
        paddingTop: 80
      }}>

      <input style={{
        fontSize: 24,
        display: 'block',
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search Movie" />
      <br />
      </div>

      {this.state.rows}
      </div>
     </div>
   )
 }


}

export default App;
