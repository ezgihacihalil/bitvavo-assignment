import React from 'react';
import ShipList from '../components/ShipList';
import Header from '../components/Header';

const ShipsPage: React.FC = () => (
    <section className="main-page section">
        <Header />
        <ShipList />
    </section>
);

export default ShipsPage;