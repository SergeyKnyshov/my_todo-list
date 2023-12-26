import { useEffect } from 'react';
import {AddTasksAlert} from './components/Alert/AddTasksAlert'
import styled from "styled-components";
import {useTasks} from "./hooks/useTasks";
import {DeleteTasksAlert} from './components/Alert/DeleteTasksAlert'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    background: #151515;
`;
const ContainerForSpan = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 118px;
  background: #0AB6AB;
`;
const Title = styled.span`
  color: #000;
  font-family: Raleway,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Task = styled.div`
  display: flex;
  align-items: center;
  width: 382px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #201F1F;
  
`;
const TitleForTask = styled.div`
  color: #F5F5F5;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;



function App() {
    useEffect(() => {
        document.body.style.background = '#151515';
    }, []);

    const {data} = useTasks();

    const renderTasksList = () => {
        if (data) {

            const renderItem = (task, index) => {
                return (
                    <Task>
                        <input type={"checkbox"} checked={task.isDone}/>
                        <TitleForTask>
                            {task.title}
                        </TitleForTask>
                        <div>
                            <DeleteTasksAlert/>
                        </div>
                    </Task>
                )
            }

            return data.map(renderItem);
        }
    }


        return (
            <Container>
                <ContainerForSpan>
                    <Title> TODO LIST</Title>

                </ContainerForSpan>
                <div>
                    {renderTasksList()}
                    <AddTasksAlert/>
                </div>
            </Container>
        );
    }


export default App;
