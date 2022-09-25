const axios = require('axios');

module.exports = async () => {
  const { data } = await axios.get('https://hub.docker.com/v2/repositories/strapi/strapi/');
  console.log(data);
  await strapi.query('hit').create({
    date: new Date(),
    count: data.pull_count,
  });
};




// const axios = require('axios');

// module.exports = async () => {
//   const config = {
//     headers: {
//       'auth-token': 'stosDaQFD60Lkee4BpoAsJkYLM2jKg9kW9vteKmog9XXkhTLUfTlyFnuHcTgOw5E'
//     }
//   };

//   console.log(config);

//   // const { data } = await axios.get('https://metastats-api-v1.vint-hill.agiliumtrade.ai/users/current/accounts/02c9fac7-faae-40ff-8dff-14ea4c9181fe/metrics', config);

//   // console.log(data);

//   // await strapi.query('hit').create({
//   //   date: new Date(),
//   //   count: data.pull_count,
//   //   info: data
//   // });
// };