export default function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    const dateFormatter = new Intl.DateTimeFormat('es', options);
    const formattedDate = dateFormatter.format(date);

    return formattedDate;
}
