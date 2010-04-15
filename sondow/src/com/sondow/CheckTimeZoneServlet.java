package com.sondow;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class CheckTimeZoneServlet extends BaseServlet {

    public static final int EASTERN_STANDARD_TIME_GMT_OFFSET = -5;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    public void processRequest(HttpServletRequest request,
            HttpServletResponse response) throws IOException, ServletException {

        String timezoneOffsetString = request.getParameter("z");
        double timezoneOffset = Double.parseDouble(timezoneOffsetString);

        // Only show the goods to people who are more than 1 time zone away
        // from the east coast.
        if (timezoneOffset < EASTERN_STANDARD_TIME_GMT_OFFSET - 1
                || timezoneOffset > EASTERN_STANDARD_TIME_GMT_OFFSET + 1) {
            RequestDispatcher dispatcher = request
                    .getRequestDispatcher("/jsp/ajax/resumes.jsp");
            if (dispatcher != null) {
                dispatcher.forward(request, response);
            }
        }
    }
}
