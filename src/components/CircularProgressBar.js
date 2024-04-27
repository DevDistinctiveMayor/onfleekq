import React, { useEffect, useRef } from "react";

const Spinner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;
    let degrees = 0;
    let new_degrees = 0;
    let difference = 0;
    let color = "rgb(67 56 202)";
    let bgcolor = "rgb(226 232 240)";
    let animation_loop, redraw_loop;

    function init() {
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.strokeStyle = bgcolor;
      ctx.lineWidth = 5;
      ctx.arc(width / 2, width / 2, 70, 0, Math.PI * 2, false);
      ctx.stroke();
      let radians = (degrees * Math.PI) / 180;

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
      ctx.arc(
        width / 2,
        height / 2,
        70,
        0 - (90 * Math.PI) / 180,
        radians - (90 * Math.PI) / 180,
        false
      );
      ctx.stroke();
      ctx.fillStyle = color;
      ctx.font = "30px arial";
      const numberText = `${Math.floor((degrees / 360) * 100)}`;
      const percentageText = "%";
      const textWidth = ctx.measureText(numberText).width;
      const percentageWidth = ctx.measureText(percentageText).width;
      ctx.fillText(
        numberText,
        width / 2 - (textWidth + percentageWidth) / 2,
        height / 2 + 15
      );
      ctx.font = "bold 20px arial"; // Adjust font size for percentage sign
      ctx.fillText(percentageText, width / 2 + textWidth / 6, height / 2 + 15);
    }

    function draw() {
      if (typeof animation_loop !== "undefined") clearInterval(animation_loop);
      new_degrees = 140;
      difference = new_degrees - degrees;
      animation_loop = setInterval(animate_to, 5000 / difference);
    }

    function animate_to() {
      if (degrees === new_degrees) clearInterval(animation_loop);
      else if (degrees < new_degrees) degrees++;
      else degrees--;
      init();
    }

    draw();

    // Cleanup function
    return () => {
      clearInterval(animation_loop);
    };
  }, [canvasRef]);

  return (
    <canvas ref={canvasRef} id="spinner" width="280" height="280"></canvas>
  );
};

export default Spinner;
