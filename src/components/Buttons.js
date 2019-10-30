import React from 'react';

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>생성</div>
            <div className="btn remove" onClick={onRemove}>제거</div>
        </div>
    )
}

Buttons.defaultProps = {
    onCreate: () => console.warn("onCreate"),
    onRemove: () => console.warn("onRemove")
}

export default Buttons;