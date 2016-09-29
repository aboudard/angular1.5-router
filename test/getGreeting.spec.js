describe("getGreeting", function() {
  var greeter;
  beforeEach(module('pmApp.greeter'));
  beforeEach(inject(function(_greeter_) {
    greeter = _greeter_;
  }));

  it("says Hello to me", function() {
    expect(greeter.getGreeting("Dave")).toEqual("Hello Dave");
  });
});