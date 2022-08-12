import "./style.css";
function Card1({ Card1data }) {
  console.log(Card1data);

  return (
    <>
      {Card1data.isEnabled ? (
        <ul>
          <li className="true">{Card1data.name}</li>
        </ul>
      ) : (
        <ul>
          <li className="false">{Card1data.name}</li>
        </ul>
      )}
    </>
  );
}

export default Card1;
