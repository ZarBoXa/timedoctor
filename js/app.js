var App=angular.module('TimeDoctorTestApp',['ngSanitize','ngRoute','ui.bootstrap','ngAria','ngMessages','ngAnimate','highcharts-ng'], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});