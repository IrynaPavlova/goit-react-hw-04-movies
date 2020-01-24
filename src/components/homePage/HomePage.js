import React, { Component } from "react";

import { Link } from "react-router-dom";

// const HomePage ({data}) => (
//   <>
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>
//               <Link to={`/movies/${item.id}`}> {item.original_title}</Link>
//             </li>
//           ))}
//         </ul>
//       </>
// )

// export default HomePage

export default class HomePage extends Component {
  state = {
    data: []
  };

  // componentDidMount() {
  //   this.getArray();
  // }

  // getArray = () => {
  //   services.getData().then(data => {
  //     this.setState({ data: data });
  //   });
  // };
  render() {
    return (
      <>
        <ul>
          {this.props.movies.map(item => (
            <li key={item.id} onClick={this.props.getMoviesById}>
              <Link to={`/movies/${item.id}`}> {item.original_title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
