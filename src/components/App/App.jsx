import React, {Component} from "react";
import Section from 'components/Section';
import Statistics from 'components/Statistics';



export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

    
onLeaveFeddback = event =>{
    const {name} = event.currentTarget;
    this.setState(prevState => ({[name]:prevState[name]+1}))
};

countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good+neutral+bad
};

countPositiveFeedbackPercentage = () => {
    const {good} =this.state;
    return Math.round((good*100)/this.countTotalFeedback) + '%';
};
 
render() {
    const {good, neutral, bad} = this.state

    return
     <div>
        <Section title = 'Please leave feedback'>

        </Section>
        <Section>
           <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePersentage={this.countPositiveFeedbackPercentage}
             />
        </Section>
     </div>
}
};
