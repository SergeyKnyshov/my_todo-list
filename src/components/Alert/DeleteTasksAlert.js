import {useDeleteTask} from "../../hooks/useTasks";
import {useState} from 'react';
import {Modal} from './components/Modal'
import {Input} from "../Input";
import styled from 'styled-components'

const ButtonSure = styled.button`
  display: flex;
  width: 100px;
  height: 25px;
  padding: 5.208px 7.292px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

`;
const ButtonDelete = styled.button`
  display: flex;
  width: 25px;
  height: 25px;
  padding: 5.208px 7.292px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

`;
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

export const DeleteTasksAlert = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { deleteTask } = useDeleteTask();

    const showAlertButtonClick = () => {
        setIsModalVisible(true);
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const onDeleteTaskButtonClick = (taskId) => {
        deleteTask(taskId);
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
                        <TitleForButton> Are you sure to delete your task? </TitleForButton>
                    </ContainerForTitle>
                    <ButtonSure onClick={onDeleteTaskButtonClick}>
                        <span>
                            Yes
                        </span>
                    </ButtonSure>
                </ContainerForForm>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <ButtonDelete onClick={showAlertButtonClick}>
                    <img src={'vector.svg'}
                         alt="trash can"
                         height="500"
                         width="500"/>
                </ButtonDelete>
            </Container>
        </>
    )
}