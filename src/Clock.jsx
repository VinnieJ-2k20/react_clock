import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
    timer: null,
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      const time = new Date();

      this.setState({
        time,
      });

      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);

    this.setState({
      timer: intervalId,
    });
  }

  componentDidUpdate({ name: oldName }) {
    const { name } = this.props;

    if (oldName !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${name}`);
    }
  }

  componentWillUnmount() {
    const { timer } = this.state;

    clearInterval(timer);
  }

  render() {
    const { time } = this.state;

    return (
      <p>
        {'Current time: '}
        {time.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};