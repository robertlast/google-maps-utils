"use strict";
/**
 * Utilities for working Google Map's LatLngBounds class.
 * 
 * References:
 * * https://developers.google.com/maps/documentation/javascript/reference#LatLngBounds
 */
module.exports = {
		extendBoundsToFeature: require('./extend-to-feature'),
		extendBoundsToMarker: require('./extend-to-marker'),
		extendBoundsToLayer: require('./extend-to-layer'),
		extendBoundsToGeometry: require('./extend-to-geometry')
}