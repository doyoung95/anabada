import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set_location } from '../modules/location';

const { kakao } = window;

export default function Map() {
	const dispatch = useDispatch();
	const location = useSelector((state) => state.location);
	useEffect(() => {
		let container = document.querySelector('#map');
		let option = {
			center: new kakao.maps.LatLng(37.5642135, 127.0016985),
			level: 4,
		};
		const map = new kakao.maps.Map(container, option);

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				let lat = position.coords.latitude,
					lon = position.coords.longitude;

				axios
					.get(
						`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
						{
							headers: {
								Authorization:
									'KakaoAK c15b028bd7fb710f5f08f805a5c118d8',
							},
						}
					)
					.then((res) => {
						let first = res.data.documents[0].address.region_1depth_name;
						let second = res.data.documents[0].address.region_2depth_name;
						let third = res.data.documents[0].address.region_3depth_name;
						dispatch(
							set_location({
								locationX: lon,
								locationY: lat,
								first: first,
								second: second,
								third: third,
							})
						);
						let locPosition = new kakao.maps.LatLng(lat, lon),
							message = `<div style='padding:5px;'>${second} ${third}</div>`;

						displayMarker(locPosition, message);
					});
			});
		} else {
			let locPosition = new kakao.maps.LatLng(37.5642135, 127.0016985),
				message = '위치정보를 받아오지 못했어요..';

			displayMarker(locPosition, message);
		}

		function displayMarker(locPosition, message) {
			var marker = new kakao.maps.Marker({
				map: map,
				position: locPosition,
			});

			var iwContent = message,
				iwRemoveable = true;

			var infowindow = new kakao.maps.InfoWindow({
				content: iwContent,
				removable: iwRemoveable,
			});

			infowindow.open(map, marker);

			map.setCenter(locPosition);
		}
	}, []);
	return (
		<div id='map__container'>
			<div id='map'></div>
			<div id='map__information'>
				<div>{`${location.first}도 ${location.second} ${location.third}`}</div>
				<div className='map__button'>확인</div>
				<div className='map__button'>취소</div>
			</div>
		</div>
	);
}
