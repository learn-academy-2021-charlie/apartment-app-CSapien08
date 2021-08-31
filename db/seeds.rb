# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
    {
        email: 'test@testing.com',
        password: '123456',
        password_confirmation: '123456'
    }
]

users.each do |att|
    User.create att
end

apartments = [
    {
        street: '123 Street',
        city: 'SD',
        state: 'CA',
        manager: 'Todd',
        email: 'Todd@testing.com',
        price: '1000',
        bedrooms: 2,
        bathrooms: 3,
        pets: 'all pets welcome'
    },
    {
        street: '456 Street',
        city: 'Oceanside',
        state: 'CA',
        manager: 'Jared',
        email: 'Jared@testing.com',
        price: '1500',
        bedrooms: 4,
        bathrooms: 3,
        pets: 'No Pets'
    },
    {
        street: '789 Street',
        city: 'Encinitas',
        state: 'CA',
        manager: 'Trey',
        email: 'trey@testing.com',
        price: '1000',
        bedrooms: 2,
        bathrooms: 3,
        pets: 'all pets welcome'
    },
    {
        street: '123 Street',
        city: 'San Marcos',
        state: 'CA',
        manager: 'Thomas',
        email: 'Thomas@testing.com',
        price: '900',
        bedrooms: 1,
        bathrooms: 1.5,
        pets: 'all pets welcome'
    },
    {
        street: '123456 Street',
        city: 'Carlsbad',
        state: 'CA',
        manager: 'Amanda',
        email: 'Amanda@testing.com',
        price: '3000',
        bedrooms: 5,
        bathrooms: 1,
        pets: 'all pets welcome'
    }
]

first_user = User.where(email: 'test@testing.com').first

apartments.each do |att|
    first_user.apartments.create att
end