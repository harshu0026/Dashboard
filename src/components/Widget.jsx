import React from 'react';
import useDashboardStore from '../store';

const Widget = ({ categoryId, widget }) => {
    const removeWidget = useDashboardStore((state) => state.removeWidget);

    return (
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{widget.name}</h3>
            <p className="text-gray-600">{widget.text}</p>
            <button
                onClick={() => removeWidget(categoryId, widget.id)}
                className="mt-2 text-red-500 hover:underline"
            >
                Remove
            </button>
        </div>
    );
};

export default Widget;
