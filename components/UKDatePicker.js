import React from 'react';
import {requireNativeComponent, View} from 'react-native'
import PropTypes from 'prop-types'



class UKDatePicker extends React.Component {

    _didValueChange = (event) => {

        if (!this.props.didValueChanged) {
            return;
        }
        this.props.didValueChanged(event);
    }

    render() {
        console.log(this.props.didValueChanged);
        let props = {
            ...this.props,
            onValueChanged: this._didValueChange
        }
        return <DatePicker {...props}></DatePicker>
    }
}
const DatePicker = requireNativeComponent('DatePicker', UKDatePicker);

UKDatePicker.prototypes = {
    // DatePicker 显示模式
    mode: PropTypes.any,
    // 时间修改回调
    didValueChanged: PropTypes.func
}

export default UKDatePicker;