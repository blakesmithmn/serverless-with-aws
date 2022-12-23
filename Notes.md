Using API Gateway to run Lambdas


# Deploying using Serverless:

sls -help

- sls deploy (deploys the service - and all functions) [not great]
- sls deploy function (deploys a single function)


# SERVERLESS WEBPACK
    - used to node modules are not duplicated


# SERVERLESS ROUTING:
    - you can have multiple functions within a handler (internal routing)
    - one function sending every request over to a source code w/ express
    -- look into lambda function for authorization
    