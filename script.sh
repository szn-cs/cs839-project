#!/bin/bash

build() {
  npm run dev
  npm run build
}

deploy() {
  firebase login
  firebase deploy
}
