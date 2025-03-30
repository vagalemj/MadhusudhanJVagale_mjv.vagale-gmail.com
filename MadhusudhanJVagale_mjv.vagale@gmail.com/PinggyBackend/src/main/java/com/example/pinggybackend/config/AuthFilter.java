package com.example.pinggybackend.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthFilter implements Filter {
    private static final ThreadLocal<String> authHeader = new ThreadLocal<>();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        String authValue = httpRequest.getHeader("PinggyAuthHeader");

        if (authValue == null || authValue.isEmpty()) {
            httpResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Missing or empty PinggyAuthHeader");
            return;
        }

        authHeader.set(authValue);
        try {
            chain.doFilter(request, response);
        } finally {
            authHeader.remove();
        }
    }

    public static String getAuthHeader() {
        return authHeader.get();
    }
}
