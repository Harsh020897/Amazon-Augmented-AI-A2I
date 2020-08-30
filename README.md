# Amazon-Augmented-AI-A2I

This project contains the angular project which can be used to generate a worker flow template for Amazon A2I

## Steps to generate template
### 1) Clone this repository
Open a terminal and run this command

```git clone https://github.com/Harsh020897/Amazon-Augmented-AI-A2I.git ```

### 2) Installing dependencies
- Navigate inside the folder Amazon-Augmented-AI-A2I
- Open a terminal and run this command

``` npm i ```
      
### 3) Making local changes (If required)
You can make any changes to the code and test locally by running this command
``` ng serve ```
      
### 4) Generating template
Once you are done with the changes, run the following command to build your project.
``` ng build ```
- A dist folder will be generated. 
- Upload this folder to a s3 bucket and copy it's publically accessible url
- Go to index.html inside the dist folder.
- Replace all the script tags by adding the path to your s3 bucket before it.

### This updated index.html is the template that you can use as a worker task template
    
