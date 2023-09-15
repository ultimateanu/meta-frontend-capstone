import restaurant from "../assets/restaurant.jpg"

function HomePage() {
    const specials = [
        {
            name: "Greek Salad",
            price: "$15.99",
            desc: `Enjoy the crisp and refreshing flavors of our Greek Salad, 
            a delightful blend of fresh cucumbers, tomatoes, Kalamata olives, 
            and creamy feta cheese, drizzled with our signature tangy 
            vinaigrette. It's a Mediterranean classic that's the perfect 
            balance of savory and tangy, a true taste of Greece.`
        },
        {
            name: "Bruschetta",
            price: "$11.99",
            desc: `Indulge in the timeless Italian classic! 
            Savor the perfect harmony of freshly toasted baguette slices 
            topped with ripe tomatoes, aromatic basil, garlic, and a drizzle 
            of extra-virgin olive oil. It's a burst of Mediterranean flavors 
            in every bite.`
        },
        {
            name: "Lemon Pastry",
            price: "$7.99",
            desc: `Experience pure zesty delight with our Lemon Dessert. 
            Dive into a symphony of citrusy heaven as you savor the bright 
            and tangy flavors of our luscious lemon creation. A sweet and 
            refreshing finale to your meal that will leave your taste buds 
            singing.`}
    ];

    return (
        <>
            <section id="banner">
                <div class="left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Little Lemon is a charming family-owned Mediterranean
                        restaurant that artfully blends traditional recipes with
                        a modern twist. Nestled in our community, we offer a
                        diverse menu of Mediterranean flavors, each dish crafted
                        with passion and creativity.
                    </p>
                </div>

                <img src={restaurant} alt="restaurant seating area" />
            </section>

            <section id="specials">
                {specials.map(item => {
                    return (
                        <div class="card">
                            <div class="top-row">
                                <h3>{item.name}</h3>
                                <span> {item.price}</span>
                            </div>

                            <p class="description">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}
            </section>
        </>

    );
}

export default HomePage;
