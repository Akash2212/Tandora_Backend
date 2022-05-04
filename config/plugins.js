module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendmail',
        settings: {
          defaultFrom: 'akashrobo2@gmail.com',
          defaultReplyTo: 'ahtech2212@gmail.com',
        },
      },
    },
    // ...
  });