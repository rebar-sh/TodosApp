import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Projects from '../Project/Projects'


function Sidebar() {


    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky dash">
                <ul className="nav flex-column">
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Projects</span>
                    <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle"></span>
                        <Link exact to="/operations/addProject">
                            <svg className="bi bi-plus-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">

                    <Projects />

                </ul>
            </div>
        </nav >



    )
}

export default Sidebar
