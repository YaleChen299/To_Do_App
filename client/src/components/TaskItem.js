import React from 'react';
import styled from 'styled-components';
import {Edit} from '@styled-icons/boxicons-regular/Edit';
import {Delete} from '@styled-icons/material/Delete';

const StyledTaskItem = styled.div`
    width: 100%;
    background-color: white;
    padding: 20px 30px;
    margin: 10px 0;
    border-radius: 20px;
    box-shadow: 1px 3px 8px grey;
    display: flex;
    justify-content: space-between
`;
const Tag = styled.span`
    border: medium solid grey;
    padding: 0 10px;
    height: 30px;
    border-radius: 30px;
    position: relative;
    top: 30px;
`;
const Content = styled.div`
    width: 50%;
`;
const EditButton = styled(Edit)`
    cursor:pointer;
    width: 100%;
    height: 50%;
    // padding: 5px;
`;

const DeleteButton = styled(Delete)`
    cursor:pointer;
    width: 100%;
    height: 50%;
    // padding: 5px;
`;

const ButtonContainer = styled.div`
    margin: 0 0 0 15px;
    padding: 5px 0 5px 10px;
    border-left: medium solid grey;
    width: 5%;
    diplay: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default function TaskItem(props) {

    const handleEdit = () => {

    };

    const handleDelete = () => {
        
    };

    return (
        <StyledTaskItem>
            <Content>
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
            </Content>
            <Tag>{props.tag}</Tag>
            <ButtonContainer>
                <EditButton
                    onClick={handleEdit}
                    ></EditButton>
                <DeleteButton
                    onclick={handleDelete}
                    ></DeleteButton>
            </ButtonContainer>
        </StyledTaskItem>
    );
}