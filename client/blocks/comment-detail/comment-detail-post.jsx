/**
 * External dependencies
 */
import React from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import SiteIcon from 'blocks/site-icon';
import { decodeEntities } from 'lib/formatting';

export const CommentDetailPost = ( {
	postAuthorDisplayName,
	postTitle,
	postUrl,
	siteId,
	translate,
} ) =>
	<div className="comment-detail__post">
		<SiteIcon siteId={ siteId } size={ 24 } />
		<div className="comment-detail__post-info">
			<span>
				{ postAuthorDisplayName }
			</span>
			<a href={ postUrl }>
				{ postTitle ? decodeEntities( postTitle ) : translate( 'Untitled' ) }
			</a>
		</div>
	</div>;

export default localize( CommentDetailPost );
