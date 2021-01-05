# base image
FROM node:12.18.2 as build

ENV CURRENT=/usr/src/app
# set working directory
RUN mkdir -p ${CURRENT}

# replace config template
COPY . ${CURRENT}
ARG LANDING_PAGE_DOMAIN
ARG MYSQL_PORT
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_DB
ARG MAILGUN_DOMAIN
ARG MAILGUN_PASSWORD

WORKDIR ${CURRENT}

ENV CONFIG_PATH=core/shared/config/env/
RUN rm ${CONFIG_PATH}/config.production.json
RUN cp ${CONFIG_PATH}/config.production.template.json ${CONFIG_PATH}/config.production.json
RUN sed -i -e "s;LANDING_PAGE_DOMAIN;$LANDING_PAGE_DOMAIN;g" ${CONFIG_PATH}/config.production.json
RUN sed -i -e "s;\"MYSQL_PORT\";$MYSQL_PORT;g" ${CONFIG_PATH}/config.production.json
RUN sed -i -e "s;MYSQL_USER;$MYSQL_USER;g" ${CONFIG_PATH}/config.production.json
RUN sed -i -e "s;MYSQL_PASSWORD;$MYSQL_PASSWORD;g" ${CONFIG_PATH}/config.production.json
RUN sed -i -e "s;MYSQL_DB;$MYSQL_DB;g" ${CONFIG_PATH}/config.production.json
RUN sed -i -e "s;MAILGUN_DOMAIN;$MAILGUN_DOMAIN;g" ${CONFIG_PATH}/config.production.json
RUN sed -i -e "s;MAILGUN_PASSWORD;$MAILGUN_PASSWORD;g" ${CONFIG_PATH}/config.production.json

# install dependencies
RUN yarn global add grunt-cli@1.3.2 knex-migrator@3.4.6 ember-cli@3.19.0

WORKDIR ${CURRENT}/core/client
RUN yarn
WORKDIR ${CURRENT}

RUN yarn setup
RUN grunt prod
RUN rm -rf node_modules
RUN yarn install --production
# adjust canary helper specs to overcome custom helpers validation
RUN sed -i -e "s;let knownHelpers = \['cancel_link', 'price'\];let knownHelpers = \['cancel_link', 'price', 'or', 'append', 'isMatch', 'split'\];g" ${CURRENT}/node_modules/gscan/lib/specs/canary.js

RUN rm -rf core/client test config.development.json

FROM node:12.18.2-alpine3.12
ENV CURRENT=/usr/src/app
RUN mkdir -p ${CURRENT}
WORKDIR ${CURRENT}
COPY --from=build ${CURRENT} ${CURRENT}
EXPOSE 2368
CMD ["node", "/usr/src/app/index.js"]
