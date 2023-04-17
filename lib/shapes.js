// Base class for shapes
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
//  TODO create a method that renders a circle for your svg
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
    </svg>`
  }
}

class Triangle extends Shape {
 //  TODO create a method that renders a triangle for your svg
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="bisque" />
  
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text>
  
    </svg>`
  }
}

class Square extends Shape {
 //  TODO create a method that renders a square for your svg 
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="90" y="40" width="120" height="120" fill="turquoise" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">SVG</text>
  
    </svg>`
  }
}

module.exports = { Circle, Triangle, Square };
