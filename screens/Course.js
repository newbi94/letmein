import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;
const TitleContainer = styled.View`
  border-width: 1px;
  flex-direction: row;
`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
`;

const SerachContainer = styled.View`
  border-width: 1px;
  margin-top: 20px;
  flex-direction: row;
  padding: 5px 50px;
`;
const SearchInput = styled.TextInput``;

const Course = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Show your Course !</Title>
      </TitleContainer>
      <SerachContainer>
        <SearchInput placeholder="what is your plan?..." />
      </SerachContainer>
    </Container>
  );
};

export default Course;
