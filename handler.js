"use strict";

module.exports.fake = async (event) => {
  const path = event.pathParameters.proxy;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        path,
      },
      null,
      2
    ),
  };
};
