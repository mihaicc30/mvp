export const fetchAllOrders = async (data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}fetchAllOrders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        data,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const recallOrder = async (data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}recallOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        data,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const zapOrder = async (data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}zapOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        data,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchZapped = async (data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}fetchZapped`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        data,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchOrders = async (data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}fetchOrders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        data,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const addOrder = async (data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}addOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        data,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const handleClocked = async (week, typeOfDay, email) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}handleClocked`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        week,
        typeOfDay,
        email,
        venueID: localStorage.getItem("venueID"),
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const resetRota = async (week, weekRange) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}resetRota`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        week,
        weekRange,
        venueID: localStorage.getItem("venueID"),
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchUserDetails = async (email, week) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}fetchUserDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        email,
        week,
        venueID: localStorage.getItem("venueID"),
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const updateRota = async (week, weekRange, data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}updateRota`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        week,
        weekRange,
        data,
        venueID: localStorage.getItem("venueID"),
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const getRotaOfTheWeek = async (week, weekRange) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}getRotaOfTheWeek`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        week,
        weekRange,
        venueID: localStorage.getItem("venueID"),
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteEmptyTable = async () => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}deleteEmptyTable`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        venue: localStorage.getItem("venueID"),
        tableOpenBy: localStorage.getItem("displayName"),
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const grabNetProfit = async (day, month, venue) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}grabNetProfit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        day,
        month,
        venue,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const grabSales = async (day, month, venue) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}grabSales`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        day,
        month,
        venue,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const generateEndOfDayReport = async (day, venue) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}generateEndOfDayReport`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        day,
        venue,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const grabEndOfDayReport = async (day, venue) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}grabEndOfDayReport`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        day,
        venue,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const handleRemove = async (data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}handleRemove`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        data,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const savePosUser = async (data) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}savePosUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        data,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getStaffMembers = async () => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}getStaffMembers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        venueID: localStorage.getItem("venueID"),
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const setTargets = async (week, targetsData) => {
  let queryWeek = week.toLocaleDateString('en-GB') + " - " + new Date(week.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB');
  try {
    const query = await fetch(`${import.meta.env.VITE_API}setTargets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        queryWeek,
        targetsData,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const getTargets = async (week) => {
  let queryWeek = week.toLocaleDateString('en-GB') + " - " + new Date(week.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB');
  try {
    const query = await fetch(`${import.meta.env.VITE_API}getTargets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        queryWeek,
      }),
    });
    const response = await query.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (product) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}deleteProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        product,
      }),
    });
    const response = await query.json();
    console.log("Product deleted!", new Date().toISOString('en-GB'));
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (product) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}updateProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        product,
      }),
    });
    const response = await query.json();
    console.log("Product updated!", new Date().toISOString('en-GB'));
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewProduct = async (product) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}addNewProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        product,
      }),
    });
    const response = await query.json();
    console.log("New product added!", new Date().toISOString('en-GB'));
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchWeeklyWeather = async () => {
  try {
    const response = await fetch("http://api.weatherapi.com/v1/forecast.json?key=0e4f502bab164b37bd285450232907&q=worcester%20uk&days=7&aqi=no&alerts=no");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};

export const saveTableLayout = async (layout, venueID) => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}saveTableLayout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        fromvenueid: venueID,
        layout: layout,
      }),
    });
    const response = await query.json();
    console.log("Received table layout.", new Date().toUTCString());
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const getTableLayout = async () => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}grabTableLayout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
        fromvenueid: localStorage.getItem("venueID"),
      }),
    });
    const response = await query.json();
    console.log("Receied table layout.", new Date().toUTCString());
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const getVenues = async () => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}grabVenues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
      }),
    });
    const response = await query.json();
    console.log("Receied venue data.", new Date().toUTCString());
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMenu = async () => {
  try {
    const query = await fetch(`${import.meta.env.VITE_API}grabProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        v: import.meta.env.VITE_G,
      }),
    });
    const response = await query.json();
    console.log("Receied menu data.", new Date().toUTCString());
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchHoliday = async () => {
  try {
    const response = await fetch("https://www.gov.uk/bank-holidays.json");
    const data = (await response.json())["england-and-wales"].events;
    let todaysDate = new Date();

    let formattedDate = todaysDate.toISOString('en-GB').split("T")[0];
    const event = data.find((event) => event.date === formattedDate);

    let currentDate = new Date();
    let holidays = [];
    for (let i = 0; i < 7; i++) {
      let formattedDate = currentDate.toISOString('en-GB').split("T")[0];
      const event = data.find((event) => event.date === formattedDate);
      holidays.push([formattedDate, event]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return holidays;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};

// export const fetchForecastWeek = async () => {
//   if (localStorage.getItem("forecast7") === "true") return;
//   localStorage.setItem("forecast7", true);

//   for (let n = 1; n < 8; n++) {
//     let dayt = (new Date().getDay() + n) % 7;

//     setTimeout(async () => {
//       let tempz = {
//         cloudy: weeklyWeather.forecast.forecastday[`${n - 1}`].hour[12].cloud,
//         humidity: weeklyWeather.forecast.forecastday[`${n - 1}`].hour[12].humidity,
//         windspeed: weeklyWeather.forecast.forecastday[`${n - 1}`].hour[12].wind_mph,
//         temp: weeklyWeather.forecast.forecastday[`${n - 1}`].hour[12].temp_c,
//         daytype: dayt,
//         isholiday: weeklyholiday[`${n - 1}`]?.title ? 1 : 0,
//       };
//       console.log(`calling api with this data:`, tempz);
//       try {
//         const response = await fetch(`${import.meta.env.VITE_API}forecast-quick`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Credentials": true,
//           },
//           body: JSON.stringify({
//             cloudy: weeklyWeather.forecast.forecastday[n - 1].hour[12].cloud,
//             humidity: weeklyWeather.forecast.forecastday[n - 1].hour[12].humidity,
//             windspeed: weeklyWeather.forecast.forecastday[n - 1].hour[12].wind_mph,
//             temp: weeklyWeather.forecast.forecastday[n - 1].hour[12].temp_c,
//             daytype: dayt,
//             isholiday: holiday[1]?.title ? 1 : 0,
//           }),
//         });
//         const data = await response.json();

//         const currentDate = new Date();
//         currentDate.setDate(currentDate.getDate() + n);
//         const year = currentDate.getFullYear();
//         const month = String(currentDate.getMonth() + 1).padStart(2, "0");
//         const day = String(currentDate.getDate()).padStart(2, "0");

//         setWeeklyForecast((prevState) => ({
//           ...prevState,
//           [n]: { date: `${year}-${month}-${day}`, average: data.average },
//         }));

//       } catch (error) {
//         console.error("Error fetching weather:", error);
//       }
//     }, 1111);
//   }
// };
