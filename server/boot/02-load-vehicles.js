'use strict';

module.exports = function(app) {
  console.log('Creating Vehicles');

  var Vehicle = app.models.Vehicle;

  Vehicle.create({
    name: 'f24f24',
    type: 'f24f24',
    groupId: 'f24f24',
		status: 'f24f24'
  }, function(err, category) {
    if (err) {
      console.log('err', err);
    }
  });
	  Vehicle.create({
    name: 'ef24f2',
    type: 'f24f24',
    groupId: 'f24f24',
		status: 'f24f24'
  }, function(err, category) {
    if (err) {
      console.log('err', err);
    }
  });
	  Vehicle.create({
    name: 'ap44f',
    type: 'f24f24',
    groupId: 'f24f24',
		status: 'f24f24'
  }, function(err, category) {
    if (err) {
      console.log('err', err);
    }
  });
  Vehicle.create({
    name: 'apf344f',
    type: 'f24f24',
    groupId: 'f24f24',
		status: 'f24f24'
  }, function(err, category) {
    if (err) {
      console.log('err', err);
    }
  });	
	
	  Vehicle.create({
    name: 'aerr44f',
    type: 'f24f24',
    groupId: 'f24f24',
		status: 'f24f24'
  }, function(err, category) {
    if (err) {
      console.log('err', err);
    }
  });	
	
	  Vehicle.create({
    name: 'apfdx44f',
    type: 'f24f24',
    groupId: 'f24f24',
		status: 'f24f24'
  }, function(err, category) {
    if (err) {
      console.log('err', err);
    }
  });	

};
