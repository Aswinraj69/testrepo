var weather_data=[
    {district:"tvm",temp:40},
    {district:"tvm",temp:49},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
   
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31},

]

var forecast={}
for(let data of weather_data){
//data ={district:"tvm",temp:30}
let district_name=data.district//tvm
let temp=data.temp//30
if(district_name in forecast){
  let old_temp=forecast[district_name]
  if(temp>old_temp){
      forecast[district_name]=temp
  }
}else{
    //={tvm:30}
    forecast[district_name]=temp
}
}console.log(forecast);



 console.log(Object.entries(forecast)); 

  console.log( Object.entries(forecast).sort((temp1,temp2)=>temp1[1]-temp2[1]));