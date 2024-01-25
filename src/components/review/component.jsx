export const Review = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы:</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};
