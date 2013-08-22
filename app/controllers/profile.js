var _args = arguments[0] || {};

$.profilePicture.image = _args.image || '/images/profile-pic.jpg';

$.facebookBtn.icon.addEventListener('click', updateFollowStatus);
$.twitterBtn.icon.addEventListener('click', updateFollowStatus);
$.linkedinBtn.icon.addEventListener('click', updateFollowStatus);

$.shareContactBtn.icon.addEventListener('click', shareContact);
$.addContactBtn.icon.addEventListener('click', addContact);

function addContact(e) {
	Ti.API.info('Saving contact...');
	var workAddress1 = {
		'CountryCode' : 'us',
		'Street' : '440 N. Bernardo Avenue',
		'City' : 'Mountain View',
		'State' : 'California',
		'Country' : 'United States',
		'ZIP' : '94043'
	};

	Ti.Contacts.createPerson({
		firstName : 'Kelly',
		lastName : 'Smith',
		organization: 'Appcelerator, Inc.',
		image: $.profilePicture.toBlob(),
		email: {
			work:['kelly.smith@appcelerator.com']
		}, 
		phone: {
			mobile:['512-555-1212']
		},
		address : {
			work : [workAddress1]
		},
		instantMessage:{
			home:[
				{
					service: 'Skype',
					username: 'kelly.smith'
				},
			]
		}
	});
	alert('Contact saved');
};

function shareContact() {

};

function updateFollowStatus() {
	alert('Launch 3rd Party link');
};

