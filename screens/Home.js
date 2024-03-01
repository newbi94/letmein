import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View``;

const TopContainer = styled.View`
  border-width: 1px;
  align-items: center;
`;

const BarContainer = styled.View``;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
`;

const InstantBtn = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <TopContainer>
        <Title>let me in !</Title>
      </TopContainer>
      <BarContainer>
        <InstantBtn>
          <Ionicons name="radio-button-on-outline" size={24} color="black" />
        </InstantBtn>
      </BarContainer>
    </Container>
  );
};

export default Home;
