'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 将经纬度数据转化成谷歌的Array<{维度，经度}>数据格式
 * 'lng,lat;lng,lat;lng,lat;' =>
 *
 * [{lat: , lng: }, {lat: , lng: }, {lat: , lng: }, {lat: , lng: }]
 * */
var converseLngLatToGoogleCoordinates = function converseLngLatToGoogleCoordinates(lngLats) {
  var points = lngLats.split(';');
  var coordinates = [];

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var lngLat = point.split(',');

    coordinates.push({
      lat: parseFloat(lngLat[1]),
      lng: parseFloat(lngLat[0])
    });
  }

  return coordinates;
};

/**
 * 将地址数组转成谷歌的准确地址
 * ['France', 'Île-de-France', 'Paris' ] => Paris,Île-de-France,France
 * */
var getGoogleAddrFromArray = function getGoogleAddrFromArray(addrArray) {
  var reversedAddressArray = [];

  for (var i = 0; i < addrArray.length; i++) {
    reversedAddressArray.unshift(addrArray[i]);
  }

  return reversedAddressArray.join(',');
};

/**
 * 从多边形对象中解析出经纬度字符串
 * @param {Polygon} polygon
 * @return {String} lng,lat;lng,lat;lng,lat;lng,lat;lng,lat;
 * */
var getEachPolygonLngLatStr = function getEachPolygonLngLatStr(polygon) {
  var vertices = polygon.getPath();
  var str = ''; // 每一个多边形都用 '1,1;2,2;' 的数据形式

  for (var i = 0; i < vertices.getLength(); i++) {
    var xy = vertices.getAt(i);

    str += xy.lng() + ',' + xy.lat() + ';'; // 经纬度
  }

  return str;
};

/**
 * 根据地址（英文)谷歌地图重新聚焦
 * @param {map} map 谷歌地图实例
 * @param {String} address (Paris,Île-de-France,France)
 * @param {Number} zoom google map zoom
 *
 * @return void
 * */
var resetCenter = function resetCenter(map, address, zoom) {
  var geocoder = new google.maps.Geocoder(); // eslint-disable-line

  geocoder.geocode({ address: address }, function (results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
      map.setZoom(zoom);
    }
  });
};

exports.converseLngLatToGoogleCoordinates = converseLngLatToGoogleCoordinates;
exports.getGoogleAddrFromArray = getGoogleAddrFromArray;
exports.getEachPolygonLngLatStr = getEachPolygonLngLatStr;
exports.resetCenter = resetCenter;