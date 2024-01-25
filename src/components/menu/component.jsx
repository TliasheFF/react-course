export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню:</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
