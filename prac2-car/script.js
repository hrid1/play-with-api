const data = [
    {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
    "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
    "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags,Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:"Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
    "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
    },
    ];

    // ---------------------this js code--------------------

    const car1 = data[0];
    const car1Img = car1.imageURL;
    const car1Name = car1.name;
    const car1Details = car1.description;
    const car1Price = car1.price;

    document.getElementById('car1-pic').src = car1Img;
    document.getElementById('car1-name').innerText = car1Name;
    document.getElementById('car1-details').innerText = car1Details;
    document.getElementById('car1-price').innerText = car1Price;


    const car2 = data[1];
    const car2Img = car2.imageURL;
    const car2Name = car2.name;
    const car2Details = car2.description;
    const car2Price = car2.price;

    document.getElementById('car2-pic').src = car2Img;
    document.getElementById('car2-name').innerText = car2Name;
    document.getElementById('car2-details').innerText = car2Details;
    document.getElementById('car2-price').innerText = car2Price;


    const car3 = data[2];
    const car3Img = car3.imageURL;
    const car3Name = car3.name;
    const car3Details = car3.description;
    const car3Price = car3.price;

    document.getElementById('car3-pic').src = car3Img;
    document.getElementById('car3-name').innerText = car3Name;
    document.getElementById('car3-details').innerText = car3Details;
    document.getElementById('car3-price').innerText = car3Price;



