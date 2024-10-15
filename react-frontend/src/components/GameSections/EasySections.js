import videoEasyPath1 from "../../public/Video/easy-1.mp4";
import videoEasyPath2 from "../../public/Video/easy-2.mp4";
import videoEasyPath3 from "../../public/Video/easy-3.mp4";
import VideoSection from "./components/VideoSection";

export default function EasySections({
  videoEnd,
  correct1,
  handleSubmit,
  handleChange,
}) {
  let [correct, correct2, correct3] = correct1;
  const [videoEnd1, videoEnd2, videoEnd3] = videoEnd;
  console.log(correct, correct2, correct3);
  if (correct && correct2 && correct3) {
    return (
      <>
        <VideoSection
          videoEnd={videoEnd1}
          difficulty={"easy"}
          sectionNumber={1}
          videoPath={videoEasyPath1}
          videoId={2}
          subheading={"Remember colors"}
          answerInputLabel={"Type the order in which shapes appeared."}
          answerInputId={2}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <VideoSection
          videoEnd={videoEnd2}
          difficulty={"easy"}
          sectionNumber={2}
          videoPath={videoEasyPath2}
          videoId={3}
          subheading={"Remember shapes and colors"}
          answerInputLabel={"Type the third object shape and color."}
          answerInputId={3}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <VideoSection
          videoEnd={videoEnd3}
          difficulty={"easy"}
          sectionNumber={3}
          videoPath={videoEasyPath3}
          videoId={4}
          subheading={"Remember shapes"}
          answerInputLabel={"How many distinct shapes there was?"}
          answerInputId={4}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </>
    );
  } else if (correct && correct2) {
    return (
      <>
        <VideoSection
          videoEnd={videoEnd1}
          difficulty={"easy"}
          sectionNumber={1}
          videoPath={videoEasyPath1}
          videoId={2}
          subheading={"Remember colors"}
          answerInputLabel={"Type the order in which shapes appeared."}
          answerInputId={1}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <VideoSection
          videoEnd={videoEnd2}
          difficulty={"easy"}
          sectionNumber={2}
          videoPath={videoEasyPath2}
          videoId={3}
          subheading={"Remember shapes and colors"}
          answerInputLabel={"Type the third object shape and color."}
          answerInputId={3}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </>
    );
  } else if (correct) {
    return (
      <>
        <VideoSection
          videoEnd={videoEnd1}
          difficulty={"easy"}
          sectionNumber={1}
          videoPath={videoEasyPath1}
          videoId={2}
          subheading={"Remember colors"}
          answerInputLabel={"Type the order in which shapes appeared."}
          answerInputId={2}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </>
    );
  } else return <></>;
}
