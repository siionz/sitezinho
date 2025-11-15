const fotos = [
    "../media/Screenshot_2022-12-31-10-54-28-053_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2022-12-31-10-54-28-053_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-01-14-53-54-468_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-02-14-45-59-984_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-03-14-08-06-795_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-04-16-16-49-109_com.roblox.client.jpg",
    "../media/Screenshot_2023-01-06-19-26-38-137_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-17-14-46-30-808_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-17-16-08-03-538_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-17-16-08-21-973_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-18-17-05-32-349_com.mojang.minecraftpe.jpg",
    "../media/Screenshot_2023-01-25-22-41-56-899_com.mojang.minecraftpe.jpg"
];

let atual = 0;

const img = document.getElementById("foto");
img.src = fotos[atual];

// ======== FUNÇÃO PARA TROCAR FOTO ========
function proxima() {
    atual = (atual + 1) % fotos.length;
    img.src = fotos[atual];
}

function anterior() {
    atual = (atual - 1 + fotos.length) % fotos.length;
    img.src = fotos[atual];
}

// ======== ARRASTAR COM DEDO E MOUSE ========
let startX = 0;

img.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

img.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 50) proxima();      // arrastou para ESQUERDA
    if (endX > startX + 50) anterior();     // arrastou para DIREITA
});

// Desktop (mouse)
img.addEventListener("mousedown", e => {
    startX = e.clientX;
});

img.addEventListener("mouseup", e => {
    const endX = e.clientX;
    if (endX < startX - 50) proxima();
    if (endX > startX + 50) anterior();
});
