import { PirateDate } from './PirateDate';

export function zeroPad(input: number): string {
    let output: string = input.toString();
    if (input < 10) {
        output = "0" + input.toString();
    }
    return output;
}

export function getDaySuffix(day: number): string {
    let output: string = ""
    switch (day) {
        case 1:
        case 21:
            output = "st";
            break;
        case 2:
        case 22:
            output = "nd";
            break;
        case 3:
        case 23:
            output = "rd";
            break;
        default:
            output = "th";
    }
    return output;
}

export function calcPirateTime(date: Date): PirateDate {
    let pirateDate: PirateDate = new PirateDate;
    let timestamp = date.valueOf();

    pirateDate.day = Math.floor((((timestamp / 60000) / 24) % 30) + 1);
    pirateDate.hour = Math.floor((timestamp / 60000) % 1440 % 24);
    pirateDate.minute = Math.floor((timestamp / 1000) % 60);

    return pirateDate;
}
