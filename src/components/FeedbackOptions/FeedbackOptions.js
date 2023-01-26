import PropTypes from 'prop-types';
import { BtnList, FeedbackBtnItem, FeedbackBtn } from "components/FeedbackOptions/FeedbackOptions.styled";


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BtnList>
      {options.map(option => (
        <FeedbackBtnItem key={option}>
          <FeedbackBtn name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </FeedbackBtn>
        </FeedbackBtnItem>
      ))}
        </BtnList>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};