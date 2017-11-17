//NOTE: for use in the browser only (requires google maps api is loaded)
var extendBoundsToGeometry = require('./extend-to-geometry');

module.exports = function extendBoundsToLayer(bounds, marker) {
	extendBoundsToGeometry(bounds, marker.getPosition());
}