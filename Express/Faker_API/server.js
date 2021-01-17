const express = require("express");
const { company } = require("faker");
const faker = require("faker");
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

class User {
  constructor(firstName, lastName, phoneNumber, email, password) {
    this._id = "U" + Date.now();
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Company {
  constructor(name, address) {
    this._id = "C" + Date.now();
    this.name = name;
    this.address = {
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      country: address.country,
    };
  }
}

const users = [];
const companies = [];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/new", (req, res) => {
  let user = new User(
    faker.name.firstName(),
    faker.name.lastName(),
    faker.phone.phoneNumber(),
    faker.internet.email(),
    faker.internet.password()
  );
  users.push(user);
  res.json(user);
});

app.get("/api/companies/new", (req, res) => {
  let company = new Company(faker.company.companyName(), {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipCode: faker.address.zipCode(),
    country: faker.address.countryCode(),
  });
  companies.push(company);
  res.json(company);
});

app.get("/api/companies", (req, res) => {
  res.json(companies);
});

app.get("/api/user/company", (req, res) => {
  let user = new User(
    faker.name.firstName(),
    faker.name.lastName(),
    faker.phone.phoneNumber(),
    faker.internet.email(),
    faker.internet.password()
  );
  users.push(user);
  let company = new Company(faker.company.companyName(), {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipCode: faker.address.zipCode(),
    country: faker.address.countryCode(),
  });
  companies.push(company);
  res.json({ user: user, company: company });
});
