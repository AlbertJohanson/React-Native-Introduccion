
export const Functions = () => {


    const plus = (a:number, b:number):number => {
        return a + b;
    }

  return (
    <>
        <h1>Functions</h1>
        <hr />
        <span>El resultado es: {plus(1, 5)}</span>
    </>
  )
}
