/**
 * Created by BurggrafM on 13.06.2017.
 */

angular.module('myApp.gofPlayground')
    .controller('consoleCtrl', consoleCtrl);

    function consoleCtrl(healthCheckService) {
        var self = this;
        self.executeHealthCheck = executeHealthCheck;
        self.log = log;
        self.clear = clear;

        clear();
        executeHealthCheck();

        function executeHealthCheck() {
            healthCheckService.executeHealthCheck(self.logEntries)
        }
        
        function log(message) {
            self.logEntries.push(message);
        }
        
        function clear() {
            self.logEntries = [];
        }
    }