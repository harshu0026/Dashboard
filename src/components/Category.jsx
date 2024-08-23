// src/components/Category.js
import React, { useState } from 'react';
import Widget from './Widget';
import useDashboardStore from '../store';

const Category = ({ category }) => {
    const [newWidgetName, setNewWidgetName] = useState('');
    const [newWidgetText, setNewWidgetText] = useState('');
    const addWidget = useDashboardStore((state) => state.addWidget);

    const handleAddWidget = () => {
        const newWidget = {
            id: Date.now(),
            name: newWidgetName,
            text: newWidgetText,
        };
        addWidget(category.id, newWidget);
        setNewWidgetName('');
        setNewWidgetText('');
    };

    return (
        <div className=''>
            <h2 className='text-xl font-bold'>{category.name}</h2>
            <div>
                {category.widgets.map((widget) => (
                    <Widget key={widget.id} categoryId={category.id} widget={widget} />
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={newWidgetName}
                    onChange={(e) => setNewWidgetName(e.target.value)}
                    placeholder="Widget Name"
                />
                <input
                    type="text"
                    value={newWidgetText}
                    onChange={(e) => setNewWidgetText(e.target.value)}
                    placeholder="Widget Text"
                />
                <button onClick={handleAddWidget}>+ Add Widget</button>
            </div>
        </div>
    );
};

export default Category;
