// Cleanup script to handle specific issues
const fs = require('fs');
const path = require('path');

// Update the addDisabledDate method in controller.ts
function updateAddDisabledDate() {
  const controllerPath = path.join(__dirname, 'src', 'controller.ts');
  let content = fs.readFileSync(controllerPath, 'utf8');

  // Find the addDisabledDate method
  const addDisabledDateRegex = /public addDisabledDate\(date: Date\): Date\[\] \{[\s\S]+?if \(!exists\) \{\s+this\._disabledDates\.push\(new Date\(date\)\);\s+\}[\s\S]+?return this\._disabledDates;\s+\}/;
  
  const replacement = `public addDisabledDate(date: Date): Date[] {
    if (!date) return this._disabledDates;

    // Use ConstraintsService to add the disabled date
    this._disabledDates = this._constraintsService.addDisabledDate(date);

    // Update the calendar view
    if (this.bindings.calendarDays) {
      this.bindings.calendarDays.set(this.generateCalendarDays());
    }

    return this._disabledDates;
  }`;

  content = content.replace(addDisabledDateRegex, replacement);

  // Update the getWeekNumber method
  const getWeekNumberRegex = /public getWeekNumber\(date: Date\): number \{[\s\S]+?return 1 \+ Math\.floor\(weekDiff\);\s+\}\s+\}/;
  
  const weekNumberReplacement = `public getWeekNumber(date: Date): number {
    if (!date) return 1;
    
    // Delegate to the CalendarService
    return this._calendarService.getWeekNumber(date);
  }`;

  content = content.replace(getWeekNumberRegex, weekNumberReplacement);

  // Update the getMonthNames method
  const getMonthNamesRegex = /public getMonthNames\(\): string\[\] \{[\s\S]+?return \[\s+'January', 'February', 'March', 'April', 'May', 'June',\s+'July', 'August', 'September', 'October', 'November', 'December'\s+\];\s+\}/;
  
  const monthNamesReplacement = `public getMonthNames(): string[] {
    // Delegate to the CalendarService
    return Array.from({ length: 12 }, (_, i) => this._calendarService.getMonthName(i));
  }`;

  content = content.replace(getMonthNamesRegex, monthNamesReplacement);

  // Write updated content back to the file
  fs.writeFileSync(controllerPath, content);
  console.log('Updated controller.ts successfully');
}

// Update the interface
function updateCalendarServiceInterface() {
  const interfacePath = path.join(__dirname, 'src', 'interfaces', 'calendar.service.interfaces.ts');
  let content = fs.readFileSync(interfacePath, 'utf8');

  // Add getWeekNumber method to the interface
  const localizationServiceRegex = /getLocalizationService\(\): any \| null;(\s+\})/;
  
  const replacement = `getLocalizationService(): any | null;

  /**
   * Get the ISO week number for a date
   */
  getWeekNumber(date: Date): number;$1`;

  content = content.replace(localizationServiceRegex, replacement);

  // Write updated content back to the file
  fs.writeFileSync(interfacePath, content);
  console.log('Updated calendar.service.interfaces.ts successfully');
}

// Execute the updates
try {
  updateCalendarServiceInterface();
  updateAddDisabledDate();
  console.log('Done!');
} catch (error) {
  console.error('Error during cleanup:', error);
}
