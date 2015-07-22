angular.module('de.damncreative.worktimer', [
    'ngSanitize',
    
    'ui.router',
    
    'btford.markdown',
    
    'de.damncreative.worktimer.home',
    'de.damncreative.worktimer.projects',
    'de.damncreative.worktimer.docs',
    'de.damncreative.worktimer.help',
    'de.damncreative.worktimer.about'
])

.config([
    '$urlRouterProvider',
    function($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    }
]);
;