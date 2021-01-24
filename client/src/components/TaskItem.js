import React from 'react';
import styled from 'styled-components';
import {Edit} from '@styled-icons/boxicons-regular/Edit';
import {Delete} from '@styled-icons/material/Delete';

const StyledTaskItem = styled.div`
    width: 100%;
    background-color: white;
    padding: 2vh 3vw;
    margin: 10px 0;
    border-radius: 20px;
    box-shadow: 1px 3px 8px grey;
    display: flex;
    justify-content: space-between
`;
const Tag = styled.div`
    border: medium solid grey;
    text-align: center;
    padding: 0 5px;
    margin: 5px 0;
    height: 30px;
    border-radius: 30px;
`;
const Content = styled.div`
    width: 70%;
`;

const TagContainer = styled.div`
    width: 15%;
    min-width: 80px;
    margin: 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const EditButton = styled(Edit)`
    cursor:pointer;
    width: 100%;
    height: 50%;
`;
const DeleteButton = styled(Delete)`
    cursor:pointer;
    width: 100%;
    height: 50%;
`;
const ButtonContainer = styled.div`
    padding: 5px 0 5px 1vw;
    border-left: medium solid grey;
    width: 5%;
    min-width: 35px;
    diplay: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default function TaskItem(props) {

    const handleEdit = () => {

    };

    const handleDelete = () => {
        
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
                    ></EditButton>
                <DeleteButton
                    onclick={handleDelete}
                    ></DeleteButton>
            </ButtonContainer>
        </StyledTaskItem>
    );
}