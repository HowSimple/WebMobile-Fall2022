package com.example.icp10;

import retrofit2.Call;

import java.util.List;

public interface ApiCollections {

    @GET("users")

    Call<list<User>> getData();
    

}
