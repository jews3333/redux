import React from 'react';
import Counter from './Counter';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    const counterList = counters.map(
        (counter, i) => (
            <Counter 
                key={i}
                index={i}
                {...counter.toJS()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        )
    );

    return (
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn("onIncrement"),
    onDecrement: () => console.warn("onDecrement"),
    onSetColor: () => console.warn("onSetColor")
}


export default CounterList;
