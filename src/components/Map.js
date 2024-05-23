import React, { useEffect, useState } from "react";
import { markerdata } from '../components/markerData';

import '../css/Map.css'

function Map(){
//카카오 맵 API를 사용할 수 있도록 선언
const { kakao } = window;
    
// 버튼의 활성화 상태, 맵 객체, 맵의 확대 수준 및 중심 위치, 마커, 필터링된 마커 데이터를 관리하는 state 선언
const [activeButton, setActiveButton] = useState(null);
const [map, setMap] = useState(null);
const [mapZoom, setMapZoom] = useState(2);
const [mapCenter, setMapCenter] = useState({ lat: 37.4667835831981, lng: 126.932529286133 });
const [markers, setMarkers] = useState([]); // 마커들을 관리하는 state 추가
const [filteredMarkerData, setFilteredMarkerData] = useState(markerdata);

new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(37.4667835831981,126.932529286133)
})

// 필터링된 마커 데이터가 변경될 때마다 맵 업데이트
useEffect(() => {
    if (!map) return;
    updateMap();
}, [filteredMarkerData]);

// 컴포넌트가 마운트될 때마다 맵 초기화
useEffect(() => {
    mapscript();
}, []);

// 맵을 초기화하고 맵 객체를 생성하는 함수
const mapscript = () => {
 const container = document.getElementById('map');
 const options = {
     center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
     level: mapZoom,
    };
    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);
};

// 맵에 마커를 업데이트하는 함수
const updateMap = () => {
    if (!map) return;
    
    // 이전에 생성된 모든 마커 제거
    markers.forEach(marker => marker.setMap(null));
    
    // 클릭한 버튼에 해당하는 값만 필터링하여 마커 생성
    const newMarkers = filteredMarkerData.map((el) => {
        
        if (el.value === activeButton) {
            return new kakao.maps.Marker({
             map: map,
             position: new kakao.maps.LatLng(el.lat, el.lng),
            });
        }
    });
    setMarkers(newMarkers.filter(marker => marker !== undefined));
};

// 버튼 클릭 시 해당 버튼을 활성화 상태로 설정하고 필터링된 마커 데이터 업데이트
const handleButtonClick = (buttonValue) => {
    setActiveButton(buttonValue);
    setFilteredMarkerData(markerdata.filter(data => data.value === buttonValue));
};


return(
    <div className="hot-place">
    <div className="full-display">
            <div className="btns">
                <div className={activeButton === '학교'}></div>
                <button
                    className={activeButton === '카페' ? 'active' : ''}
                    onClick={() => handleButtonClick('카페')}
                    >
                    카페
                </button>
                <button
                    className={activeButton === '편의점' ? 'active' : ''}
                    onClick={() => handleButtonClick('편의점')}
                    >
                    편의점
                </button>
                <div className="btn-margin"></div>
                <button
                    className={activeButton === '디져트' ? 'active' : ''}
                    onClick={() => handleButtonClick('디져트')}
                    >
                    디져트
                </button>
                <button
                    className={activeButton === '맛집' ? 'active' : ''}
                    onClick={() => handleButtonClick('맛집')}
                    >
                    맛집
                </button>
            </div>
        <div className="place">
            <div id="map" className="map-class"></div>
        </div>
    </div>
</div>
)
}

export default Map;