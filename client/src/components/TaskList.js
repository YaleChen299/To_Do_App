import React, { useEffect } from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const ListContainer = styled.div`
    width: 60%;
    @media only screen and (max-width: 768px) {
        width: 80%;
    }
`;


export default function TaskList(props) {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        const response = async
    });

    
    return (
        <ListContainer>
                {props.tasks.map((t, i) => {
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