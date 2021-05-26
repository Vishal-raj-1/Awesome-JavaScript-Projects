class game{

    constructor(array_size){
        this.canvas = document.getElementById("game_area");
        this.ctx = this.canvas.getContext("2d");
        this.array_size = array_size;
        this.image_array = new Array(array_size);//array containing alternate images of brick and balloon
        this.dart = document.createElement("img");
        this.pop = document.createElement("img");
        this.oops = document.createElement("img");
        this.obj_width = 50;
        this.obj_height = 50;
        this.canvas_positions = [];//array containing the canvas x co-ordinates where object appears
        this.is_pos_occupied = {};//container to check if the x position of canvas is free or not 
        this.is_brick_or_balloon = {};//container to keep track of the image that is appearing on different canvas positions
        this.position_y = {};//container to keep track of object's y position in each canvas position
        this.count = 0;//to check number of objects to display on screen
        this.is_left_key_pressed = {};//to keep track of positions in y direction where the left key has been pressed and dart is still on move
        this.dart_position_in_x = {};//to keep track of dart's x position after it has been shot
        this.element_co_ordinates = {};//keep track of element's x and y co-ordinates
        this.dart_pos_y = 550;//initial dart position in y
        this.is_element_hit = {};//checking whether in a particular canvas x position the dart hits an element
        this.hit_brick_pos_y = 0;//keep track of position of hit bricks appearing on right
        this.miss_balloon_pos_y = 0;//to keep track of missed balloons appearing in the dart area
        this.score = 0;
    }

    //loading and drawing image array
    load_and_draw()
    {
        draw_partition();
        //dart
        this.dart.src = "../assets/Images/BalloonAndBrickGame/dart.png";
        this.dart.onload = ()=>{
        this.ctx.drawImage(this.dart, 950, this.dart_pos_y, this.obj_width, this.obj_height);}
        
        //oops and pop
        this.pop.src = "../assets/Images/BalloonAndBrickGame/pop.png";
        this.oops.src = "../assets/Images/BalloonAndBrickGame/oops.png";
        this.pop.onload = ()=>{
            this.ctx.drawImage(this.pop, 950, 600, this.obj_width, this.obj_height);}
        this.oops.onload = ()=>{
                this.ctx.drawImage(this.oops, 950, 600, this.obj_width, this.obj_height);}

        //balloons and bricks
        let image_count = this.array_size;
        for (var i = 0; i < this.array_size; i++)
        {
            this.image_array[i] = new Image();
            if(i%2 == 0)
            {
                this.image_array[i].src = "../assets/Images/BalloonAndBrickGame/balloon.png";
            }
            else
            {
                this.image_array[i].src = "../assets/Images/BalloonAndBrickGame/brick.png";
            }
            this.image_array[i].onload = () => {
                loaded()
                if (image_count == 0){
                    this.draw();
                }};
            let pos = 100*(i+1)
            this.canvas_positions.push(pos);
        }
        
        function loaded ()
        {
            image_count--;
        }
    }

    draw()
    {
        for (var i = 0; i < this.array_size; i++)
        {
            let pos = 100*(i+1);
            this.ctx.drawImage(this.image_array[i], pos, 600, this.obj_height, this.obj_width);
        }
    }

    game_start(start_time_nxt_obj = Date.now())
    {
        //randomizing the position to be selected
        var pos_ind = Math.floor(Math.random()*8);
        while (this.is_pos_occupied[pos_ind] == true)
        {
            pos_ind = Math.floor(Math.random()*8);
        }
        this.is_pos_occupied[pos_ind] = true;
        //randomizing the image to be selected
        var img_array_pos = Math.floor(Math.random()*8);
        this.is_brick_or_balloon[this.canvas_positions[pos_ind]] = img_array_pos;
        this.position_y[this.canvas_positions[pos_ind]] = 600;
        var start_time = Date.now(); 
        var checked_for_brick = false;
        //animate the chosen object on the screen
        this.move(start_time, pos_ind, img_array_pos, start_time_nxt_obj, checked_for_brick);
    }

    move(start_time, pos_ind, img_array_pos, start_time_nxt_obj, checked_for_brick)
    {
        var pos_y = this.position_y[this.canvas_positions[pos_ind]];
        var continue_obj_motion = true;
        var wait_interval = Math.random()*800;
        while(wait_interval < 400)
        {
            wait_interval = Math.random()*800;
        }
        if (Date.now() - start_time > wait_interval)
        {
            this.update_score();
            var pos_x = this.canvas_positions[pos_ind];
            start_time = Date.now();
            //if element not hit then its motion
            if(this.is_element_hit[pos_x] == false || this.is_element_hit[pos_x] == undefined)
            {
                this.ctx.clearRect(pos_x,pos_y, this.obj_width, this.obj_height);
                pos_y-=50;
                this.element_co_ordinates[pos_x] = pos_y;
                this.position_y[pos_x] = pos_y;
                this.ctx.drawImage(this.image_array[img_array_pos],pos_x,pos_y, this.obj_width, this.obj_height);
            }
            //if element hit check if it is a brick
            else
            {
                if(!checked_for_brick)
                {
                    this.check_if_brick(img_array_pos);
                    checked_for_brick = true;
                }
                this.element_co_ordinates[pos_x] = 600;
                this.position_y[pos_x] -= 50;
            }

            //animate another 3 objects after certain time intervals
            if (Date.now() - start_time_nxt_obj > 1000 && this.count < 4)
            {
                start_time_nxt_obj = Date.now();
                this.count+=1;
                this.game_start(start_time_nxt_obj);
            }

            //if reached the top of game area reset the position
            if (this.position_y[pos_x] <= -this.obj_height)
            {
                //check if element being reset is balloon or brick
                if (this.is_element_hit[pos_x] == true)
                {
                    this.is_element_hit[pos_x] = false;
                }
                else
                {
                    this.check_if_balloon(img_array_pos);
                }
                this.position_y[pos_x] = 600;
                continue_obj_motion = false;
                this.is_pos_occupied[pos_ind] = false;
                this.element_co_ordinates[pos_x] = 600;
            }
        }

        //check if next frame is needed for the movement of existing object on screen
        if (continue_obj_motion && (!this.game_over()))
        {
            requestAnimationFrame(()=>{this.move(start_time, pos_ind, img_array_pos, start_time_nxt_obj, checked_for_brick);});
        }

        //check if next frame is needed for appearence and movement of new object on screen
        if ((!continue_obj_motion) && (!this.game_over()))
        {
            requestAnimationFrame(()=>{this.game_start()});
        }
    }

    //checking for arrow key press
    move_dart(key)
    {
        if(key === "ArrowDown" && (!this.game_over()))
        {
            this.ctx.clearRect(948, this.dart_pos_y, 50, 50);
            if (this.dart_pos_y >= 550)
            {
                this.dart_pos_y = this.miss_balloon_pos_y-50;
            }
            this.dart_pos_y += 50;
            this.ctx.drawImage(this.dart, 948, this.dart_pos_y, 50, 50);
        }

        if(key === "ArrowUp" && (!this.game_over()))
        {
            this.ctx.clearRect(948, this.dart_pos_y, 50, 50);
            if (this.dart_pos_y <= this.miss_balloon_pos_y)
            {
                this.dart_pos_y = 600;
            }
            this.dart_pos_y -= 50;
            this.ctx.drawImage(this.dart, 948, this.dart_pos_y, 50, 50);
        }

        if (key === "ArrowLeft" && (!this.game_over()))
        {
            this.shoot_dart();
        }
    }

    shoot_dart()
    {
        if (this.is_left_key_pressed[this.dart_pos_y] == undefined || this.is_left_key_pressed[this.dart_pos_y] == false)
        {
            var time_at_start = Date.now();
            var curr_pos = 900;
            var pos_y = this.dart_pos_y;
            this.is_left_key_pressed[pos_y] = true;
            //first movement of dart is 50 steps
            this.ctx.clearRect(curr_pos, pos_y, this.obj_height, this.obj_width);
            curr_pos -= 50;
            var first_movement = true;
            var to_continue = true;
            var this_to_do = this;
            //to check if dart hits the element and the element disappears along with the dart's next frame
            var is_hit_local = false;
            //function to move the dart towards the left after certain time interval
            to_do();
            function to_do()
            {
                if(Date.now() - time_at_start > 100)
                {
                    time_at_start = Date.now();
                    //check for clearing element with the dart
                    if (is_hit_local)
                    {
                        this_to_do.ctx.clearRect(curr_pos-50, pos_y-10, 80, 80);
                        is_hit_local = false;
                    }
                    //check for dart's end position
                    if (curr_pos <= 50)
                    {
                        this_to_do.dart_position_in_x[pos_y] = 900;
                        to_continue = false;
                        this_to_do.ctx.clearRect(curr_pos, pos_y, this_to_do.obj_width, this_to_do.obj_height);
                        this_to_do.is_left_key_pressed[pos_y] = false;
                        return;
                    }
                    //if dart's first movement is done move it 100 steps in each frame
                    if (!first_movement)
                    {
                        this_to_do.ctx.clearRect(curr_pos, pos_y, this_to_do.obj_height, this_to_do.obj_width);
                        curr_pos -= 100;
                    }
                    first_movement = false;
                    this_to_do.dart_position_in_x[pos_y] = curr_pos;
                    //check if dart hits any object
                    is_hit_local = this_to_do.check_collision(curr_pos, pos_y);
                    this_to_do.ctx.drawImage(this_to_do.dart,curr_pos, pos_y, this_to_do.obj_width, this_to_do.obj_height);
                }
                if (to_continue && (!this_to_do.game_over()))
                {
                    requestAnimationFrame(()=>to_do());
                }
            }
        }
    }

    check_collision(curr_pos, dart_pos_y)
    {
        if (this.element_co_ordinates[curr_pos-50] == dart_pos_y)
        {
            //if dart hits an object draw pop or oops accordingly
            this.is_element_hit[curr_pos-50] = true;
            if(this.is_brick_or_balloon[curr_pos-50] % 2 == 0)
            {
                this.ctx.drawImage(this.pop, curr_pos-50, dart_pos_y-10, 80, 80);
                this.score += 1;
            }
            else
            {
                this.ctx.drawImage(this.oops, curr_pos-50, dart_pos_y-10, 80, 80);
            }
            return true;
        }
        return false;
    }
    
    //if brick is hit draw it on the right of the canvas
    check_if_brick(image_array_pos)
    {
        if (image_array_pos%2 == 1)
        {
            this.ctx.drawImage(this.image_array[image_array_pos], 1025, this.hit_brick_pos_y, this.obj_width, this.obj_height);
            this.hit_brick_pos_y+=50;
        }
    }

    //if balloon is missed draw it to restrict dart's upward movement
    check_if_balloon(image_array_pos)
    {
        if(image_array_pos%2 == 0)
        {
            if(this.dart_pos_y == this.miss_balloon_pos_y)
            {
                this.ctx.clearRect(948, this.dart_pos_y, this.obj_width, this.obj_height);
                this.dart_pos_y+=50;
                this.ctx.drawImage(this.dart, 948, this.dart_pos_y, this.obj_width, this.obj_height);
            }
            this.ctx.drawImage(this.image_array[image_array_pos], 950, this.miss_balloon_pos_y, this.obj_width, this.obj_height);
            this.miss_balloon_pos_y+=50;
        }
    }

    //updation of score
    update_score()
    {
        var score_update = document.getElementById("score");
        score_update.textContent = "Score: "+this.score;
    }

    //check if missed balloons or hit bricks reach their max count
    game_over()
    {
        if(this.hit_brick_pos_y >= 600 || this.miss_balloon_pos_y >= 600)
        {
            draw_game_over();
            return true;
        }
        return false;
    }
}

//main function
draw_start_window();
addEventListener("keydown", (event)=>{start(event.code);});
var has_game_started = false;
function start(key_code)
{
    if(key_code == "Space" && (!has_game_started)){
        has_game_started = true;
        var canvas = document.getElementById("game_area");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0,0, canvas.width, canvas.height);
        var new_game = new game(8);
        new_game.load_and_draw();
        new_game.game_start();
        addEventListener("keydown", (event)=>{
            if(new_game !=undefined){
                new_game.move_dart(event.code);
                if(event.code == "Space" && new_game.game_over()){has_game_started = false; new_game = undefined;}
                }
        });    
    }

}
