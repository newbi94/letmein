import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
`;

const SerachContainer = styled.View``;

const Course = () => {
  return (
    <Container>
      <Title>Show your Course !</Title>
      <SerachContainer></SerachContainer>
    </Container>
  );
};

export default Course;
