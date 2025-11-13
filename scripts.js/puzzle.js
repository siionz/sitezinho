const puzzle = document.getElementById('puzzle');
let selectedPiece = null;

const positions = Array.from({ length: 9 }, (_, i) => i).sort(() => Math.random() - 0.5);

positions.forEach(pos => {
  const piece = document.createElement('div');
  piece.className = 'piece';

  const x = (pos % 3) * 100;
  const y = Math.floor(pos / 3) * 100;
  piece.style.backgroundPosition = `-${x}px -${y}px`;

  piece.dataset.correct = pos;

  puzzle.appendChild(piece);

  piece.addEventListener('pointerdown', () => handleSelect(piece));
});

function handleSelect(piece) {
  if (!selectedPiece) {
    selectedPiece = piece;
    piece.classList.add('selected');
  } else if (selectedPiece === piece) {
    piece.classList.remove('selected');
    selectedPiece = null;
  } else {
    swapPieces(selectedPiece, piece);
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
    checkWin();
  }
}

function swapPieces(p1, p2) {
  const bg1 = p1.style.backgroundPosition;
  const bg2 = p2.style.backgroundPosition;
  p1.style.backgroundPosition = bg2;
  p2.style.backgroundPosition = bg1;

  const temp = p1.dataset.correct;
  p1.dataset.correct = p2.dataset.correct;
  p2.dataset.correct = temp;
}

function checkWin() {
  const pieces = [...document.querySelectorAll('.piece')];
  const correct = pieces.every((p, i) => p.dataset.correct == i);
  if (correct) {
    alert('ACHOU A MEL KKKKKKKKK');

    setTimeout(() => {
      window.location.href = "../paginas/fase2.html";
    }, 1500);
  }
}
