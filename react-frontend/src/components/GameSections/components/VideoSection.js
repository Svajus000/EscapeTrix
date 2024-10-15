import AnswerInput from "./AnswerInput";

export default function VideoSection({
  subheading,
  difficulty,
  sectionNumber,
  videoPath,
  videoId,
  videoEnd,
  handleChange,
  handleSubmit,
  answerInputLabel,
  answerInputId,
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
          <video
            id={`${difficulty}-${videoId}`}
            className="video-container"
            controls
            muted
          >
            <source src={videoPath} type="video/mp4"></source>
          </video>
          <div className="answer">
            <AnswerInput
              end={videoEnd}
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
