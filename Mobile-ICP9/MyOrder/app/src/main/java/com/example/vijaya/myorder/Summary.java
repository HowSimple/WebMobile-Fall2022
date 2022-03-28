package com.example.vijaya.myorder;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ListView;
import android.widget.TextView;

public class Summary extends AppCompatActivity {
    private ListView orderList;
    boolean hasPepperoni, hasBeef;
    String name, request;
    int quantity;
    float price;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_summary);
        Intent intent = getIntent();
        //this.orderList = findViewById(R.id.Order);
        String order = intent.getStringExtra("ORDER");
        request = intent.getStringExtra("REQUEST");
        name = intent.getStringExtra("NAME");

        hasPepperoni = intent.getBooleanExtra("PEPPERONI", false);
        hasBeef = intent.getBooleanExtra("BEEF", false);
        quantity = intent.getIntExtra("QUANTITY",0);
        price = intent.getFloatExtra("PRICE",0);



        TextView summary = findViewById(R.id.summaryText);
        summary.setText(order);

    }
    private String boolToString(boolean bool) {
        return bool ? (getString(R.string.yes)) : (getString(R.string.no));
    }

    public void showOrder(View view){
        Intent intent = new Intent(this,MainActivity.class);

        intent.putExtra("PEPPERONI", hasPepperoni);
        intent.putExtra("BEEF", hasBeef);

        intent.putExtra("PRICE",price);
        intent.putExtra("QUANTITY", quantity);

        intent.putExtra("NAME", name);
        intent.putExtra("REQUEST", request);
        startActivity(intent);
    }
}