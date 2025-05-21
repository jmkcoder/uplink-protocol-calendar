// controller.js - Manages the calendar controller instance
import { CalendarController } from "../../../dist/index.js";

// Initialize a calendar controller with the default locale
let calendar = CalendarController({
  firstDayOfWeek: 0, // Sunday
  dateFormat: "YYYY-MM-DD",
  locale: "en-US",
  dateFormatOptions: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },
});

export default {
  calendar
};
