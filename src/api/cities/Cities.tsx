export const getCities = async () => {
  let cities = ["La Plata","Avellaneda","Caseros","El Palomar","Belgrano"]
  let citiesPromise = new Promise<string[]>((resolve, reject) => {
      resolve(cities); 
  });
  return citiesPromise
};