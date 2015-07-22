angular.module('de.damncreative.worktimer', [
    'ngSanitize',
    
    'ui.router',
    
    'btford.markdown',
    
    'de.damncreative.dbschemacreator.home',
    'de.damncreative.dbschemacreator.projects',
    'de.damncreative.dbschemacreator.docs',
    'de.damncreative.dbschemacreator.help',
    'de.damncreative.dbschemacreator.about'
])

.config([
    '$urlRouterProvider',
    function($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    }
]);
;