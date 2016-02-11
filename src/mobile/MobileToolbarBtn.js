import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class MobileToolbarBtn extends React.Component {

	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		to: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
	};

	render() {
		const { to, img } = this.props;

		return (
			<Link
				to={to}
				activeClassName="active"
				className="mobile-nav-btn"
			>
				<img src={img} />
			</Link>
		);
	}
}
