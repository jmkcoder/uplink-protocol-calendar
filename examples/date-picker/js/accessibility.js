// Accessibility helper functions for the date picker

/**
 * Initializes accessibility features for the date picker
 */
export function initAccessibility() {
  // Create ARIA live region for announcements
  createAriaLiveRegion();
  
  // Add keyboard trap to calendar popup
  setupKeyboardTrap('calendarPopup');
}

/**
 * Creates an ARIA live region for screen reader announcements
 */
function createAriaLiveRegion() {
  const liveRegion = document.createElement('div');
  liveRegion.id = 'date-picker-live-region';
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.classList.add('sr-only');
  document.body.appendChild(liveRegion);
}

/**
 * Announces a message to screen readers using the live region
 * @param {string} message - Message to announce
 */
export function announce(message) {
  const liveRegion = document.getElementById('date-picker-live-region');
  if (liveRegion) {
    liveRegion.textContent = '';
    // Small delay to ensure screen readers register the change
    setTimeout(() => {
      liveRegion.textContent = message;
    }, 50);
  }
}

/**
 * Sets up keyboard trap for modals/popups
 * @param {string} containerId - ID of the container to trap focus within
 */
function setupKeyboardTrap(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.addEventListener('keydown', function(event) {
    // If Escape, close the popup
    if (event.key === 'Escape') {
      const closeButton = document.getElementById('closeButton');
      if (closeButton) closeButton.click();
      return;
    }
    
    // If not tab key, ignore
    if (event.key !== 'Tab') return;
    
    // All focusable elements in the calendar popup
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // If shift + tab and focus is on first element, move to last element
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
    // If tab and focus is on last element, move to first element
    else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });
}

/**
 * Handles keyboard navigation between dates in the calendar grid
 * @param {Event} event - Keyboard event
 * @param {HTMLElement} grid - Calendar grid element
 */
export function handleCalendarKeyboardNavigation(event) {
  const grid = document.getElementById('calendar');
  const cells = Array.from(grid.querySelectorAll('.calendar-cell:not([aria-disabled="true"])'));
  const currentCell = document.activeElement;
  
  // Check if current focus is on a calendar cell
  if (!cells.includes(currentCell)) return;
  
  const currentIndex = cells.indexOf(currentCell);
  let nextIndex;
  
  switch (event.key) {
    case 'ArrowRight':
      event.preventDefault();
      nextIndex = Math.min(currentIndex + 1, cells.length - 1);
      cells[nextIndex].focus();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      nextIndex = Math.max(currentIndex - 1, 0);
      cells[nextIndex].focus();
      break;
    case 'ArrowUp':
      event.preventDefault();
      nextIndex = Math.max(currentIndex - 7, 0);
      cells[nextIndex]?.focus();
      break;
    case 'ArrowDown':
      event.preventDefault();
      nextIndex = Math.min(currentIndex + 7, cells.length - 1);
      cells[nextIndex]?.focus();
      break;
    case 'Home':
      event.preventDefault();
      // First day of current week
      nextIndex = currentIndex - (currentIndex % 7);
      cells[nextIndex]?.focus();
      break;
    case 'End':
      event.preventDefault();
      // Last day of current week
      nextIndex = currentIndex + (6 - (currentIndex % 7));
      if (nextIndex >= cells.length) nextIndex = cells.length - 1;
      cells[nextIndex]?.focus();
      break;
    case 'PageUp':
      event.preventDefault();
      // Previous month
      document.getElementById('prevMonth').click();
      // Maintain focus on a similar day in the previous month
      setTimeout(() => {
        const newCells = Array.from(grid.querySelectorAll('.calendar-cell:not([aria-disabled="true"])'));
        const similarPosition = Math.min(currentIndex, newCells.length - 1);
        newCells[similarPosition]?.focus();
      }, 50);
      break;
    case 'PageDown':
      event.preventDefault();
      // Next month
      document.getElementById('nextMonth').click();
      // Maintain focus on a similar day in the next month
      setTimeout(() => {
        const newCells = Array.from(grid.querySelectorAll('.calendar-cell:not([aria-disabled="true"])'));
        const similarPosition = Math.min(currentIndex, newCells.length - 1);
        newCells[similarPosition]?.focus();
      }, 50);
      break;
  }
}

/**
 * Parses date input in various common formats
 * @param {string} input - Date string input
 * @returns {Date|null} - Parsed Date object or null
 */
export function parseDate(input) {
  if (!input || typeof input !== 'string' || input.trim() === '') {
    return null;
  }
  
  // Try various date formats
  const formats = [
    // MM/DD/YYYY
    {
      regex: /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
      builder: (match) => new Date(parseInt(match[3]), parseInt(match[1]) - 1, parseInt(match[2]))
    },
    // DD/MM/YYYY
    {
      regex: /^(\d{1,2})[-.](\d{1,2})[-.](\d{4})$/,
      builder: (match) => new Date(parseInt(match[3]), parseInt(match[2]) - 1, parseInt(match[1]))
    },
    // YYYY-MM-DD (ISO Format)
    {
      regex: /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
      builder: (match) => new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]))
    },
    // Month DD, YYYY (e.g., "January 1, 2023")
    {
      regex: /^([a-zA-Z]+)\s+(\d{1,2}),?\s+(\d{4})$/,
      builder: (match) => {
        const months = {
          january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
          july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
        };
        const month = months[match[1].toLowerCase()];
        return month !== undefined 
          ? new Date(parseInt(match[3]), month, parseInt(match[2])) 
          : null;
      }
    }
  ];
  
  // Try each format until one works
  for (const format of formats) {
    const match = input.match(format.regex);
    if (match) {
      const date = format.builder(match);
      if (date && !isNaN(date.getTime())) {
        return date;
      }
    }
  }
  
  // Fallback to native Date parsing
  const date = new Date(input);
  return !isNaN(date.getTime()) ? date : null;
}

/**
 * Formats a date according to the specified format
 * @param {Date} date - Date to format
 * @param {string} format - Format string (e.g., 'MM/DD/YYYY', 'DD-MM-YYYY', 'YYYY-MM-DD')
 * @returns {string} - Formatted date string
 */
export function formatDate(date, format = 'MM/DD/YYYY') {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return '';
  }
  
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  // Replace format placeholders
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day);
}

export default {
  initAccessibility,
  announce,
  handleCalendarKeyboardNavigation,
  parseDate,
  formatDate
};
