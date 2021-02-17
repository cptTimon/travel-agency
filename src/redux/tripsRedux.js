/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters, regions}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    output = output.filter(trip =>
      (trip.days >= parseInt(filters.duration.from)
      && trip.days <= parseInt(filters.duration.to))
    );
    //console.log('output', output);
  }
  // TODO - filter by tags
  if(filters.tags){
    for (let tag of filters.tags){
      output = output.filter(trip =>
        trip.tags.includes(tag)
      );
    }
    //console.log('swiezy output', output);
  }

  // TODO - filters by regions

  if(filters.regions) {
    console.log('obiekt regionów', regions);
    console.log('wybrane regiony', filters.regions);
    for (let trip of output){
      for (let region of filters.regions){
        console.log('patrze na regiony', regions[region].countries);
        output = output.filter(trip => regions[region].countries.includes(trip.country.code));
        if (regions[region].countries.includes(trip.country.code)){
          console.log('gra gitara', trip);
        }
      }
    }

  }

  // TODO - sort by cost descending (most expensive goes first)
  console.log('swiezutki outpucik', output);
  output.sort((a,b) => (parseInt(a.cost.slice(1)) > parseInt(b.cost.slice(1))) ? 1 : -1);
  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(
    trip => trip.id == tripId
  );

  // TODO - filter trips by tripId

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
