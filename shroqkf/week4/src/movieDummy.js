import React, { useState } from "react";
import styled from "styled-components";
//Styled-Components에 props를 적용하는 방법
function Example() {
  const [email, setEmail] = useState("");

  return (
    <ExampleWrap active={email.length}>
      <Button>Hello</Button>
      <NewButton color="blue">Im new Button</NewButton>
    </ExampleWrap>
  );
}

const ExampleWrap = styled.div`
  background: ${({ active }) => {
    if (active) {
      return "white";
    }
    return "#eee";
  }};
  color: black;
`;

const Button = styled.button`
  width: 200px;
  padding: 30px;
`;

// Button 컴포넌트 상속
const NewButton = styled.Button`
  // NewButton 컴포넌트에 color라는 props가 있으면 그 값 사용, 없으면 'red' 사용
  color: ${props => props.color || "red"};
`;

export default Example;