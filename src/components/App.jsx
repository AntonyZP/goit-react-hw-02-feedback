import React, {Component} from "react";
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
// import Notification from './Notification';
import Statistics from './Statistics';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

    
onLeaveFeedback = event =>{
    const {name} = event.currentTarget;
    this.setState(prevState => ({[name]:prevState[name]+1}))
};

countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good+neutral+bad
};


countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };

render() {
    const {good, neutral, bad} = this.state

    return (
     <div>
        <Section title="Please leave feedback">
            <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.onLeaveFeedback}
            />
        </Section>
        <Section>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage}
                />
        </Section>
     </div>)
}
};