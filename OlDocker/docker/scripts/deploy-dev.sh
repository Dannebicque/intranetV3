#!/bin/bash

SHA_APP_IMAGE_DEV_TAG=`docker images -q ${APP_IMAGE_NAME}:$DEV_TAG`
SHA_APP_IMAGE_CI=`docker images -q ${APP_IMAGE_NAME}:ci`

if [[ "$SHA_APP_IMAGE_DEV_TAG" != "$SHA_APP_IMAGE_CI" ]]; then
    docker tag ${APP_IMAGE_NAME}:ci $APP_IMAGE_NAME:$DEV_TAG
    docker tag ${APP_IMAGE_NAME}:ci $APP_IMAGE_NAME:dev-latest

    docker push $APP_IMAGE_NAME:$DEV_TAG
    docker push $APP_IMAGE_NAME:dev-latest
fi
