

//callback({result:3060});

(new AjaxControlQuery(CoreAjaxUrlRoot, "user_function", {
		'widget': "mobileStats"
	})).addEvent('success',function(response){
	    callback({result:3060+response.android});
	}).cache({expire:3600}).execute(); 