export function getDatesByWeekdayAndCalendarWeek(weekday: string, calendarWeek: number, doneHistory: Date[] | undefined): Date[] {
    if (doneHistory === undefined) return [];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdayIndex = daysOfWeek.indexOf(weekday);
    return doneHistory.filter((done) => {
        if (done === undefined) return;
        const dateWeek = getCalendarWeek(done);
        console.log(dateWeek)
        const dateWeekday = new Date(done).getDay();
        return dateWeek === calendarWeek && dateWeekday === weekdayIndex;
    });
}

export function getCalendarWeek(date: Date): number {
    const yearStart = new Date(new Date(date).getFullYear(), 0, 1);
    return Math.ceil(((new Date(date).getTime() - yearStart.getTime()) / 86400000 + yearStart.getDay() + 1) / 7);
}