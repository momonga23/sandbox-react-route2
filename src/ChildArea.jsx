import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "red"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("render---");

  const data = [...Array(100).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>childcomponents</p>
          <button onClick={onClickClose}>close</button>
        </div>
      ) : null}
    </>
  );
});
