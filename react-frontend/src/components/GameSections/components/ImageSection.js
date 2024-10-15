import AnswerInput from "./AnswerInput";

export default function ImageSection({
  subheading,
  difficulty,
  sectionNumber,
  handleChange,
  handleSubmit,
  answerInputLabel,
  answerInputId,
  additionalClass,
}) {
  return (
    <div className={`main ${difficulty}-${sectionNumber}`}>
      <div className="main--effect">
        <div className="header">
          <div className="subheader__container--2">
            <h3 className="subheader__text--2">{subheading}</h3>
          </div>
        </div>
        <div className="container-2">
          <div className={`main__image ${additionalClass}`}></div>
          <div className="answer">
            <AnswerInput
              end={true}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              answerInputLabel={answerInputLabel}
              answerInputId={answerInputId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
