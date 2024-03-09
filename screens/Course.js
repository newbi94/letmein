import React, { useState } from "react";
import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
`;

const TitleContainer = styled.View`
  border-width: 1px;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
`;

const SerachContainer = styled.View`
  border-width: 1px;
  margin-top: 20px;
  flex-direction: row;
`;

const SelectAreaBox = styled.View`
  flex: 1;
  border-width: 1px;
`;

const SearchBox = styled.TextInput`
  flex: 3;
  border-width: 1px;
`;

const Course = () => {
  const [area, setArea] = useState("지역");
  return (
    <Container>
      <TitleContainer>
        <Title>Show your Course !</Title>
      </TitleContainer>
      <SerachContainer>
        <SelectAreaBox>
          <Picker
            selectedValue={area}
            onValueChange={(itemValue, itemIndex) => setArea(itemValue)}
            style={{
              width: 110,
              height: 50,
            }}
          >
            <Picker.Item label="지역" value="" />
            <Picker.Item label="서울" value="seoul" />
            <Picker.Item label="경기" value="gyung-gi" />
            <Picker.Item label="인천" value="in-cheon" />
            <Picker.Item label="강원" value="gang-won" />
            <Picker.Item label="충북" value="chung-buk" />
            <Picker.Item label="충남" value="chung-nam" />
            <Picker.Item label="전북" value="jeon-buk" />
            <Picker.Item label="전남" value="jeon-nam" />
            <Picker.Item label="경북" value="gyung-buk" />
            <Picker.Item label="경남" value="gyung-nam" />
            <Picker.Item label="제주" value="jeju" />
            <Picker.Item label="그외" value="etc" />
          </Picker>
        </SelectAreaBox>
        <SearchBox placeholder="show your plan" />
      </SerachContainer>
    </Container>
  );
};

export default Course;
