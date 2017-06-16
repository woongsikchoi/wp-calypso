/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import StickyPanel from 'components/sticky-panel';

const ActionHeader = ( { children, title } ) => {
	// TODO: Implement proper breadcrumbs component.
	return (
		<StickyPanel>
			<Card className="action-header__header">
				<span className="action-header__breadcrumbs">{ title }</span>
				<div className="action-header__actions">
					{ children }
				</div>
			</Card>
		</StickyPanel>
	);
};

ActionHeader.propTypes = {
	title: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.node
	] ),
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node
	] ),
};

export default ActionHeader;
