#!/bin/bash

docker pull $APP_IMAGE_NAME:latest

docker build --target app-prod --cache-from=$APP_IMAGE_NAME:latest -t $APP_IMAGE_NAME:$TRAVIS_TAG .

docker tag $APP_IMAGE_NAME:$TRAVIS_TAG $APP_IMAGE_NAME:latest

docker push $APP_IMAGE_NAME:$TRAVIS_TAG
docker push $APP_IMAGE_NAME:latest
