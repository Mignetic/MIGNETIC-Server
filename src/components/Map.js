import React, { useEffect, useState } from "react";
import { markerdata } from '../components/markerData';
import '../css/Map.css';

import pf from '../images/pf.png';
import markerbtn from '../images/marker-btn.png';

function Map() {
    // 카카오 맵 API를 사용할 수 있도록 선언
    const { kakao } = window;
    
    // State 선언
    const [activeButton, setActiveButton] = useState(null);
    const [map, setMap] = useState(null);
    const [mapZoom, setMapZoom] = useState(2);
    const [mapCenter, setMapCenter] = useState({ lat: 37.4667835831981, lng: 126.932529286133 });
    const [markers, setMarkers] = useState([]);
    const [filteredMarkerData, setFilteredMarkerData] = useState(markerdata);
    const [activeMarker, setActiveMarker] = useState(null);

    
    useEffect(() => {
        if (!map) return;
        updateMap();
    }, [filteredMarkerData]);

    useEffect(() => {
        mapscript();
    }, []);

    const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.4667835831981, 126.932529286133),
    });

    const mapscript = () => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
            level: mapZoom,
        };
        const newMap = new kakao.maps.Map(container, options);
        setMap(newMap);
    };

    const updateMap = () => {
        if (!map) return;
        
        markers.forEach(marker => marker.setMap(null));
        
        const newMarkers = filteredMarkerData.map((el) => {
            if (el.value === activeButton) {
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(el.lat, el.lng),
                });

                // 마커 클릭 이벤트 등록
                kakao.maps.event.addListener(marker, 'click', () => {
                    setActiveMarker(el); // 클릭한 마커 데이터 설정
                });

                return marker;
            }
        });

        setMarkers(newMarkers.filter(marker => marker !== undefined));
    };

    const handleButtonClick = (buttonValue) => {
        setActiveButton(buttonValue);
        setFilteredMarkerData(markerdata.filter(data => data.value === buttonValue));
    };

    return (
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
                {activeMarker && (
                    <div className="click-marker">
                        <div className="marker-setting">
                        <p className="marker-title">{activeMarker.title}</p>
                        <div className="marker-img-detail">

                            <li className="marker-detail">
                                여기는 미림분식에 대한 글을 써주세요 여기는 미림분식에 대한 글을 써주세dy
                            </li>
                            <li className="marker-detail">
                            여기는 미림분식에 대한 글을 써주세요 여기는 미림분식에 대한 글을 써주세요
                            </li>
                            <li className="marker-detail">
                            여기는 미림분식에 대한 글을 써주세요 여기는 미림분식에 대한 글을 써주세요
                            </li>
                        </div>
                        <p className="recommendation"> 추천글 </p>
                        <div className="developer-collection">
                            <div className="developer">
                            <img src={pf} className="developer-profile"/>
                            <div className="developer-name-review">
                                <p className="developer-name">양지아</p>
                                <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                <hr className="developer-hr"></hr>
                            </div>
                            </div>
                            {/* 삭제 예정 */}
                            <div className="developer">
                            <img src={pf} className="developer-profile"/>
                            <div className="developer-name-review">
                                <p className="developer-name">양지아</p>
                                <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                <hr className="developer-hr"></hr>
                            </div>
                            </div>
                            <div className="developer">
                                <img src={pf} className="developer-profile"/>
                                <div className="developer-name-review">
                                    <p className="developer-name">양지아</p>
                                    <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                    <hr className="developer-hr"></hr>
                                </div>
                            </div>
                            <div className="developer">
                            <img src={pf} className="developer-profile"/>
                            <div className="developer-name-review">
                                <p className="developer-name">양지아</p>
                                <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                <hr className="developer-hr"></hr>
                            </div>
                            </div>
                            <div className="developer">
                            <img src={pf} className="developer-profile"/>
                            <div className="developer-name-review">
                                <p className="developer-name">양지아</p>
                                <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                <hr className="developer-hr"></hr>
                            </div>
                            </div>
                        </div>

                        </div>
                        {/* <button className="marker-btn"><img src={markerbtn}></img></button> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Map;