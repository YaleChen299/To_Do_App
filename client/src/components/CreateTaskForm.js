import React, { useState } from 'react';

import styled from 'styled-components';
import Popup from 'reactjs-popup';
import {Cross, Plus} from '@styled-icons/entypo';

const AddButton = styled(Plus)`
    width: 40px; height: 40px;
    margin: 5px 20px;
    border-radius: 50%;
    cursor:pointer;
    :hover {
        box-shadow: 0 0 4px rgba(0, 100, 90, 0.3), 0 0 10px 4px rgba(0, 100, 90, 0.2);
        background-color: rgba(0, 150, 136, 0.3);
    }
`;
const PopupForm = styled(Popup)`
    &-content {
        font-size: 20px;
        max-width: 60vw;
        max-height: 70vh;
        padding: 30px;
        border-radius: 30px;
        background-color: white;
        box-shadow: 0 0 10px 2px rgb(0,0,0,0.3), 0 0 20px 10px rgb(0,0,0,0.2);
    }
    &-overlay {
        background-color: rgba(100, 100, 100, 0.4);
    }
`;
const CrossButton = styled(Cross)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
`;
const FormHeader = styled.h2`
    margin: 10px 30px;
    padding: 10px 30px;
    border-bottom: thin solid grey;
    box-shadow: 0 10px 20px -18px grey;
`;
const Label = styled.label`
    width: 70px;
    display: inline-block;
    text-align: right;
    margin: 20px;
`;



export default function CreateTaskForm(props) {
    const[task, setTask] = useState(props.defaultFormState);

    const handleChange = event => {
        const {name, value} = event.target;
        setTask({...task, [name]: value});
    };

    return (
        <PopupForm
            trigger={<AddButton/>}
            modal={true}
        >
            {close => (
                <>
                    <CrossButton onClick={close}/>
                    <FormHeader>New To-Do Task</FormHeader>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        if (!task.title||!task.detail||!task.tag) {alert("no field should be left blank"); return;}
                        props.postTask(task);
                        setTask(props.defaultFormState);
                    }}>
                        <div>
                            <Label>Title:</Label> 
                            <input type="text" name="title" value={task.title} onChange={handleChange}></input>
                        </div>
                        <div>
                            <Label>Detail:</Label>
                            <input type="text" name="detail" value={task.detail} onChange={handleChange}></input>
                        </div>
                        <div>
                            <Label>Tag:</Label>
                            <input type="text" name="tag" value={task.tag} onChange={handleChange}></input>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
                </>
            )}
        </PopupForm>
    );
}