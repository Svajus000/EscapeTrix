import "./AnswerInput.css";

export default function AnswerInput({
  end,
  answerInputId,
  answerInputLabel,
  handleSubmit,
  handleChange,
}) {
  if (end) {
    return (
      <>
        <form
          onSubmit={handleSubmit}
          name={answerInputId}
          className="quiz-form"
        >
          <label className="quiz-label">{answerInputLabel}</label>
          <input className="quiz-input" onChange={handleChange}></input>
          <button className="quiz-button" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  } else {
    <></>;
  }
}
