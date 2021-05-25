class game{

    constructor(array_size){
        this.canvas = document.getElementById("game_area");
        this.ctx = this.canvas.getContext("2d");
        this.array_size = array_size;
        this.image_array = new Array(array_size);
        this.dart = document.createElement("img");
        this.pop = document.createElement("img");
        this.oops = document.createElement("img");
        this.obj_width = 50;
        this.obj_height = 50;
        this.canvas_positions = [];
        this.is_pos_occupied = {};
        this.is_brick_or_balloon = {};
        this.position_y = {};
        this.count = 0;
        this.is_left_key_pressed = {};
        this.dart_position_in_x = {};
        this.element_co_ordinates = {};
        this.dart_pos_y = 550;
        this.is_element_hit = {};
        this.hit_brick_pos_y = 0;
        this.miss_balloon_pos_y = 0;
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
        var pos_ind = Math.floor(Math.random()*8);
        while (this.is_pos_occupied[pos_ind] == true)
        {
            pos_ind = Math.floor(Math.random()*8);
        }
        this.is_pos_occupied[pos_ind] = true;
        var img_array_pos = Math.floor(Math.random()*8);
        this.is_brick_or_balloon[this.canvas_positions[pos_ind]] = img_array_pos;
        this.position_y[this.canvas_positions[pos_ind]] = 600;
        var start_time = Date.now(); 
        var checked_for_brick = false;
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
            if(this.is_element_hit[pos_x] == false || this.is_element_hit[pos_x] == undefined)
            {
                this.ctx.clearRect(pos_x,pos_y, this.obj_width, this.obj_height);
                pos_y-=50;
                this.element_co_ordinates[pos_x] = pos_y;
                this.position_y[pos_x] = pos_y;
                this.ctx.drawImage(this.image_array[img_array_pos],pos_x,pos_y, this.obj_width, this.obj_height);
            }
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

            if (Date.now() - start_time_nxt_obj > 1000 && this.count < 4)
            {
                start_time_nxt_obj = Date.now();
                this.count+=1;
                this.game_start(start_time_nxt_obj);
            }

            if (this.position_y[pos_x] <= -this.obj_height)
            {
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
        if (continue_obj_motion && (!this.game_over()))
        {
            requestAnimationFrame(()=>{this.move(start_time, pos_ind, img_array_pos, start_time_nxt_obj, checked_for_brick);});
        }

        if ((!continue_obj_motion) && (!this.game_over()))
        {
            requestAnimationFrame(()=>{this.game_start()});
        }
    }

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
            this.ctx.clearRect(curr_pos, pos_y, this.obj_height, this.obj_width);
            curr_pos -= 50;
            var first_movement = true;
            var to_continue = true;
            var this_to_do = this;
            var is_hit_local = false;
            to_do();
            function to_do()
            {
                if(Date.now() - time_at_start > 100)
                {
                    time_at_start = Date.now();
                    if (is_hit_local)
                    {
                        this_to_do.ctx.clearRect(curr_pos-50, pos_y-10, 80, 80);
                        is_hit_local = false;
                    }
                    if (curr_pos <= 50)
                    {
                        this_to_do.dart_position_in_x[pos_y] = 900;
                        to_continue = false;
                        this_to_do.ctx.clearRect(curr_pos, pos_y, this_to_do.obj_width, this_to_do.obj_height);
                        this_to_do.is_left_key_pressed[pos_y] = false;
                        return;
                    }
                    if (!first_movement)
                    {
                        this_to_do.ctx.clearRect(curr_pos, pos_y, this_to_do.obj_height, this_to_do.obj_width);
                        curr_pos -= 100;
                    }
                    first_movement = false;
                    this_to_do.dart_position_in_x[pos_y] = curr_pos;
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

    check_if_brick(image_array_pos)
    {
        if (image_array_pos%2 == 1)
        {
            this.ctx.drawImage(this.image_array[image_array_pos], 1025, this.hit_brick_pos_y, this.obj_width, this.obj_height);
            this.hit_brick_pos_y+=50;
        }
    }

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

    update_score()
    {
        var score_update = document.getElementById("score");
        score_update.textContent = "Score: "+this.score;
    }

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
