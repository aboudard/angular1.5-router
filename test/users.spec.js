describe('users', function() {
  // Step 1: Import the module this service belongs to
  beforeEach(module('pmApp.users'));
  // Step 2: Inject the service you're testing (and other utils)
  var userApi, $httpBackend;
  beforeEach(inject(function(_users_, _$httpBackend_) {
    userApi = _users_;
    $httpBackend = _$httpBackend_;
  }));

  // Step 3: Test the methods
  it('should get users', function() {
    // a) "Given": Set up preconditions
    $httpBackend.expect('GET', '/users/42').respond(200);
    
    // b) "When": call the method under test
    userApi.getUser("4");

    // c) "Then": verify expectations
    expect($httpBackend.flush).not.toThrow();
  });

  it('should return full name', function() {
    // a) "Given" this user...
    var user = {firstName: "Dave", lastName: "Ceddia"};

    // b) "When" we call getFullName, 
    // c) "Then" it should return the user's name
    expect(userApi.getFullName(user)).toEqual("Dave Ceddia");
  });
});