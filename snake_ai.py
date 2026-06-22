import tkinter as tk
import random

# Game Settings
GRID_SIZE = 20
CELL_SIZE = 25
SPEED = 100  # Lower = faster, harder game

class HumanSnakeGame:
    def __init__(self, root):
        self.root = root
        self.root.title("PORTFOLIO ARCADE: SNAKE_CORE")
        
        # Canvas Interface Layout
        self.canvas = tk.Canvas(root, width=GRID_SIZE*CELL_SIZE, height=GRID_SIZE*CELL_SIZE, bg="#05050a", highlightthickness=0)
        self.canvas.pack()
        
        # Loop tracker to prevent parallel execution loops on restart
        self.loop_id = None
        
        # Bind Human Keyboard Controls
        self.root.bind("<Left>", lambda e: self.change_direction("Left"))
        self.root.bind("<Right>", lambda e: self.change_direction("Right"))
        self.root.bind("<Up>", lambda e: self.change_direction("Up"))
        self.root.bind("<Down>", lambda e: self.change_direction("Down"))
        
        self.score_text = self.canvas.create_text(50, 20, text="SCORE: 0", fill="#22d3ee", font=("Courier", 12, "bold"))
        
        # Boot up the first game session
        self.reset_game(is_initial_boot=True)

    def change_direction(self, new_dir):
        opposites = {"Up": "Down", "Down": "Up", "Left": "Right", "Right": "Left"}
        if new_dir != opposites.get(self.direction):
            self.next_direction = new_dir

    def generate_food(self):
        while True:
            x = random.randint(0, GRID_SIZE - 1)
            y = random.randint(0, GRID_SIZE - 1)
            if (x, y) not in self.snake:
                self.food = (x, y)
                break

    def update_logic(self):
        if not self.game_running:
            return

        self.direction = self.next_direction
        x, y = self.snake[0]

        if self.direction == "Up": y -= 1
        elif self.direction == "Down": y += 1
        elif self.direction == "Left": x -= 1
        elif self.direction == "Right": x += 1

        # CRITICAL: Edge Wrap-Around Feature (Using modulo arithmetic)
        x = x % GRID_SIZE
        y = y % GRID_SIZE

        new_head = (x, y)

        # Collision Check: Now ONLY checks if the snake hits its own body parts
        if new_head in self.snake:
            self.game_running = False
            return

        self.snake.insert(0, new_head)

        if new_head == self.food:
            self.score += 1
            self.generate_food()
        else:
            self.snake.pop()

    def draw_elements(self):
        self.canvas.delete("game_node")
        
        if not self.game_running:
            # Render Game Over Overlay Screen
            self.canvas.create_rectangle(0, 0, GRID_SIZE*CELL_SIZE, GRID_SIZE*CELL_SIZE, fill="#000000", tags="game_node")
            self.canvas.create_text(GRID_SIZE*CELL_SIZE/2, GRID_SIZE*CELL_SIZE/2, 
                                    text=f"COLLISION DETECTED\nFINAL SCORE: {self.score}\n\nPress 'R' to Reboot System", 
                                    fill="#ef4444", font=("Courier", 14, "bold"), justify="center", tags="game_node")
            
            # Safe binding for reboot keys
            self.root.bind("<r>", lambda e: self.reset_game())
            self.root.bind("<R>", lambda e: self.reset_game())
            return

        # Draw Food Object
        fx, fy = self.food
        self.canvas.create_rectangle(fx*CELL_SIZE+3, fy*CELL_SIZE+3, (fx+1)*CELL_SIZE-3, (fy+1)*CELL_SIZE-3, fill="#f43f5e", outline="#fda4af", tags="game_node")

        # Draw Player Snake Body
        for idx, (x, y) in enumerate(self.snake):
            color = "#22d3ee" if idx == 0 else "#0891b2"
            outline = "#e0f2fe" if idx == 0 else "#155e75"
            self.canvas.create_rectangle(x*CELL_SIZE+1, y*CELL_SIZE+1, (x+1)*CELL_SIZE-1, (y+1)*CELL_SIZE-1, fill=color, outline=outline, tags="game_node")

        self.canvas.itemconfig(self.score_text, text=f"SCORE: {self.score}")

    def reset_game(self, is_initial_boot=False):
        # Cancel the old loop thread cycle if it exists
        if self.loop_id is not None:
            self.root.after_cancel(self.loop_id)
            self.loop_id = None
            
        if not is_initial_boot:
            self.root.unbind("<r>")
            self.root.unbind("<R>")

        # Fresh environment state matrices
        self.snake = [(10, 10), (10, 11), (10, 12)]
        self.direction = "Up"
        self.next_direction = "Up"
        self.score = 0
        self.game_running = True
        
        self.generate_food()
        self.game_loop()

    def game_loop(self):
        self.update_logic()
        self.draw_elements()
        if self.game_running:
            self.loop_id = self.root.after(SPEED, self.game_loop)

if __name__ == "__main__":
    root = tk.Tk()
    game = HumanSnakeGame(root)
    root.mainloop()