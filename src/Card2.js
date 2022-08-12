import "./style.css";
function Card2({ Card2data }) {
  console.log(Card2data);

  return (
    <>
      {Card2data.isEnabled ? (
        <ul className="carddatas">
          <li className="true">{Card2data.name}</li>
        </ul>
      ) : (
        <ul>
          <li className="false">{Card2data.name}</li>
        </ul>
      )}
    </>
  );
}

export default Card2;
