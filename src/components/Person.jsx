import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { map } from "rsvp";

const slipOnBananaPeel = () => ({
  type: "SLIP_ON_BANANA_PEEL"
});
const watchTheNews = () => ({
  type: "WATCH_THE_NEWS"
});
const winTheLottery = howMuch => ({
  type: "WIN_THE_LOTTERY",
  howMuch
});

export class Person extends React.Component {
  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>
        {/* children would get slices of state and methods to change state */}
        <button onClick={this.props.slipOnBananaPeel}>
          Slip on banana peel
        </button>
        <button onClick={this.props.watchTheNews}>Watch the news</button>
        <button onClick={() => this.props.winTheLottery(15)}>
          Win the Lottery
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      slipOnBananaPeel,
      watchTheNews,
      winTheLottery
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    physicalHealth: state.physicalHealth,
    mentalHealth: state.mentalHealth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
