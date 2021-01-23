// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';
import TaskList from './components/TaskList';

const MainContent = styled.div`
  display: flex;
  padding: 10vh 10vw;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
function App() {
  const arr = [
    {
      title: 'Buy stuff',
      detail: 'I need to buy somdijfiejfiejfiejf iejfiejfiefjeijfiej fiejfiej fiejijf iejfiefjiefjig rgrgr grg rgrg rgrwd ecasxk ni kqlw nscb fusweih ifioslcnsdhjvfwoisn vthing hahah',
      tag: 'shopping' 
    },{
      title: 'Study CS',
      detail: 'I need to study this subject and do CVWO',
      tag: 'study'
    }
  ]
   const show = '/api/tasks';
  return (
    <MainContent>
      <TaskList url={show}/>
    </MainContent>
  );
}

export default App;
