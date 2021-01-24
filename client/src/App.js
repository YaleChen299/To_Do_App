// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';
import TaskList from './components/TaskList';

const MainContent = styled.div`
  padding: 10vh 10vw;
  @media only screen and (max-width: 768px) {
    padding: 1vh 3vw;
    
  }
`;

const Title = styled.h1`
  width: 100%;
`;
function App() {

  const show = 'https://powerful-savannah-28155.herokuapp.com/api/tasks';
  
  return (
    <MainContent>
      <Title>CVWO To-do App</Title>
      <p>by Chen Yanyu</p>
      <TaskList url={show}/>
    </MainContent>
  );
}

export default App;
