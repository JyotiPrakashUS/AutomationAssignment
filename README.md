Important Notes:
# AutomationAssignment

Prerequisite: Following should be installed to execute it:
1. Java (JDK 1.8) installed on your system in order to run Maven.
2. 'JAVA_HOME', 'M2_HOME' Environment Variables set on your system.
3. 'Java bin' and 'Maven bin' folders specified in you PATH Environment Variables.
4. Git Bash should be installed

if you need to run it on eclipse IDE then below applications/plugins are also needed.
a. Eclipse
b. maven-eclipse-plugin
c. Cucumber-eclipse-plugin

Step to Execute this Assignment:
1. Select folder on your system in order to clone Git repository.
2. Open Git Bash from your current folder location
3. Type below command to clone Git Reository from Git bash.
Command: "git clone https://github.com/JyotiPrakashUS/AutomationAssignment.git"
4. Once Git Repository is cloned successfully, Then navigates to AutomationAssignment root directory.
5. Once you are on root directory then use below maven command to execute it:
command: "mvn clean test"
6. Above command will execute all the Test cases present in cucumber feature file and take screenshot & store it in Screenshot folder.
