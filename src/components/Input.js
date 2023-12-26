import {useRef, useState} from 'react';
import styled from "styled-components";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

`;

const NameInput = styled.input`
  font-size: 25.5px;
  border-color: #0AB6AB;
  border-radius: 10px 10px 10px 10px;
`;

const NameButton = styled.button`
  
  border-radius: 10px 10px 10px 10px;
  background: #0AB6AB;
  width: 360px;
  height: 35px;
  flex-shrink: 0;
  color: #000;
  
`;

export const Input = ({onAddNewTaskButtonClick}) => {

    const inputRef = useRef();

    const [value, setValue] = useState('');


    // Variant 3 - Excellent
    const onInputChange = (event) => {
        let newValue = event.nativeEvent.target.value;
        setValue(newValue);

    }

    const onSaveNameButtonClick = () => {
        onAddNewTaskButtonClick(value);
    }

    return (
        <Container >
            <NameInput ref={inputRef} value={value} onChange={onInputChange} />
            <NameButton onClick={onSaveNameButtonClick}>Add</NameButton>
        </Container>
    );
}