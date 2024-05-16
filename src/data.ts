// Import faker.js library
import { faker } from "@faker-js/faker";

// Define the Activity type
type Activity = {
  id: number;
  title: string;
  organisation: string;
  date: Date;
  description: string;
  location: string;
  places: number;
};

// Generate fake activities
const generateActivities = (count: number): Activity[] => {
  const activities: Activity[] = [];
  for (let i = 1; i <= count; i++) {
    const activity: Activity = {
      id: i,
      title: faker.lorem.words(3),
      organisation: faker.company.name(),
      date: faker.date.future(),
      description: faker.lorem.paragraph(),
      location: "Borås",
      places: faker.datatype.number({ min: 10, max: 100 }),
    };
    activities.push(activity);
  }
  return activities;
};

// Generate 10 fake activities in Borås
export const fakeActivities = generateActivities(40);
