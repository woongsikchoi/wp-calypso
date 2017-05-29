/**
 * External dependencies
 */
import { translate } from 'i18n-calypso';

export const topProducts = {
	title: translate( 'Products' ),
	values: [
		{ key: 'name', title: translate( 'Title' ) },
		{ key: 'sold', title: translate( 'Quantity' ) },
		{ key: 'total', title: translate( 'Total' ) },
	],
	empty: translate( 'No products found' ),
};
