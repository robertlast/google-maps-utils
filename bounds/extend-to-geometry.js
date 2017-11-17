module.exports = function extendBoundsToGeometry(bounds, geometry) {
	if (geometry instanceof google.maps.LatLng) {
		bounds.extend(geometry);
	} else if (geometry instanceof google.maps.Data.Point) {
		bounds.extend(geometry.get());
	} else {
		geometry.getArray().forEach(function(g) {
			extendBoundsToGeometry(bounds, g);
		});
	}
}