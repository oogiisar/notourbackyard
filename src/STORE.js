export default {

    "data": {
        "trash_types": [
            "paper",
            "plastic",
            "rubber",
            "metal"
        ],
        "World": {
            "users": 539,
            "garbage_pieces": 372890
        },
        "United States": {
            "users": 146,
            "garbage_pieces": 8372,
            "Regions": {
                "Arizona": {
                    "users": 112,
                    "garbage_pieces": 7834
                },
                "California": {
                    "users": 34,
                    "garbage_pieces": 829
                }
            }             
        },
        "Mongolia": {
            "users": 234,
            "garbage_pieces": 158434,
            "Regions": {
                "Hovsgol": {
                    "garbage_pieces": 100000
                },
                "Hoved": {
                    "garbage_pieces": 58434
                }  
            },
            "user": [
                {
                    "uid": 1,
                    "name": "oogii",
                    "email": "oogiisar@gmail.com",
                    "password": "oaijsdaoisa",
                    "home_country": "Mongolia",
                    "cleanups":[ 
                        {
                            "location": "Hovsgol",
                            "date": "2/14/2020",
                            "type_of_trash": "paper",
                            "quantity": 343
                        },
                        {
                            "location": "Hovd",
                            "date": "2/20/2020",
                            "type_of_trash": "plastic",
                            "quantity": 967
                        },
                        {
                            "location": "Khovsgol",
                            "date": "3/5/2020",
                            "type_of_trash": "rubber",
                            "quantity": 5
                        }
                    ]
                },
                {
                    "uid": 2,
                    "name": "Brian",
                    "email": "brian@gmail.com",
                    "password": "oaijsdaoisa",
                    "home_country": "United States",
                    "cleanups":[ 
                        {
                            "location": "Arizona",
                            "date": "2/14/2020",
                            "type_of_trash": "paper",
                            "quantity": 343
                        },
                        {
                            "location": "Arizona",
                            "date": "2/20/2020",
                            "type_of_trash": "plastic",
                            "quantity": 967
                        },
                        {
                            "location": "California",
                            "date": "3/5/2020",
                            "type_of_trash": "rubber",
                            "quantity": 5
                        }
                    ]
                }
            ]
        }
    }
}