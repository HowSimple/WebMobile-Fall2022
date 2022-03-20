package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;


public class MainActivity extends AppCompatActivity {
    private EditText usernameField;
    private EditText passwordField;
    private TextView status;
    private String appUsername = "admin";
    private String appPassword = "1234";
    private View btn;
    //private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //binding = ActivityMainBinding.inflate(getLayoutInflater());

        // setContentView(R.getRoot());
        Toast.makeText(MainActivity.this, "button is clicked", Toast.LENGTH_SHORT).show();

        btn = findViewById(R.id.button);
        usernameField = findViewById(R.id.editTextName);
        passwordField = findViewById(R.id.editTextPassword);
        status = findViewById(R.id.textView);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (usernameField.getText().toString().equals( "")){
                    //Toast.makeText(MainActivity.this, "Please enter your username", Toast.LENGTH_SHORT).show();
                    status.setText("Please enter your username");
                }
                else if (passwordField.getText().toString().equals( ""))
                {
                    //                    Toast.makeText(MainActivity.this, "Please enter your password", Toast.LENGTH_SHORT).show();
                    status.setText("Please enter your password");
                }

                else if (usernameField.getText().toString().equals( appUsername) && passwordField.getText().toString().equals(appPassword))
                {
                    //Toast.makeText(MainActivity.this, "Logged in successfully!", Toast.LENGTH_SHORT).show();

                    Intent k = new Intent(MainActivity.this, SecondActivity.class);
                    startActivity(k);
                }
                else
                {
                    status.setText("Incorrect username or password, try again");
                }





            }
        });
    }
}