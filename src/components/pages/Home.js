
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios';
import Sidebar from './Sidebar';
import Tasks from '../task/Tasks';




const Home = () => {


    return (
        <div>
            <div className="container-fluid">
                <div className="row">

                    <Sidebar />
                    <Tasks />

                </div>
            </div>

        </div >
    )
}

export default Home
