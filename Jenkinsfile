pipeline {
    agent none
    environment {
        IMAGE_NAMESPACE = "fadidab98"
        IMAGE_NAME = "portfolio"
        GITHUB_CRED = credentials('jenkins')
        CR_PAT = credentials('CR_PAT')
        IMAGE_TAG = "latest"
        SERVER_USER = "jenkins_user"
        SERVER_HOST = "217.154.21.206"
        REMOTE_DIR = "/projects/portfolio"
    }
    stages {
        stage('Checkout') {
            agent any
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    git branch: 'master', credentialsId: 'jenkins', url: 'https://github.com/fadidab98/portfolio.git'
                }
            }
        }

        stage('Debug Workspace') {
            agent any
            steps {
                sh 'ls -la'
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
            agent any
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    sshagent(credentials: ['jenkins-key']) {
                        withCredentials([usernamePassword(credentialsId: 'CR_PAT', usernameVariable: 'CR_USER', passwordVariable: 'CR_PASS')]) {
                            script {
                                sh 'ls -la nginx.conf docker-compose.yaml || echo "Files missing"'
                                sh """
                                    scp -o StrictHostKeyChecking=no nginx.conf docker-compose.yaml \
                                    ${env.SERVER_USER}@${env.SERVER_HOST}:${env.REMOTE_DIR}/
                                """
                                sh """
                                    ssh -o StrictHostKeyChecking=no ${env.SERVER_USER}@${env.SERVER_HOST} \
                                    "groups; \
                                    sudo systemctl status nginx; \
                                    ls -l /var/run/docker.sock; \
                                    mkdir -p ${env.REMOTE_DIR} && \
                                    cd ${env.REMOTE_DIR} && \
                                    ls -l nginx.conf docker-compose.yaml; \
                                    echo '${CR_PASS}' | docker login ghcr.io -u '${CR_USER}' --password-stdin && \
                                    docker image rm ghcr.io/${env.IMAGE_NAMESPACE}/${env.IMAGE_NAME}:${env.IMAGE_TAG} && \
                                    
                                    docker-compose -f docker-compose.yaml down  && \
                                    docker-compose -f docker-compose.yaml up -d && \
                                    sleep 5 && \
                                    docker-compose logs nginx-config-fadilogic; \
                                    ls -l /etc/nginx/sites-available/ || echo 'sites-available empty'; \
                                    ls -l /etc/nginx/sites-enabled/ || echo 'sites-enabled empty'; \
                                    readlink /etc/nginx/sites-enabled/fadidabboura.com || echo 'symlink missing'; \
                                    sudo nginx -t && \
                                    sudo systemctl restart nginx && \
                                    echo 'Deployment completed' || \
                                    { echo 'Nginx test failed, attempting direct copy'; \
                                    sudo cp nginx.conf /etc/nginx/sites-available/fadidabboura.com && \
                                    sudo ln -sf /etc/nginx/sites-available/fadidabboura.com /etc/nginx/sites-enabled/fadidabboura.com && \
                                    sudo nginx -t && \
                                    sudo systemctl restart nginx && \
                                    echo 'Direct copy succeeded'; }"
                                """
                            }
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