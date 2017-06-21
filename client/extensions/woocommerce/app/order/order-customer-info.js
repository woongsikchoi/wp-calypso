/**
 * External dependencies
 */
import { localize } from 'i18n-calypso';
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import SectionHeader from 'components/section-header';

class OrderCustomerInfo extends Component {
	render() {
		const { order, translate } = this.props;
		if ( ! order ) {
			return null;
		}

		const { billing, shipping } = order;
		console.log( billing, shipping );

		return (
			<div className="order__customer-info">
				<SectionHeader label={ translate( 'Customer Information' ) } />
				<Card>
					<h3>{ translate( 'Billing Details' ) }</h3>
					<div className="order__customer-billing">
						<h4>{ translate( 'Address' ) }</h4>
						<div className="order__billing-address">
							<p>{ `${ billing.first_name } ${ billing.last_name }` }</p>
							<p>{ billing.address_1 }</p>
							<p>{ billing.address_2 }</p>
							<p>{ `${ billing.city }, ${ billing.state } ${ billing.postcode }` }</p>
							<p>{ billing.country }</p>
						</div>

						<h4>{ translate( 'Email' ) }</h4>
						<p>{ billing.email }</p>

						<h4>{ translate( 'Phone' ) }</h4>
						<p>{ billing.phone }</p>
					</div>

					<h3>{ translate( 'Shipping Details' ) }</h3>
					<div className="order__customer-shipping">
						<h4>{ translate( 'Address' ) }</h4>
						<div className="order__shipping-address">
							<p>{ `${ shipping.first_name } ${ shipping.last_name }` }</p>
							<p>{ shipping.address_1 }</p>
							<p>{ shipping.address_2 }</p>
							<p>{ `${ shipping.city }, ${ shipping.state } ${ shipping.postcode }` }</p>
							<p>{ shipping.country }</p>
						</div>
					</div>
				</Card>
			</div>
		);
	}
}

export default localize( OrderCustomerInfo );
