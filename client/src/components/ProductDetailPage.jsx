import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview.jsx'
import RelatedAndOutfits from './RelatedOutfit/RelatedAndOutfits.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Overview productID={13023} />
        <RelatedAndOutfits productID={13025} />
        <QuestionsAndAnswers productID={1} />
        <RatingsAndReviews productID={1} />
      </div>
    )
  }
}

export default ProductDetailPage;
