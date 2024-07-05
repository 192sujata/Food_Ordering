import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };

    //console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child compnent did mount");
    const data = await fetch("https://api.github.com/user/192sujata");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  render() {

    // console.log(this.props.name + "child render");

    const { name,location ,avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src = {avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact :8746671986</h4>
      </div>
    );
  }
}

export default UserClass;
