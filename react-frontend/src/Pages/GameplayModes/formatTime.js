export default function formatTime({ seconds }) {
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${displaySeconds
    .toString()
    .padStart(2, "0")}`;
}
