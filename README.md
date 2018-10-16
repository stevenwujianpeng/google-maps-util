# google-maps-util

Provides some functions with Google maps.

## Core Functions

- converseLngLatToGoogleCoordinates
- getGoogleAddrFromArray
- getEachPolygonLngLatStr
- resetCenter

## Usage

### converseLngLatToGoogleCoordinates
```javascript
const lngLats = 'lng,lat;lng,lat;lng,lat;';
const googleCoordinates = converseLngLatToGoogleCoordinates(lngLats);
// => [{lat: , lng: }, {lat: , lng: }, {lat: , lng: }, {lat: , lng: }]

```

### getGoogleAddrFromArray
```javascript
const addrs = ['France', 'Île-de-France', 'Paris' ];
const googleAddr = getGoogleAddrFromArray(addrs);
// => Paris,Île-de-France,France
```

### getEachPolygonLngLatStr
```javascript
const str = getEachPolygonLngLatStr(polygon);
// lng,lat;lng,lat;lng,lat;lng,lat;lng,lat;
```

### resetCenter
调用谷歌地图的Geocoding Service查询地址的坐标，重新聚焦
```javascript
resetCenter(map, address, zoom);
```



