import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'






function EditTask() {

    let history = useHistory();
    const { id } = useParams();


    const [tasks, setTasks] = useState({
        "userId": "",
        "title": "",
        "complated": ""
    });


    const { userId, title, complated } = tasks;


    useEffect(() => {
        loadTasks();
    }, [])






    const onInputChange = e => {
        setTasks({ ...tasks, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.put(`http://localhost:2000/tasks/${id}`, tasks);
        history.push('/');
    }


    const loadTasks = async e => {

        const result = await Axios.get(`http://localhost:2000/tasks/${id}`);
        setTasks(result.data)

    }



    return (
        <div className="container dash">
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-row">

                    <div className="form-group col-md-12">
                        <label for="task">Task</label>
                        <input onChange={e => onInputChange(e)} type="text" name="title" value={title} className="form-control" id="task" />
                    </div>
                </div>

                <div className="form-row">

                    <div className="form-group col-md-4">
                        <label for="conpmated">Complated</label>
                        <select onChange={e => onInputChange(e)} id="complated" name="complated" value={complated} className="form-control">
                            <option selected>Choose...</option>
                            <option>true</option>
                            <option>fale</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="userId">UserId</label>
                        <select onChange={e => onInputChange(e)} id="userId" name="userId" value={userId} className="form-control">
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
      </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary">Edit</button>
            </form>
        </div >
    )
}

export default EditTask
