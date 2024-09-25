FROM node

WORKDIR /app

COPY . /app

ARG NODE_ENV
RUN if [ "${NODE_ENV}" = "development" ]; \
then npm i; \
else npm install --only=production; \
fi



# EXPOSE 3000
ENV PORT=3000
EXPOSE ${PORT}

CMD [ "node", "server.js" ]