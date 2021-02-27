const shapesOnDom = document.getElementById("shapesOnDom");

class Shape {
	constructor(left, top, color) {
		this.left = left;
		this.top = top;
		this.color = color;
	}

	render() {
		return "";
	}
}

//the circle shape class
class Circle extends Shape {
	constructor(left, top, color, radius) {
		super(left, top, color);
		this.radius = radius;
	}

	render() {
		return `<div style="position: absolute; left: ${this.left}px; top: ${
			this.top
		}px; background-color: ${this.color}; width: ${
			this.radius * 2
		}px; height : ${this.radius * 2}px; border-radius: 50% " > </div>`;
	}
}

// the square shape class
class Square extends Shape {
	constructor(left, top, color, width) {
		super(left, top, color);
		this.width = width;
	}

	render() {
		return `<div style="position: absolute; left: ${this.left}px; top: ${this.top}px; background-color: ${this.color}; width: ${this.width}px; height: ${this.width}px "> </div>`;
	}
}

// the rectangular shape
class Rectangular extends Shape {
	constructor(left, top, color, width) {
		super(left, top, color);
		this.width = width;
	}

	render() {
		return ` <div style=" position: absolute; left: ${this.left}px; top: ${
			this.top
		}px; background-color: ${this.color}; width: ${this.width}px; height: ${
			this.width / 2
		}px  "> </div> `;
	}
}

//the main board where all the shape will be shown
class Board {
	constructor(color, width = 100, height = 100) {
		this.color = color;
		this.width = width;
		this.height = height;
		this.shapes = [];
	}

	addShape(shape) {
		this.shapes.push(shape);
	}

	render() {
		let content = this.shapes.map((shape) => shape.render()).join("\n");

		content = ` <div class="board" style="position: relative ;width: ${this.width}%; height: ${this.height}vh; background-color: ${this.color}" > 
            ${content}
        </div> `;

		shapesOnDom.innerHTML = content;
	}
}

const board = new Board("green");
board.addShape(new Circle(100, 100, "red", 50));
board.addShape(new Square(300, 100, "yellow", 100));
board.addShape(new Rectangular(500, 100, "cyan", 150));
board.render();
