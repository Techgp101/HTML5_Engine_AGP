class MyGame extends Game{
    constructor(renderer) {
        super(renderer);

        this.graphicAssets = {
            mario_img: {
                path: "MyGame/Assets/mario.png",
                img: null
            },
        };

        this.redBox = null;
        this.player = null;
    }

    Start(){
        super.Start();

        // SETUP INPUT ACTIONS

        Input.RegisterAxis("MoveHorizontal", [
            { type: 'key', positive: KEY_D, negative: KEY_A },
            { type: 'key', positive: KEY_RIGHT, negative: KEY_LEFT },
            { type: 'gamepadaxis', stick: 'LS', axis: 0 }, // Left Stick X
            { type: 'gamepadbutton', positive: 'DPAD_RIGHT', negative: 'DPAD_LEFT' }
        ]);

        Input.RegisterAxis("MoveVertical", [
            { type: 'key', positive: KEY_S, negative: KEY_W },
            { type: 'key', positive: KEY_DOWN, negative: KEY_UP },
            { type: 'gamepadaxis', stick: 'LS', axis: 1 }, // Left Stick Y
            { type: 'gamepadbutton', positive: 'DPAD_DOWN', negative: 'DPAD_UP' }
        ]);

        Input.RegisterAction("Rotate",[
            { type: "key", code: KEY_SPACE}
        ]);

        // GAMEOBJECTS

        this.redBox = new RectangleGO(new Vector2(this._screenHalfWidth, this._screenHalfHeight), 100, 100, Color.yellow);
        this.gameObjects.push(this.redBox);
        
        this.player = new Player(new Vector2(this._screenHalfWidth, this._screenHalfHeight), this.graphicAssets.mario_img.img);
        this.gameObjects.push(this.player);
    }

    Update(deltaTime){
        this.redBox.rotation += 0.25;
        this.redBox.x = this._screenHalfWidth + Math.cos(totalTime * 5) * 100;
        this.redBox.y = this._screenHalfHeight + Math.sin(totalTime * 5) * 100;
;
        super.Update(deltaTime);
    }

    Draw(){
        this.renderer.DrawBasicRectangle(0, 0, this._screenWidth, this._screenHeight, Color.purple);
        
        super.Draw();
    }
}

class Player extends SpriteObject{
    constructor(position, img) {
        super(position, 0, 0.1, img);

        this.speed = 100;
    }

    Update(deltaTime) {
        // if(Input.IsKeyPressed(KEY_LEFT) || Input.IsKeyPressed(KEY_A))
        //     this.x -= this.speed * deltaTime;
        // if(Input.IsKeyPressed(KEY_RIGHT) || Input.IsKeyPressed(KEY_D))
        //     this.x += this.speed * deltaTime;
        // if(Input.IsKeyPressed(KEY_UP) || Input.IsKeyPressed(KEY_W))
        //     this.y -= this.speed * deltaTime;
        // if(Input.IsKeyPressed(KEY_DOWN) || Input.IsKeyPressed(KEY_S))
        //     this.y += this.speed * deltaTime;
        
        this.x += Input.GetAxis("MoveHorizontal") * this.speed * deltaTime;
        this.y += Input.GetAxis("MoveVertical") * this.speed * deltaTime;

        if(Input.GetActionDown("Rotate")){
            this.rotation += PIH;
        }
    }
}

window.onload = () => {
    Init(MyGame);
}