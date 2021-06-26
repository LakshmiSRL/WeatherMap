var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function()
{
    var data=JSON.parse(this.response);
    //  console.log(data);

    for(var i=0;i<data.length;i++)
    {
        try{
        var name=  data[i].name;
        var lang=  data[i].latlng;
        // console.log(lang);
        
        if(lang.length===0) throw new Error("latitude and longitude is not found ");
        // console.log(name+''+lang);
        weatherdata(name,...lang);
        // weatherdata(name,lang[0],lang[1]);

        }
        catch(e){
            console.log("Invalid cordiants for the country"+name+""+e.massage);
        }

    }
}
var weatherdata=function(name,lat,lang){
    // console.log(name+""+let""+lang);
    var request=new XMLHttpRequest();
    var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=f1e77cde4251dd3143f79c1ab62486fd';
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
        try{
           var res=JSON.parse(this.response);
        
        console.log(`${name}:${res.main.temp}`);
        }
        catch(e){
            console.log("Undifind respose"+name);
        }

    }   
}