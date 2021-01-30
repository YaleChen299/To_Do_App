import React, { useState } from 'react';

import styled from 'styled-components';

import CreateTaskForm from './CreateTaskForm';

const ControlBarContainer = styled.div`
    width: 80%;
    margin: 20px 0;
    border-radius: 25px;
    background-color: rgba(39, 174, 96,0.5);
    box-shadow: 0 0 4px rgb(0,0,0,0.3), 0 0 10px rgb(0,0,0,0.2);
`;

export default function ControlBar(props) {
    const [showTag, setShowTag] = useState(null);

   
    return (
        <ControlBarContainer>
            <CreateTaskForm postTask={props.postTask} defaultFormState={props.defaultFormState}/>
        </ControlBarContainer>
    )

}