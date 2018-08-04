import React from 'react';
import { Counter } from '../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../store/modules/test';

class CounterContainer extends React.Component{
  handleIncrement = async() => {
    const { counterActions } = this.props;
    await counterActions.incrementCounter(1);
  }

  handleDecrement = async() => {
    const { counterActions } = this.props;
    await counterActions.decrementCounter(1);
    
  }

  render = () => {
    const { handleIncrement, handleDecrement } = this;
    // const { onIncrement, onDecrement } = this.props;
    console.log(this.props);
    console.log(this.props.counter);
    console.log(handleIncrement);
    return(
      <div>
        <Counter 
          counter={this.props.counter} 
          onIncrement={handleIncrement} 
          onDecrement={handleDecrement}/>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     counterActions: () => dispatch(counterActions.incrementCounter)
//   }
// }

const CounterApp = connect(
  (state) => ({
    counter: state.test.counters.counter
  }),
  (dispatch) => ({
    counterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);

// const CounterApp = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CounterContainer);


console.log(CounterApp);

const AboutPage = () => (
  <div>
    <div>
      About page

    </div>
    <CounterApp />
    
  </div>
);

export default AboutPage;