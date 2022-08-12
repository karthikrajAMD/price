import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import "./style.css";
const styles = {
  fontWeight: "bold",
};
function App() {
  const data1 = [
    {
      name: "Single User",
      isEnabled: true,
    },
    {
      name: "5GB Storage",
      isEnabled: true,
    },

    {
      name: "Unlimited Public Projects",
      isEnabled: true,
    },
    {
      name: "Community Access",
      isEnabled: true,
    },
    {
      name: "Unlimited Private Projects",
      isEnabled: false,
    },
    {
      name: "Dedicated Phone Support",
      isEnabled: false,
    },
    {
      name: "Free Subdomain",
      isEnabled: false,
    },
    {
      name: "Monthly Status Reports",
      isEnabled: false,
    },
  ];
  const data2 = [
    {
      name: "5 Users",
      isEnabled: true,
    },
    {
      name: "50GB Storage",
      isEnabled: true,
    },
    {
      name: "Unlimited Private Projects",
      isEnabled: true,
    },
    {
      name: "Unlimited Public Projects",
      isEnabled: true,
    },
    {
      name: "Community Access",
      isEnabled: true,
    },
    {
      name: "Dedicated Phone Support",
      isEnabled: true,
    },
    {
      name: "Free Subdomain",
      isEnabled: true,
    },
    {
      name: "Monthly Status Reports",
      isEnabled: false,
    },
  ];
  const data3 = [
    {
      name: "Unlimited Users",
      isEnabled: true,
    },
    {
      name: "150GB Storage",
      isEnabled: true,
    },
    {
      name: "Unlimited Private Projects",
      isEnabled: true,
    },
    {
      name: "Unlimited Public Projects",
      isEnabled: true,
    },
    {
      name: "Community Access",
      isEnabled: true,
    },
    {
      name: "Dedicated Phone Support",
      isEnabled: true,
    },
    {
      name: "Unlimited Free Subdomain",
      isEnabled: true,
    },
    {
      name: "Monthly Status Reports",
      isEnabled: true,
    },
  ];
  return (
    <>
      <section className="pricing">
        <div className="container">
          <div id="cardlist" className="row">
            <div className="col col-md-4 mb-5 cardhov">
              <header>
                <h4>FREE</h4>
                <h1>
                  $0<span>/month</span>
                </h1>
                <hr></hr>
              </header>
              {data1.map((m, i) => (
                <Card1 key={i} Card1data={m} />
              ))}
              <a type="button" class="btn btn-primary">
                Button
              </a>
            </div>
            <div className="col col-md-4 mb-5 cardhov">
              <header>
                <h4>Plus</h4>
                <h1>
                  $9<span>/month</span>
                </h1>
                <hr></hr>
              </header>
              {data2.map((m, i) => (
                <Card2 key={i} Card2data={m} />
              ))}
              <a type="button" class="btn btn-primary">
                Button
              </a>
            </div>
            <div className="col col-md-4 mb-5 cardhov">
              <header>
                <h4>Pro</h4>
                <h1>
                  $49<span>/month</span>
                </h1>
                <hr></hr>
              </header>
              {data3.map((m, i) => (
                <Card3 key={i} Card3data={m} />
              ))}
              <a type="button" class="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
