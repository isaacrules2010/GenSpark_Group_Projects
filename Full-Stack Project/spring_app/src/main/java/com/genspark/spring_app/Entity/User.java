package com.genspark.spring_app.Entity;



import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;

    @Entity
    @Table(name="tbl_user")
    public class User {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        private String userName;
        private String password;

        private String email;
        private boolean active;
        private String roles;

        public User(int id, String userName, String password, String email, boolean active, String roles) {
            this.id = id;
            this.userName = userName;
            this.password = password;
            this.email = email;
            this.active = active;
            this.roles = roles;
        }

        public User() {
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getUserName() {
            return userName;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public void setUserName(String userName) {
            this.userName = userName;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public boolean isActive() {
            return active;
        }

        public void setActive(boolean active) {
            this.active = active;
        }

        public String getRoles() {
            return roles;
        }

        public void setRoles(String roles) {
            this.roles = roles;
        }
    }
