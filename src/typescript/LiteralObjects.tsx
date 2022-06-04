
interface Person {
    fullName: string;
    age: number;
    address: Address;
}

interface Address {
    street: string;
    city: string;
    country: string;
}


export const LiteralObjects = () => {
  const person: Person = {
    fullName: "Juan",
    age: 32,
    address: {
      street: "Calle falsa 123",
      city: "Madrid",
      country: "España",
    },
  };

  return (
    <>
      <h1> Literal Objects </h1>
      <hr />
      <code>
          <pre>
          {JSON.stringify(person, null, 2)}
          </pre>
      </code>
    </>
  );
};
