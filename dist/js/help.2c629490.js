webpackJsonp([4],{51:function(e,t,r){var n=r(22);n.registerController("HelpCtrl",["$scope","$http","$q",function(e,t,r){angular.extend(e,{title:"help center",desc:"帮助中心"});var n=r.defer();return t.get("/dist/mock/news.json").success(function(t){n.resolve(t),e.data=t,console.log(e.data)}).error(function(e){n.reject(e)}),n.promise}])}});