import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Priority() {


    const [priority, setPriority] = useState([]);


    useEffect(() => {
        loadPriority()



    }, [])

    const loadPriority = async () => {
        const result = await axios.get(`http://localhost:2000/priority`)
        console.log(result)
        setPriority(result.data)


    }

    return (

        <li className="nav-item">
            <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                {
                    priority.map((priorit, index) => {
                        return (
                            <th>
                                {priorit.name}
                            </th>
                        )
                    })
                }
            </a>
        </li>
    )
}

export default Priority
