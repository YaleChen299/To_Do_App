import React from 'react';

import styled from 'styled-components';

import TaskItem from './TaskItem';


const ListContainer = styled.div`
    width: 80%;
    @media only screen and (max-width: 768px) {
        width: 90%;
    }
`;


export default function TaskList(props) {
    return (
        <ListContainer>
            {props.tasks.map((t, i) => {
                return (
                    <TaskItem 
                        key={i}
                        id={t.id}
                        title = {t.title}
                        detail = {t.detail}
                        tag = {t.tag}
                        deleteTask={props.deleteTask}
                    />
                );
            })}
        </ListContainer>
    );
}