import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const LoginBtn = styled.TouchableOpacity``;
const LoginTxt = styled.Text`
  font-size: 28px;
`;
const TestBtn = styled.TouchableOpacity``;
const TestTxt = styled.Text`
  font-size: 28px;
`;

const MyPage = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate("Stacks", {
      screen: "Login",
      params: {},
    });
  };
  const goToTest = () => {
    navigation.navigate("Stacks", {
      screen: "Test",
      params: {},
    });
  };
  return (
    <Container>
      <LoginBtn onPress={goToLogin}>
        <LoginTxt>Login</LoginTxt>
      </LoginBtn>
      <TestBtn onPress={goToTest}>
        <TestTxt>TestBtn</TestTxt>
      </TestBtn>
    </Container>
  );
};

export default MyPage;
