import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>PAGE2</h1>
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">QUery Parameter</Link>
    </div>
  );
};
