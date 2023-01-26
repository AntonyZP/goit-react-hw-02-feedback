import PropTypes from 'prop-types';
import { TotalList, TotalListItem } from "components/Statistics/Statistics.styled";


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <TotalList>
        <TotalListItem>Good: {good}</TotalListItem>
        <TotalListItem>Neutral: {neutral}</TotalListItem>
        <TotalListItem>Bad: {bad}</TotalListItem>
        <TotalListItem>Total: {total}</TotalListItem>
        <TotalListItem>PositivePercentage: {positivePercentage()}</TotalListItem>
    </TotalList>
  )
}

export default Statistics;


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};