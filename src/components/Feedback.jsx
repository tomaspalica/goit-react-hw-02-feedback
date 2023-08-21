import React, { Component } from "react";

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      
      }

      hendleClick =  (evt) =>{
 const {name,value,key} = evt.target;
 this.setState({[name]: this.state[name] += 1})
 console.log(key)
      }
      countTotalFeedback = () => {
        const { good, bad, neutral } = this.state;
        return good + bad + neutral;
      }
    
      
      countPositiveFeedbackPercentage =() =>{
        return Math.round((this.state.good / this.countTotalFeedback()) * 100 )
      
      }
     
      render() {
        return (
            <div>
            <h2>Please leave feedback</h2>
            <button type="button" key="lllll" name="good"onClick={ this.hendleClick  } >Good</button>
            <button type="button" name="neutral" onClick={this.hendleClick}>Neutral</button>
            <button type="button" name="bad" onClick={this.hendleClick}>Bad</button>
            <h2>Statistics</h2>
            <span>Good:{this.state.good}</span>
            <span>Neutral:{this.state.neutral}</span>
            <span>Bad:{this.state.bad}</span>
            <span>total:{ this.countTotalFeedback()}</span>
            <span>Positive feedback:{this.countPositiveFeedbackPercentage()}%</span>
            </div>
          );
        
      }
}
export {Feedback}