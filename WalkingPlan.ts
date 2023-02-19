/*
  This file defines my walking plan for a section tramp of Te Araroa Trail in March/April 2023.
  All the data is in a JSON format and can be read as is.
  Additionally this script can be run to produce some output of the data in a more readable format with some helpful summaries.
  To run the script (deno will need to be installed on your system), use the following command:
    deno run --allow-write ./WalkingPlan.ts
*/

// Top level type definitions for the walking plan
type Walk = {
  "Tracks": Track[] // Ordered list of the tracks that make up the walk
}

// Each track is as defined by DOC/Te Araroa Trust 
type Track = {
  "Name": string, // Name of the track
  "Distance": number, // Distance in km
  "Points": Point[] // Points of interest along the track in order
}

// A point is a location on the track that has a specific purpose, e.g. start, break, night, etc.
type Point = {
  "Location": string,  // English description of the location
  "Coordinates": number[], // [lat, long] in decimal degrees, breaks are up for dynamic assessment
  "Type": string, // start, break, night, finishing track
  "Slope": string, // none, uphill, steep, downhill, flat
  "Distance": number, // Distance from the previous point
  "Date": string, // Date of the point being reached, in ISO format
  "Notes": string[], // Notes about the point or things along the way
  "Maps": string[] // Maps that cover the point using the LINZ topographic map codes
}

const data : Walk = {
  "Tracks": [
    {
      "Name": "Tekapo to Lake Ohau",
      "Distance": 29.4,
      "Points": [
        {
          "Location": "Lake Ruataniwha",
          "Coordinates": [-44.291, 170.084],
          "Type": "start",
          "Slope": "none",
          "Distance": 0,
          "Date": "2023-03-31",
          "Notes": [
            "Start at SH8 just past Lake Ruataniwha",
            "Get dropped of in Twizel if any last minute supplies are needed, this adds 4.4km to the section"
          ],
          "Maps": ["BZ15 - Twizel"]
        },
        {
          "Location": "Lake Ohau",
          "Coordinates": [-44.286, 169.938],
          "Type": "break",
          "Slope": "flat",
          "Distance": 16,
          "Date": "2023-03-31",
          "Notes": [],
          "Maps": ["BZ15 - Twizel"]
        },
        {
          "Location": "Lake Middleton Camping Ground",
          "Coordinates": [-44.274, 169.850],
          "Type": "night",
          "Slope": "flat",
          "Distance": 10.2,
          "Date": "2023-03-31",
          "Notes": [
            "Stock up on water",
            "DOC campground"
          ],
          "Maps": ["BZ15 - Twizel", "BZ14 - Mount Barth"]
        },
        {
          "Location": "Lake Ohau",
          "Coordinates": [-44.254, 169.826],
          "Type": "finishing track",
          "Slope": "flat",
          "Distance": 3.2,
          "Date": "2023-04-01",
          "Notes": [],
          "Maps": ["BZ14 - Mount Barth"]
        }
      ]
    },
    {
      "Name": "East Ahuriri Track",
      "Distance": 25.3,
      "Points": [
        {
          "Location": "Where the track meets the east branch of the Ahuriri river",
          "Coordinates": [-44.297, 169.761],
          "Type": "break",
          "Slope": "uphill",
          "Distance": 10,
          "Date": "2023-04-01",
          "Notes": [
            "Fill up water",
            "Will loose cell coverage going forward"
          ],
          "Maps": ["BZ14 - Mount Barth"]
        },
        {
          "Location": "Ahuriri River Valley",
          "Coordinates": [-44.390, 169.719],
          "Type": "night",
          "Slope": "downhill",
          "Distance": 11.5,
          "Date": "2023-04-01",
          "Notes": [
            "Camp near the last trees along the river's east branch"
          ],
          "Maps": ["BZ14 - Mount Barth", "CA14 - Lindis Pass"]
        },
        {
          "Location": "Ahuriri River Crossing",
          "Coordinates": [-44.420, 169.677],
          "Type": "finishing track",
          "Slope": "flat",
          "Distance": 3.8,
          "Date": "2023-04-02",
          "Notes": [
            "Large river crossing",
            "Backup option, Ireland Road bridge, 5km downstream",
            "Fill up water",
            "Spend time after crossing to get dry and warm up"
          ],
          "Maps": ["CA14 - Lindis Pass"]
        }
      ]
    },
    {
      "Name": "Breast Hill Track",
      "Distance": 54.9,
      "Points":[
        {
          "Location": "Halfway point to Top Timaru Hut",
          "Coordinates": [-44.428, 169.558],
          "Type": "break",
          "Slope": "uphill",
          "Distance": 11.4,
          "Date": "2023-04-02",
          "Notes": [
            "Fill up water from nearby stream before the track veers away",
            "Long day, mostly uphill"
          ],
          "Maps": ["CA14 - Lindis Pass"]
        },
        {
          "Location": "Top Timaru Hut",
          "Coordinates": [-44.471, 169.502],
          "Type": "night",
          "Slope": "uphill",
          "Distance": 11.4,
          "Date": "2023-04-02",
          "Notes": [
            "If running behind schedule, option to stay at The Tin Hut 9.5km from Birchwood Rd"
          ],
          "Maps": ["CA14 - Lindis Pass", "CA13 - Lake Hawea"]
        },
        {
          "Location": "Timaru River Junction",
          "Coordinates": [-44.530, 169.433],
          "Type": "break",
          "Slope": "downhill",
          "Distance": 12,
          "Date": "2023-04-03",
          "Notes": [
            "Dump/consume excess water before the climb to Stodys Hut",
            "Wuss out/behind option, follow the river down to Lake Hawea"
          ],
          "Maps": ["CA13 - Lake Hawea"]
        },
        {
          "Location": "Stodys Hut",
          "Coordinates": [-44.544, 169.436],
          "Type": "night",
          "Slope": "steep",
          "Distance": 2.2,
          "Date": "2023-04-03",
          "Notes": [
            "Steepest climb, 22 degree incline",
            "Dirt floor hut",
            "Fill up water from nearby stream"
          ],
          "Maps": ["CA13 - Lake Hawea"]
        },
        {
          "Location": "Breast Hill Summit",
          "Coordinates": [-44.562, 169.357],
          "Type": "break",
          "Slope": "uphill",
          "Distance": 8,
          "Date": "2023-04-04",
          "Notes": [
            "Check the views",
            "Alternate route to the hut is available if weather is bad",
            "All downhill from here",
            "Should pick up cell coverage if Lake Hawea town is in view"
          ],
          "Maps": ["CA13 - Lake Hawea"]
        },
        {
          "Location": "Pakituhi Hut",
          "Coordinates": [-44.582, 169.356],
          "Type": "night",
          "Slope": "flat",
          "Distance": 3.2,
          "Date": "2023-04-04",
          "Notes": [
            "Fill up water"
          ],
          "Maps": ["CA13 - Lake Hawea"]
        },
        {
          "Location": "Lake Hawea",
          "Coordinates": [-44.587, 169.320],
          "Type": "finishing track",
          "Slope": "downhill",
          "Distance": 5.1,
          "Date": "2023-04-05",
          "Notes": [],
          "Maps": ["CA13 - Lake Hawea"]
        }
      ]
    },
    {
      "Name": "Gladstone to Wanaka",
      "Distance": 30.2,
      "Points": [
        {
          "Location": "Hawea Hotel & Lodge",
          "Coordinates": [-44.609, 169.254],
          "Type": "night",
          "Slope": "flat",
          "Distance": 7.7,
          "Date": "2023-04-05",
          "Notes": [
            "Shower, maybe a beer",
            "Snacks for the next day",
            "Booking number, 38515"
          ],
          "Maps": ["CA13 - Lake Hawea"]
        },
        {
          "Location": "Albert Town",
          "Coordinates": [-44.672, 169.203],
          "Type": "break",
          "Slope": "flat",
          "Distance": 12,
          "Date": "2023-04-06",
          "Notes": [],
          "Maps": ["CA13 - Lake Hawea", "CA12 - Minaret Bay", "CB12 - Cardrona"]
        },
        {
          "Location": "Wanaka Backpackers Bothy",
          "Coordinates": [-44.700, 169.140],
          "Type": "night",
          "Slope": "flat",
          "Distance": 12,
          "Date": "2023-04-06",
          "Notes": [
            "Should probably finish track at the marina for completion's sake",
            "Booking number, 45764"
          ],
          "Maps": ["CB12 - Cardrona", "CA12 - Minaret Bay"]
        }
      ]
    }    
  ]
}

// function to list the location of each point in order of distance
function listPoints() {
  let points : any = [];
  for (let i = 0; i < data.Tracks.length; i++) {
    for (let j = 0; j < data.Tracks[i].Points.length; j++) {
      points.push(data.Tracks[i].Points[j]);
    }
  }
  
  points.sort((a: Point, b: Point) => b.Distance - a.Distance);
  let out = "Sections in order of distance:\n-----------------------------";
  for (let i = 0; i < points.length; i++) {
    out = `${out}\n${points[i].Location} - ${points[i].Distance}km ${points[i].Slope}`
  }
  return `${out}\n`;
}

// function to list the total distance for each date with the start and end locations
function listDates() {
  let dates : any = [];
  for (let i = 0; i < data.Tracks.length; i++) {
    for (let j = 0; j < data.Tracks[i].Points.length; j++) {
      dates.push(data.Tracks[i].Points[j]);
    }
  }
  
  dates.sort((a: Point, b: Point) => a.Date.localeCompare(b.Date));
  let out = "Total distance for each date:\n-----------------------------\n";
  let was = dates[0].Date;
  let start = dates[0].Location;
  let distance = 0;
  let at = "";
  for (let i = 1; i < dates.length; i++) {
    let today = dates[i].Date;
    at = dates[i-1].Location;
    if (today != was) {
      out = `${out}\n${was} - ${distance}km - ${start} -> ${at}`
      distance = dates[i].Distance;
      was = today;
      start = at;
    } else {
     distance = distance + dates[i].Distance;
    }
  }
  return `${out}\n${was} - ${distance}km - ${start} -> ${at}\n`
}

// function to list the unique maps used
function listMaps() {
  let maps = new Set<string>(); 
  for (let i = 0; i < data.Tracks.length; i++) {
    for (let j = 0; j < data.Tracks[i].Points.length; j++) {
      for (let k = 0; k < data.Tracks[i].Points[j].Maps.length; k++) {
        maps.add(data.Tracks[i].Points[j].Maps[k]);
      }
    }
  }
  let out = "Unique Maps used:\n-----------------------------"
  
  maps.forEach((value: string) => {
    out = `${out}\n${value}`
  });
  return `${out}\n`
}

// function to take a point and output it as a pretty string
function pointToString(point: Point) {
  let output = `- ${point.Location} - ${point.Distance}km, ${point.Slope} -
  ${point.Type} - ${point.Date}
  `;
  for (let i = 0; i < point.Notes.length; i++) {
    output = output + `  ${point.Notes[i]}
  `;
  }
  output = output + `  ${point.Maps}
  `;
  return output;
}

// do the thing
let output = "Walking Plan\n=============================\n\n";
data.Tracks.forEach((track: Track) => {
  output = `${output}*** ${track.Name} ***\n\n`;
  track.Points.forEach((point: Point) => {
    output = `${output}${pointToString(point)}\n`;
  });
});

output = `${output}\n\n${listPoints()}`;
output = `${output}\n\n${listDates()}`;
output = `${output}\n\n${listMaps()}`;

const path = "WalkingPlan.txt";

Deno.writeTextFile(path, output).then(() => {
  console.log(output);
  console.log(`Output also written to ${path}`);
});




