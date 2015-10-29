angular.module('project.home', [
    'ui.router',
    'project.home.details'
])

    .config(function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html',
                data: {pageTitle: 'Home'},
                requireLogin: false
            })
            .state('home.details', {
                url: '/details',
                controller: 'DetailsCtrl',
                templateUrl: 'home/details.tpl.html',
                data: {pageTitle: 'Home'}
            });
    })

    .controller('HomeCtrl', ['$rootScope', '$scope', '$state', '$q', 'HomeService', 'P_ConstantsService', 'P_UtilsService',
        function ($rootScope, $scope, $state, $q, HomeService, P_ConstantsService, P_UtilsService) {
            //Bubble Chart
            var deferred = $q.defer();
            var bubbleChartPromise = deferred.promise;
            bubbleChartPromise = HomeService.getDeviceUserComments();
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
                                tempObj.name = value.deviceKey;
                                tempObj.size = value.userTalkedCount;
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
                var diameter = 460,
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
                        $state.go('home.details');
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
        }]);

