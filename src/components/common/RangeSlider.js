import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const RangeSlider = ({
  ...rest
}) => {
  return (
    <Slider
      {...rest}
    />
  )
}

export default RangeSlider;