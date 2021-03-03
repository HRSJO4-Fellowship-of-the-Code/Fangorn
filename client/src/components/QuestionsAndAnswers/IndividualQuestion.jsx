import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import AnswerList from './AnswerList.jsx';

const IndividualQuestion = ({ question }) => {
  const [ answers, setAnswers ] = useState([]);
  const [ showMoreAnswersButton, setShowMoreAnswersButton ] = useState(false);
  const [ numDisplayedAnswers, setNumDisplayedAnswers ] = useState(0);
  const [ displayedAnswers, setDisplayedAnswers ] = useState([]);

  useEffect(() => {
    const allAnswers = _.values(question.answers);
    setAnswers(allAnswers);

    const numAnswers = allAnswers.length;
    let numToDisplay;
    if (numAnswers > 2) {
      setShowMoreAnswersButton(true);
      numToDisplay = 2;
    } else {
      numToDisplay = numAnswers;
    }
    setNumDisplayedAnswers(numToDisplay);
    setDisplayedAnswers(allAnswers.slice(0, numToDisplay));
  }, []);

  const handleShowMoreAnswers = e => {
    e.preventDefault();
    // there will not be any more answers to display
    if ((answers.length - numDisplayedAnswers) < 3) {
      setShowMoreAnswersButton(false);
      setNumDisplayedAnswers(answers.length);
      setDisplayedAnswers(answers.slice(0, answers.length));
    } else {
    // there will be more answers to display
      const updatedNum = numDisplayedAnswers + 2;
      setNumDisplayedAnswers(updatedNum);
      setDisplayedAnswers(answers.slice(0, updatedNum));
    }
  };

  return (
    <div>
        <p>Q: {question.question_body}</p>
        <p>Helpful? <a href="#">Yes {question.question_helpfulness}</a></p>
        <a href="#">Add Answer</a>
<<<<<<< HEAD
        <AnswerList
          answers={answers}
          question={question.question_body} />
=======
        <AnswerList answers={displayedAnswers} />
        {
          showMoreAnswersButton ?
          <a href="#" onClick={handleShowMoreAnswers}>LOAD MORE ANSWERS</a>
          : null
        }
>>>>>>> 5765678bebc4e4e6882a5994a6ee229d46660198
    </div>
  );
};

export default IndividualQuestion;

IndividualQuestion.propTypes = {
  question: PropTypes.object
};