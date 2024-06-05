const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const centerX = width / 2;
const centerY = height / 2;
const radius = 200;
let angle = 0;

function drawOctagon(ctx, x, y, radius, angle) {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const theta = (i * Math.PI / 12) + angle; // 45 degrees per segment
        const xPos = x + radius * Math.cos(theta);
        const yPos = y + radius * Math.sin(theta);
        if (i === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.closePath();
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    drawOctagon(ctx, centerX, centerY, radius, angle);
    angle += 0.01; // Increment angle for rotation
    requestAnimationFrame(animate);
}

animate();
