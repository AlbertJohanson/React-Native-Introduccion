import { useCounter } from "../Hooks/useCounter"

export const CounterWithHook = () => {

    const {value, plus} = useCounter(100)

  return (
    <>
        <h1>Counter with Hooks: <small>{value}</small></h1>
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
