import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={style.button}
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
      key={feedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    FeedbackBtn({ feedback: option, onLeaveFeedback }),
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
