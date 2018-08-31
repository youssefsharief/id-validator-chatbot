## Dialogflow Pre Usage
* In the welcome intent, ask for the national ID
* Enable small talk
* Add an intent that captures anything realted to the id called Get national ID
    * This intent has 
        * 2 follow up intents
            * Yes
            * No


## AWS Lambda
* Create a lambda function that has a role of **LambdaFullAccess**. Create one from template if it does not already exist
* Create lambda command: `aws lambda create-function --region us-east-1 --function-name national-id-validator-dialogflow --profile default --runtime nodejs6.10 --role arn:aws:iam::791347282543:role/LambdaFullAccess --handler index.handler --zip-file fileb://national-id-validator.zip`
* To invoke function:`aws lambda invoke --invocation-type Event --function-name national-id-validator-dialogflow --region us-east-1 --payload file://test_event.json --profile default outputFile.txt`
* To update function code: `aws lambda update-function-code --zip-file fileb://national-id-validator.zip --function-name national-id-validator-dialogflow`
* Go to to console and then create a API Gateway trigger https://console.aws.amazon.com/lambda/home
	* Uncheck Lambda Proxy option
	* After saving, the api endpoint should appear
	* Add this url to the fullfillment in dialogflow

