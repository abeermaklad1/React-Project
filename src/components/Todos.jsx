import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import todosAction from '../Redux/actions/todosAction';
import {useParams, useNavigate} from 'react-router-dom';

function Todos (props) {
    let {id} = useParams();
    let navigate  = useNavigate();

    let {todos, getTodosList} = props;
    useEffect (() => {
        getTodosList();
    }, []);

    let goToHomePage = () => {
        navigate("/home");
    }
    return(
        <div className='bg-light p-5'>
            <h1 style={{ color: "rgb(107, 164, 193 )" }} className='text-center'>Todos List</h1>
            <h2 className='text-center'>ID is: {id}</h2>
            <div className='text-center m-3'><button className='btn btn-outline-info mb-3 text-center' onClick={goToHomePage}>Go to Home</button></div>

            {todos && 
            todos.map((todo, index) => {
                return(
                    <div style={{ backgroundColor: "rgb(213, 224, 229  )" }} className=' mb-3 p-3 text-center rounded-pill' key={index}>
                        <h2>{todo.id}</h2>
                        <p>{todo.title}</p>
                    </div>
                );
            })}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        todos: state.todosList,
    }
};

let mapToDispatchToProps = (dispatch) => {
    return {
       getTodosList: () => dispatch(todosAction()),
    }
};
export default connect(mapStateToProps, mapToDispatchToProps)(Todos);