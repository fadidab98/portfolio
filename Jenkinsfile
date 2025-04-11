pipeline {
    agent none
    environment {
        IMAGE_NAMESPACE = "fadidab98"
        IMAGE_NAME = "portfolio"
        IMAGE_TAG = "latest"
        GITHUB_CRED = credentials('jenkins')
        CR_PAT = credentials('CR_PAT')
        REGISTRY = "ghcr.io"
        FULL_IMAGE = "${REGISTRY}/${IMAGE_NAMESPACE}/${IMAGE_NAME}"
    }

    stages {
        stage('Checkout') {
            agent any
            steps {
                checkoutGit()
            }
        }

        stage('Build and Push Image') {
            agent {
                docker {
                    image 'docker:28.0.4'
                    args '-v /var/run/docker.sock:/var/run/docker.sock --group-add 988'
                }
            }
            steps {
                buildAndPushImage()
            }
        }

        stage('Cleanup') {
            agent {
                docker {
                    image 'docker:28.0.4'
                    args '-v /var/run/docker.sock:/var/run/docker.sock --group-add 988'
                }
            }
            steps {
                cleanupImages()
            }
        }
    }

    post {
        always {
            echo "Pipeline completed"
        }
    }
}

def checkoutGit() {
    timeout(time: 5, unit: 'MINUTES') {
        git branch: 'master',
            credentialsId: 'jenkins',
            url: 'https://github.com/fadidab98/portfolio.git'
    }
}

def buildAndPushImage() {
    timeout(time: 10, unit: 'MINUTES') {
        script {
            echo "Building and pushing image..."
            def image = docker.build("${env.FULL_IMAGE}:${env.IMAGE_TAG}")
            docker.withRegistry("https://${env.REGISTRY}", 'CR_PAT') {
                image.push("${env.IMAGE_TAG}")
                image.push('latest')
            }
        }
    }
}

def cleanupImages() {
    sh """
        docker rmi ${env.FULL_IMAGE}:${env.IMAGE_TAG} || true
        docker rmi ${env.FULL_IMAGE}:latest || true
        docker rmi ${env.IMAGE_NAME}:${env.IMAGE_TAG} || true
    """
}