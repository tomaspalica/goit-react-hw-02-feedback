import React, { Component } from "react";

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      hendleClick = (evt) =>{
 const {name,value} = evt.target;
 this.setState({[name]: this.state[name] += 1})
 console.log(this.state)
      }
      render() {
        return (
            <div>
            <h2>Please leave feedback</h2>
            <button type="button" name="good"onClick={this.hendleClick} >Good</button>
            <button type="button" name="neutral" onClick={this.hendleClick}>Neutral</button>
            <button type="button" name="bad" onClick={this.hendleClick}>Bad</button>
            <h2>Statistics</h2>
            <span>Good:{this.state.good}</span>
            <span>Neutral:{this.state.neutral}</span>
            <span>Bad:{this.state.bad}</span>
            </div>
          );
        
      }
}
export {Feedback}