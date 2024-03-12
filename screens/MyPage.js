import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View``;
const LoginBtn = styled.TouchableOpacity``;
const LoginTxt = styled.Text`
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
  return (
    <Container>
      <LoginBtn onPress={goToLogin}>
        <LoginTxt>Login</LoginTxt>
      </LoginBtn>
    </Container>
  );
};

export default MyPage;
