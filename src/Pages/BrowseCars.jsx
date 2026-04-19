import { all } from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../components/Card';

const BrowseCars = () => {
    const allCar = useLoaderData();
    return (
        <div>
            <h1>Our All Car Collection</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allCar.map(data => <Card data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default BrowseCars;