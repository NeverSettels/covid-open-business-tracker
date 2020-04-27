export class MapApi {
  async getBuisnesses() {
    try {
      let response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
// const sampleResponse =  [
//   {
//     [0] "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5389834,
//            "lng": -122.8638372
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5403873802915,
//               "lng": -122.8629384197085
//            },
//            "southwest": {
//               "lat": 45.53768941970851,
//               "lng": -122.8656363802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "d97cbcf2a79783639a5e0e725f15bbd7bc5e6f92",
//      "name": "CVS Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 2449,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/114660321514350572734\">Robert Paruch</a>"
//            ],
//            "photo_reference": "CmRaAAAAeaEGV7YznityfRfRdtdFO6NBr0rDgXZTrxhK88EihHYwBGtIqUq29m-xbfEwWWMmFUTYsySsunUmS0fjFQJV9z8BXaHuxpaYhD7WEoLzvszhyTAwTlHOjIvQy-nRMSqSEhC82X7ksWKk3Gjv5eO7Ta_rGhRs-KqrQ37vs_IHaa8mjVbHi3Mp1g",
//            "width": 3145
//         }
//      ],
//      "place_id": "ChIJ7ehxbkMPlVQRoO16SXozdj0",
//      "plus_code": {
//         "compound_code": "G4QP+HF Beaverton, Oregon, United States",
//         "global_code": "84QVG4QP+HF"
//      },
//      "rating": 3.1,
//      "reference": "ChIJ7ehxbkMPlVQRoO16SXozdj0",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 14,
//      "vicinity": "18101 Northeast Evergreen Parkway, Beaverton"
//   },
//   [1]{
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5329779,
//            "lng": -122.6351061
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5346021302915,
//               "lng": -122.6340055197085
//            },
//            "southwest": {
//               "lat": 45.5319041697085,
//               "lng": -122.6367034802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "73c792875153e2773995b08c5440a6270356e940",
//      "name": "Vincent P. Wilmarth, RPH",
//      "place_id": "ChIJxR2o9M6glVQREhKxAjBiWOM",
//      "plus_code": {
//         "compound_code": "G9M7+5X Portland, Oregon, United States",
//         "global_code": "84QVG9M7+5X"
//      },
//      "reference": "ChIJxR2o9M6glVQREhKxAjBiWOM",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "vicinity": "3030 Northeast Weidler Street, Portland"
//   },
//   {
//     [2]"business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5361919,
//            "lng": -122.9354375
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5375440802915,
//               "lng": -122.9337061197085
//            },
//            "southwest": {
//               "lat": 45.5348461197085,
//               "lng": -122.9364040802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "c5c92422abf0af3a28adea87433c311b88088dcf",
//      "name": "Jeffrey D. Wiedemann, PharmD",
//      "opening_hours": {
//         "open_now": true
//      },
//      "place_id": "ChIJN3Aa5WYFlVQR-lEX04YEzRY",
//      "plus_code": {
//         "compound_code": "G3P7+FR Hillsboro, Oregon, United States",
//         "global_code": "84QVG3P7+FR"
//      },
//      "reference": "ChIJN3Aa5WYFlVQR-lEX04YEzRY",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "vicinity": "1255 Northeast 48th Avenue, Hillsboro"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5224981,
//            "lng": -123.0689218
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5238555802915,
//               "lng": -123.0675179197085
//            },
//            "southwest": {
//               "lat": 45.5211576197085,
//               "lng": -123.0702158802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "d54918865a9635c893ba457b1bafb1da51605458",
//      "name": "Walmart Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 608,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/100175204011242170854\">Walmart Pharmacy</a>"
//            ],
//            "photo_reference": "CmRaAAAAoTKjTo-LM_qZJvRQgR3nCrQwF-DabtWpAYOfsVMb7Hi4QA_3zjWVcEMVD0BCv7eS3I7o4ea-ZsqhH8bNm0GJwG1oP5ypxPv0FHSw8VxZWyg5leyyT_AF1tpQtf8n0WFGEhDDMIgGlIkr9WZiUn4Zq804GhSvacMs4wmA9WDMf3QicB2fQkcgEg",
//            "width": 1080
//         }
//      ],
//      "place_id": "ChIJ6wx3_0kalVQRGpmE06Rbv2M",
//      "plus_code": {
//         "compound_code": "GWCJ+XC Cornelius, Oregon, United States",
//         "global_code": "84QRGWCJ+XC"
//      },
//      "price_level": 1,
//      "rating": 4,
//      "reference": "ChIJ6wx3_0kalVQRGpmE06Rbv2M",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "department_store",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 11,
//      "vicinity": "220 North Adair Street, Cornelius"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5159415,
//            "lng": -122.5626061
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5173281802915,
//               "lng": -122.5612572197085
//            },
//            "southwest": {
//               "lat": 45.5146302197085,
//               "lng": -122.5639551802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "b6db11b8728ad079523719531a4cafa9fa02fc13",
//      "name": "CVS Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 667,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/111720640289866655395\">CVS Pharmacy</a>"
//            ],
//            "photo_reference": "CmRaAAAAxJMHhNAyS-Yvr0pvsKvLvW4o_W8jUdrxTmoorxe1iA6kkTprgKbkeRebmKokJ1hz7qNGkKnUjnPm5ABNw2fuSAANQM2sYXSUpsXq5RWn0AdbnTNHWWkwuPAxdL5fBuiVEhDzSYAInxI8WECXbjjG3LHBGhTm4dJgYekG2pagjOGkdgbA2_7aIg",
//            "width": 1000
//         }
//      ],
//      "place_id": "ChIJK6J-dqShlVQRccdq86y8xX8",
//      "plus_code": {
//         "compound_code": "GC8P+9X Portland, Oregon, United States",
//         "global_code": "84QVGC8P+9X"
//      },
//      "rating": 3.4,
//      "reference": "ChIJK6J-dqShlVQRccdq86y8xX8",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 32,
//      "vicinity": "9800 Southeast Washington Street, Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.53532980000001,
//            "lng": -122.8530965
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5366135802915,
//               "lng": -122.8517874197085
//            },
//            "southwest": {
//               "lat": 45.5339156197085,
//               "lng": -122.8544853802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "9e8827d7a536341d4f4611f256efaf11d9353b56",
//      "name": "Walmart Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 1200,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/113866566103591989149\">Walmart Pharmacy</a>"
//            ],
//            "photo_reference": "CmRaAAAAALTt7ADjDHJpEb9jlSNMMy0YtoFpDjGqpFsN_-fOkm4ebSDTpkFVbm_xAfQ-Wc6LZFYmyqOWzLub0VXS8Dl0PvlqUg4QeDDA9MuYZgrj2l2b1AAGJvSxwFYsXHHEyUU3EhC4aUKynDhgxIhKlts5UwL8GhQPIaWGsHuI8IxG3IAoIEUox0M5LQ",
//            "width": 1600
//         }
//      ],
//      "place_id": "ChIJwbikl0cPlVQRGhYfYiUEHck",
//      "plus_code": {
//         "compound_code": "G4PW+4Q Beaverton, Oregon, United States",
//         "global_code": "84QVG4PW+4Q"
//      },
//      "price_level": 1,
//      "rating": 3.7,
//      "reference": "ChIJwbikl0cPlVQRGhYfYiUEHck",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "department_store",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 17,
//      "vicinity": "17275 Northwest Cornell Road, Beaverton"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.4899427,
//            "lng": -122.6524247
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.4912860302915,
//               "lng": -122.6509935697085
//            },
//            "southwest": {
//               "lat": 45.4885880697085,
//               "lng": -122.6536915302915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "c328b37b36041ddedf5988288f9f1f551e50cb93",
//      "name": "NewEra Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 1080,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/112168730563106197306\">NewEra Pharmacy</a>"
//            ],
//            "photo_reference": "CmRaAAAA5vhQqNZU6D9UWw4W0y--YDD1-K5bM8hAPp5aVLwVZG4ngcAIesWIgJcM8w1BXMn8yWfRg1osO0zMllMT2w5pk_cGeHS6C9Vfdu5WWmrNcrFkVWeSW7x7-TSWTTI3KVVJEhCJIIIS0JkXUuCw5QZId5ZBGhSiMxeovrzT_yV6GCZMQ3D7AF3MBw",
//            "width": 1920
//         }
//      ],
//      "place_id": "ChIJDXYADTEKlVQRu467f4VyG6c",
//      "plus_code": {
//         "compound_code": "F8QX+X2 Portland, Oregon, United States",
//         "global_code": "84QVF8QX+X2"
//      },
//      "rating": 4.2,
//      "reference": "ChIJDXYADTEKlVQRu467f4VyG6c",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 32,
//      "vicinity": "1286 SE Holgate Blvd., #, Ste. C2, Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5347018,
//            "lng": -122.6541567
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5361293802915,
//               "lng": -122.6530500697085
//            },
//            "southwest": {
//               "lat": 45.5334314197085,
//               "lng": -122.6557480302915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "b40ebc264f490334dce2b7da6a917e985506dd1a",
//      "name": "Safeway Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 722,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/105243112414807108391\">Safeway Pharmacy</a>"
//            ],
//            "photo_reference": "CmRZAAAAjHGH16YFEHr7u8tfK8jHrWvRZB3tDL0vZxHfWFeAsj_tPlPN3c_Gec4mfhLs1p5GWIw5KaXBPXMGNgbm0T4FGAav6Z1F1LH0P615UNnkgGEvUnhkLdAXoFK64A0qnctgEhCPV5A1fDMfNZW28Drcy3LnGhQ2JApyUx78cM717dP4yQFekbmorQ",
//            "width": 722
//         }
//      ],
//      "place_id": "ChIJz3GNzLSglVQRx7NZ8enREsw",
//      "plus_code": {
//         "compound_code": "G8MW+V8 Portland, Oregon, United States",
//         "global_code": "84QVG8MW+V8"
//      },
//      "price_level": 2,
//      "rating": 2.2,
//      "reference": "ChIJz3GNzLSglVQRx7NZ8enREsw",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 24,
//      "vicinity": "1100 Northeast Broadway Street, Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.4989469,
//            "lng": -122.6713068
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5002958802915,
//               "lng": -122.6699578197085
//            },
//            "southwest": {
//               "lat": 45.4975979197085,
//               "lng": -122.6726557802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "35e393c31eddf9dcea0c7b7ba3ece50145ffdc1f",
//      "name": "Hartung Daniel M",
//      "place_id": "ChIJ3-EiZWgKlVQROx6KwzNoSw0",
//      "plus_code": {
//         "compound_code": "F8XH+HF Portland, Oregon, United States",
//         "global_code": "84QVF8XH+HF"
//      },
//      "reference": "ChIJ3-EiZWgKlVQROx6KwzNoSw0",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "vicinity": "3303 Southwest Bond Avenue, Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.4989469,
//            "lng": -122.6713068
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5002958802915,
//               "lng": -122.6699578197085
//            },
//            "southwest": {
//               "lat": 45.4975979197085,
//               "lng": -122.6726557802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "4201549035f03758124c4354995517244cef6612",
//      "name": "Jeegisha Patel, PharmD",
//      "place_id": "ChIJ3-EiZWgKlVQR2Yjpx_r-lSc",
//      "plus_code": {
//         "compound_code": "F8XH+HF Portland, Oregon, United States",
//         "global_code": "84QVF8XH+HF"
//      },
//      "reference": "ChIJ3-EiZWgKlVQR2Yjpx_r-lSc",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "vicinity": "Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.4989469,
//            "lng": -122.6713068
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5002958802915,
//               "lng": -122.6699578197085
//            },
//            "southwest": {
//               "lat": 45.4975979197085,
//               "lng": -122.6726557802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "e0145359f3d9992106d9a24a31a888404a95899d",
//      "name": "Daniel M. Hartung, PharmD",
//      "place_id": "ChIJ3-EiZWgKlVQRm_bt6S5X29c",
//      "plus_code": {
//         "compound_code": "F8XH+HF Portland, Oregon, United States",
//         "global_code": "84QVF8XH+HF"
//      },
//      "reference": "ChIJ3-EiZWgKlVQRm_bt6S5X29c",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "vicinity": "Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.4967555,
//            "lng": -122.885245
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.4982536802915,
//               "lng": -122.8838640197085
//            },
//            "southwest": {
//               "lat": 45.49555571970851,
//               "lng": -122.8865619802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "8747c7b787e84e898bf007313772010e47ada952",
//      "name": "Rite Aid Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 3024,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/103698566001657516586\">Artem Metelskiy</a>"
//            ],
//            "photo_reference": "CmRaAAAAU8UcjExWuLqfnqrvSOJi3whJhhJqfjR5Li1aicDnvUZ0NTtFhcet9KlrbLoLvix-mUtSBeiGSfFP2nMgAN-XcpmSlRqFji-VxpshhbyaGg27J6NkYKYYEJ41_h87XFzgEhDXvuRteGAzIGITQkB0AcRuGhRKd6NMyjmzZOOZ7_nuGuhdG9nEdQ",
//            "width": 4032
//         }
//      ],
//      "place_id": "ChIJFct_lEkOlVQRPR75efPkCV8",
//      "plus_code": {
//         "compound_code": "F4W7+PW Aloha, Oregon, United States",
//         "global_code": "84QVF4W7+PW"
//      },
//      "price_level": 2,
//      "rating": 4.3,
//      "reference": "ChIJFct_lEkOlVQRPR75efPkCV8",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "drugstore",
//         "convenience_store",
//         "food",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 12,
//      "vicinity": "20225 Southwest Tualatin Valley Highway, Aloha"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.4046286,
//            "lng": -122.5698339
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.40597723029151,
//               "lng": -122.5682795697085
//            },
//            "southwest": {
//               "lat": 45.40327926970851,
//               "lng": -122.5709775302915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "e6d37540ffcafa6c9295ddbe92b8b93ad21c528d",
//      "name": "Fred Meyer Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 2592,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/116956299475368709225\">awesometivity video&#39;s</a>"
//            ],
//            "photo_reference": "CmRaAAAAQ3nDU-CQMJ7mFhy8fkJuNiM8FvSPGZRJ61n9Sq7kCQDQTuL_4nK7uq3dCIQA2M81mdoLjpLlrFkCwJuqs9UCwnzkk4VyPbrmfKvzOJl6-K3kPq7pvkT6tLuLK6faJ0dwEhChIZr1wlqPX0-s5xjm3tVUGhQsuQNzK8AJSUwwyfdkqrI8QezRsA",
//            "width": 1944
//         }
//      ],
//      "place_id": "ChIJpWsxLsV1lVQRkkA-EK_V0Ss",
//      "plus_code": {
//         "compound_code": "CC3J+V3 Clackamas, Oregon, United States",
//         "global_code": "84QVCC3J+V3"
//      },
//      "rating": 2.3,
//      "reference": "ChIJpWsxLsV1lVQRkkA-EK_V0Ss",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 13,
//      "vicinity": "16301 Southeast 82nd Drive, Clackamas"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.48795630000001,
//            "lng": -122.7874884
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.48922828029151,
//               "lng": -122.7861443697085
//            },
//            "southwest": {
//               "lat": 45.48653031970851,
//               "lng": -122.7888423302915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "be4bacf0968827d21eb94afe65191dc5ed55a0b1",
//      "name": "CVS Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 667,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/108715073745941701065\">CVS Pharmacy</a>"
//            ],
//            "photo_reference": "CmRaAAAAkB4DyVK15vBjA5R4VAJdJMdF7Ha_tD16Az3WkFuIyG_BFSW7xNXu3kSCcxmzo4iHyjMOikR1_0fMOSQLfoHtg0p7g7S1v-AodMTmGodOlnQTq-Ltch_bTjwe78UJZy8qEhBXKPQn7EB8T5i5qBseOFswGhT-os5OHqi245uPGZgU71rt4JWzNQ",
//            "width": 1000
//         }
//      ],
//      "place_id": "ChIJH05tWBsMlVQRS5QQ9pnuLb4",
//      "plus_code": {
//         "compound_code": "F6Q7+52 Beaverton, Oregon, United States",
//         "global_code": "84QVF6Q7+52"
//      },
//      "rating": 4.3,
//      "reference": "ChIJH05tWBsMlVQRS5QQ9pnuLb4",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 10,
//      "vicinity": "10775 Southwest Beaverton Hillsdale Highway, Beaverton"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.526926,
//            "lng": -122.610854
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5282738802915,
//               "lng": -122.6093578697085
//            },
//            "southwest": {
//               "lat": 45.5255759197085,
//               "lng": -122.6120558302915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "93cf930fe7fee49254de63116ef7d866e0be0ba3",
//      "name": "Tavis B. Smith, PharmD",
//      "opening_hours": {
//         "open_now": true
//      },
//      "place_id": "ChIJSRSts-CglVQRRrEOHXdI__0",
//      "plus_code": {
//         "compound_code": "G9GQ+QM Portland, Oregon, United States",
//         "global_code": "84QVG9GQ+QM"
//      },
//      "reference": "ChIJSRSts-CglVQRRrEOHXdI__0",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "vicinity": "5050 Northeast Hoyt Street, Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.4411412,
//            "lng": -122.7520896
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.4424145802915,
//               "lng": -122.7503722197085
//            },
//            "southwest": {
//               "lat": 45.4397166197085,
//               "lng": -122.7530701802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "f328b12ecda25110d4566cb779a2b22887db2ab4",
//      "name": "Fred Meyer Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 1080,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/108928505680007148336\">Fred Meyer Pharmacy</a>"
//            ],
//            "photo_reference": "CmRaAAAA2a6x_FopCtuPxcfufyQYiTWjxe6vE90F96GzUVAIkst-k6IAADio4WmDV7Oy76nv4XkDZFV0aKvYGm8LrLU_R0zOSyatsCduwwsrbPgmcg_71nKwNVpTqr48NHvlins2EhCLHeIYBoNp_7rCETw2SczqGhTLSEnyuk-UHWKZ0AFR_Mkc_OIMjA",
//            "width": 1920
//         }
//      ],
//      "place_id": "ChIJ22ptychylVQRwN_ByCddwWw",
//      "plus_code": {
//         "compound_code": "C6RX+F5 Tigard, Oregon, United States",
//         "global_code": "84QVC6RX+F5"
//      },
//      "rating": 3.8,
//      "reference": "ChIJ22ptychylVQRwN_ByCddwWw",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 21,
//      "vicinity": "11565 Southwest Pacific Highway, Tigard"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.3663699,
//            "lng": -122.8382318
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.3677914302915,
//               "lng": -122.8368843197085
//            },
//            "southwest": {
//               "lat": 45.3650934697085,
//               "lng": -122.8395822802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "d4dcf2b38ff81a43727308cd8cfc6cd7419b247c",
//      "name": "CVS Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 667,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/109916865525674782968\">CVS Pharmacy</a>"
//            ],
//            "photo_reference": "CmRaAAAA1Gw138xQM3oBD3nQ7mHz2h8RUDSkhllR4Nu0fL2vGR_32ICiBSUxRxdJNR3y_YiNngFEmfi0ilFFP1kILtlUsZb4wX13VGnoFXkyY4qQz6f6iJPyfZZ8eCW6l-9uwHAAEhAdGNW8eeBkay838hFuQbM2GhSRzROjIarbo7jl9SCFo9pqAE6Edw",
//            "width": 1000
//         }
//      ],
//      "place_id": "ChIJw75ZQeFslVQRZ1OLEdR0gO8",
//      "plus_code": {
//         "compound_code": "9586+GP Sherwood, Oregon, United States",
//         "global_code": "84QV9586+GP"
//      },
//      "rating": 4.3,
//      "reference": "ChIJw75ZQeFslVQRZ1OLEdR0gO8",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 8,
//      "vicinity": "21365 Southwest Baler Way, Sherwood"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5758486,
//            "lng": -122.6810056
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5774238302915,
//               "lng": -122.6797645197085
//            },
//            "southwest": {
//               "lat": 45.5747258697085,
//               "lng": -122.6824624802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "7db38c7675425ec755c2b8cc769772f7a7d09916",
//      "name": "Fred Meyer Pharmacy",
//      "opening_hours": {
//         "open_now": true
//      },
//      "photos": [
//         {
//            "height": 3456,
//            "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/102593513582648740581\">Timberly Eyssen</a>"
//            ],
//            "photo_reference": "CmRaAAAAN-X8apc8nBTaGo6Q4CAEE4i3VHuppyb0MOHFw0wps3ihOkkMlWz_NSSzpcfXAVmtlHpvvf4Es4S9XlLWG2-HVe0ssoduN7yZiT7t4q-v4oZSX_0E7IH_Ue4tB1dye5apEhDx-88PReUrTWoKgdZlDqiAGhTlNHJlECUyx7cv56PvvO4gKnphyg",
//            "width": 4608
//         }
//      ],
//      "place_id": "ChIJgZ7-C6-nlVQRXmQsK4pc-5I",
//      "plus_code": {
//         "compound_code": "H8G9+8H Portland, Oregon, United States",
//         "global_code": "84QVH8G9+8H"
//      },
//      "rating": 2.5,
//      "reference": "ChIJgZ7-C6-nlVQRXmQsK4pc-5I",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "user_ratings_total": 29,
//      "vicinity": "7404 North Interstate Avenue, Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5156273,
//            "lng": -122.5619134
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5171694302915,
//               "lng": -122.5605604197085
//            },
//            "southwest": {
//               "lat": 45.5144714697085,
//               "lng": -122.5632583802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "a74ea13195c0eec829743a84724138b542f6862d",
//      "name": "David O. Steen, RPh",
//      "place_id": "ChIJK6J-dqShlVQR6tupjPN3bdM",
//      "plus_code": {
//         "compound_code": "GC8Q+76 Portland, Oregon, United States",
//         "global_code": "84QVGC8Q+76"
//      },
//      "reference": "ChIJK6J-dqShlVQR6tupjPN3bdM",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "vicinity": "9800 Southeast Washington Street, Portland"
//   },
//   {
//      "business_status": "OPERATIONAL",
//      "geometry": {
//         "location": {
//            "lat": 45.5156273,
//            "lng": -122.5619134
//         },
//         "viewport": {
//            "northeast": {
//               "lat": 45.5171694302915,
//               "lng": -122.5605604197085
//            },
//            "southwest": {
//               "lat": 45.5144714697085,
//               "lng": -122.5632583802915
//            }
//         }
//      },
//      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/pharmacy_cross-71.png",
//      "id": "bd84b52e23f927a5b9434b058bd45e1a49a1f343",
//      "name": "Anthony J. Secor, RPH",
//      "opening_hours": {
//         "open_now": true
//      },
//      "place_id": "ChIJK6J-dqShlVQRZUpuUnqdaNo",
//      "plus_code": {
//         "compound_code": "GC8Q+76 Portland, Oregon, United States",
//         "global_code": "84QVGC8Q+76"
//      },
//      "reference": "ChIJK6J-dqShlVQRZUpuUnqdaNo",
//      "scope": "GOOGLE",
//      "types": [
//         "pharmacy",
//         "health",
//         "point_of_interest",
//         "store",
//         "establishment"
//      ],
//      "vicinity": "9800 Southeast Washington Street, Portland"
//   }
// ]
