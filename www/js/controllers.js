var requestToken = "";
var accessToken = "";
var clientId = "376024187070-nl1akmvkp2l5ksjtmrljm8ajoqq9avtb.apps.googleusercontent.com";//"651037261825-c3gopfoudd8blcq7nbb2htrptm04trv0.apps.googleusercontent.com";
var clientSecret = "U5y1mU-qpQPHZB02SvEtzm5r";


var moraApp = angular.module('starter', ['ionic', 'ngCordova', 'ngCordovaOauth'])
.controller('LoginwithGoogle', function ($scope, $cordovaOauth, $state) {
        $scope.LoginwithGoogle = function () {
            console.log("clicked");
            $cordovaOauth.google(clientId, ["email"]).then(function (result) {
                alert("Auth Success..!!" + JSON.stringify(result));


                //accessToken = result.access_token;
                //alert("access token is "+ result.accessToken);
                //$location.path("/secure");    
                //alert('the state is ' + $state.current);
                //$state.go('app.home');
                //$window.location.href = '/views/home.html';
                //$location.path("/views/home.html");

            }, function (error) {
                alert("Auth Failed..!!" + error);
            });
        };
    })

;




