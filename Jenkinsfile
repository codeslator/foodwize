pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
            }
        }
        stage("Deploy") {
            steps {
                sh "pm2 restart cms-saas"
            }
        }
    }
}
