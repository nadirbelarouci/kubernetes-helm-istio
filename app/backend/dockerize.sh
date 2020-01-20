#!/bin/bash
docker build  -f Dockerfile -t backend .
docker tag backend nadirbelarouci/backend:2.1
docker push nadirbelarouci/backend:2.1
