import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const dynamicValidationColor = (firstColor, secondColor) => !isValid ? firstColor : secondColor;

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: dynamicValidationColor('red', 'black') }}>Course Goal</label>
        <input style={{ borderColor: dynamicValidationColor('red', '#eee'), 
                        background: dynamicValidationColor('salmon', 'transparent')}} 
                        type="text" 
                        onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
