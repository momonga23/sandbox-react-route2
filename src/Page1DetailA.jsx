import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const hist = useHistory();
  const onClickBack = () => hist.goBack();

  console.log(state);
  return (
    <div>
      <h1>Page1DeatilA</h1>
      <button onClick={onClickBack}>BACK</button>
    </div>
  );
};
