export default function Score({ position, username, time }) {
  return (
    <>
      <div className="userPosition__container">
        <h2 className="userPosition__text">{position}</h2>
      </div>
      <div className="userImage"></div>
      <div className="userUsername__container">
        <h2 className="userUsername__text">{username}</h2>
      </div>
      <div className="userTime__container">
        <h2 className="userTime__text">{time}</h2>
      </div>
    </>
  );
}
