FROM node:19.4.0-alpine

# Expose used ports
EXPOSE 8080

# Setting the work direcory for our app.
WORKDIR /app

# Copy the source code
# Note: some files are ignored in the .dockerignore of the app.
COPY ./apps/sentry-tunnel /app/

# Install dependencies
RUN npm ci --omit=dev

# Run the app
ENTRYPOINT [ "node", "main.js" ]
