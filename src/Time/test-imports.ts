// Test file to verify service imports work
import { TimeViewStateService } from "./services/time-view-state.service";
import { TimeEventManagerService } from "./services/time-event-manager.service";
import { TimeNavigationService } from "./services/time-navigation.service";
import { TimeConstraintsService } from "./services/time-constraints.service";
import { TimeGeneratorService } from "./services/time-generator.service";
import { TimeConfigurationService } from "./services/time-configuration.service";

console.log("All imports work!");

// Test instantiation
const viewStateService = new TimeViewStateService();
const eventService = new TimeEventManagerService();
const navService = new TimeNavigationService();
const constraintsService = new TimeConstraintsService();
const generatorService = new TimeGeneratorService();
const configService = new TimeConfigurationService();

console.log("All services instantiated successfully!");
