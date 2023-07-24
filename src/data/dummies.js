export const CUSTOMERS = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        address: '123 Main St, City, State 12345',
        city: 'Fortaleza',
        state: 'Ceará',
        active: true,
        notes: 'This is a note about John Doe',
        pets: [
            {
                id: 1,
                name: 'Fido',
                breed: 'Golden Retriever',
                weight: 65,
                age: 4,
                notes: 'This is a note about Fido'
            },
            {
                id: 2,
                name: 'Spot',
                breed: 'Dalmatian',
                weight: 55,
                age: 3,
                notes: 'This is a note about Spot'
            }
        ]
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phone: '0987654321',
        address: '321 Main St, City, State 12345',
        city: 'Curitiba',
        state: 'Paraná',
        active: false,
        notes: 'This is a note about Jane Smith',
        pets: [
            {
                id: 3,
                name: 'Buddy',
                breed: 'Labrador',
                weight: 75,
                age: 5,
                notes: 'This is a note about Buddy'
            }
        ]
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bobjohnson@example.com',
        phone: '1234509876',
        address: '555 Main St, City, State 12345',
        city: 'Belo Horizonte',
        state: 'Minas Gerais',
        active: true,
        notes: 'This is a note about Bob Johnson',
        pets: [
            {
                id: 4,
                name: 'Daisy',
                breed: 'Poodle',
                weight: 35,
                age: 7,
                notes: 'This is a note about Daisy'
            },
            {
                id: 5,
                name: 'Rosie',
                breed: 'Poodle',
                weight: 30,
                age: 6,
                notes: 'This is a note about Rosie'
            }
        ]
    }
]


export const VETSERVICES = [
    {
        id: 1,
        type: 'Consultation',
        customer_id: 1,
        pet_id: 1,
        date: '2020-01-01',
        time: '10:00',
        notes: 'This is a note about the consultation',
        anamnesis: {
            weight: 15,
            temperature: 38,
            heart_rate: 'good',
            respiratory_rate: 'good',
            feces: 'good',
            urine: 'good'
        },
        diagnosis: 'This is a diagnosis',
        prescription_id: 1
    },
    {
        id: 2,
        type: 'Consultation',
        customer_id: 1,
        pet_id: 2,
        date: '2020-01-01',
        time: '11:00',
        notes: 'This is a note about the consultation',
        anamnesis: {
            weight: 8,
            temperature: 40,
            heart_rate: 'good',
            respiratory_rate: 'regular',
            feces: 'good',
            urine: 'dark'
        },
        diagnosis: 'This is a diagnosis',
        prescription_id: 2
    },
    {
        id: 3,
        type: 'Vaccination',
        customer_id: 3,
        pet_id: 4,
        date: '2020-01-01',
        time: '12:00',
        notes: 'This is a note about the vaccination',
        anamnesis: {
            weight: 15,
            temperature: 38,
            heart_rate: 'good',
            respiratory_rate: 'good',
            feces: 'good',
            urine: 'good'
        },
        diagnosis: 'This is a diagnosis',
        prescription_id: 3
    },
]

