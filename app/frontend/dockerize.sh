#!/bin/bash
ng build --prod
docker build  -f Dockerfile -t frontend .
docker tag frontend nadirbelarouci/frontend:2.1
docker push nadirbelarouci/frontend:2.1
