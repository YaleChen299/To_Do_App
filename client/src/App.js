import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import TaskList from './components/TaskList';
import ControlBar from './components/ControlBar';

const MainContent = styled.div`
  padding: 10vh 10vw;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    padding: 1vh 3vw;
    
  }
`;
const Title = styled.h1`width: 100%;`;

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const api = 'https://powerful-savannah-28155.herokuapp.com/api/tasks';
  
  const defaultFormState = {title:'', detail:'', tag:'', isdone: false};

  useEffect(() => {// get the list of tasks and store in tasks array for dispatch
    axios.get(api)
      .then(res=>{setIsLoaded(true); setTasks(res.data);})
      .catch(error=>{setIsLoaded(true); setError(error);});
  },[]);

  // const requestJSON = task => {
  //   return {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(task)
  //   };
  // };

  const postTask = (task) => {
    // const qs = require('qs');
    axios.post(api, 
      {title:task.title, detail:task.detail, tag:task.tag, isdone:task.isdone},
      {headers: {'Content-Type': 'application/json;charset=UTF-8'}}
      )
      .then(res=>{
        alert("Task added succesfully!\n" + res.data);
      })
      .catch(error=>{
        alert("Failed to add task. Please try again.\n" + error.message);
        console.log(error.response);
      });

    setTasks([...tasks, task]); //no need to fetch GET again, added task to frontend anyway
  };

  const deleteTask = id => {
    axios.delete(api + id)
      .then(res => {
        alert("Task DELETED succesfully!\n" + res.data);
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(error => {
        alert("Failed to DELETE task. Please try again.\n" + error.message);
        console.log(error)
      });

      setTasks(tasks.filter(task => task.id !== id))// delete job in frontend anyway.    
  };

  if (error) {
      return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
      return (
        <MainContent>
          <Title>CVWO To-do App</Title>
          <p>by Chen Yanyu</p>
          <p>...Loading...</p>
        </MainContent>
      )
  } else {
      return (
        <MainContent>
          <Title>CVWO To-do App</Title>
          <p>by Chen Yanyu</p>
          <ControlBar postTask={postTask} defaultFormState={defaultFormState}/>
          <TaskList tasks={tasks} deleteTask={deleteTask}/>
        </MainContent>
      );
  }
}
