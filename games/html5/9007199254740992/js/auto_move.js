var auto_move_time,auto_move_flag=!1;function start_auto_move(){auto_move_flag=!0,auto_move()}function auto_move(){if(!1!==auto_move_flag){var t=Math.floor(4*Math.random());GM.move(t),setTimeout("auto_move()",auto_move_time)}}function stop_auto_move(){auto_move_flag=!1}window.requestAnimationFrame((function(){document.getElementById("auto-move-run").addEventListener("click",(function(){var t=parseInt(document.getElementById("auto-move-input-time").value);isNaN(t)||(auto_move_time=t,!1===auto_move_flag&&start_auto_move())})),document.getElementById("auto-move-stop").addEventListener("click",(function(){stop_auto_move()}))}));