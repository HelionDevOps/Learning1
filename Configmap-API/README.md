Simple JS API.

This is a project to use kubernetes Deployment and Configmap manifests.This is done with a simple API, dockerised in a Docker Image and using this Image with kubernetes manifests for learning purpose.

Steps to use this simple app:
1. Install Docker Engine and Minikube.
2. Run Docker Enginer and Minikube.
3. Install Node.js on your local machine.
4. Port forward this with the line: kubectl port-forward deployment/config-dep 8080:3000
5. Access it localy with browser in: http://localhost:8080
