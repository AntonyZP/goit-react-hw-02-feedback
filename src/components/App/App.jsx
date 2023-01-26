import { render } from "@testing-library/react";
import React, {Component} from "react";

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
        <section title = 'Please leave feedback'>

        </section>
        <section>
           <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePersentage={this.countPositiveFeedbackPercentage}
             />
        </section>
     </div>
}
};
