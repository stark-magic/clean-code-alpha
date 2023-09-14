FROM node:12.18.4 as base
 
WORKDIR /code
 
COPY package.json package.json
COPY package-lock.json package-lock.json

############################################
#
#   D E V E L O P M E N T
#
FROM base as dev
 
RUN npm install
COPY . .
 
CMD [ "npm", "run", "start" ]

############################################
# 
#   T E S T
#
FROM base as test
 
CMD [ "npm", "run", "test" ]

############################################
#
#   P R O D U C T I O N 
#
FROM base as prod

RUN npm ci --production
COPY . .
 
CMD [ "node", "server.js" ]