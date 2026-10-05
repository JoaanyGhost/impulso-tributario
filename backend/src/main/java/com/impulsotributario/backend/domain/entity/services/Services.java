package com.impulsotributario.backend.domain.entity.services;

public class Services {

    private String id;
    private String code;
    private String name;
    private String description;
    private boolean active;
    private Integer order;

    public Services() {
    }

    public Services(
            String id,
            String code,
            String name,
            String description,
            boolean active,
            Integer order
    ) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.active = active;
        this.order = order;
    }

    // getters y setters


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }
}