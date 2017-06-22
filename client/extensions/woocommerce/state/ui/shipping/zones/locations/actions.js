/**
 * Internal dependencies
 */
import {
	WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_SELECT_CONTINENT,
	WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_SELECT_COUNTRY,
	WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_SELECT_STATE,
	WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_EDIT_POSTCODE,
	WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_FILTER_BY_WHOLE_COUNTRY,
	WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_FILTER_BY_STATE,
	WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_FILTER_BY_POSTCODE,
} from 'woocommerce/state/action-types';

export const toggleContinentSelected = ( siteId, continentCode, selected ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_SELECT_CONTINENT,
		siteId,
		continentCode,
		selected,
	};
};

export const toggleCountrySelected = ( siteId, countryCode, selected ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_SELECT_COUNTRY,
		siteId,
		countryCode,
		selected,
	};
};

export const toggleStateSelected = ( siteId, stateCode, selected ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_SELECT_STATE,
		siteId,
		stateCode,
		selected,
	};
};

export const editPostcode = ( siteId, postcode ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_EDIT_POSTCODE,
		siteId,
		postcode,
	};
};

export const filterByWholeCountry = ( siteId ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_FILTER_BY_WHOLE_COUNTRY,
		siteId,
	};
};

export const filterByState = ( siteId ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_FILTER_BY_STATE,
		siteId,
	};
};

export const filterByPostcode = ( siteId ) => {
	return {
		type: WOOCOMMERCE_SHIPPING_ZONE_LOCATIONS_FILTER_BY_POSTCODE,
		siteId,
	};
};
