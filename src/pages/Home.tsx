import React from 'react';
import { Link } from 'react-router-dom';

type HomeProps = {};

const Home: React.FC<HomeProps> = ({ children }) => {
    return (
        <div>
            <Link to='/login'>Login</Link>
        </div>
    );
};
export default Home;
