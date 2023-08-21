const Statistics = ({ good, neutral, bad, total, goodPrtge }) => {
    return (
        <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback: {goodPrtge}%</li>
        </ul>
    )
}

export {Statistics}