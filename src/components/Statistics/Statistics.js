const Statistics = ({good, neutral, bad, total, positivePersentage}) => {
  return (
    <ul>
        <li>Good:{good}</li>
        <li>neutral:{neutral}</li>
        <li>bad:{bad}</li>
        <li>total:{total}</li>
        <li>positivePersentage:{positivePersentage}</li>
    </ul>
  )
}

export default Statistics;