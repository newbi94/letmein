import React, { useEffect, useState } from "react";
import { Dimensions, PermissionsAndroid, Platform, View } from "react-native";
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from "react-native-nmap";
import Geolocation from "react-native-geolocation-service";
function Test() {
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };
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
    const watchId = Geolocation.getCurrentPosition(
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
        maximumAge: 10000, // 한 번 찾은 위치 정보를 해당 초만큼 캐싱
        distanceFilter: 1,
      }
    );
    // 컴포넌트 언마운트 시 위치 업데이트 중지
    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <NaverMapView
      style={{ width: "100%", height: "100%" }}
      showsMyLocationButton={true}
      center={{ latitude: 37.1, longitude: 126.7, zoom: 16 }}
      onTouch={(e) => console.warn("onTouch", JSON.stringify(e.nativeEvent))}
      onCameraChange={(e) => console.warn("onCameraChange", JSON.stringify(e))}
      onMapClick={(e) => console.warn("onMapClick", JSON.stringify(e))}
    >
      <Marker coordinate={P0} onClick={() => console.warn("onClick! p0")} />
      <Marker
        coordinate={P1}
        pinColor="blue"
        onClick={() => console.warn("onClick! p1")}
      />
      <Marker
        coordinate={P2}
        pinColor="red"
        onClick={() => console.warn("onClick! p2")}
      />
      <Path
        coordinates={[P0, P1]}
        onClick={() => console.warn("onClick! path")}
        width={10}
      />
      <Polyline
        coordinates={[P1, P2]}
        onClick={() => console.warn("onClick! polyline")}
      />
      <Circle
        coordinate={P0}
        color={"rgba(255,0,0,0.3)"}
        radius={200}
        onClick={() => console.warn("onClick! circle")}
      />
      <Polygon
        coordinates={[P0, P1, P2]}
        color={`rgba(0, 0, 0, 0.5)`}
        onClick={() => console.warn("onClick! polygon")}
      />
    </NaverMapView>
  );
}

export default Test;
