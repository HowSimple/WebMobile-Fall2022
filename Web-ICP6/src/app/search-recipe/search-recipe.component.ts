import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }


  foursquareApiQuery(search, location) {
    console.log(search);
    console.log(location);
    var request = `https://api.foursquare.com/v2/venues/search?client_id=FE31JYBN1VAP2MJSJPNWWHMPVT2QKF5HQF2AHXSNJ3LW51A0&client_secret=CSY1N5LOXDM0VCFKOSJKWXONC2HB3GZCV1NES5LDXUOXGILR&query=${search}&near=${location}&v=20220221`;
    ;

    console.log(request)
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(request, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));


    //getData(url, (data) => console.log({ data }))

  }
  recipeAPIQuery(search) {
    console.log(search);
    console.log(location);
    var request = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=7d5182c5&app_key=a0fa0e82fa892fcae09dd4af3f6a2993`;


    console.log(request)
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(request, options)
      .then(response => response.json())
      .then(response => {console.log(response.hits);
        this.recipeList.push.apply(this.recipeList, response.hits);
        console.log(response.hits.recipe);

        console.log(response.hits[0].recipe.label);

      })

      .catch(err => console.error(err));





    //getData(url, (data) => console.log({ data }))

  }
  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if (this.recipeValue !== null) {
      /**
       *        * Write code to get recipe
       */
    }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
      /**
       * Write code to get place
       */


    }
  }
}
