// src/components/Dashboard.js
import React from 'react';
import useDashboardStore from '../store';
import Category from './Category';
import Search from './Search';

const Dashboard = () => {
    const categories = useDashboardStore((state) => state.categories);

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <Search />
            <div className="mt-4">
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
