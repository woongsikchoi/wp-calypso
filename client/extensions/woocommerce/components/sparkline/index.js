/**
 * External dependencies
 */
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { extent as d3Extent } from 'd3-array';
import { scaleLinear as d3ScaleLinear } from 'd3-scale';
import { select as d3Select } from 'd3-selection';
import { line as d3Line } from 'd3-shape';

/**
 * Internal dependencies
 */

export default class Sparkline extends Component {

	static propTypes = {
		aspectRatio: PropTypes.number,
		className: PropTypes.string,
		data: PropTypes.array.isRequired,
		highlightIndex: PropTypes.number,
		highlightRadius: PropTypes.number,
		margin: PropTypes.object,
	};

	static defaultProps = {
		aspectRatio: 4.5,
		highlightRadius: 3.5,
		margin: {
			top: 4,
			right: 4,
			bottom: 4,
			left: 4,
		},
	};

	state = {
		width: 0,
		height: 0,
		xScale: {},
		yScale: {},
	};

	componentDidMount() {
		window.addEventListener( 'resize', this.handleResize );
		this.handleResize();
	}
	componentDidUpdate() {
		this.redrawChart();
	}
	// Remove listener
	componentWillUnmount() {
		window.removeEventListener( 'resize', this.handleResize );
		delete this.node;
	}

	setNodeRef = ( node ) => {
		this.node = node;
	};

	handleResize = () => {
		const { aspectRatio, data, margin } = this.props;
		const newWidth = this.node.offsetWidth;
		const newHeight = newWidth / aspectRatio;
		this.setState( {
			width: newWidth,
			height: newHeight,
			xScale: d3ScaleLinear()
				.domain( d3Extent( data, ( d, i ) => i ) )
				.range( [ margin.left, newWidth - margin.right ] ),
			yScale: d3ScaleLinear()
				.domain( d3Extent( data, ( d ) => d ) )
				.range( [ newHeight - margin.bottom, margin.top ] ),
		}, this.redrawChart );
	};

	redrawChart = () => {
		const { height, width } = this.state;
		d3Select( this.node ).selectAll( 'svg' ).remove();
		const newNode = d3Select( this.node )
			.append( 'svg' )
			.attr( 'class', 'sparkline__viewbox' )
			.attr( 'viewBox', `0 0 ${ width } ${ height }` )
			.attr( 'preserveAspectRatio', 'xMidYMid meet' )
			.append( 'g' );
		this.drawSparkline( newNode );
		if ( typeof this.props.highlightIndex !== 'undefined' ) {
			this.drawHighlight( newNode );
		}
	};

	drawSparkline = ( context ) => {
		const { xScale, yScale } = this.state;
		const sparkline = d3Line()
			.x( ( d, i ) => xScale( i ) )
			.y( ( d ) => yScale( d ) );
		return context.append( 'path' )
			.attr( 'class', 'sparkline__line' )
			.attr( 'd', sparkline( this.props.data ) );
	};

	drawHighlight = ( context ) => {
		const { xScale, yScale } = this.state;
		const { data, highlightIndex, highlightRadius } = this.props;
		return context.append( 'circle' )
			.attr( 'class', 'sparkline__highlight' )
			.attr( 'r', highlightRadius )
			.attr( 'cx', xScale( highlightIndex ) )
			.attr( 'cy', yScale( data[ highlightIndex ] ) );
	};

	render() {
		const sparkClass = classNames( 'sparkline', this.props.className );
		return (
			<div
				className={ sparkClass }
				ref={ this.setNodeRef }
			/>
		);
	}
}
