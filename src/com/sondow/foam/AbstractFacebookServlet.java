package com.sondow.foam;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.facebook.api.Facebook;
import com.facebook.api.FacebookRestClient;

/**
 * Servlet implementation class AbstractFacebookServlet
 */
public abstract class AbstractFacebookServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected static final String FB_APP_URL = "http://apps.facebook.com/myfacebookapp/";

    protected static final String FB_APP_ADD_URL = "http://www.facebook.com/add.php?api_key=";

    protected static final String FB_API_KEY = PropertyLoader.loadProperties(
            "/com/sondow/foam/key/secret.properties").getProperty(
            "facebook.foam.api.key");

    private static final String FB_SECRET_KEY = PropertyLoader.loadProperties(
            "/com/sondow/foam/key/secret.properties").getProperty(
            "facebook.foam.secret.key");

    public AbstractFacebookServlet() {
        super();
    }

    /*
     * This method is used by all of the application's servlets (or web
     * framework actions) to authenticate the app with Facebook.
     */
    protected FacebookRestClient getAuthenticatedFacebookClient(
            HttpServletRequest request, HttpServletResponse response) {
        Facebook fb = new Facebook(request, response, FB_API_KEY, FB_SECRET_KEY);

        String next = request.getServletPath().substring(1);

        if (fb.requireLogin(next)) {
            return null;
        }

        return fb.getFacebookRestClient();
    }
}
