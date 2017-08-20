function AppCtrl($scope) {
	console.log("Hey from controller");


p1 = {
	name: 'Abc',
	email: 'xyz',
	number: '111111111'
};

p2 = {
	name: 'def',
	email: 'xyz',
	number: '111111111'
};
p3 = {
	name: 'ghi',
	email: 'xyz',
	number: '111111111'
};

var contactList = [p1,p2,p3];
$scope.contactList=contactList;

};