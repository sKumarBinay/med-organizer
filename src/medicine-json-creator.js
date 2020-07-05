const medicine = [
    { mammi: {
        '5 July': {
            Breakfast: ['Stemetil MD', 'Vertin 8 MG', 'Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Vertin 8 MG', 'Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Stemetil MD', 'Vertin 8 MG', 'Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '6 July': {
            Breakfast: ['Stemetil MD', 'Vertin 8 MG', 'Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Vertin 8 MG', 'Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Stemetil MD', 'Vertin 8 MG', 'Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Cacirol with milk', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '7 July': {
            Breakfast: ['Stemetil MD', 'Vertin 8 MG', 'Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Vertin 8 MG', 'Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Stemetil MD', 'Vertin 8 MG', 'Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '8 July': {
            Breakfast: ['Vertin 8 MG', 'Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Vertin 8 MG', 'Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '9 July': {
            Breakfast: ['Vertin 8 MG', 'Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Vertin 8 MG', 'Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '10 July': {
            Breakfast: ['Vertin 8 MG', 'Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Vertin 8 MG', 'Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '11 July': {
            Breakfast: ['Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '12 July': {
            Breakfast: ['Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '13 July': {
            Breakfast: ['Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Cacirol (with milk)', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '14 July': {
            Breakfast: ['Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Shelcal 500MG', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Cherry', 'Nexito plus (10/0.5 MG)', 'Prothaiden 25MG', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '15 July': {
            Breakfast: ['Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Cherry', 'Nexito plus (10/0.5 MG)', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '16 July': {
            Breakfast: ['Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Cherry', 'Nexito plus (10/0.5 MG)', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '17 July': {
            Breakfast: ['Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Cherry', 'Nexito plus (10/0.5 MG)', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '18 July': {
            Breakfast: ['Cherry', 'Pantocid HP kit', 'Cintapro 1MG', 'Bifilac HP'],
            Lunch: ['Meaxon plus', 'Cherry', 'Cintapro 1MG', 'Bifilac HP'],
            Dinner: ['Cherry', 'Nexito plus (10/0.5 MG)', 'Pantocid HP kit', 'Cintapro 1MG']
        },
        '19 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '20 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Cacirol (with milk)', 'Razo D 1']
        },
        '21 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '22 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '23 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '24 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '25 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '26 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '27 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Cacirol (with milk)', 'Razo D 1']
        },
        '28 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '29 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '30 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '31 July': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '1 Aug': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '2 Aug': {
            Breakfast: ['Razo 20 MG'],
            Lunch: [],
            Dinner: ['Razo D 1']
        },
        '3 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: ['Cacirol (with milk)']
        },
        '4 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '5 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '6 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '7 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '8 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '9 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '10 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: ['Cacirol (with milk)']
        },
        '11 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '12 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '13 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '14 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        },
        '15 Aug': {
            Breakfast: [],
            Lunch: [],
            Dinner: []
        }
    } },
    { baba: {} }
]