import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.hacker.noun(); },
  publisher() { return faker.company.companyName(0) },
  isbn() { return faker.random.number({min:9000, max:10000}) },
  author() { return faker.name.firstName() },
  category() { return faker.hacker.adjective() }
});