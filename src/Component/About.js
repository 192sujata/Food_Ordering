import React from "react";
import User from "./user";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
       // console.log("parent constuctor");
    }
    componentDidMount(){
       // console.log("parent component did count");
    }
    render() {
       // console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                { <div>
                    loggedInUser
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div> }
                <h2>welcome to swiggy</h2>
                <User name = {"suzzz"} />
                <UserClass name = {"Ms.nayak"} location = {"punes"} />
        
            </div>
        );
    }
}

export default About;