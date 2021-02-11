/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    //console.log('output', output);
    //console.log('duration', filters.duration);
    //console.log('typeOf from', typeof(filters.duration.from));
    //console.log('typeOf to', typeof(filters.duration.to));
    output = output.filter(trip =>
      (trip.days >= parseInt(filters.duration.from)
      && trip.days <= parseInt(filters.duration.to))
    );
    //console.log('output', output);
  }
  // TODO - filter by tags
  if(filters.tags){
    //console.log('tags', filters.tags);
    //console.log('tripTags', trips[8].tags);
    for (let tag of filters.tags){
      console.log('w petli', tag);
      output = output.filter(trip =>
        trip.tags.includes(tag)
      );
    }
    //console.log('swiezy output', output);
  }
  // TODO - sort by cost descending (most expensive goes first)
  if (filters) {
    console.log('swiezutki outpucik', output);
    const prices = [];
    for (let trip of output){
      prices.push(parseInt(trip.cost));
    }
  }
  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(
    trip => trip.id == tripId
  );

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(
    trip => trip.country.code == countryCode
  );

  // TODO - filter trips by countryCode
  console.log('trips:', trips);
  console.log('countryCode:', countryCode);
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
