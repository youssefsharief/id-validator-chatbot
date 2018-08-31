const {nationalIdPattern} = require('./config')

exports.handler =  (event, context, callback) => {
  const parameters = event.result.parameters
  const nationalId = parameters.nationalId

  if (!nationalId.match(nationalIdPattern)) {
    callback(null, buildChatResponse('This is not a correct national id number. Please try again by entering the national ID'))
  } else {
    callback(null, buildChatResponse(`Could you confirm that ${nationalId} is your national ID? Yes or No?`))
  }
}

function buildChatResponse(chat){
  return {
    speech: chat, displayText: chat
  }
}
