import React from 'react';


class MovieRow extends React.Component{
    viewMovie(){
        const url = "http://localhost:3006/movies/" + this.props.movie.id
        window.location.href = url
    }

    render(){
        return <table key={this.props.movie.id}>
                    <tbody>
                        <tr>
                            <td>
                                <img alt="poster" width="150" src={this.props.movie.Poster} />
                            </td>
                            <td>
                                <h3>{this.props.movie.Title}</h3>
                                <p>{this.props.movie.Plot}</p>
                                  <h5>Language - {this.props.movie.Language}</h5>
                                  <h5>Rating - {this.props.movie.imdbRating}</h5>
                                  <h5>{this.props.movie.listingType}</h5>
                                {/* <input type="button" onClick={this.viewMovie.bind(this)} value="View" /> */}
                            </td>
                            <td>
                                <hr />
                            </td>
                        </tr>
                    </tbody>
                </table>
    }

}


export default MovieRow;