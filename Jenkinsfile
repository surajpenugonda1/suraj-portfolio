pipeline {
    agent any
    
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
        stage('Report') {
            steps {
                githubNotify(
                    credentialsId: 'github-token-porfolio',
                    status: currentBuild.result,
                    context: 'Jenkins/Test',
                    description: 'Tests completed'
                )
            }
        }
    }
}