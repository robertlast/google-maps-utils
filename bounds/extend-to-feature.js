var extendBoundsToMarker = require('./extend-to-marker');
var extendBoundsToLayer = require('./extend-to-layer');

module.exports = function extendBoundsToFeature(bounds, feature) {
	if (feature instanceof google.maps.Marker) {
		extendBoundsToMarker(bounds, feature);
	} else if (feature instanceof google.maps.Data) {
		extendBoundsToLayer(bounds, feature);
	}
}