import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: #0000007d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 20px 30px;
  background: #201F1F;
  border-radius: 10px;
  position: relative;
`;

const Close = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;

  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0AB6AB;
  border-radius: 50px;

  &:after {
    content: 'x';
    font-size: 12px;
    line-height: 15px;
    padding: 0px 0px 2px 0px;
  }
`;

export const Modal = (props) => {

    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    }

    return (
        <Backdrop>
            <Content onClick={contentComponentClickHandle}>
                <Close onClick={props.close}/>
                {props.children}
            </Content>
        </Backdrop>
    )
}