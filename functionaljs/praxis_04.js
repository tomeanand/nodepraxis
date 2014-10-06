function getShortMessages(messages) {
     var filtered = messages.filter(getLengthier).map(function(item)	{
     	return item.message;
     });
     return filtered;
    }
function getLengthier(str)	{
	return str.message.length < 50;
}    

module.exports = getShortMessages;