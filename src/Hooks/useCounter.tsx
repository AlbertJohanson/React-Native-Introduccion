import { useState } from "react"

export const useCounter = (initial: number = 1) => {
    const [value, setValue] = useState(initial)

    const plus = (number:number) => {
        setValue(value + number)
    }


    return {
        value,
        plus
    }

}
