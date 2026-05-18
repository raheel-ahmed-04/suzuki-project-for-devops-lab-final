pipeline {
    agent any

    environment {
        IMAGE_NAME = "raheelgenius747/suzuki-app:latest"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'devops-lab-update',
                url: 'https://github.com/raheel-ahmed-04/suzuki-project-for-devops-lab-final.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl rollout restart deployment suzuki-app'
            }
        }

    }

    post {
        always {
            sh 'docker logout || true'
        }
    }
}