import "./style.css";
function Card3({ Card3data }) {
  console.log(Card3data);

  return (
    <>
      {Card3data.isEnabled ? (
        <ul className="carddatas">
          <li className="true">{Card3data.name}</li>
        </ul>
      ) : (
        <ul>
          <li className="false">{Card3data.name}</li>
        </ul>
      )}
    </>
  );
}

export default Card3;
