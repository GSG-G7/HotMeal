import React from 'react';
import './slider.css';
import left from '../../../assets/angle-left.svg';
import right from '../../../assets/angle-right.svg';

// const slider = () => {};
class slider extends React.Component {
  state = {
    counter: 1,
  };

  componentDidMount() {
    setInterval(() => {
      this.plus();
    }, 2000);
  }

  plus = () => {
    const { counter } = this.state;
    if (counter === 4) {
      this.setState({ counter: 1 });
    } else {
      this.setState(prev => ({ counter: prev.counter + 1 }));
    }
  };

  minus = () => {
    const { counter } = this.state;
    if (counter === 1) {
      this.setState({ counter: 4 });
    } else {
      this.setState(prev => ({ counter: prev.counter - 1 }));
    }
  };

  render() {
    const { counter } = this.state;
    return (
      <div className={`bg${counter} container`}>
        <div
          className="left"
          tabIndex={0}
          alt="left"
          style={{ width: '1rem' }}
          onClick={this.plus}
          onKeyDown={e => {
            if (e.key === 'ArrowRight') this.plus();
            if (e.key === 'ArrowLeft') this.minus();
          }}
          role="button"
        >
          <img src={left} alt="left" />
        </div>
        <div
          className="left"
          tabIndex={0}
          alt="right"
          style={{ width: '1rem' }}
          onClick={this.plus}
          onKeyDown={e => {
            if (e.key === 'ArrowRight') this.plus();
            if (e.key === 'ArrowLeft') this.minus();
          }}
          role="button"
        >
          <img src={right} alt="right" />
        </div>
      </div>
    );
  }
}
export default slider;
