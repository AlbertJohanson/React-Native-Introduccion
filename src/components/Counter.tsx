import {useState} from 'react'

export const Counter = () => {


    const [value, setValue] = useState(0)

    const plus = (number:number) => {
        setValue(value + number)
    }

  return (
    <>
        <h1>Counter: <small>{value}</small></h1>
        <button className='btn btn-primary' onClick={() => plus(1)}>
            +1
        </button>
        &nbsp;
        <button className='btn btn-primary' onClick={() => plus(-1)}>
            -1
        </button>
    </>
  )
}
