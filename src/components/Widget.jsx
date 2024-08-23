// src/components/Widget.js
import React from 'react';
import useDashboardStore from '../store';

const Widget = ({ categoryId, widget }) => {
    const removeWidget = useDashboardStore((state) => state.removeWidget);

    return (
        <div className='bg-white '>
            <h3>{widget.name}</h3>
            <p>{widget.text}</p>
            <button onClick={() => removeWidget(categoryId, widget.id)}>Remove</button>
        </div>
    );
};

export default Widget;
