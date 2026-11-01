ain · JS
// Tantárgyak
const subjects = {
   IKT1: "IKT projekt munka I.: webprogramozás",
   ITA1: "Informatikai és távközlési alapismeretek I.",
   ITA2: "Informatikai és távközlési alapismeretek II.",
   MUN: "Munkavállalói ismeretek",
   PA: "Programozási alapok"
};
 
// Csengetést rend
const ceremonies = [
   null, 
   { start: "08:00", end: "08:45"}, // 1. óra
   { start: "08:55", end: "09:40"}, // 2. óra
   { start: "09:50", end: "10:35"}, // 3. óra
   { start: "10:45", end: "11:30"}, // 4. óra
   { start: "11:55", end: "12:40"}, // 5. óra
   { start: "13:00", end: "13:45"}, // 6. óra
   { start: "13:55", end: "14:35"}, // 7. óra
   { start: "14:45", end: "15:25"}, // 8. óra
   { start: "15:30", end: "16:15"}, // 9. óra*
   { start: "16:20", end: "17:05"}, // 10. óra*
   { start: "17:10", end: "17:55"}, // 11. óra
   { start: "17:55", end: "18:40"}, // 12. óra
   { start: "18:45", end: "19:30"}, // 13. óra
   { start: "19:30", end: "20:15"} // 14. óra
];
 
const links = {
   IKT1: ["https://example.com/ikt",],
   ITA1: ["https://example.com/ita-1"],
   ITA2: ["https://example.com/ita-2"],
   MUN: ["https://example.com/mun"],
   PA: ["https://example.com/pa"]
};
 
const schedules = {
   "2026-09-05": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
      { start: 9, end: 12, subject: "ITA2" },
   ],
   "2026-09-09": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-09-12": [
      { start: 1, end: 8, subject: "ITA1" },
   ],
   "2026-09-16": [
      { start: 11, end: 14, subject: "IKT1" },
   ],
   "2026-09-19": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2026-09-23": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-09-26": [
      { start: 1, end: 4, subject: "IKT1" },
      { start: 5, end: 8, subject: "ITA1" },
   ],
   "2026-09-30": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-10-03": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2026-10-07": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-10-10": [
      { start: 1, end: 4, subject: "ITA2" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2026-10-14": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-10-17": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2026-10-21": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-11-04": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-11-07": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2026-11-11": [
      { start: 11, end: 14, subject: "IKT1" },
   ],
   "2026-11-14": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2026-11-18": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-11-21": [
      { start: 1, end: 4, subject: "ITA2" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2026-11-25": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-11-28": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2026-12-02": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2026-12-05": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2026-12-09": [
      { start: 11, end: 14, subject: "MUN" },
   ],
   "2026-12-16": [
      { start: 11, end: 14, subject: "MUN" },
   ],
   "2026-12-19": [
      { start: 1, end: 8, subject: "ITA2" },
   ],
   "2027-01-06": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-01-09": [
      { start: 1, end: 4, subject: "IKT1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2027-01-13": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-01-16": [
      { start: 1, end: 4, subject: "IKT1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2027-01-23": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
      { start: 9, end: 12, subject: "ITA2" },
   ],
   "2027-01-27": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-01-30": [
      { start: 1, end: 8, subject: "ITA1" },
   ],
   "2027-02-03": [
      { start: 11, end: 14, subject: "IKT1" },
   ],
   "2027-02-06": [
      { start: 1, end: 4, subject: "ITA2" },
      { start: 5, end: 8, subject: "ITA1" },
   ],
   "2027-02-10": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-02-13": [
      { start: 1, end: 1, subject: "IKT1" },
      { start: 1, end: 1, subject: "ITA1" },
      { start: 2, end: 2, subject: "IKT1" },
      { start: 2, end: 2, subject: "ITA1" },
      { start: 3, end: 3, subject: "IKT1" },
      { start: 3, end: 3, subject: "ITA1" },
      { start: 4, end: 4, subject: "IKT1" },
      { start: 4, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2027-02-17": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-02-20": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2027-02-24": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-02-27": [
      { start: 1, end: 1, subject: "ITA1" },
      { start: 1, end: 1, subject: "ITA2" },
      { start: 2, end: 2, subject: "ITA1" },
      { start: 2, end: 2, subject: "ITA2" },
      { start: 3, end: 3, subject: "ITA1" },
      { start: 3, end: 3, subject: "ITA2" },
      { start: 4, end: 4, subject: "ITA1" },
      { start: 4, end: 4, subject: "ITA2" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2027-03-03": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-03-06": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
      { start: 9, end: 12, subject: "ITA2" },
   ],
   "2027-03-10": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-03-17": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-03-24": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-03-27": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2027-04-03": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2027-04-07": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-04-10": [
      { start: 1, end: 4, subject: "ITA2" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2027-04-14": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-04-17": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2027-04-21": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-04-24": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
   ],
   "2027-04-28": [
      { start: 11, end: 14, subject: "MUN" },
   ],
   "2027-05-05": [
      { start: 11, end: 14, subject: "MUN" },
   ],
   "2027-05-08": [
      { start: 1, end: 8, subject: "ITA2" },
   ],
   "2027-05-12": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-05-15": [
      { start: 1, end: 4, subject: "IKT1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2027-05-19": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-05-22": [
      { start: 1, end: 4, subject: "IKT1" },
      { start: 5, end: 8, subject: "ITA2" },
   ],
   "2027-05-29": [
      { start: 1, end: 4, subject: "ITA1" },
      { start: 5, end: 8, subject: "IKT1" },
      { start: 9, end: 12, subject: "ITA2" },
   ],
   "2027-06-02": [
      { start: 11, end: 14, subject: "PA" },
   ],
   "2027-06-05": [
      { start: 1, end: 8, subject: "ITA1" },
   ],
   "2027-06-09": [
      { start: 11, end: 14, subject: "IKT1" },
   ],
   "2027-06-12": [
      { start: 1, end: 4, subject: "ITA2" },
      { start: 5, end: 8, subject: "ITA1" },
   ],
};

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