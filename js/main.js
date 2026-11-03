// Tantárgyak
const subjects = {
   IKT1: "IKT projekt munka I.: webprogramozás",
   ITA1: "Informatikai és távközlési alapismeretek I.",
   ITA2: "Informatikai és távközlési alapismeretek II.",
   MUN: "Munkavállalói ismeretek",
   PA: "Programozási alapok"
};
 
// Csengetést rend
const schedules = [
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
 
const curses = {
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

const dates = Object.keys(curses).sort();


// Az első index, ahol dates[i] >= aktuális dátum (bináris keresés).
// Ha minden dátum korábbi, dates.length-et ad → nincs jövőbeli nap.
function firstDate(DateParameter) {
   let bottomIndex = 0, topIndex = dates.length;
   while (bottomIndex < topIndex) {
      const middleIndex = Math.floor((bottomIndex + topIndex) / 2);
      if (dates[middleIndex] < DateParameter) bottomIndex = middleIndex + 1; else topIndex = middleIndex;
   }
   return bottomIndex;
}

// A datetime attribútumhoz: 2026-11-01 (helyi idő szerint)
function toIsoDate(DateParameter) {
   const currentYear = DateParameter.getFullYear();
   const currentMonth = String(DateParameter.getMonth() + 1).padStart(2, '0');
   const currentDay = String(DateParameter.getDate()).padStart(2, '0');
   return `${currentYear}-${currentMonth}-${currentDay}`;
}

// Indulás: a mai naptól számított legközelebbi tanítási nap
let dateIndex = firstDate(toIsoDate(new Date()));

// Egy <time> elem kitöltése: szöveg + datetime attribútum
function setTimeElementOrEmpty(elementId, dateISO) {
   const elementContent = document.getElementById(elementId);
   if (dateISO) {
      elementContent.textContent = dateISO.replaceAll('-', '. ') + '.' ;
      elementContent.dateTime = dateISO; 
      }
   else {
      elementContent.textContent = '———' ;
      elementContent.removeAttribute('datetime'); 
      }
   }

function render() {
   const buttonPrev = document.getElementById('button-prev');
   const buttonNext = document.getElementById('button-next');

   // Gombok letiltása, ha szükséges - első és utolsó dátumnál)
   buttonPrev.disabled = (dateIndex <= 0);
   buttonNext.disabled = (dateIndex >= (dates.length - 1));

   // Ha nincs több jövőbeli nap, akkor üzenet kiírása
   if (dateIndex >= dates.length) {
      // xxxx - üzenet elhelyezése a megfelelő helyen: "Nincs több tanítási nap"
      // xxxx - Órarend terület ürítése, stb.
      return;
   }

   setTimeElementOrEmpty('date-prev', dates[dateIndex - 1]);
   setTimeElementOrEmpty('date-current', dates[dateIndex]);
   setTimeElementOrEmpty('date-next', dates[dateIndex + 1]);
   // ide jöhet az órarend frissítése az aktuális dátum alapján

   const tableBody = document.querySelector('#timetable tbody');
   const daycurses = curses[dates[dateIndex]] ?? [];
   tableBody.replaceChildren();
   daycurses.forEach(curseElement => {
      for (let period = curseElement.start; period <= curseElement.end; period++) {
      const tableRecord = tableBody.insertRow();

      const tableRecordNumber = tableRecord.insertCell();
      tableRecordNumber.className = "cursenumber";
      tableRecordNumber.textContent = period;

      const tableRecordTime = tableRecord.insertCell();
      tableRecordTime.className = "cursetime";
      tableRecordTime.textContent = `${schedules[period].start}–${schedules[period].end}`;

      const tableRecordName = tableRecord.insertCell();
      tableRecordName.className = "cursename";
      tableRecordName.textContent = subjects[curseElement.subject];
    }
  });
}


document.getElementById('button-prev').addEventListener('click', () => {
   if (dateIndex > 0) { 
      dateIndex--; render(); }
});

document.getElementById('button-next').addEventListener('click', () => {
   if (dateIndex < dates.length - 1) { 
      dateIndex++; render(); }
});

render();






// --- FEJLESZTÉSHEZ: méretkijelző, élesítés előtt töröld! ---
const sizeInfo = document.createElement('div');
sizeInfo.style.cssText =
   'position:fixed; bottom:0; right:0; z-index:9999;' +
   'background:black; color:white; text-shadow:none;' +
   'font:14px monospace; padding:4px 8px;';
document.body.appendChild(sizeInfo);

function showSize() {
   sizeInfo.textContent =
      `${window.innerWidth} × ${window.innerHeight} px` +
      ` | DPR: ${window.devicePixelRatio}`;
}

window.addEventListener('resize', showSize);
showSize();