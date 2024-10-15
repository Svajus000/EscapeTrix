import ImageSection from "./components/ImageSection";

export default function MediumSections({
  correct1,
  handleSubmit,
  handleChange,
}) {
  let [correct, correct2, correct3] = correct1;

  console.log(correct, correct2, correct3);
  if (correct && correct2 && correct3) {
    return (
      <>
        <ImageSection
          videoEnd={true}
          difficulty={"medium"}
          sectionNumber={1}
          videoId={2}
          subheading={"Remember colors"}
          answerInputLabel={"How many differences there are ?"}
          answerInputId={2}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`medium--1`}
        />
        <ImageSection
          videoEnd={true}
          difficulty={"medium"}
          sectionNumber={2}
          subheading={"Remember shapes and colors"}
          answerInputLabel={"How many differences there are ?"}
          answerInputId={3}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`medium--2`}
        />
        <ImageSection
          videoEnd={true}
          difficulty={"medium"}
          sectionNumber={3}
          subheading={"Remember shapes"}
          answerInputLabel={"How many differences there are ?"}
          answerInputId={4}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`medium--3`}
        />
      </>
    );
  } else if (correct && correct2) {
    return (
      <>
        <ImageSection
          videoEnd={true}
          difficulty={"medium"}
          sectionNumber={1}
          subheading={"Remember colors"}
          answerInputLabel={"How many differences there are ?"}
          answerInputId={1}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`medium--1`}
        />
        <ImageSection
          videoEnd={true}
          difficulty={"medium"}
          sectionNumber={2}
          subheading={"Remember shapes and colors"}
          answerInputLabel={"How many differences there are ?"}
          answerInputId={3}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`medium--2`}
        />
      </>
    );
  } else if (correct) {
    return (
      <>
        <ImageSection
          videoEnd={true}
          difficulty={"medium"}
          sectionNumber={1}
          subheading={"Remember colors"}
          answerInputLabel={"How many differences there are ?"}
          answerInputId={2}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`medium--1`}
        />
      </>
    );
  } else return <></>;
}
