import configs from "./../configs";
const awsConfigs = {
  Auth: {
    region: configs.AWS_REGION,
    userPoolId: configs.AWS_USER_POOL_ID,
    userPoolWebClientId: configs.AWS_USER_POOL_WEB_CLIENT,
  },
};

export default awsConfigs;
