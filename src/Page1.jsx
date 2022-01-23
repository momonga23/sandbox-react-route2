import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const hist = useHistory();
  const onClickDA = () => hist.push("/page1/detailA");
  return (
    <div>
      <h1>PAGE1</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDA}>DetailA</button>
    </div>
  );
};
