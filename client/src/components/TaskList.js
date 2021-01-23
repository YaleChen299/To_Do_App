import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const ListContainer = styled.div`
    width: 60%;
    @media only screen and (max-width: 768px) {
        width: 70%;
    }
`;


export default function TaskList(props) {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    

    useEffect(() => {
        fetch(props.url)
            .then(res=>res.json())
            .then(
                (result) => {
                    setTasks(result);
                },
                (error) => {
                    setError(error);
                }
            )
    },[]);

    
    return (
        <ListContainer>
                {tasks.map((t, i) => {
                return (
                    <TaskItem 
                        key={i}
                        title = {t.title}
                        detail = {t.detail}
                        tag = {t.tag}
                    />
                )
            })}
        </ListContainer>
    );
    
}