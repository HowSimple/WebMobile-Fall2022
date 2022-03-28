package com.example.vijaya.myorder;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;


public class MainActivity extends AppCompatActivity {
    private static final String MAIN_ACTIVITY_TAG = "MainActivity";
    final int PIZZA_PRICE = 8;
    final int PEPPERONI_PRICE = 1;
    final int BEEF_PRICE = 2;


    int quantity = 1;
    private EditText specialRequestInput;
    private EditText nameInput;
    private Button summaryButton;
    private Button submitOrderButton;
    private LinearLayout orderLayout;
    private CheckBox pepperoni;
    private CheckBox beef;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Intent intent = getIntent();

        specialRequestInput = findViewById(R.id.user_request);
        summaryButton= findViewById(R.id.summary);
        submitOrderButton = findViewById(R.id.submitOrder);
        orderLayout = findViewById(R.id.orderLayout);
        nameInput = findViewById(R.id.user_name);
        pepperoni = (CheckBox)findViewById(R.id.addPepperoni);
        beef = (CheckBox)findViewById(R.id.addBeef);
        if (intent.getExtras() != null){
           // load order details sent from Summary activity
            beef.setChecked( intent.getBooleanExtra("BEEF", false));
            pepperoni.setChecked( intent.getBooleanExtra("PEPPERONI",false));
            float price = intent.getFloatExtra("PRICE",4);
            TextView priceView = findViewById(R.id.price);
            priceView.setText(Float.toString(price));
            quantity = intent.getIntExtra("QUANTITY",0);
            display(quantity);
            nameInput.setText( intent.getStringExtra("NAME"));
            specialRequestInput.setText( intent.getStringExtra("REQUEST"));
        }



    }

    public void submitOrder(View view) {

        EditText userInputNameView = (EditText) findViewById(R.id.user_request);
        String userInputName = userInputNameView.getText().toString();

        // check if whipped cream is selected
        CheckBox pepperoni = (CheckBox) findViewById(R.id.addPepperoni);
        boolean hasPepperoni = pepperoni.isChecked();

        // check if chocolate is selected
        CheckBox beef = (CheckBox) findViewById(R.id.addBeef);
        boolean hasBeef = beef.isChecked();

        // calculate and store the total price
        float totalPrice = calculatePrice(hasPepperoni, hasBeef);

        // create and store the order summary
        String orderSummaryMessage = createOrderSummary(userInputName, hasPepperoni, hasBeef, totalPrice);
        sendEmail(userInputName,orderSummaryMessage);
        // Write the relevant code for making the buttons work(i.e implement the implicit and explicit intents

    }

    public void sendEmail(String name, String output) {

        String subject = "Order confirmation";
        String body = createOrderSummary(name, pepperoni.isChecked(),beef.isChecked(), calculatePrice(pepperoni.isChecked(),beef.isChecked()));
        Intent intent = new Intent(Intent.ACTION_SENDTO, Uri.parse("mailto:"));
        if (intent.resolveActivity(getPackageManager()) !=null) {

            intent.putExtra(Intent.EXTRA_SUBJECT, subject);
            intent.putExtra(Intent.EXTRA_TEXT, body);

            startActivity(intent);
        }
    }

    private String boolToString(boolean bool) {
        return bool ? (getString(R.string.yes)) : (getString(R.string.no));
    }


    public  void  showSummary(View view){
        boolean hasPepperoni = pepperoni.isChecked();
        boolean hasBeef = beef.isChecked();

        Intent intent = new Intent(this,Summary.class);
        intent.putExtra("ORDER", createOrderSummary(nameInput.getText().toString(),pepperoni.isChecked(),beef.isChecked(), calculatePrice(pepperoni.isChecked(),beef.isChecked())));
        intent.putExtra("REQUEST", this.specialRequestInput.getText().toString());
        intent.putExtra("NAME", nameInput.getText().toString());

        intent.putExtra("PEPPERONI", pepperoni.isChecked());
        intent.putExtra("BEEF", beef.isChecked());

        intent.putExtra("PRICE", calculatePrice(hasPepperoni,hasBeef));
        intent.putExtra("QUANTITY", quantity);


        startActivity(intent);

    }
    private String createOrderSummary(String userInputName, boolean hasPepperoni, boolean hasBeef, float price) {
        String orderSummaryMessage = getString(R.string.order_summary_name, userInputName) + "\n" +
                getString(R.string.order_summary_beef, boolToString(hasBeef)) + "\n" +
                getString(R.string.order_summary_pepperoni, boolToString(hasPepperoni)) + "\n" +
                getString(R.string.order_summary_quantity, quantity) + "\n" +
                getString(R.string.order_summary_total_price, price) + "\n" +
                getString(R.string.thank_you);
        return orderSummaryMessage;
    }

    /**
     * Method to calculate the total price
     *
     * @return total Price
     */
    private float calculatePrice(boolean hasPepperoni, boolean hasBeef) {
        int basePrice = PIZZA_PRICE;
        if (hasPepperoni) {
            basePrice += PEPPERONI_PRICE;
        }
        if (hasBeef) {
            basePrice += BEEF_PRICE;
        }
        return quantity * basePrice;
    }

    /**
     * This method displays the given quantity value on the screen.
     */
    private void display(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_text_view);
        quantityTextView.setText("" + number+" pizza(s)");
        quantityTextView.setText("" + number+" pizza(s)");
    }

    /**
     * This method increments the quantity of coffee cups by one
     *
     * @param view on passes the view that we are working with to the method
     */
    public void updateSubtotal(View view){
        TextView priceText = (TextView) findViewById(R.id.price);

        float price = calculatePrice(pepperoni.isChecked(),beef.isChecked());
        priceText.setText("Price: $"+String.valueOf(price));
    }
    public void increment(View view) {
        if (quantity < 100) {
            quantity = quantity + 1;
            display(quantity);


            float price = calculatePrice(pepperoni.isChecked(),beef.isChecked());
            TextView priceText = (TextView) findViewById(R.id.price);

            priceText.setText("Price: $"+String.valueOf(price));



        if (quantity < 100) {
            quantity = quantity + 1;
            display(quantity);
        } else {
            Log.i("MainActivity", "Please select less than one hundred pizzas");
            Context context = getApplicationContext();
            String lowerLimitToast = getString(R.string.too_much_coffee);
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, lowerLimitToast, duration);
            toast.show();
            return;
        }
    }}

    /**
     * This method decrements the quantity of pizzas one
     *
     * @param view passes on the view that we are working with to the method
     */
    public void decrement(View view) {


        float price = calculatePrice(pepperoni.isChecked(),beef.isChecked());
        TextView priceText = (TextView) findViewById(R.id.price);

        priceText.setText("Price: $"+String.valueOf(price));
        if (quantity > 1) {
            quantity = quantity - 1;
            display(quantity);
        } else {
            Log.i("MainActivity", "Please select at least one pizza");
            Context context = getApplicationContext();
            String upperLimitToast = getString(R.string.too_little_coffee);
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, upperLimitToast, duration);
            toast.show();
            return;
        }
    }
}