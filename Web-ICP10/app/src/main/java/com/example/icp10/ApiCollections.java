package com.example.icp10;

import retrofit2.Call;
import retrofit2.http.GET;

import java.util.List;

public interface ApiCollections {

    @GET("users")
    Call<List<User>> getData();


}
