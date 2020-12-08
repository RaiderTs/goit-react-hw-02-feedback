import React, { Component } from 'react';
import Section from './components/Section/Section.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import { Data } from './components/data/data';
import Statistics from './components/Statistics/Statistics.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    // console.log(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedback();

    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Data}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}

export default App;
