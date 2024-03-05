import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { INsApi } from "../api";
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const Container = styled.View``;

const TopContainer = styled.View`
  border-width: 1px;
  align-items: center;
`;

const BarContainer = styled.View`
  margin-top: 20px;
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
  /* const queryClient = useQueryClient();

  const {
    isLoading: upcomingLoading,
    data: upcomingData,
    hasNextPage: upcomingHasNext,
    fetchNextPage: upcomingFetchNext,
  } = useInfiniteQuery <
  MovieResponse >
  {
    queryKey: ["INs", "upcoming"],
    queryFn: INsApi.upcoming,
    getNextPageParam: (currentPage) => {
      const nextPage = currentPage.page + 1;
      return nextPage > currentPage.total_pages ? null : nextPage;
    },
  }; */

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
