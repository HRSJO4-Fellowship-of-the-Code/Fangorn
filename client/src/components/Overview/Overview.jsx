import React, { useState, useEffect } from 'react';
import StyleSelector from './StyleSelector.jsx';
import ProductInfo from './ProductInfo.jsx';
import AddToCart from './AddToCart.jsx';
import ProductSummary from './ProductSummary.jsx';
import DefaultView from './DefaultView.jsx';
import axiosHelper from '../../../helperFunctions/serverRequest.js';
import PropTypes from 'prop-types';
const port = 404;

const Overview = (props) => {

  const [ product, setProduct ] = useState({});
  const [ styles, setStyles ] = useState([]);
  const [ ratings, setRatings ] = useState({});
  const [ currentStyle, setCurrentStyle ] = useState({});

  useEffect(() => {
    setProduct(props.productObj);
    setStyles(props.stylesArr);
    setRatings(props.ratingsObj);
    setCurrentStyle(props.stylesArr[0]);
  }, [])

  return (
    <div className="overview">
      <DefaultView
        photos={ currentStyle.photos }
      />
      <ProductInfo
        product={ product }
        currentStyle={ currentStyle }
        ratings={ ratings }
      />
      <StyleSelector
        styles={ styles }
        currentStyle={ currentStyle }
        handleStyleChange={index => setCurrentStyle(styles[index])}
      />
      <AddToCart
        skus={ currentStyle.skus }
      />
      <ProductSummary
        product={ product }
      />
    </div>
  )

  Overview.propTypes = {
    productID: PropTypes.number,
    productObj: PropTypes.object,
    stylesArr: PropTypes.array,
    ratingsObj: PropTypes.object
  }
}

export default Overview;