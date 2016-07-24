import React, { Children, PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-css-transition-group';
import { appStateSelector } from '../_selectors/AppStateSelectors';
import LoadingView from '../loading-view/LoadingView';

/**
 * Note: The loading view is tightly coupled with the auto-signin flow of apps,
 * If we render children before connected === true, auto sign-in will fail
 */
@connect(appStateSelector)
export default class AppStateProvider extends PureComponent {

    static propTypes = {
        children: PropTypes.object.isRequired,
        connected: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            showMessage: false,
        };
    }

    componentWillMount() {
        this.timer = setTimeout(this.showMessageForSlowConnection, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    showMessageForSlowConnection = () => {
        this.setState({ showMessage: true });
    }

    render() {
        const { connected, children } = this.props;
        const { showMessage } = this.state;

        return (
            <TransitionGroup transitionName="zoom" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                {Children.only(connected ? children : <LoadingView key={123} showMessage={showMessage} />)}
            </TransitionGroup>
        );
    }
}
