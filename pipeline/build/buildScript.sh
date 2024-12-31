#!/bin/bash
# Build script for the application
echo "Building the application..."
docker build -t ci-cd-app .
