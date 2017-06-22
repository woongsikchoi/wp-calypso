/**
 * External dependencies
 */
import { get, isEmpty, isObject } from 'lodash';

/**
 * Internal dependencies
 */
import { getSelectedSiteId } from 'state/ui/selectors';
import { LOADING } from 'woocommerce/state/constants';

const getRawShippingZoneLocations = ( state, siteId = getSelectedSiteId( state ) ) => {
	return get( state, [ 'extensions', 'woocommerce', 'sites', siteId, 'shippingZoneLocations' ] );
};

/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} zoneId Shipping Zone ID to check
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether the locations for the given zone have been successfully loaded from the server
 */
export const areShippingZoneLocationsLoaded = ( state, zoneId, siteId = getSelectedSiteId( state ) ) => {
	const rawLocations = getRawShippingZoneLocations( state, siteId );
	return rawLocations && isObject( rawLocations[ zoneId ] );
};

/**
 * @param {Object} state Whole Redux state tree
 * @param {Number} zoneId Shipping Zone ID to check
 * @param {Number} [siteId] Site ID to check. If not provided, the Site ID selected in the UI will be used
 * @return {boolean} Whether the locations for the given zone are currently being retrieved from the server
 */
export const areShippingZoneLocationsLoading = ( state, zoneId, siteId = getSelectedSiteId( state ) ) => {
	const rawLocations = getRawShippingZoneLocations( state, siteId );
	return rawLocations && LOADING === getRawShippingZoneLocations( state, siteId )[ zoneId ];
};

export const areShippingZonesLocationsValid = ( reduxState, siteId = getSelectedSiteId( reduxState ) ) => {
	if ( ! areShippingZoneLocationsLoaded( reduxState, siteId ) ) {
		return true;
	}

	const continentsSet = new Set();
	const countriesSet = new Set();
	const statesSet = new Set();
	const allLocations = getRawShippingZoneLocations( reduxState, siteId );
	for ( const zoneId of Object.keys( allLocations ) ) {
		if ( 0 === zoneId ) {
			continue;
		}
		const { continent, country, state, postcode } = allLocations[ zoneId ];
		if ( ! isEmpty( continent ) ) {
			if ( ! isEmpty( country ) || ! isEmpty( state ) || ! isEmpty( postcode ) ) {
				return false;
			}
			for ( const c of continent ) {
				if ( continentsSet.has( c ) ) {
					return false;
				}
				continentsSet.add( c );
			}
		} else if ( ! isEmpty( country ) ) {
			if ( ! isEmpty( state ) || ! isEmpty( postcode ) ) {
				return false;
			}
			for ( const c of country ) {
				if ( countriesSet.has( c ) ) {
					return false;
				}
				countriesSet.add( c );
			}
		} else if ( ! isEmpty( state ) ) {
			if ( ! isEmpty( postcode ) ) {
				return false;
			}
			for ( const s of state ) {
				if ( statesSet.has( s ) ) {
					return false;
				}
				statesSet.add( s );
			}
		} else if ( ! isEmpty( postcode ) ) {
			if ( 1 < postcode.length ) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
};
