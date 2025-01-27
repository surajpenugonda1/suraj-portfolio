pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    triggers {
        githubPush()
    }   
    
    stages {
        stage('Install') {
            steps {
                echo 'Building..'
                sh 'npm install'  // or your build command
            }
        }
        stage('Build') {
            steps {
                echo 'Testing..'
                sh 'npm run build'     // or your test command
            }
        }
    }
}