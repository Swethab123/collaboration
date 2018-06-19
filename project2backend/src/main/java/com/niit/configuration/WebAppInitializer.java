package com.niit.configuration;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

//web.xml file
public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer{
    public WebAppInitializer(){
    	System.out.println("WebAppInitializer class is loaded...");
    }
	
	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class[]{DBConfiguration.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		return new Class[]{WebConfig.class};
	}

	@Override
	protected String[] getServletMappings() {
		//All requests to this application will be send to dispatcherservlet
		//similar to 
//		<servlet-mapping>
//		<servlet-name>dispatcher</servlet-name>
//		<url-pattern>/</url-pattern>
//	</servlet-mapping>
		return new String[]{"/"};
	}

}
