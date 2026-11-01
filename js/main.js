// Tantárgyak
const subjects = {
   IKT: "IKT projekt munka I.: webprogramozás",
   ITA-1: "Informatikai és távközlési alapismeretek I.",
   ITA-2: "Informatikai és távközlési alapismeretek II.",
   MUN: "Munkavállalói ismeretek",
   PA: "Programozási alapok"
};

// Csengetést rend
const ceremonies = [
   null, 
   {start: "08:00", end: "08:45"}, // 1. óra
   {start: "08:55", end: "09:40"}, // 2. óra
   {start: "09:50", end: "10:35"}, // 3. óra
   {start: "10:45", end: "11:30"}, // 4. óra
   {start: "11:55", end: "12:40"}, // 5. óra
   {start: "13:00", end: "13:45"}, // 6. óra
   {start: "13:55", end: "14:40"}, // 7. óra
   {start: "14:45", end: "15:25"}, // 8. óra
   {start: "15:30", end: "16:15"}, // 9. óra*
   {start: "16:20", end: "17:05"}, // 10. óra*
   {start: "17:10", end: "17:55"}, // 11. óra
   {start: "17:55", end: "18:40"}, // 12. óra
   {start: "18:45", end: "19:30"}, // 13. óra
   {start: "19:30", end: "20:15"} // 14. óra
];

const links = {
   IKT: ["https://example.com/ikt",],
   ITA-1: ["https://example.com/ita-1"],
   ITA-2: ["https://example.com/ita-2"],
   MUN: ["https://example.com/mun"],
   PA: ["https://example.com/pa"]
};

const schedules = {
   "2026-11-04": [
      {start: 11, end: 14, subject: "PA"},
   ],
   "2026-11-07": [
      {start: 1, end: 4, subject: "ITA-1"},
      {Start: 5, end: 8, subject: "ITA-2"},
   ],





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