pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
    }
    
    stages {
        stage('Install Packages') {
            steps {
                echo 'installing packages..'
                sh 'npm install' // or your build command
            }
        }
        stage('Do Build') {
            steps {
                echo 'Building..'
                sh 'npm run build' // build
            }
        }
    }
    
   post {
        success {
            // Simple status update using 'setGitHubPullRequestStatus'
            step([
                $class: 'GitHubPRStatusBuilder',
                statusMessage: [content: 'Build succeeded']
            ])
        }
        failure {
            step([
                $class: 'GitHubPRStatusBuilder',
                statusMessage: [content: 'Build failed']
            ])
        }
    }
}