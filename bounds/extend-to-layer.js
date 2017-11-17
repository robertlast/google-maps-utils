//NOTE: for use in the browser only (requires google maps api is loaded)
var extendBoundsToGeometry = require('./extend-to-geometry');

module.exports = function extendBoundsToLayer(bounds, dataLayer) {
	dataLayer.forEach(function(feature){
		var geometry = feature.getGeometry();
		extendBoundsToGeometry(bounds, geometry);
	});
}