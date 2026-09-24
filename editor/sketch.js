<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Signature Preview</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1a1a1a;
      font-family: monospace;
    }
    canvas {
      background: #ffffff;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      border-radius: 4px;
    }
  </style>
</head>
<body>

  <canvas id="receiptCanvas" width="380" height="380"></canvas>

  <script>
    const canvas = document.getElementById("receiptCanvas");
    const ctx = canvas.getContext("2d");

    const cx = canvas.width / 2;
    const cy = canvas.height / 2 - 25;

    // 1. White Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Signature Settings
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Horizontal Center Strike Line
    ctx.beginPath();
    ctx.moveTo(cx - 110, cy);
    ctx.lineTo(cx + 115, cy);
    ctx.stroke();

    // Sharp Left Chevron (<)
    ctx.beginPath();
    ctx.moveTo(cx - 45, cy - 38);
    ctx.lineTo(cx - 105, cy - 2);
    ctx.lineTo(cx - 52, cy + 24);
    ctx.stroke();

    // Tall Vertical Stems
    ctx.beginPath();
    ctx.moveTo(cx - 55, cy + 32);
    ctx.lineTo(cx - 48, cy - 42);
    ctx.moveTo(cx - 30, cy + 30);
    ctx.lineTo(cx - 28, cy - 40);
    ctx.stroke();

    // Monogram Curves
    ctx.beginPath();
    ctx.moveTo(cx - 52, cy - 30);
    ctx.bezierCurveTo(cx - 38, cy - 46, cx - 24, cy - 35, cx - 32, cy - 15);
    ctx.bezierCurveTo(cx - 58, cy - 5, cx - 40, cy + 20, cx - 20, cy + 10);
    ctx.stroke();

    // Cursive Loop
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - 22, cy);
    ctx.quadraticCurveTo(cx - 12, cy - 12, cx - 6, cy - 2);
    ctx.quadraticCurveTo(cx + 4, cy - 12, cx + 10, cy - 2);
    ctx.quadraticCurveTo(cx + 24, cy - 12, cx + 28, cy);
    ctx.quadraticCurveTo(cx + 42, cy + 18, cx + 62, cy - 28);
    ctx.stroke();

    // Accents
    ctx.beginPath();
    ctx.arc(cx - 32, cy - 50, 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(cx - 57, cy + 42);
    ctx.lineTo(cx - 55, cy + 46);
    ctx.stroke();

    // 3. Barcode Graphic
    const barY = canvas.height - 80;
    let currentX = cx - 80;
    const pattern = [2, 1, 3, 1, 1, 2, 4, 1, 2, 2, 1, 3, 1, 1, 4, 2, 1, 2, 3, 1, 1, 2, 1, 3];
    
    ctx.fillStyle = "#000000";
    for (let i = 0; i < pattern.length; i++) {
      if (i % 2 === 0) {
        ctx.fillRect(currentX, barY, pattern[i] * 1.5, 36);
      }
      currentX += pattern[i] * 1.5;
    }

    // Barcode Text Label
    ctx.font = "10px monospace";
    ctx.textAlign = "center";
    ctx.fillText("SIGNATURE-2026", cx, canvas.height - 28);
  </script>
</body>
</html>
