import { EventManagerService } from '../../services/event-manager.service';
import { createDate } from '../test-utils';
import { DateRange, YearRange } from '../../interfaces/calendar.interfaces';
import { EventEmitter } from '@uplink-protocol/core';

describe('EventManagerService', () => {
  let service: EventManagerService;

  beforeEach(() => {
    service = new EventManagerService();
  });

  describe('initializeEvents', () => {
    it('should initialize all event emitters', () => {
      const events = service.initializeEvents();
      
      expect(events.dateSelected).toBeInstanceOf(EventEmitter);
      expect(events.dateRangeSelected).toBeInstanceOf(EventEmitter);
      expect(events.monthChanged).toBeInstanceOf(EventEmitter);
      expect(events.yearChanged).toBeInstanceOf(EventEmitter);
      expect(events.viewChanged).toBeInstanceOf(EventEmitter);
      expect(events.yearRangeChanged).toBeInstanceOf(EventEmitter);
    });
  });

  describe('emitDateSelected', () => {
    it('should emit date selected event', () => {
      const emitter = new EventEmitter<Date>();
      const date = createDate(2025, 4, 15);
      
      // Add spy to monitor emissions
      const emitSpy = jest.spyOn(emitter, 'emit');
      
      service.emitDateSelected(emitter, date);
      
      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(date);
    });
  });

  describe('emitDateRangeSelected', () => {
    it('should emit date range selected event when range is complete', () => {
      const emitter = new EventEmitter<DateRange>();
      const range: DateRange = {
        startDate: createDate(2025, 4, 10),
        endDate: createDate(2025, 4, 15)
      };
      
      // Add spy to monitor emissions
      const emitSpy = jest.spyOn(emitter, 'emit');
      
      service.emitDateRangeSelected(emitter, range);
      
      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(range);
    });

    it('should not emit if range is incomplete', () => {
      const emitter = new EventEmitter<DateRange>();
      const incompleteRange: DateRange = {
        startDate: createDate(2025, 4, 10),
        endDate: null
      };
      
      // Add spy to monitor emissions
      const emitSpy = jest.spyOn(emitter, 'emit');
      
      service.emitDateRangeSelected(emitter, incompleteRange);
      
      expect(emitSpy).not.toHaveBeenCalled();
    });
  });

  describe('emitMonthChanged', () => {
    it('should emit month changed event', () => {
      const emitter = new EventEmitter<number>();
      const month = 4; // May
      
      // Add spy to monitor emissions
      const emitSpy = jest.spyOn(emitter, 'emit');
      
      service.emitMonthChanged(emitter, month);
      
      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(month);
    });
  });

  describe('emitYearChanged', () => {
    it('should emit year changed event', () => {
      const emitter = new EventEmitter<number>();
      const year = 2025;
      
      // Add spy to monitor emissions
      const emitSpy = jest.spyOn(emitter, 'emit');
      
      service.emitYearChanged(emitter, year);
      
      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(year);
    });
  });

  describe('emitViewChanged', () => {
    it('should emit view changed event', () => {
      const emitter = new EventEmitter<{month: number, year: number}>();
      const view = { month: 4, year: 2025 };
      
      // Add spy to monitor emissions
      const emitSpy = jest.spyOn(emitter, 'emit');
      
      service.emitViewChanged(emitter, view);
      
      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(view);
    });
  });

  describe('emitYearRangeChanged', () => {
    it('should emit year range changed event', () => {
      const emitter = new EventEmitter<YearRange>();
      const yearRange: YearRange = { 
        startYear: 2020, 
        endYear: 2030 
      };
      
      // Add spy to monitor emissions
      const emitSpy = jest.spyOn(emitter, 'emit');
      
      service.emitYearRangeChanged(emitter, yearRange);
      
      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith(yearRange);
    });
  });
});
