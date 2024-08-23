// src/components/Search.js
import React, { useState } from 'react';
import useDashboardStore from '../store';

const Search = () => {
    const [query, setQuery] = useState('');
    const categories = useDashboardStore((state) => state.categories);

    const filteredCategories = categories.map((category) => ({
        ...category,
        widgets: category.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(query.toLowerCase())
        ),
    }));

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Widgets"
                className="p-2 border rounded w-full"
            />
            <div className="mt-2">
                {filteredCategories.map((category) =>
                    category.widgets.length > 0 ? (
                        <div key={category.id} className="mb-2">
                            <h2 className="text-lg font-semibold">{category.name}</h2>
                            {category.widgets.map((widget) => (
                                <div key={widget.id} className="bg-gray-50 p-2 mt-1 rounded">
                                    <h3 className="text-md font-semibold">{widget.name}</h3>
                                    <p className="text-gray-600">{widget.text}</p>
                                </div>
                            ))}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Search;
