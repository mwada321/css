export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff", //　青枠
    borderRadius: "20px", //　角を丸くする
    padding: "8px", //　　内側のスペース
    margin: "8px", //　　横のスペース
    display: "flex", //　　横並び
    justifyContent: "space-around", //　　　　　　横方向のレイアウト
    alignItems: "center" //　　　　　　垂直方向のレイアウト
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
