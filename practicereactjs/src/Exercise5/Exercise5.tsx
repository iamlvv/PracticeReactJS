import React from 'react'

type Props = {}

const Exercise5 = (props: Props) => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    }
  return (
    <div>
        <h2>Button has been clicked: {count} times</h2>
        <button type='button' onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Exercise5