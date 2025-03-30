package com.example.pinggybackend.dto;

public class PostDTO {
    private String title;
    private String body;
    private String pinggyAuthHeader;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }

    public String getPinggyAuthHeader() { return pinggyAuthHeader; }
    public void setPinggyAuthHeader(String pinggyAuthHeader) { this.pinggyAuthHeader = pinggyAuthHeader; }
}
