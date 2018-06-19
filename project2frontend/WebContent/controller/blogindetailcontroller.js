/**
 * 
 */
app.controller('BlogInDetailCtrl',function($scope, $location, $rootScope, BlogService,$routeParams,$sce) {
	var id=$routeParams.id
	
	BlogService.getBlogPost(id).then(function(response){
		$scope.blogPost=response.data
		$scope.content=$sce.trustAsHtml($scope.blogPost.blogContent)
	},function(response){
		$rootScope.error = response.data
		if (response.status == 401)
			$location.path('/login')
	})
	
	
	$scope.approve=function(blogPost){
		blogPost.approved=true
		BlogService.ApprovalStatus().then(function(response){
			$location.path('/blogswaitingforapproval')
		},function(response){
			$scope.error=response.data
			if (response.status == 401)
				$location.path('/login')
		})
	}
	
	$scope.approve=function(blogPost){
		blogPost.approved=false
		BlogService.ApprovalStatus().then(function(response){
			$location.path('/blogswaitingforapproval')
		},function(response){
			$scope.error=response.data
			if (response.status == 401)
				$location.path('/login')
		})
	}
	
})