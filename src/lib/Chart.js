import React from 'react';
import * as s from './Chart.scss';


class ChartComponent extends React.Component {
  
  diamater;
  holeDiamater;
  value = 0.3;

  static getLabelAsKey = d => d.label;

  static defaultProps = {
    legend: {
      display: true,
      position: 'bottom',
    },
    type: 'doughnut',
    holeDiamater: 200,
    diamater: 300,
    redraw: false,
    options: {},
    datasetKeyProvider: ChartComponent.getLabelAsKey,
  };

  constructor(props) {
    super(props);
    this.diamater = props.diamater || this.defaultProps.diamater;
    this.holeDiamater = props.holeDiamater || this.defaultProps.holeDiamater;
  }
  componentWillMount() {}

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  renderChart() {}

  handleOnClick = event => {};

  chartStyle = () => {
     return {
      width: `${this.diamater}px`,
      height: `${this.diamater}px`,
      borderRadius: '50%',
      backgroundColor: 'red',
    };
  };

  changeRotation = () => {
    const greaterThenHalf = this.value > 0.5;
    const percentage = Math.round(this.value * 100);
    const rotation = this.value;
    if (this.value > 0.5) {
      rotation = this.value - 0.5;
    }
    return {
      // left: `${this.diamater/2}px`,
      width: `${this.diamater/2}px`,
      height: `${this.diamater}px`,
      transform: `rotate(${rotation}turn)`
      
      
      };
  };

  holeStyle = () => {
    const width = this.diamater;
    const holeWidth = this.holeDiamater;
    return {
      width: `${holeWidth}px`,
      height: `${holeWidth}px`,

      
    };
  };

  textStyle = () => {
    return {
      color: 'black',
      fontSize: '25px',
    };
  };

  render() {
    const percentage = '25';
    const showText = true;
    return (
      <div className="chart" style={this.chartStyle()}>
        <div className="chart-before" style={this.changeRotation()} />
        <div className="chart-after" style={this.holeStyle()} />
        {showText && (
          <div className="text" style={this.textStyle()}>
            {' '}
            {percentage}%
          </div>
        )}
      </div>
    );
  }
}

export default ChartComponent;

export class Doughnut extends React.Component {
  render() {
    return <ChartComponent type="doughnut" />;
  }
}
