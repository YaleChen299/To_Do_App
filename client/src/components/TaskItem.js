import React from 'react';

import styled from 'styled-components';
import {Edit} from '@styled-icons/boxicons-regular/Edit';
import {Delete} from '@styled-icons/material/Delete';

const StyledTaskItem = styled.div`
    width: 100%;
    background-color: rgba(26, 188, 156,0.5);
    margin: 10px 0; 
    border-radius: 15px;
    box-shadow: 1px 2px 8px grey;
    display: flex;
    justify-content: space-between
`;
const Tag = styled.div`
    border: medium solid grey;
    text-align: center;
    padding: 0 5px;
    margin: 5px 0;
    height: 25px;
    border-radius: 30px;
`;
const Content = styled.div`
    width: 65%;
    margin: 15px;
`;

const TagContainer = styled.div`
    width: 15%;
    min-width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const buttonStyle = `
    cursor:pointer;
    margin: 10px;
    width: 40px;
`;

const EditButton = styled(Edit)`
    ${buttonStyle}
    :hover {
        box-shadow: 0 0 5px rgba(180, 140, 0, 0.3), 0 0 12px rgb(120,100,0,0.2);
        background-color: rgba(241, 196, 15,0.5);
    }
`;
const DeleteButton = styled(Delete)`
    ${buttonStyle}
    :hover {
        box-shadow: 0 0 5px rgba(192, 57, 43,0.3), 0 0 12px rgba(192, 57, 43,0.2);
        background-color: rgba(231, 76, 60,0.5);
    }
`;
const ButtonContainer = styled.div`
    margin: 15px 30px;
    border-left: solid grey;
    width: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default function TaskItem(props) {

    const handleEdit = () => {

    };

    const handleDelete = () => {
        if (window.confirm("You are about to delete this task!")) {
            props.deleteTask(props.id);
        }
    };

    const tag = props.tag.split(" ");
    return (
        <StyledTaskItem>
            <Content>
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
            </Content>

            <TagContainer>
                {tag.map((t, i) => {
                    return (
                        <Tag key={i}>{t}</Tag>
                    );
                })}
            </TagContainer>
            
            <ButtonContainer>
                <EditButton
                    onClick={handleEdit}
                />
                <DeleteButton
                    onclick={handleDelete}
                />
            </ButtonContainer>
        </StyledTaskItem>
    );
}