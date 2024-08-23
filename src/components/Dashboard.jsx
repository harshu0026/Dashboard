// src/components/Dashboard.js
import React from 'react';
import useDashboardStore from '../store';
import Category from './Category';

const Dashboard = () => {
    const categories = useDashboardStore((state) => state.categories);

    return (
        <div className=''>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Dashboard;
