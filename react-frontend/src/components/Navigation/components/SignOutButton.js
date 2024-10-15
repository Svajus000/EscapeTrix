export default function SignOutButton({ handleSubmit }) {
  return (
    <>
      <div className="nav__item">
        <form className="nav__buttonForm" onSubmit={handleSubmit}>
          <button className="nav__button" type="submit">
            Sign Out
          </button>
        </form>
      </div>
    </>
  );
}
