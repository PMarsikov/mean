describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("contains spec with an expectation", function() {
    expect(false).toBe(true);
  });
});

/*'use strict';

describe('eeee', function() {
  beforeEach(module('todoapp'));

  var $controller, ctrl;

  /beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
/

  beforeEach(inject(function($componentController) {
      //ctrl = $componentController('todoPageCtrl');
      ctrl = $componentController('todoPageCtrl');
    }));



  describe('$scope.grade', function() {
    it('9999999999', function($componentController) {
      //var $scope = {};      
      var controller = $controller('todoPageCtrl', { $scope: $scope });
      //$scope.password = 'longerthaneightchars';
      //$scope.grade();
      //expect($scope.strength).toEqual('strong');
      //expect(ctrl.$scope.a2a).toEqual([3]);
      expect($scope.aa).toEqual("ssss");
      //expect(ctrl.phone).toEqual(xyzPhoneData);
    });
  });
});*/



////
/*
describe('Module---', function() {
  beforeEach(module('todoapp'));
                
  describe('test controller', function(){
  var scope, ctrl;
  beforeEach(inject(function($rootScope, $componentController){
    //scope = $rootScope.$new();
    ctrl = $componentController('todoPageCtrl', { $scope: scope });
      expect(ctrl).toBeDefined();
  }));
  it('Should return array', function() {
    //expect(scope.aa).toEqual([]);
    expect([]).toEqual([]);
  });
  it('Should return array', function() {
    expect(scope.isEditable).toEqual([]);
  });
  it('Should return length of array', function() {
    expect(scope.sev.length).toBe(4);
  });  
  });

});
*/