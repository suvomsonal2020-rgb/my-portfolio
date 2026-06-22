import tkinter as tk
import random

# Visual Constants
BOARD_SIZE = 450
CELL_SIZE = BOARD_SIZE // 3

class GraphicalTicTacToe:
    def __init__(self, root):
        self.root = root
        self.root.title("PORTFOLIO ARCADE: TIC_TAC_TOE_MATRIX")
        
        # Main UI Canvas Setup
        self.canvas = tk.Canvas(root, width=BOARD_SIZE, height=BOARD_SIZE, bg="#05050a", highlightthickness=0)
        self.canvas.pack()

        # State Registers
        self.board = [' ' for _ in range(9)]
        self.human = 'X'
        self.bot = 'O'
        self.game_running = True
        self.status_msg = "YOUR TURN [X]"
        
        # Keyboard Navigation Pointer (Starts in the center cell index 4)
        self.cursor_index = 4

        # Key Bindings for Complete Grid Navigation
        self.root.bind("<Left>", lambda e: self.move_cursor(-1, 0))
        self.root.bind("<Right>", lambda e: self.move_cursor(1, 0))
        self.root.bind("<Up>", lambda e: self.move_cursor(0, -1))
        self.root.bind("<Down>", lambda e: self.move_cursor(0, 1))
        self.root.bind("<Return>", lambda e: self.execute_player_choice())
        self.root.bind("<space>", lambda e: self.execute_player_choice())

        # Render first view frame
        self.draw_interface()

    def move_cursor(self, dx, dy):
        if not self.game_running:
            return

        # Convert 1D index to 2D grid points (row, column)
        row = self.cursor_index // 3
        col = self.cursor_index % 3

        # Apply shifts and keep wrapped safely inside 0-2 bounds
        new_row = (row + dy) % 3
        new_col = (col + dx) % 3

        # Flatten back down to 1D tracking array index
        self.cursor_index = new_row * 3 + new_col
        self.draw_interface()

    def check_winner(self, player):
        win_conditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
            [0, 4, 8], [2, 4, 6]              # Diagonals
        ]
        return any(all(self.board[cell] == player for cell in combo) for combo in win_conditions)

    def is_board_full(self):
        return ' ' not in self.board

    def get_bot_move(self):
        """Rule-based smart defense and offense system."""
        # 1. Instant Win Check
        for i in range(9):
            if self.board[i] == ' ':
                b_copy = list(self.board)
                b_copy[i] = self.bot
                if any(all(b_copy[c] == self.bot for c in combo) for combo in [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]):
                    return i
        # 2. Urgent Threat Defensive Block Check
        for i in range(9):
            if self.board[i] == ' ':
                b_copy = list(self.board)
                b_copy[i] = self.human
                if any(all(b_copy[c] == self.human for c in combo) for combo in [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]):
                    return i
        # 3. Take Core Center
        if self.board[4] == ' ': return 4
        # 4. Corners / Sides
        empty_corners = [c for c in [0, 2, 6, 8] if self.board[c] == ' ']
        if empty_corners: return random.choice(empty_corners)
        empty_sides = [s for s in [1, 3, 5, 7] if self.board[s] == ' ']
        return random.choice(empty_sides) if empty_sides else None

    def execute_player_choice(self):
        if not self.game_running:
            # If the matrix is locked at Game Over, hitting Enter restarts it
            self.reset_environment()
            return

        if self.board[self.cursor_index] != ' ':
            return  # Cell is already locked

        # Lock Cell for Human Player
        self.board[self.cursor_index] = self.human

        if self.check_winner(self.human):
            self.status_msg = "VICTORY: HUMAN BREAKS CODE"
            self.game_running = False
            self.draw_interface()
            return
            
        if self.is_board_full():
            self.status_msg = "MATRIX LOCKED: DRAW"
            self.game_running = False
            self.draw_interface()
            return

        # Trigger Immediate Bot Calculation Response Frame
        self.status_msg = "BOT OPTIMIZING PATHS..."
        self.draw_interface()
        
        # Schedule the bot move slightly later so it feels real
        self.root.after(400, self.execute_bot_turn)

    def execute_bot_turn(self):
        if not self.game_running:
            return

        bot_target = self.get_bot_move()
        if bot_target is not None:
            self.board[bot_target] = self.bot

        if self.check_winner(self.bot):
            self.status_msg = "OVERRIDE: SYSTEM BOT WINS"
            self.game_running = False
        elif self.is_board_full():
            self.status_msg = "MATRIX LOCKED: DRAW"
            self.game_running = False
        else:
            self.status_msg = "YOUR TURN [X]"

        self.draw_interface()

    def reset_environment(self):
        self.board = [' ' for _ in range(9)]
        self.cursor_index = 4
        self.status_msg = "YOUR TURN [X]"
        self.game_running = True
        self.draw_interface()

    def draw_interface(self):
        self.canvas.delete("all")

        # 1. Render Futuristic Background Grid Structures
        for i in range(1, 3):
            # Vertical Tech Partition Lines
            self.canvas.create_line(i * CELL_SIZE, 0, i * CELL_SIZE, BOARD_SIZE - 60, fill="#1e1e38", width=2)
            # Horizontal Tech Partition Lines
            self.canvas.create_line(0, i * CELL_SIZE, BOARD_SIZE, i * CELL_SIZE, fill="#1e1e38", width=2)

        # 2. Render Tokens and Keyboard Selection Pointer
        for i in range(9):
            row = i // 3
            col = i % 3
            x1, y1 = col * CELL_SIZE, row * CELL_SIZE
            x2, y2 = x1 + CELL_SIZE, y1 + CELL_SIZE

            # Draw Highlight Box for Cursor Selection (Using a solid deep dark purple accent)
            if i == self.cursor_index and self.game_running:
                self.canvas.create_rectangle(x1 + 4, y1 + 4, x2 - 4, y2 - 4, outline="#a855f7", width=3, fill="#120621")

            # Center Points for token texts
            cx, cy = (x1 + x2) / 2, (y1 + y2) / 2
            
            if self.board[i] == 'X':
                self.canvas.create_text(cx, cy, text="X", fill="#22d3ee", font=("Courier", 36, "bold"))
            elif self.board[i] == 'O':
                self.canvas.create_text(cx, cy, text="O", fill="#f43f5e", font=("Courier", 36, "bold"))

        # 3. Render Status Info Matrix Pane at Bottom
        self.canvas.create_rectangle(0, BOARD_SIZE - 60, BOARD_SIZE, BOARD_SIZE, fill="#020205", outline="#1e1e38")
        
        status_color = "#22d3ee"
        if "WINS" in self.status_msg: status_color = "#f43f5e"
        elif "VICTORY" in self.status_msg: status_color = "#34d399"
        
        self.canvas.create_text(BOARD_SIZE / 2, BOARD_SIZE - 42, text=self.status_msg, fill=status_color, font=("Courier", 11, "bold"))
        
        sub_text = "[Arrows to Move // Enter to Deploy Token]" if self.game_running else "[Press ENTER/SPACE to Reboot Matrix]"
        self.canvas.create_text(BOARD_SIZE / 2, BOARD_SIZE - 18, text=sub_text, fill="#4b5563", font=("Courier", 9))

if __name__ == "__main__":
    root = tk.Tk()
    game = GraphicalTicTacToe(root)
    root.mainloop()