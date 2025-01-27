pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    triggers {
        githubPush()
    }   
    
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'  // or your build command
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm test'     // or your test command
            }
        }
    }
}