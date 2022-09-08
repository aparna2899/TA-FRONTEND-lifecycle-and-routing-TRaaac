import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      info: '',
    };
  }
  componentDidMount() {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    let { data } = this.state;
    if (!data) {
      return <p>Loading</p>;
    }
    return (
      <div className="container">
        <div className="card">
          <img
            className="img-box"
            src={data.results[0].picture.large}
            alt=""
          ></img>
          <hr />
          <p>My name is</p>
          <h1>
            {data.results[0].name.first} {data.results[0].name.last}
          </h1>
          <h2>{this.state.info}</h2>
          <div className="icons">
            <div
              onMouseEnter={() =>
                this.setState({ info: data.results[0].email })
              }
              onMouseLeave={() => this.setState({ info: '' })}
            >
              <i className="fa fa-user"></i>
            </div>

            <i
              className="fa fa-home"
              onMouseEnter={() =>
                this.setState({
                  info:
                    data.results[0].location.state +
                    data.results[0].location.country,
                })
              }
              onMouseLeave={() => this.setState({ info: '' })}
            ></i>
            <i
              className="fa fa-calendar"
              onMouseEnter={() =>
                this.setState({
                  info: data.results[0].dob.date.substring(0, 10),
                })
              }
              onMouseLeave={() => this.setState({ info: '' })}
            ></i>
            <i
              className="fa fa-phone"
              onMouseEnter={() =>
                this.setState({ info: data.results[0].phone })
              }
              onMouseLeave={() => this.setState({ info: '' })}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
