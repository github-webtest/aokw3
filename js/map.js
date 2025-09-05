
 const rows = 480, cols = 480;
    const chunkSize = 20;
    const chunkWidth = 80 * chunkSize;
    const chunkHeight = 80 * chunkSize;
    const map = document.getElementById("map");
    const viewport = document.getElementById("viewport");

    const loadedChunks = new Set();

    function loadChunk(cx, cy) {
      const key = `${cx}_${cy}`;
      if (loadedChunks.has(key)) return;
      loadedChunks.add(key);

      const chunk = document.createElement("div");
      chunk.className = "map_chunk";
      chunk.style.left = (cx * chunkWidth) + "px";
      chunk.style.top = (cy * chunkHeight) + "px";
      chunk.id = `chunk_x${cx}_y${cy}`;

      for (let y = 1; y <= chunkSize; y++) {
        for (let x = 1; x <= chunkSize; x++) {
          const globalX = cx * chunkSize + x;
          const globalY = cy * chunkSize + y;
          if (globalX > cols || globalY > rows) continue;
		  
		  const map_ids = Math.floor(((globalY - 1) * 480) + globalX);
		  
		  const mapItem = mapData.find(item => item.id === map_ids);

          const bs = document.createElement("div");
          bs.className = "map_b_s" + ` m_img${Number(mapItem.img)}`;
          bs.id = `bs_x${globalX}_y${globalY}`;
		  
		  /*

          const s = document.createElement("div");
          s.className = "map_s";
          s.id = `s_x${globalX}_y${globalY}`;

          const t = document.createElement("div");
          t.className = "map_t";
          t.id = `t_x${globalX}_y${globalY}`;
          t.innerText = `x${globalX} y${globalY}`;
		  
		  

          bs.appendChild(s);
          bs.appendChild(t);
          */
          chunk.appendChild(bs);
        }
      }
      map.appendChild(chunk);
    }

    function updateVisibleChunks() {
      const viewLeft = viewport.scrollLeft / currentScale;
      const viewTop = viewport.scrollTop / currentScale;
      const viewRight = (viewport.scrollLeft + viewport.clientWidth) / currentScale;
      const viewBottom = (viewport.scrollTop + viewport.clientHeight) / currentScale;

      const startChunkX = Math.floor(viewLeft / chunkWidth);
      const endChunkX = Math.floor(viewRight / chunkWidth);
      const startChunkY = Math.floor(viewTop / chunkHeight);
      const endChunkY = Math.floor(viewBottom / chunkHeight);

      for (let cy = startChunkY; cy <= endChunkY; cy++) {
        for (let cx = startChunkX; cx <= endChunkX; cx++) {
          if (cx >= 0 && cy >= 0 && cx < Math.ceil(cols / chunkSize) && cy < Math.ceil(rows / chunkSize)) {
            loadChunk(cx, cy);
          }
        }
      }
    }

    viewport.addEventListener("scroll", updateVisibleChunks);

    // Ortalamak için
    function centerOnTile(x, y) {
      const tileX = (x - 1) * 80;
      const tileY = (y - 1) * 80;

      const centerX = tileX * currentScale - (viewport.clientWidth / 2) + (80 * currentScale / 2);
      const centerY = tileY * currentScale - (viewport.clientHeight / 2) + (80 * currentScale / 2);

      viewport.scrollLeft = centerX;
      viewport.scrollTop = centerY;

      updateVisibleChunks();
    }

    let currentScale = 1;
    const minScale = 0.5;
    const maxScale = 2;
    let lastDist = null;
	
	/*/ Zoom (pinch)

    viewport.addEventListener("touchmove", (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if (lastDist !== null) {
          let scaleChange = dist / lastDist;
          currentScale = Math.min(maxScale, Math.max(minScale, currentScale * scaleChange));
          map.style.transform = `scale(${currentScale})`;
        }
        lastDist = dist;
      }
    });

    viewport.addEventListener("touchend", () => { lastDist = null; });
	
	*/
	
	viewport.addEventListener("touchmove", (e) => {
  if (e.touches.length === 2) {
    e.preventDefault(); // Önemli! Tarayıcı zoom'unu engeller

    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (lastDist !== null) {
      let scaleChange = dist / lastDist;
      currentScale = Math.min(maxScale, Math.max(minScale, currentScale * scaleChange));

      map.style.transform = `scale(${currentScale})`;
    }

    lastDist = dist;
  }
}, { passive: false }); // passive false olmalı

viewport.addEventListener("touchend", () => {
  lastDist = null;
});
	
	function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(param));
    }
	
    // Başlangıç pozisyonu: oyuncu x356 y290 ortada
    window.onload = () => {
    const x = getQueryParam("x") || 1; // default 1
    const y = getQueryParam("y") || 1; // default 1
    centerOnTile(x, y);
    };