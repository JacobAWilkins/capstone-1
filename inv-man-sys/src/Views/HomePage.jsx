import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function HomePage({ defaultProducts, setProducts }) {

  const fruit = "fruit";
  const meat = "meat";
  const seafood = "seafood";
  const coffee = "coffee";
  const vegetable = "vegetable";
  const candy = "candy";

  const handleFruit = (e) => {
    const filtered = defaultProducts.filter(product => {
      return product.category.toLowerCase().includes(fruit.toLowerCase())
    })
    setProducts(filtered);
    window.scrollTo(0, 0);
  }

  const handleMeat = (e) => {
    const filtered = defaultProducts.filter(product => {
      return product.category.toLowerCase().includes(meat.toLowerCase())
    })
    setProducts(filtered);
    window.scrollTo(0, 0);
  }

  const handleSeafood = (e) => {
    const filtered = defaultProducts.filter(product => {
      return product.category.toLowerCase().includes(seafood.toLowerCase())
    })
    setProducts(filtered);
    window.scrollTo(0, 0);
  }

  const handleCoffee = (e) => {
    const filtered = defaultProducts.filter(product => {
      return product.category.toLowerCase().includes(coffee.toLowerCase())
    })
    setProducts(filtered);
    window.scrollTo(0, 0);
  }

  const handleVegetable = (e) => {
    const filtered = defaultProducts.filter(product => {
      return product.category.toLowerCase().includes(vegetable.toLowerCase())
    })
    setProducts(filtered);
    window.scrollTo(0, 0);
  }

  const handleCandy = (e) => {
    const filtered = defaultProducts.filter(product => {
      return product.category.toLowerCase().includes(candy.toLowerCase())
    })
    setProducts(filtered);
    window.scrollTo(0, 0);
  }

  const handleShop = (e) => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="homePage">
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/home_background.jpg"
            alt="First background"
          />
          <Carousel.Caption>
            <Link to="/products">
              <Button className="shopNowButton" variant="info" onClick={handleShop}>Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <CardDeck className="categoriesPanel">
        <Card>
          <Card.Img variant="top" src="./images/bananas.jpg" />
          <Card.Body>
            <Card.Title className="categoryTag">Fruit</Card.Title>
            <Card.Text>
              Give a hoot, eat more fruit! Fruit in a day is the healthy way!
            </Card.Text>
          </Card.Body>
          <Link to="/products">
            <Button className="categoryShopNow" variant="info" onClick={handleFruit}>Shop Now</Button>
          </Link>
        </Card>
        <Card>
          <Card.Img variant="top" src="./images/heritage_farm_chicken_breasts.jpg" />
          <Card.Body>
            <Card.Title className="categoryTag">Meat</Card.Title>
            <Card.Text>
              They claim red meat is bad for you. But I never saw a sick-looking tiger.
            </Card.Text>
          </Card.Body>
          <Link to="/products">
            <Button className="categoryShopNow" variant="info" onClick={handleMeat}>Shop Now</Button>
          </Link>
        </Card>
        <Card>
          <Card.Img variant="top" src="./images/salmon_atlantic_fillet.jpg" />
          <Card.Body>
            <Card.Title className="categoryTag">Seafood</Card.Title>
            <Card.Text>
              I'm on a seafood diet - I see food, I eat it.
            </Card.Text>
          </Card.Body>
          <Link to="/products">
            <Button className="categoryShopNow" variant="info" onClick={handleSeafood}>Shop Now</Button>
          </Link>
        </Card>
      </CardDeck>

      <CardDeck className="categoriesPanel">
        <Card>
          <Card.Img variant="top" src="./images/starbucks_pike_place_coffee.jpg" />
          <Card.Body>
            <Card.Title className="categoryTag">Coffee</Card.Title>
            <Card.Text>
              Everyone should believe in something. I believe I will have another coffee.
            </Card.Text>
          </Card.Body>
          <Link to="/products">
            <Button className="categoryShopNow" variant="info" onClick={handleCoffee}>Shop Now</Button>
          </Link>
        </Card>
        <Card>
          <Card.Img variant="top" src="./images/broccoli.jpg" />
          <Card.Body>
            <Card.Title className="categoryTag">Vegetables</Card.Title>
            <Card.Text>
              Vegetables are a must on a diet. I suggest carrot cake, zucchini bread, and pumpkin pie.
            </Card.Text>
          </Card.Body>
          <Link to="/products">
            <Button className="categoryShopNow" variant="info" onClick={handleVegetable}>Shop Now</Button>
          </Link>
        </Card>
        <Card>
          <Card.Img variant="top" src="./images/reeses_peanut_butter_cup.jpg" />
          <Card.Body>
            <Card.Title className="categoryTag">Candy</Card.Title>
            <Card.Text>
              Candy is natures way of making up for Mondays.
            </Card.Text>
          </Card.Body>
          <Link to="/products">
            <Button className="categoryShopNow" variant="info" onClick={handleCandy}>Shop Now</Button>
          </Link>
        </Card>
      </CardDeck>
    </div>
  )
}

export default HomePage;