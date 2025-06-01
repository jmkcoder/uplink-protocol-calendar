#!/usr/bin/env node

/**
 * Test script to validate all Calendar Controller methods are accessible
 */

// This would be the import in a real test, but for Node.js we'll check the built output
console.log('=== Calendar Controller Method Accessibility Test ===\n');

try {
    // Read the built JavaScript file
    const fs = require('fs');
    const path = require('path');
    
    const distPath = path.join(__dirname, 'dist', 'index.js');
    if (!fs.existsSync(distPath)) {
        console.error('❌ Build output not found. Run npm run build first.');
        process.exit(1);
    }
    
    const buildContent = fs.readFileSync(distPath, 'utf8');
    
    // Check for key method signatures in the built output
    const methodsToCheck = [
        'getMonthNames', 'getWeekdayNames', 'getFormattedDate', 'formatDate',
        'getLocale', 'setLocale', 'getDateFormatOptions', 'getCurrentYearRange',
        'getDisabledDates', 'isToday', 'generateMonthView', 'getWeekNumber',
        'generateCalendarDays', 'generateCalendarMonths', 'generateCalendarYears',
        'getAccessibleDateLabel', 'getDateStateDescription', 'focusDate',
        'moveFocusRight', 'moveFocusLeft', 'moveFocusUp', 'moveFocusDown',
        'selectFocusedDate', 'setFocusedDate', 'clearFocusedDate',
        'setRangeSelectionMode', 'clearSelection', 'selectMonth', 'selectYear',
        'setMinDate', 'setMaxDate', 'setDisabledDates', 'addDisabledDate',
        'removeDisabledDate', 'setYearRangeSize', 'moveFocusToStartOfMonth',
        'moveFocusToEndOfMonth', 'moveFocusToPreviousMonth', 'moveFocusToNextMonth',
        'moveFocusToPreviousYear', 'moveFocusToNextYear'
    ];
    
    console.log('Checking method signatures in built output...\n');
    
    let foundMethods = 0;
    let missingMethods = [];
    
    methodsToCheck.forEach(method => {
        // Look for the method being bound in the methods object
        const methodBinding = `${method}:this.${method}.bind(this)`;
        const alternativeBinding = `${method}: this.${method}.bind(this)`;
        
        if (buildContent.includes(methodBinding) || buildContent.includes(alternativeBinding)) {
            console.log(`✅ ${method} - Found in methods object`);
            foundMethods++;
        } else {
            console.log(`❌ ${method} - Missing from methods object`);
            missingMethods.push(method);
        }
    });
    
    console.log(`\n=== Results ===`);
    console.log(`Total methods checked: ${methodsToCheck.length}`);
    console.log(`Found: ${foundMethods}`);
    console.log(`Missing: ${missingMethods.length}`);
    console.log(`Success rate: ${Math.round((foundMethods / methodsToCheck.length) * 100)}%`);
    
    if (missingMethods.length > 0) {
        console.log(`\nMissing methods:`);
        missingMethods.forEach(method => console.log(`  - ${method}`));
    }
    
    // Check if CalendarController is exported
    if (buildContent.includes('CalendarController')) {
        console.log('\n✅ CalendarController is exported');
    } else {
        console.log('\n❌ CalendarController export not found');
    }
    
    if (foundMethods === methodsToCheck.length) {
        console.log('\n🎉 All methods are properly exposed!');
        process.exit(0);
    } else {
        console.log(`\n⚠️  ${missingMethods.length} methods need to be added to the methods object`);
        process.exit(1);
    }
    
} catch (error) {
    console.error('❌ Error running test:', error.message);
    process.exit(1);
}
