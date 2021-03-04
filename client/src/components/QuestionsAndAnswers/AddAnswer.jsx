import React, { useState } from 'react';
import PropTypes from 'prop-types';

var AddAnswer = ({ question, handleAddAnswerModal }) => {
  const [ answer, setAnswer ] = useState('');
  const [ nickname, setNickname ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleChange = e => {
    let value = e.target.value
    if (e.target.name === 'answer') setAnswer(value);
    if (e.target.name === 'nickname') setNickname(value);
    if (e.target.name === 'email') setEmail(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setAnswer('');
    setNickname('');
    setEmail('');
  }

  return (
    <React.Fragment>
      <div className="modal-focus" onClick={handleAddAnswerModal}></div>
      <div className="add-answer-modal">
        <h1>Submit your Answer</h1>
        <h2>[PRODUCT_NAME]: {question}</h2>
        <form>
          <label>
            Your Answer*
            <textarea
              name="answer"
              value={answer}
              onChange={e => handleChange(e)}></textarea>
          </label>
          <label>
            What is your nickname*
            <input
              type="text"
              name="nickname"
              placeholder="Example: jackson11!"
              value={nickname}
              onChange={e => handleChange(e)}></input>
            For privacy reasons, do not use your full name or email address
          </label>
          <label>
            Your email*
            <input
              type="text"
              name="email"
              placeholder="Why did you like the product or not?"
              value={email}
              onChange={e => handleChange(e)}></input>
            For authentication reasons, you will not be emailed
          </label>
          <input
            type="submit"
            value="Submit"
            onClick={e => handleSubmit(e)}></input>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddAnswer;

AddAnswer.propTypes = {
  question: PropTypes.string,
  handleAddAnswerModal: PropTypes.func
}