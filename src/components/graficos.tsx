"use client";
import React, { Component } from 'react';
import Chart from 'react-apexcharts';

interface DonutProps {
  customSeries?: number[];
}

interface DonutState {
  options: any;
  series: number[];
  labels: string[];
}

class Donut extends Component<DonutProps, DonutState> {
  constructor(props: any) {
    super(props);
    this.state = {
      options: {},
      series: [],
      labels: [],
    };
  }
  render() {
    const { customSeries } = this.props;
    const seriesToUse = customSeries || this.state.series;
    return (
      <div className="donut">
        <Chart options={this.state.options} series={seriesToUse} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;
