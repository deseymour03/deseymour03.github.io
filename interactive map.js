
    dragElement(document.getElementById("marker-red1"));
    dragElement(document.getElementById("marker-red2"));
    dragElement(document.getElementById("marker-red3"));
    dragElement(document.getElementById("marker-red4"));
    dragElement(document.getElementById("marker-red5"));
    dragElement(document.getElementById("marker-red6"));
    dragElement(document.getElementById("marker-red7"));
    dragElement(document.getElementById("marker-red8"));
    dragElement(document.getElementById("marker-red9"));
    dragElement(document.getElementById("marker-red10"));
    dragElement(document.getElementById("marker-red11"));
    dragElement(document.getElementById("marker-red12"));
    dragElement(document.getElementById("marker-red13"));
    dragElement(document.getElementById("marker-red14"));
    dragElement(document.getElementById("marker-red15"));
    dragElement(document.getElementById("marker-red16"));

    dragElement(document.getElementById("marker-blue1"));
    dragElement(document.getElementById("marker-blue2"));
    dragElement(document.getElementById("marker-blue3"));
    dragElement(document.getElementById("marker-blue4"));
    dragElement(document.getElementById("marker-blue5"));
    dragElement(document.getElementById("marker-blue6"));
    dragElement(document.getElementById("marker-blue7"));
    dragElement(document.getElementById("marker-blue8"));
    dragElement(document.getElementById("marker-blue9"));
    dragElement(document.getElementById("marker-blue10"));
    dragElement(document.getElementById("marker-blue11"));
    dragElement(document.getElementById("marker-blue12"));
    dragElement(document.getElementById("marker-blue13"));
    dragElement(document.getElementById("marker-blue14"));
    dragElement(document.getElementById("marker-blue15"));
    dragElement(document.getElementById("marker-blue16"));
    const garrison_div = document.getElementById("garrison");
    const newalden_div = document.getElementById("newalden");
    const moshpit_div = document.getElementById("moshpit");
    const contra_div = document.getElementById("contra");
    const steedie_div = document.getElementById("steedie");
    var img = document.getElementById('map_id');


    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }

    placeArrow();

    function placeArrow() {

      img.onmousedown= moveArrow;

    }
    var e;
    var rect;
    var lastpositiony = 0;
    var lastpositionx = 0;
    var x = 40;
    var y = 40;

    function moveArrow() {

      e = window.event;
      e.preventDefault();
      rect = e.target.getBoundingClientRect();
      document.onmouseup = closeDragElement;
      document.onmousemove = drawArrow;

    }

    function drawArrow() {
            console.log("Left? : " + x + " ; Top? : " + y + ".  " + lastpositionx + "  " + lastpositiony);

      e = window.event;
      e.preventDefault();

      x = e.clientX - rect.left;
      y = e.clientY - rect.top;

        if (Math.sqrt(Math.pow((x - lastpositionx),2) + Math.pow((y - lastpositiony),2) > 5)) {

          console.log("clicky clicky!");


          const dot = document.createElement("div");
          dot.innerHTML = "<img src = media/dot.png width = '7px' height = '7px'>";
          dot.id = "line"
          dot.style.top = y+5;
          dot.style.left = x+2;
          dot.style.position = "absolute";
          document.getElementById("lines").appendChild(dot);
          lastpositionx = x;
          lastpositiony = y;

        }




    }

    selectMap();

    function selectMap() {

      garrison_div.addEventListener('click', function() {changeMap("https://i.imgur.com/lIeIV68.jpg")})
      newalden_div.addEventListener('click', function() {changeMap("https://i.imgur.com/7PFfLT6.jpg")})
      moshpit_div.addEventListener('click', function() {changeMap("https://i.imgur.com/VgDFIFV.jpg")})
      contra_div.addEventListener('click', function() {changeMap("https://i.imgur.com/ZIxVynG.jpg")})
      steedie_div.addEventListener('click', function() {changeMap("https://i.imgur.com/Czr1Gay.jpg")})


    }

    function changeMap(map) {

      img.innerHTML = "<img src='" + map + "'>";

      console.log("map change " + map);

    }

    //  Deprecated:
    document.addEventListener("keydown", function(){erase()})

    function erase() {

      if (event.keyCode == 88) {
        console.log("HEYEYEYEYEYE");

        var line = document.getElementById("line");

        while (line != null) {

        line = document.getElementById("line");

        if (line !== null) {
        line.remove();
      }
    }
      }

    }

