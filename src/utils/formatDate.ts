export default function formatDate(date: Date): string {
    const fecha: Date = date;
    
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        timeZone: 'UTC',
    };

    const dateFormatter = new Intl.DateTimeFormat('es', options);
    const formattedDate: string = dateFormatter.format(date);
    const cadenaLimpia: string  = formattedDate.replace(/,|de/gi, "");

    return cadenaLimpia;
}
