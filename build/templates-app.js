angular.module('templates-app', ['header.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html']);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <a class=\"navbar-brand\" ui-sref=\"#\">Project</a>\n" +
    "    </div>\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "        <!-- Dashboard -->\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"messages\" ui-sref-opts=\"{reload: true}\">\n" +
    "                <i class=\"fa fa-comment-o fa-fw\"></i>\n" +
    "                Dashboard\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div id=\"home\" class=\"row-fluid\">\n" +
    "    <div class=\"leftPanel\">\n" +
    "        <!-- Search -->\n" +
    "        <div id=\"search\">\n" +
    "            <angucomplete-alt id=\"predictionSearch\"\n" +
    "                              placeholder=\"Search...\"\n" +
    "                              pause=\"100\"\n" +
    "                              selected-object=\"symbolSelected\"\n" +
    "                              local-data=\"stocks\"\n" +
    "                              search-fields=\"name,symbol\"\n" +
    "                              title-field=\"name\"\n" +
    "                              minlength=\"1\"\n" +
    "                              input-class=\"search-query form-control\"/>\n" +
    "        </div>\n" +
    "        <!-- Prediction Form -->\n" +
    "        <form class=\"form-horizontal prediction\" name=\"predictionForm\" novalidate ng-if=\"prediction.search !== ''\">\n" +
    "            <!-- Entity Key -->\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Key</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"prediction.entityKey\" name=\"entity\" id=\"entity\"\n" +
    "                           placeholder=\"Entity Key\" disabled>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Entity Current Value -->\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Current Value</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"prediction.entityCurrentVal\" name=\"entityvalue\"\n" +
    "                           id=\"entityvalue\" placeholder=\"Entity Current Value\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- entity User Value-->\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">User Value</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"prediction.entityUserVal\" name=\"entityuservalue\"\n" +
    "                           id=\"entityuservalue\" placeholder=\"Entity User Value\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Hyperlink 1-->\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Hyperlink 1</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"prediction.hyperlink1\" name=\"hyperlink1\"\n" +
    "                           id=\"hyperlink1\" placeholder=\"Hyperlink 1\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Hyperlink 2-->\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Hyperlink 2</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"prediction.hyperlink2\" name=\"hyperlink2\"\n" +
    "                           id=\"hyperlink2\" placeholder=\"Hyperlink 2\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Username-->\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Username</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"prediction.userName\" name=\"username\" id=\"username\"\n" +
    "                           placeholder=\"Username\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Comments-->\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3 control-label\">Comments</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"prediction.comments\" name=\"comments\"\n" +
    "                           id=\"usrcomments\"\n" +
    "                           placeholder=\"Comments\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Buttons -->\n" +
    "            <div class=\"ngdialog-buttons col-sm-11\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"savePrediction('save')\"\n" +
    "                        ng-disabled=\"predictionForm.$invalid\">\n" +
    "                    Save\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"savePrediction('cancel')\">Cancel</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <!-- Bubble Chart -->\n" +
    "        <div id=\"bubbles\" class=\"bubbleChart\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"rightPanel\">\n" +
    "        <div id=\"details\" ng-if=\"showDetails\">\n" +
    "            <span style=\"font-weight: bold;\">{{selectedNode.deviceKey}}</span>\n" +
    "            <!-- Web URLs -->\n" +
    "            <div id=\"weburl\">\n" +
    "                <div class=\"panel panel-primary\">\n" +
    "                    <div class=\"panel-heading\">\n" +
    "                        <i class=\"fa fa-tasks\"></i>&nbsp; URLs\n" +
    "                    </div>\n" +
    "                    <div ng-repeat=\"url in webAccess\">\n" +
    "                        <div class=\"rank\">\n" +
    "                            <a ng-href=\"{{url.webUrl}}\" target=\"_blank\">Rank {{$index}}</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"recommended\">\n" +
    "                            <i class=\"fa fa-users\"></i> Recommended: {{url.webUrlCount}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Comments -->\n" +
    "            <div id=\"comments\">\n" +
    "                <div class=\"panel panel-primary\">\n" +
    "                    <div class=\"panel-heading\">\n" +
    "                        <i class=\"fa fa-comments\"></i>&nbsp; Comments\n" +
    "                    </div>\n" +
    "                    <div ng-repeat=\"comment in userComments\">\n" +
    "                        <ul class=\"chat\">\n" +
    "                            <li class=\"left clearfix\">\n" +
    "                                <span class=\"chat-img pull-left\" style=\"margin-left: 2px;\">\n" +
    "                                    <i class=\"fa fa-user\"></i>\n" +
    "                                </span>\n" +
    "\n" +
    "                                <div class=\"chat-body clearfix\">\n" +
    "                                    <div class=\"header\">\n" +
    "                                        <strong class=\"primary-font\">{{comment.userName}}</strong>\n" +
    "                                    </div>\n" +
    "                                    <p>{{comment.comments}}</p>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div id=\"login\" class=\"login-container col-md-6 col-md-offset-3\">\n" +
    "    <div class=\"panel panel-info\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <div class=\"panel-title\">Sign In</div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body padding-top-30\">\n" +
    "            <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" ng-submit=\"attemptLogin()\" name=\"loginform\">\n" +
    "                <div class=\"row\">\n" +
    "                    <span class=\"CustomValidationError\" ng-show=\"authenticationFailure\">Authentication failure,. Please try again...</span>\n" +
    "                </div>\n" +
    "                <div class=\"input-group margin-bottom-25\">\n" +
    "                    <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n" +
    "                    <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\"\n" +
    "                           placeholder=\"Username or Email Address\" ng-model=\"credentials.username\" required autofocus>\n" +
    "                </div>\n" +
    "                <div class=\"input-group margin-bottom-25\">\n" +
    "                    <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n" +
    "                    <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\"\n" +
    "                           placeholder=\"Password\" ng-model=\"credentials.password\" required>\n" +
    "                </div>\n" +
    "                <div class=\"form-group margin-top-10\">\n" +
    "                    <!-- Log In Button -->\n" +
    "                    <div class=\"col-sm-12 controls\">\n" +
    "                        <button class=\"btn btn-primary\" type=\"submit\">Log In</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
