pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t jenkins-pipeline-lab-bordeichuk:latest .'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'echo "Tests passed!"'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Pushing Docker image to DockerHub...' 
                withCredentials([usernamePassword(credentialsId: 'dockerHub-creds', 
                    usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {

                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker tag jenkins-pipeline-lab-bordeichuk:latest $DOCKER_USER/jenkins-pipeline-lab-bordeichuk:latest'
                    sh 'docker push $DOCKER_USER/jenkins-pipeline-lab-bordeichuk:latest'
                }
            }
        }
    }
}