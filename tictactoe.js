       async function clickEvent(id) {
            const button = document.getElementById(id);
            if (button.innerText === "⠀") {
                button.innerText = "X";
                let buttons = [];
                for (let i = 0; i < 9; i++) {
                    const button = document.getElementById("btn-" + i);
                    buttons[i.toString()] = button.innerText;
                }
                let winner = await calculateWinner(buttons);
                if (winner != null) {
                    if (winner === "X") {
                        Swal.fire('You win!').then(function () {
                            clearBoxes()
                        });
                    } else {
                        Swal.fire('You lose!').then(function () {
                            clearBoxes()
                        });
                    }
                    return;
                }
                for (let i = 0; i < 9; i++) {
                    const button = document.getElementById("btn-" + i);
                    if (button.innerText === "⠀") {
                        button.innerText = "O";
                        break;
                    }
                }
                buttons = [];
                for (let i = 0; i < 9; i++) {
                    const button = document.getElementById("btn-" + i);
                    buttons[i.toString()] = button.innerText;
                }
                winner = await calculateWinner(buttons);
                if (winner != null) {
                    if (winner === "X") {
                        Swal.fire('You win!').then(function () {
                            clearBoxes()
                        });
                    } else {
                        Swal.fire('You lose!').then(function () {
                            clearBoxes()
                        });
                    }
                    return;
                }
                if (!buttons.includes("⠀")) {
                    Swal.fire('Tie!').then(function () {
                        clearBoxes()
                    });
                }
            }
        }

        async function calculateWinner(squares) {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    if (squares[a] !== "⠀") {
                        return squares[a];
                    }
                }
            }
            return null;
        }

        function clearBoxes() {
            for (let i = 0; i < 9; i++) {
                const button = document.getElementById("btn-" + i);
                button.innerText = "⠀";
            }
        }
