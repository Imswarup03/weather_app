
export const getWeatherDataForCity= async (city)=>{
    const base_url= 'https://api.weatherapi.com/v1/current.json?key=536f7ea59a194a06b07636092416'
    if (city != null || undefined || ''){
        console.log("city", city)
        const response = await fetch(`${base_url}&q=${city}&aqi=yes`)
    
        return await response.json();
    }
    else{
        return null
    }
}


export const getWeatherDataForLocation= async (lat, long)=>{
    const base_url= 'https://api.weatherapi.com/v1/current.json?key=536f7ea59a194a06b0763609241806'

    const response = await fetch(`${base_url}&q=${lat},${long}&aqi=yes`)

    return await response.json();
}