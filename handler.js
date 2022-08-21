"use strict";
const { faker } = require("@faker-js/faker");

faker.setLocale("zh_CN");

module.exports.fakeApi = async (event) => {
  const randomName = faker.name.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        randomName,
        randomEmail,
      },
      null,
      2
    ),
  };
};
