
var Dispatcher = require('../dispatcher/Dispatcher');

function createShoppingListItem(item){
	var action = {
		type: 'create_shopping_list_item', 
		item: item  //data
	};

	Dispatcher.dispatch(action);
}

module.exports = {
	createShoppingListItem: createShoppingListItem
	};