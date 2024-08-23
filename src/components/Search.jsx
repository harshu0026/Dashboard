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
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Widgets"
            />
            <div>
                {filteredCategories.map((category) =>
                    category.widgets.length > 0 ? (
                        <div key={category.id}>
                            <h2>{category.name}</h2>
                            {category.widgets.map((widget) => (
                                <div key={widget.id}>
                                    <h3>{widget.name}</h3>
                                    <p>{widget.text}</p>
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
