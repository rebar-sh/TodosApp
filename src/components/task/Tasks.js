import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import Priority from '../priority/Priorites';

function Tasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();

    }, [])


    const loadTasks = async () => {
        const result = await axios.get("http://localhost:2000/tasks");
        console.log(result)
        setTasks(result.data.reverse())
    }

    const deleteTask = async id => {
        await axios.delete(`http://localhost:2000/tasks/${id}`);
        loadTasks();
    }


    return (

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

            <div className="table-responsive  dash">
                <table className="table table-striped table-sm tbl">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Task</th>
                            <th>priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        {
                            tasks.map((task, index) => (
                                <tr>
                                    <td>{task.id}</td>
                                    <td> {task.userId}</td>
                                    <td>{task.title}</td>
                                    <th>{task.priorityId}</th>
                                    <td>{task.completed} </td>
                                    <td>
                                        <Link className="action-btn edit-link" exact to={`/operations/edittask/${task.id}`}>Edit</Link>
                                        <Link className="action-btn delete-link" exact onClick={() => deleteTask(`${task.id}`)}>Delete</Link>
                                        <Link className="action-btn delete-link" exact to={`/operations/viwe/${task.id}`} >View</Link>

                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </main>

    )
}

export default Tasks
