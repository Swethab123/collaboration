/**
 * 
 */

app.factory('BlogService',function($http){
	var blogService={}
	
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8088/project2middleware/addblogpost",blog);
	}
	
	blogService.blogsApproved=function(){
		return $http.get("http://localhost:8088/project2middleware/blogsapproved")
	}
	
	blogService.blogsWaitingForApproval=function(){
		return $http.get("http://localhost:8088/project2middleware/blogswaitingforapproval")
	}
	
	blogService.getBlogPost=function(id){
		return $http.get("http://localhost:8088/project2middleware/getblogpost"+id)
	}
	
	blogService.updateApprovalStatus=function(blogPost){
		return $http.put("http://localhost:8088/project2middleware/updateapprovalstatus",blogPost)
	}
	return blogService;
	
})