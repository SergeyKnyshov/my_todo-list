import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './components/Modal'
import {Input} from "../Input";
import {useAddNewTask} from "../../hooks/useTasks";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  background: #0AB6AB;
  position: absolute;
  bottom: 50px;
  right: 50px;
  border-radius: 50px;

`;
const ButtonAdd = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  background: #0AB6AB;;
  color: black;
  border-radius: 50px;
  align-content: center;
  align-items: center;
  font-size: 24px;
`;

const ContainerForTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 70px;
  background: #0AB6AB;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 10px 10px;
`;
const TitleForButton = styled.div`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
`;
const ContainerForForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const AddTasksAlert = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {addNewTask} = useAddNewTask();

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const onAddNewTaskButtonClick = (title) => {
        addNewTask(title);
        closeAlert();

    }
    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <Modal close={closeAlert}>
                <ContainerForForm>
                    <ContainerForTitle>
                        <TitleForButton> Add Task</TitleForButton>
                    </ContainerForTitle>
                    <Input onAddNewTaskButtonClick={onAddNewTaskButtonClick}/>
                </ContainerForForm>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <ButtonAdd onClick={showAlertButtonClick}> + </ButtonAdd>
            </Container>
        </>
    )
}