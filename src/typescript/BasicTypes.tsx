export const BasicTypes = () => {
  let name: string = "Albert";
  const age = 35;
  const isActive: boolean = true;

  const powers: (string | number | boolean)[] = [];

  powers.push(1);
  powers.push("123");
  powers.push(true);
  return (
    <>
      <h3>Basic Types</h3>
      {name}, {age}, {isActive ? "Activo" : "Inactivo"}
      <br />
      {powers.join(", ")}
    </>
  );
};
