Ext.define('TutorialApp.Application', {
	extend: 'Ext.app.Application',
	name: 'TutorialApp',
	// requires: ['TutorialApp.*'],
	// defaultToken: 'homeview',
	stores: [

	],
	views: [
		'TutorialApp.view.login.Login',
        'TutorialApp.view.main.Main'
	],
	launch: function () {
		var loggedIn;
		loggedIn = localStorage.getItem("TutorialLoggedIn");
		Ext.widget(loggedIn ? 'app-main' : 'login');
	}

	// removeSplash: function () {
	// 	Ext.getBody().removeCls('launching')
	// 	var elem = document.getElementById("splash")
	// 	elem.parentNode.removeChild(elem)
	// },

	// launch: function () {
	// 	this.removeSplash()
	// 	var whichView = 'mainview'
	// 	Ext.Viewport.add([{xtype: whichView}])
	// },

	// onAppUpdate: function () {
	// 	Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
	// 		function (choice) {
	// 			if (choice === 'yes') {
	// 				window.location.reload();
	// 			}
	// 		}
	// 	);
	// }
});
