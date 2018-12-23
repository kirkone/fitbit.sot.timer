import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as utilities from "../common/utilities";
import { PirateDate } from '../common/PirateDate';

clock.granularity = "seconds";

// Get a handle on the <text> element
const dayLabel = document.getElementById("day");
const suffixLabel = document.getElementById("suffix");
const hourLabel = document.getElementById("hour");
const minuteLabel = document.getElementById("minute");
const pmLabel = document.getElementById("pm");

clock.ontick = (event) => {
    let date: Date = event.date;
    let pirateDate: PirateDate = utilities.calcPirateTime(date);

    let day: string = utilities.zeroPad(pirateDate.day);
    let hour: string = utilities.zeroPad(pirateDate.hour);
    let minute: string = utilities.zeroPad(pirateDate.minute);

    if (preferences.clockDisplay === "12h") {
        // 12h format
        hour = utilities.zeroPad(
            pirateDate.hour % 12 || 12
        ).toString();

        if (pirateDate.hour <= 12) {
            pmLabel.text = "am";
        }
        else{
            pmLabel.text = "pm";
        }
    }
    else{
        pmLabel.text = "";
    }

    dayLabel.text = day;
    suffixLabel.text = utilities.getDaySuffix(pirateDate.day);
    hourLabel.text = hour;
    minuteLabel.text = minute;
}
