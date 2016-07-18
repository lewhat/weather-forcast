//services

weatherApp.service('cityService', function(){
    
    this.city = 'San Francisco, CA'
})



weatherApp.service('weatherService', ['$resource', function($resource){
    
        this.GetWeather = function(city, days){
    
                var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=e23921f0b264829f858bf2dc30fe5dab',
                {
                    callback: "JSON_CALLBACK"
                },
                {
                    get: {
                        method: "JSONP"
                    }
                }
               )


                return weatherAPI.get({ 

                    q: city,
                    cnt: days

                })
    
        }
}])