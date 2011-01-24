package com.sondow.foam;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.EnumSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.w3c.dom.Document;

import com.facebook.api.FacebookException;
import com.facebook.api.FacebookRestClient;
import com.facebook.api.ProfileField;

/**
 * Servlet implementation class MainPageServlet
 */
public class CanvasServlet extends AbstractFacebookServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {
        FacebookRestClient facebook = getAuthenticatedFacebookClient(request,
                response);

        if (facebook != null) {
            if (getFacebookInfo(request, facebook)) {
                request.getRequestDispatcher("/jsp/foam/canvas.jsp").forward(request,
                        response);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    /*
     * This method obtains some basic Facebook profile information from the
     * logged in user who is accessing our application in the current HTTP
     * request.
     */
    private boolean getFacebookInfo(HttpServletRequest request,
            FacebookRestClient facebook) {
        try {

            long userID = facebook.users_getLoggedInUser();
            Collection<Long> users = new ArrayList<Long>();
            users.add(userID);

            EnumSet<ProfileField> fields = EnumSet.of(
                    com.facebook.api.ProfileField.NAME,
                    com.facebook.api.ProfileField.PIC);

            Document d = facebook.users_getInfo(users, fields);
            String name = d.getElementsByTagName("name").item(0)
                    .getTextContent();
            String picture = d.getElementsByTagName("pic").item(0)
                    .getTextContent();

            request.setAttribute("uid", userID);
            request.setAttribute("profile_name", name);
            request.setAttribute("profile_picture_url", picture);

        } catch (FacebookException e) {

            HttpSession session = request.getSession();
            session.setAttribute("facebookSession", null);
            return false;

        } catch (IOException e) {

            e.printStackTrace();
            return false;
        }
        return true;
    }

}
