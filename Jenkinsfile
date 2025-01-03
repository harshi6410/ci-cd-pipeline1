pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ci-cd-app'
        REGISTRY_URL = 'harshi6410/ci-cd-app' // Replace with your Docker Hub username
        K8S_CLUSTER = 'my-k8s-cluster'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/harshi6410/ci-cd-pipeline1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure dependencies are installed for testing
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests defined in the project
                    bat 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    bat 'docker build -t %REGISTRY_URL% .'
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub and push the image
                    withCredentials([string(credentialsId: 'docker-hub-token', variable: 'DOCKER_TOKEN')]) {
                        bat '''
                        echo %DOCKER_TOKEN% | docker login -u your-dockerhub-username --password-stdin
                        docker push %REGISTRY_URL%
                        '''
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Deploy using kubectl
                    bat '''
                    kubectl config use-context %K8S_CLUSTER%
                    kubectl apply -f k8s/deployment.yaml
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for more details.'
        }
    }
}
