import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View``;

const TopContainer = styled.View`
  border-width: 1px;
  align-items: center;
`;

const BarContainer = styled.View`
  margin-top: 20px;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between; /* Align items with space between them */
  align-items: center; /* Center items vertically */
  padding: 0 20px; /* Add padding for a bit of space around the buttons */
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
`;

const InstantBtn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InsBtnSettingBtn = styled.TouchableOpacity``;

const Home = () => {
  const navigation = useNavigation();

  const goToInsBtnSetting = () => {
    navigation.navigate("Stacks", {
      screen: "InsBtnSetting",
      params: {},
    });
  };
  return (
    <Container>
      <TopContainer>
        <Title>let me in !</Title>
      </TopContainer>
      <BarContainer>
        <InstantBtn>
          <Ionicons name="radio-button-on-outline" size={30} color="black" />
        </InstantBtn>
        <InsBtnSettingBtn onPress={goToInsBtnSetting}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </InsBtnSettingBtn>
      </BarContainer>
    </Container>
  );
};

export default Home;
