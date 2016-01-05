angular.module('project.home', [
        'ui.router'
    ])

    .config(function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html',
                data: {pageTitle: 'Home'},
                requireLogin: false
            });
    })

    .controller('HomeCtrl', ['$rootScope', '$scope', '$state', '$q', 'HomeService', 'P_ConstantsService', 'P_UtilsService',
        function ($rootScope, $scope, $state, $q, HomeService, P_ConstantsService, P_UtilsService) {
            //Default Values
            $scope.showDetails = false;
            $scope.prediction = {};
            $scope.prediction.search = '';

            //Bubble Chart
            var deferred = $q.defer();
            var bubbleChartPromise = deferred.promise;
            bubbleChartPromise = HomeService.getEntityInformation();
            bubbleChartPromise
                .then(function (data) {
                        if (data) {
                            if (!P_UtilsService.isObjectEmpty(data)) {
                                //Construct Data for Bubble Chart
                                var resObj = {};
                                resObj.name = P_ConstantsService.COMMENTS;
                                var tempArr = [];
                                angular.forEach(data, function (value, key) {
                                    var tempObj = {};
                                    tempObj.name = value.entityKey;
                                    tempObj.size = value.entityCurrentVal;
                                    tempArr.push(tempObj);
                                });
                                resObj.children = tempArr;
                                constructConnectionMonitoringChart(resObj);
                            }
                        }
                    },
                    function (error) {
                        console.log(error);
                    },
                    function (progress) {
                    });

            var constructConnectionMonitoringChart = function (data) {
                var diameter = 375,
                    format = d3.format(",d"),
                    color = d3.scale.category20c();

                var bubble = d3.layout.pack()
                    .sort(null)
                    .size([diameter, diameter])
                    .padding(1.5);

                var svg = d3.select("#bubbles").append("svg")
                    .attr("width", diameter)
                    .attr("height", diameter)
                    .attr("class", "bubble");

                d3.json("data", function (error, root) {
                    /*if (error) {
                     throw error;
                     }*/
                    root = data;
                    var node = svg.selectAll(".node")
                        .data(bubble.nodes(flatten(root))
                            .filter(function (d) {
                                return !d.children;
                            }))
                        .enter().append("g")
                        .attr("class", "node")
                        .attr("transform", function (d) {
                            return "translate(" + d.x + "," + d.y + ")";
                        });

                    node.append("title")
                        .text(function (d) {
                            return d.className + ": " + format(d.value);
                        });

                    node.append("circle")
                        .attr("r", function (d) {
                            return d.r;
                        })
                        .attr("cursor", "pointer")
                        .style("fill", function (d) {
                            return color(d.packageName);
                        });

                    node.append("text")
                        .attr("dy", ".3em")
                        .style("text-anchor", "middle")
                        .attr("cursor", "pointer")
                        .text(function (d) {
                            return d.className.substring(0, d.r / 3);
                        });

                    node.on("click", function (d) {
                        //Fetch Details
                        fetchDetails(d.className);
                    });
                });

                // Returns a flattened hierarchy containing all leaf nodes under the root.
                function flatten(root) {
                    var nodes = [];

                    function recurse(node) {
                        if (node.children) {
                            node.children.forEach(recurse);
                        }
                        else {
                            nodes.push({packageName: node.size, className: node.name, value: node.size});
                        }
                    }

                    recurse(root);
                    return {children: nodes};
                }

                d3.select(self.frameElement).style("height", diameter + "px");
            };

            /**
             * Function to fetch Details for Carousel and Comments
             */
            var fetchDetails = function (node) {
                $scope.showDetails = true;
                $scope.$apply();
                bubbleChartPromise
                    .then(function (data) {
                        angular.forEach(data, function (value, key) {
                            if (node === value.entityKey) {
                                $scope.selectedNode = value;
                                $scope.webAccess = value.webAccessCount;
                                $scope.userComments = value.userComments;
                            }
                        });
                    });
            };

            $scope.getCarouselView = function (index, item) {
                angular.element("#carousel_" + index).html('');
                if (item.webUrl.indexOf(P_ConstantsService.HTTP) > -1) {
                    angular.element("#carousel_" + index).append('<iframe class="iframe-class" frameborder="0" scrolling=no src="' + item.webUrl + '" ></iframe>');
                } else {
                    angular.element("#carousel_" + index).append('<iframe class="iframe-class" frameborder="0" scrolling=no src="http://' + item.webUrl + '" ></iframe>');
                }
            };

            /**
             * Search
             */
            $scope.stocks = [
                {name: "Apple", symbol: "AAPL"},
                {name: "Cisco Systems", symbol: "CSCO"},
                {name: "Facebook", symbol: "FB"},
                {name: "Yahoo", symbol: "YHOO"}
            ];

            $scope.symbolSelected = function (selected) {
                if (selected) {
                    $scope.prediction.search = selected.originalObject.symbol;
                    $scope.prediction.entityKey = selected.originalObject.symbol;
                } else {
                    $scope.prediction.search = '';
                }
            };

            /**
             * Function invoked when click on 'Save Prediction'
             */
            $scope.savePrediction = function () {
                var dataObj = {};
                dataObj.entityKey = $scope.prediction.entityKey;
                dataObj.entityCurrentVal = $scope.prediction.entityCurrentVal;
                dataObj.entityUserVal = $scope.prediction.entityUserVal;
                dataObj.hyperlink1 = $scope.prediction.hyperlink1;
                dataObj.hyperlink2 = $scope.prediction.hyperlink2;
                dataObj.userName = $scope.prediction.userName;
                dataObj.comments = $scope.prediction.comments;
                HomeService.addEntityInformation(dataObj).then(function (data) {
                    if (data.message.toLowerCase() === P_ConstantsService.SUCCESS) {
                        console.log("success !!");
                    } else {
                        console.log("Error while adding entity values by the user !!");
                    }
                });
            };
        }]);

