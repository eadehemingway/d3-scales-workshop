import React from 'react';
import * as d3 from 'd3';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 0, num: 6 },
        { key: 1, num: 20 },
        { key: 2, num: 21 },
        { key: 3, num: 14 },
        { key: 4, num: 2 },
        { key: 5, num: 30 },
        { key: 6, num: 7 },
        { key: 7, num: 16 },
        { key: 8, num: 25 },
        { key: 9, num: 5 },
        { key: 10, num: 11 },
        { key: 11, num: 28 },
        { key: 12, num: 10 },
        { key: 13, num: 26 },
        { key: 14, num: 9 }
      ],
      chart_width: 800,
      chart_height: 400
    };
  }
  componentDidMount() {
    const x_scale = this.calculateXScale();
    const y_scale = this.calculateYScale();
    const testX = x_scale(5);
    const testY = y_scale(5);

    console.log('x: ', testX, 'y: ', testY); // should return x: 269 and y: 66.66666666666666
  }

  calculateXScale = () => {};

  calculateYScale = () => {};

  draw = () => {};
  addBar = () => {
    const { data } = this.state;
    const new_num = Math.floor(Math.random() * d3.max(data, d => d.num)) + 1;
    const newData = [
      ...data,
      { key: data[data.length - 1].key + 1, num: new_num }
    ];
    this.setState({ data: newData }, () => this.draw());
  };

  removeBar = () => {
    const { data } = this.state;
    const newData = [...data].slice(1);
    this.setState({ data: newData }, () => this.draw());
  };

  render() {
    return (
      <div>
        <div id="chart" />

        <div className="button-container">
          <button id="increase" className="increase-btn" onClick={this.addBar}>
            +
          </button>
          <button
            id="decrease"
            className="decrease-btn"
            onClick={this.removeBar}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
