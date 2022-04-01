module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c41c9570206dd6a260274f0986aec71'),
  },
});
