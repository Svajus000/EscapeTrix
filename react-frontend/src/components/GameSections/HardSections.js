import ImageSection from "./components/ImageSection";

export default function HardSections({ correct1, handleSubmit, handleChange }) {
  let [correct, correct2, correct3] = correct1;

  console.log(correct, correct2, correct3);
  if (correct && correct2 && correct3) {
    return (
      <>
        <ImageSection
          videoEnd={true}
          difficulty={"hard"}
          sectionNumber={1}
          videoId={2}
          subheading={"Find a hidden word"}
          answerInputLabel={"What is the hidden word ?"}
          answerInputId={2}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`hard--1`}
        />
        <ImageSection
          videoEnd={true}
          difficulty={"hard"}
          sectionNumber={2}
          subheading={"Find a hidden word"}
          answerInputLabel={"What is the hidden word ?"}
          answerInputId={3}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`hard--2`}
        />
        <ImageSection
          videoEnd={true}
          difficulty={"hard"}
          sectionNumber={3}
          subheading={"Find a hidden word"}
          answerInputLabel={"What is the hidden word ?"}
          answerInputId={4}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`hard--3`}
        />
      </>
    );
  } else if (correct && correct2) {
    return (
      <>
        <ImageSection
          videoEnd={true}
          difficulty={"hard"}
          sectionNumber={1}
          subheading={"Find a hidden word"}
          answerInputLabel={"What is the hidden word ?"}
          answerInputId={1}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`hard--1`}
        />
        <ImageSection
          videoEnd={true}
          difficulty={"hard"}
          sectionNumber={2}
          subheading={"Find a hidden word"}
          answerInputLabel={"What is the hidden word ?"}
          answerInputId={3}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`hard--2`}
        />
      </>
    );
  } else if (correct) {
    return (
      <>
        <ImageSection
          videoEnd={true}
          difficulty={"hard"}
          sectionNumber={1}
          subheading={"Find a hidden word"}
          answerInputLabel={"What is the hidden word ?"}
          answerInputId={2}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          additionalClass={`hard--1`}
        />
      </>
    );
  } else return <></>;
}
