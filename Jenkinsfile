pipeline {
    agent any

    tools {nodejs "Node"}

    stages {
        stage('Cypress Parallel Test Suite'){
            parallel {
                stage('Slave 1'){
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/clonkei/Paralelizaci-n_PIPLINE.git'
                        bat 'npm install'
                        bat 'npm install -D cypress-xpath'
                        bat 'npm install -D cypress-plugin-tab'
                        bat 'npm install --save-dev cypress-file-upload'
                        bat 'npm install -D cypress-iframe'
                        bat 'npm install --save-dev @4tw/cypress-drag-drop'
                        bat 'npm install --save-dev chai'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 25dae852-ea4f-4c16-9931-8c5fc047e594 --parallel'
                    }
                }

                stage('Slave 2'){
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/clonkei/Paralelizaci-n_PIPLINE.git'
                        bat 'npm install'
                        bat 'npm install -D cypress-xpath'
                        bat 'npm install -D cypress-plugin-tab'
                        bat 'npm install --save-dev cypress-file-upload'
                        bat 'npm install -D cypress-iframe'
                        bat 'npm install --save-dev @4tw/cypress-drag-drop'
                        bat 'npm install --save-dev chai'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 25dae852-ea4f-4c16-9931-8c5fc047e594 --parallel'
                    }
                }
            }
        }
    }
}