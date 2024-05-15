export default function formatTime(horario: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    const timeFormatter = new Intl.DateTimeFormat(undefined, options);
    const formattedTime = timeFormatter.format(horario);

    return formattedTime;
}
