class SuperMarioMenu extends Game{
    constructor(renderer) {
        super(renderer);
        // Declare game objects
    }

    Start() {
        // Set the screen size (canvas width and height)
        this.screenWidth = 640;
        this.screenHeight = 480;

        // Initialize the game objects
    }

    Update(deltaTime) {
        super.Update(deltaTime);  // Update the game objects of this.gameObjects array
    }

    Draw() {
        // Draw a black rectangle that fills the canvas
        this.renderer.DrawFillRectangle(0, 0, this.screenWidth, this.screenHeight, Color.black);

        super.Draw(); // Draw the game objects of this.gameObjects array
    }
}




window.onload = () => {
    Init(SuperMarioMenu);
}