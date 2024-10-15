export default function Element({ number, difficulty, time }) {
  return (
    <>
      <div className="profile__flexContainer">
        <h2 className="subheader__text subheader__text--smaller">{number}</h2>
      </div>
      <div className="profile__flexContainer">
        <h2 className="subheader__text subheader__text--smaller">
          {difficulty}
        </h2>
      </div>
      <div className="profile__flexContainer">
        <h2 className="subheader__text subheader__text--smaller">
          {time.slice(0, 5)}
        </h2>
      </div>
    </>
  );
}
