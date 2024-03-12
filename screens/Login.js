import React, { useRef, useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  flex: 1;
`;
const Title = styled.Text`
  font-size: 48px;
  border-width: 1px;
`;
const TextInput = styled.TextInput`
  border-width: 1px;
  width: 80%;
  padding: 10px 20px;
  border-radius: 20px;
  margin-top: 15px;
  font-size: 16px;
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
`;
const BtnContainer = styled.View``;
const LoginBtn = styled.TouchableOpacity``;
const LoginText = styled.Text``;
const CreateBtn = styled.TouchableOpacity``;
const CreateText = styled.Text``;

const Login = () => {
  passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitEmailEditing = () => {
    passwordInput.current.focus();
  };

  const onChange = (name, value) => {
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <Title>Welcome</Title>
      <TextInput
        name="email"
        value={email}
        onSubmitEditing={onSubmitEmailEditing}
        placeholder="Id or Email..."
        onChange={(e) => onChange("email", e.nativeEvent.text)}
      />
      <TextInput
        name="password"
        value={password}
        ref={passwordInput}
        placeholder="Password..."
        onChange={(e) => onChange("password", e.nativeEvent.text)}
      />
      <BtnContainer>
        <LoginBtn>
          <LoginText>Login</LoginText>
        </LoginBtn>
        <CreateBtn>
          <CreateText>Create</CreateText>
        </CreateBtn>
      </BtnContainer>
    </Container>
  );
};

export default Login;
