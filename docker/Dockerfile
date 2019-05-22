FROM node:8.16-alpine

# Install git and parcel
RUN apk update && apk --no-cache add git curl && \
    npm install -g parcel-bundler

# Bundle APP files
RUN mkdir -p /app
WORKDIR /app
COPY src src/
COPY index.html package*.json ./

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm ci

# Build the application
ENV NODE_ENV production
ENV PARCEL_WORKERS 1
RUN parcel build index.html

# Expose the listening port of your app
EXPOSE 80

COPY docker/start.sh /
CMD ["/start.sh"]
