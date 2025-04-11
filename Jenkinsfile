pipeline {
    agent none // No global agent; specify per stage
    environment {
        IMAGE_NAMESPACE = "fadidab98"
        IMAGE_NAME = "portfolio"
        GITHUB_CRED = credentials('jenkins')
        CR_PAT = credentials('CR_PAT')
        IMAGE_TAG = "latest"
        SERVER_USER = "jenkins_user"
        SERVER_HOST = "217.154.21.206"
        REMOTE_DIR = "/projects/portfolio" // Adjust to your desired server path
    }
    stages {
        stage('Checkout') {
            agent any // Use built-in node
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    git branch: 'master', credentialsId: 'jenkins', url: 'https://github.com/fadidab98/portfolio.git'
                }
            }
        }

        stage('Build, Run, Tag, and Push Image') {
            agent {
                docker {
                    image 'docker:28.0.4'
                    args '-v /var/run/docker.sock:/var/run/docker.sock --group-add 988 --env HOME=/tmp'
                }
            }
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    script {
                        echo "####### Packaging stage #######"
                        def image = docker.build("${env.IMAGE_NAMESPACE}/${env.IMAGE_NAME}:${env.IMAGE_TAG}")
                        docker.withRegistry('https://ghcr.io', 'CR_PAT') {
                            image.push("${env.IMAGE_TAG}")
                            image.push('latest')
                        }
                    }
                }
            }
        }

        stage('Cleanup') {
            agent {
                docker {
                    image 'docker:28.0.4'
                    args '-v /var/run/docker.sock:/var/run/docker.sock --group-add 988 --env HOME=/tmp'
                }
            }
            steps {
                sh "docker rmi ${env.IMAGE_NAME}:${env.IMAGE_TAG} || true"
                sh "docker rmi ghcr.io/${env.IMAGE_NAMESPACE}/${env.IMAGE_NAME}:${env.IMAGE_TAG} || true"
                sh "docker rmi ghcr.io/${env.IMAGE_NAMESPACE}/${env.IMAGE_NAME}:latest || true"
            }
        }

        stage('Deploy to Server') {
            agent any // Use built-in node for SSH
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    sshagent(credentials: ['jenkins-key']) {
                        script {
                            // Transfer nginx and docker-compose.yml to server
                            sh """
                                scp -o StrictHostKeyChecking=no nginx.conf docker-compose.yml \
                                ${env.SERVER_USER}@${env.SERVER_HOST}:${env.REMOTE_DIR}/
                            """
                            // SSH to server, create dir if needed, and run docker-compose
                            sh """
                                ssh -o StrictHostKeyChecking=no ${env.SERVER_USER}@${env.SERVER_HOST} \
                                "cd ${env.REMOTE_DIR} && \
                                 docker-compose down && \
                                 docker-compose up -d && \
                                 echo 'Deployment completed'"
                            """
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            echo "Pipeline completed"
        }
    }
}