import { faker } from "@faker-js/faker";

const GetData = () => {
    const array = []

    for (let i = 0; i < 20; i++) {
        const genders = ["male", "female"]
        const gender = faker.random.arrayElement(genders)
        const name = faker.name.firstName(gender)
        const city = faker.address.city()
        const breed = faker.animal.cat()
        const age = faker.datatype.number(20)
        const price = faker.commerce.price(50, 500)

        array.push({ gender, name, city, breed, age, price })
    }
    return array
}
 
export default GetData;