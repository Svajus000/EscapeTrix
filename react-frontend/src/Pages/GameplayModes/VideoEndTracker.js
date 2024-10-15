import { useState, useEffect } from "react";

export default function VideoEndTracker() {
  const [end1, setEnd1] = useState(false);
  const [end2, setEnd2] = useState(false);
  const [end3, setEnd3] = useState(false);
  const [end4, setEnd4] = useState(false);
  useEffect(() => {
    const videoEasy1 = document.getElementById("easy-1");

    function videoEasy1Ended() {
      return setEnd1(true);
    }
    function videoEasy2Ended() {
      return setEnd2(true);
    }
    function videoEasy3Ended() {
      return setEnd3(true);
    }
    function videoEasy4Ended() {
      return setEnd4(true);
    }

    if (videoEasy1) videoEasy1.addEventListener("ended", videoEasy1Ended);

    const observer = new MutationObserver(() => {
      const videoEasy2 = document.getElementById("easy-2");
      const videoEasy3 = document.getElementById("easy-3");
      const videoEasy4 = document.getElementById("easy-4");

      if (videoEasy2 && !end2) {
        videoEasy2.addEventListener("ended", videoEasy2Ended);
      }
      if (videoEasy3 && !end3) {
        videoEasy3.addEventListener("ended", videoEasy3Ended);
      }
      if (videoEasy4 && !end4) {
        videoEasy4.addEventListener("ended", videoEasy4Ended);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      if (videoEasy1) videoEasy1.removeEventListener("ended", videoEasy1Ended);
      const videoEasy2 = document.getElementById("easy-2");
      const videoEasy3 = document.getElementById("easy-3");
      const videoEasy4 = document.getElementById("easy-4");
      if (videoEasy2) videoEasy2.removeEventListener("ended", videoEasy2Ended);
      if (videoEasy3) videoEasy3.removeEventListener("ended", videoEasy3Ended);
      if (videoEasy4) videoEasy4.removeEventListener("ended", videoEasy4Ended);
    };
  }, [end2, end3, end4]);
  return [end1, end2, end3, end4];
}
