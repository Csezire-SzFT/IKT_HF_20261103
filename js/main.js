let currentDate = new Date();

// Megjelenítéshez: 2026. 11. 01.
function formatDate(d) {
   return d.toLocaleDateString('hu-HU');
}

// A datetime attribútumhoz: 2026-11-01 (helyi idő szerint)
function toIsoDate(d) {
   const y = d.getFullYear();
   const m = String(d.getMonth() + 1).padStart(2, '0');
   const day = String(d.getDate()).padStart(2, '0');
   return `${y}-${m}-${day}`;
}

function addDays(d, n) {
   const result = new Date(d);
   result.setDate(result.getDate() + n);
   return result;
}

// Egy <time> elem kitöltése: szöveg + datetime attribútum
function setTime(id, d) {
   const el = document.getElementById(id);
   el.textContent = formatDate(d);
   el.dateTime = toIsoDate(d);
}

function render() {
   setTime('date-prev',    addDays(currentDate, -1));
   setTime('date-current', currentDate);
   setTime('date-next',    addDays(currentDate, 1));
   // ide jöhet az órarend frissítése az aktuális dátum alapján
}

document.getElementById('btn-prev').addEventListener('click', () => {
   currentDate = addDays(currentDate, -1);
   render();
});

document.getElementById('btn-next').addEventListener('click', () => {
   currentDate = addDays(currentDate, 1);
   render();
});

render();