import React, { Component } from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

export default class Button extends Component {
  render() {
    const { style, full, opacity, children, ...props } = this.props;
    const buttonStyles = [
      styles.button,
      full && styles.full,
      style,
    ];

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
   width: 190,
   height: 60,
   fontSize: 25,
   fontWeight: "500",
   position: "absolute",
   color: "purple",
   borderWidth: 2,
   borderTopWidth: 0,
   borderRightWidth: 0,
   borderRadius: 10,
   borderColor: "purple",
   alignItems: 'center',
   paddingTop: 15,
   padding: 5,
   paddingLeft: 55,
  }
});
