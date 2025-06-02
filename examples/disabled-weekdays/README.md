# Disabled Weekdays Examples

This directory contains examples demonstrating the disabled weekdays feature of the Calendar Controller.

## Files

- `index.html` - Interactive web examples with multiple use cases
- `node-example.js` - Node.js examples for testing the API programmatically

## Running the Examples

### Web Examples

1. Make sure the date picker is built:
   ```bash
   cd ../../
   npm run build
   ```

2. Open `index.html` in a web browser or serve it with a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000/examples/disabled-weekdays/index.html`

### Node.js Examples

1. Make sure you're in the project root and run:
   ```bash
   node examples/disabled-weekdays/node-example.js
   ```

## Example Use Cases Demonstrated

### 1. Business Hours Calendar
- **Use Case**: Corporate appointment booking
- **Disabled Days**: Weekends (Saturday and Sunday)
- **Features**: Professional scheduling interface

### 2. Custom Service Schedule  
- **Use Case**: Service provider with specific operating days
- **Disabled Days**: Variable based on business model
- **Features**: Flexible scheduling patterns

### 3. Dynamic Day Management
- **Use Case**: Administrative interface for configuring availability
- **Features**: 
  - Real-time day enable/disable
  - Visual feedback for current settings
  - Preset configurations (weekends, weekdays, etc.)

### 4. Combined Constraints
- **Use Case**: Appointment system with multiple restrictions
- **Features**:
  - Date range limits (next 30 days)
  - Disabled weekdays
  - Specific blocked dates (holidays)
  - Comprehensive validation

### 5. Interactive Configuration
- **Use Case**: User-configurable calendar settings
- **Features**:
  - Checkbox interface for day selection
  - Preset buttons for common patterns
  - Real-time calendar updates
  - Status display

## Key Features Showcased

- ✅ **Initial Configuration** - Set disabled days when creating calendar
- ✅ **Dynamic Management** - Add/remove disabled days at runtime
- ✅ **Validation** - Automatic filtering of invalid day numbers
- ✅ **Integration** - Works with other date constraints
- ✅ **User Experience** - Clear visual feedback and intuitive controls
- ✅ **Performance** - Efficient day checking and calendar updates

## API Methods Demonstrated

```javascript
// Initial setup
new CalendarController(selector, {
    disabledDaysOfWeek: [0, 6] // Sunday and Saturday
});

// Dynamic management
calendar.setDisabledDaysOfWeek([0, 6]); // Set disabled days
calendar.addDisabledDayOfWeek(1);       // Add Monday
calendar.removeDisabledDayOfWeek(0);    // Remove Sunday
calendar.getDisabledDaysOfWeek();       // Get current disabled days

// Checking if date is disabled
calendar.isDateDisabled(new Date());    // Returns boolean
```

## Day Number Reference

- 0 = Sunday
- 1 = Monday  
- 2 = Tuesday
- 3 = Wednesday
- 4 = Thursday
- 5 = Friday
- 6 = Saturday

## Browser Compatibility

These examples work in all modern browsers that support:
- ES6 modules and classes
- HTML5 input elements
- CSS Grid and Flexbox
- DOM manipulation APIs

## Customization

Feel free to modify these examples to suit your specific needs:

1. **Styling**: Update CSS to match your design system
2. **Business Logic**: Add custom validation rules
3. **Integration**: Combine with your existing calendar implementation
4. **Localization**: Add multi-language support for day names

## Troubleshooting

If the examples don't work:

1. Ensure the date picker is built (`npm run build`)
2. Check that all file paths are correct
3. Verify your web server supports ES6 modules
4. Check the browser console for any error messages

For more detailed documentation, see [disabled-weekdays.md](../../docs/disabled-weekdays.md).
