// src/components/Category.js
import React, { useState } from 'react';
import Widget from './Widget';
import useDashboardStore from '../store';

const Category = ({ category }) => {
    const [newWidgetName, setNewWidgetName] = useState('');
    const [newWidgetText, setNewWidgetText] = useState('');
    const [error, setError] = useState('');
    const addWidget = useDashboardStore((state) => state.addWidget);

    const handleAddWidget = () => {
        if (!newWidgetName || !newWidgetText) {
            setError('Both fields are required.');
            return;
        }

        const newWidget = {
            id: Date.now(),
            name: newWidgetName,
            text: newWidgetText,
        };
        addWidget(category.id, newWidget);
        setNewWidgetName('');
        setNewWidgetText('');
        setError('');
    };

    return (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 gap-4">
                {category.widgets.map((widget) => (
                    <Widget key={widget.id} categoryId={category.id} widget={widget} />
                ))}
            </div>
            <div className="mt-4 flex gap-2 flex-col sm:flex-row">
                <input
                    type="text"
                    value={newWidgetName}
                    onChange={(e) => setNewWidgetName(e.target.value)}
                    placeholder="Widget Name"
                    className="p-2 border rounded w-full sm:w-1/3"
                />
                <input
                    type="text"
                    value={newWidgetText}
                    onChange={(e) => setNewWidgetText(e.target.value)}
                    placeholder="Widget Text"
                    className="p-2 border rounded w-full sm:w-1/3"
                />
                <button
                    onClick={handleAddWidget}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    + Add Widget
                </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default Category;
