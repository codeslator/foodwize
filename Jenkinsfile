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
                sh "sudo forever run start"
            }
        }
    }
}
