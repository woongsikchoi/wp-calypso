/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import ListItem from 'woocommerce/components/list/list-item';
import ListItemField from 'woocommerce/components/list/list-item-field';

const PaymentMethodItemPlaceHolder = () => {
	return (
		<ListItem>
			<ListItemField>
				<span className="payments__method-loading-suggested" />
				<span className="payments__method-loading-title" />
			</ListItemField>
			<ListItemField>
				<span className="payments__method-loading-fee" />
				<span className="payments__method-loading-feelink" />
			</ListItemField>
			<ListItemField>
				<span className="payments__method-loading-settings" />
			</ListItemField>
		</ListItem>
	);
};

export default PaymentMethodItemPlaceHolder;
