pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t cclab6-app ./backend'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 cclab6-app'
            }
        }
    }
}
