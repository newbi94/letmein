import React, { useEffect, useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import Geolocation from "react-native-geolocation-service";

const Container = styled.View``;
const Title = styled.Text``;
const LocationTxt = styled.Text`
  text-align: center;
  font-size: 25px;
  margin: 15px;
  font-weight: 600;
  color: black;
`;

const Letmein = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
    }
  }, []);
  //사용자에게 위치 추적 동의받는 기능.

  useEffect(() => {
    // 위치 업데이트 설정
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // currentLocation에 위도, 경도 저장
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true, // 배터리를 더 소모하여 보다 정확한 위치 추적
        timeout: 20000,
        maximumAge: 1000, // 한 번 찾은 위치 정보를 해당 초만큼 캐싱
        distanceFilter: 1,
      }
    );
    // 컴포넌트 언마운트 시 위치 업데이트 중지
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <Container>
      <Title>Let me in</Title>
      <View>
        <LocationTxt>Geolocation Test</LocationTxt>
        {currentLocation ? (
          <LocationTxt>
            {currentLocation.latitude} / {currentLocation.longitude}
          </LocationTxt>
        ) : (
          <LocationTxt>getting location...</LocationTxt>
        )}
      </View>
    </Container>
  );
};
export default Letmein;
