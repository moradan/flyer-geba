export default function parseTimeString(timeString: string): Date {
  const [hours, minutes] = timeString.split(':').map(Number);

  // Checking if the parsed values are valid
  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    throw new Error("No es un horario correcto.");
  }

  const currentTime = new Date();
  currentTime.setHours(hours);
  currentTime.setMinutes(minutes);
  currentTime.setSeconds(0);
  currentTime.setMilliseconds(0);

  return currentTime;
}
