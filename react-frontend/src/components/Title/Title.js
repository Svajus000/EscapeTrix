import "./Title.css";

export default function Title() {
  return (
    <>
      <div className="title">
        <div className="title-container">
          <h2 className="title-text">Position</h2>
        </div>
        <div className="title-container">
          <h2 className="title-text">Username</h2>
        </div>
        <div className="title-container">
          <h2 className="title-text">Time</h2>
        </div>
      </div>
    </>
  );
}
