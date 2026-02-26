// --- DATABASE JADWAL PELAJARAN MINGGUAN (TIDAK BERUBAH DARI PERMINTAAN AWAL) --- 
const JADWAL_PELAJARAN = {
    Senin:[
        { j: '1', w: '07:30 - 08:05', mp: 'Matematika', g: 'Kusriyantini, S.Pd', brk: false },
        { j: '2', w: '08:05 - 08:40', mp: 'Matematika', g: 'Kusriyantini, S.Pd', brk: false },
        { j: '3', w: '08:40 - 09:15', mp: 'Pend. Agama', g: 'Abdul Muin, S.Pd.I', brk: false },
        { j: '-', w: '09:15 - 09:45', mp: 'Istirahat ke-1', g: '—', brk: true },
        { j: '4', w: '09:45 - 10:20', mp: 'Pend. Agama', g: 'Abdul Muin, S.Pd.I', brk: false },
        { j: '5', w: '10:20 - 10:55', mp: 'Pend. Agama', g: 'Abdul Muin, S.Pd.I', brk: false },
        { j: '6', w: '10:55 - 11:30', mp: 'Pend. Pancasila', g: 'Herning Susi N., S.Pd', brk: false },
        { j: '-', w: '11:30 - 12:10', mp: 'Istirahat ke-2', g: '—', brk: true },
        { j: '7', w: '12:10 - 12:45', mp: 'Pend. Pancasila', g: 'Herning Susi N., S.Pd', brk: false },
        { j: '8', w: '12:45 - 13:20', mp: 'Bhs. Inggris', g: 'Sri Eny Sumiarti', brk: false },
        { j: '9', w: '13:20 - 13:55', mp: 'Bhs. Inggris', g: 'Sri Eny Sumiarti', brk: false }
    ],
    Selasa:[
        { j: '1', w: '07:30 - 08:05', mp: 'Pend. Pancasila', g: 'Herning Susi N., S.Pd', brk: false },
        { j: '2', w: '08:05 - 08:40', mp: 'Pend. Pancasila', g: 'Herning Susi N., S.Pd', brk: false },
        { j: '3', w: '08:40 - 09:15', mp: 'Sejarah Ind.', g: 'Saydah Ak’la, S. Pd.', brk: false },
        { j: '-', w: '09:15 - 09:45', mp: 'Istirahat ke-1', g: '—', brk: true },
        { j: '4', w: '09:45 - 10:20', mp: 'Sejarah Ind.', g: 'Saydah Ak’la, S. Pd.', brk: false },
        { j: '5', w: '10:20 - 10:55', mp: 'Bhs. Indonesia', g: 'Dra. Harmiati', brk: false },
        { j: '6', w: '10:55 - 11:30', mp: 'Bhs. Indonesia', g: 'Dra. Harmiati', brk: false },
        { j: '-', w: '11:30 - 12:10', mp: 'Istirahat ke-2', g: '—', brk: true },
        { j: '7', w: '12:10 - 12:45', mp: 'Bhs. Inggris', g: 'Sri Eny Sumiarti', brk: false },
        { j: '8', w: '12:45 - 13:20', mp: 'Bhs. Inggris', g: 'Sri Eny Sumiarti', brk: false },
        { j: '9', w: '13:20 - 13:55', mp: 'Matematika', g: 'Kusriyantini, S.Pd', brk: false },
        { j: '10', w: '13:55 - 14:30', mp: 'Matematika', g: 'Kusriyantini, S.Pd', brk: false }
    ],
    Rabu:[
        { j: '1', w: '07:30 - 08:05', mp: 'Matematika', g: 'Kusriyantini, S.Pd', brk: false },
        { j: '2', w: '08:05 - 08:40', mp: 'Matematika', g: 'Kusriyantini, S.Pd', brk: false },
        { j: '3', w: '08:40 - 09:15', mp: 'Pend. Agama', g: 'Abdul Muin, S.Pd.I', brk: false },
        { j: '-', w: '09:15 - 09:45', mp: 'Istirahat ke-1', g: '—', brk: true },
        { j: '4', w: '09:45 - 10:20', mp: 'Pend. Agama', g: 'Abdul Muin, S.Pd.I', brk: false },
        { j: '5', w: '10:20 - 10:55', mp: 'Pend. Agama', g: 'Abdul Muin, S.Pd.I', brk: false },
        { j: '6', w: '10:55 - 11:30', mp: 'Bhs. Inggris', g: 'Sri Eny Sumiarti', brk: false },
        { j: '-', w: '11:30 - 12:10', mp: 'Istirahat ke-2', g: '—', brk: true },
        { j: '7', w: '12:10 - 12:45', mp: 'Bhs. Inggris', g: 'Sri Eny Sumiarti', brk: false },
        { j: '8', w: '12:45 - 13:20', mp: 'IPAS', g: 'Lukas Yudi Setiawan', brk: false },
        { j: '9', w: '13:20 - 13:55', mp: 'IPAS', g: 'Lukas Yudi Setiawan', brk: false },
        { j: '10', w: '13:55 - 14:30', mp: 'IPAS', g: 'Lukas Yudi Setiawan', brk: false }
    ],
    Kamis:[
        { j: '1', w: '07:30 - 08:05', mp: 'Bhs. Inggris', g: 'Sri Eny Sumiarti', brk: false },
        { j: '2', w: '08:05 - 08:40', mp: 'Bhs. Inggris', g: 'Sri Eny Sumiarti', brk: false },
        { j: '3', w: '08:40 - 09:15', mp: 'Sejarah Ind.', g: 'Saydah Ak’la, S. Pd.', brk: false },
        { j: '-', w: '09:15 - 09:45', mp: 'Istirahat ke-1', g: '—', brk: true },
        { j: '4', w: '09:45 - 10:20', mp: 'Sejarah Ind.', g: 'Saydah Ak’la, S. Pd.', brk: false },
        { j: '5', w: '10:20 - 10:55', mp: 'IPAS', g: 'Lukas Yudi', brk: false },
        { j: '6', w: '10:55 - 11:30', mp: 'IPAS', g: 'Lukas Yudi', brk: false },
        { j: '-', w: '11:30 - 12:10', mp: 'Istirahat ke-2', g: '—', brk: true },
        { j: '7', w: '12:10 - 12:45', mp: 'IPAS', g: 'Lukas Yudi', brk: false },
        { j: '8', w: '12:45 - 13:20', mp: 'Bhs. Indonesia', g: 'Dra. Harmiati', brk: false },
        { j: '9', w: '13:20 - 13:55', mp: 'Bhs. Indonesia', g: 'Dra. Harmiati', brk: false },
        { j: '10', w: '13:55 - 14:30', mp: 'Matematika', g: 'Kusriyantini, S.Pd', brk: false }
    ],
    Jumat:[
        { j: '1', w: '07:30 - 08:30', mp: 'Jumaat' g: '404 name not found', brk: false },
        { j: '2', w: '08:30 - 09:05', mp: 'IPAS', g: 'Lukas Yudi Setiawan', brk: false },
        { j: '3', w: '09:05 - 09:40', mp: 'IPAS', g: 'Lukas Yudi Setiawan', brk: false },
        { j: '-', w: '09:40 - 09:55', mp: 'Istirahat', g: '—', brk: true },
        { j: '4', w: '09:55 - 10:30', mp: 'IPAS', g: 'Lukas Yudi Setiawan', brk: false },
        { j: '5', w: '10:30 - 11:05', mp: 'Bhs. Indonesia', g: 'Dra. Harmiati', brk: false },
        { j: '6', w: '11:05 - 11:40', mp: 'Bhs. Indonesia', g: 'Dra. Harmiati', brk: false }
    ]
};

const DATA_IMSAKIYAH_TXT = `1|19 Februari 2026|04:16|04:26|11:56|15:05|18:04|19:14
2|20 Februari 2026|04:16|04:26|11:55|15:04|18:04|19:14
3|21 Februari 2026|04:17|04:27|11:55|15:03|18:04|19:14
4|22 Februari 2026|04:17|04:27|11:55|15:02|18:03|19:13
5|23 Februari 2026|04:17|04:27|11:55|15:02|18:03|19:13
6|24 Februari 2026|04:17|04:27|11:55|15:01|18:03|19:12
7|25 Februari 2026|04:17|04:27|11:55|15:00|18:02|19:12
8|26 Februari 2026|04:17|04:27|11:55|14:59|18:02|19:11
9|27 Februari 2026|04:17|04:27|11:54|14:58|18:02|19:11
10|28 Februari 2026|04:18|04:28|11:54|14:57|18:01|19:11
11|01 Maret 2026|04:18|04:28|11:54|14:56|18:01|19:10
12|02 Maret 2026|04:18|04:28|11:54|14:55|18:00|19:10
13|03 Maret 2026|04:18|04:28|11:54|14:54|18:00|19:09
14|04 Maret 2026|04:18|04:28|11:53|14:55|18:00|19:09
15|05 Maret 2026|04:18|04:28|11:53|14:55|17:59|19:08
16|06 Maret 2026|04:18|04:28|11:53|14:56|17:59|19:08
17|07 Maret 2026|04:18|04:28|11:53|14:56|17:58|19:07
18|08 Maret 2026|04:18|04:28|11:53|14:56|17:58|19:07
19|09 Maret 2026|04:18|04:28|11:52|14:57|17:57|19:06
20|10 Maret 2026|04:18|04:28|11:52|14:57|17:57|19:06
21|11 Maret 2026|04:18|04:28|11:52|14:57|17:57|19:05
22|12 Maret 2026|04:18|04:28|11:51|14:58|17:56|19:05
23|13 Maret 2026|04:18|04:28|11:51|14:58|17:56|19:04
24|14 Maret 2026|04:18|04:28|11:51|14:58|17:55|19:04
25|15 Maret 2026|04:18|04:28|11:51|14:58|17:55|19:03
26|16 Maret 2026|04:18|04:28|11:50|14:59|17:54|19:03
27|17 Maret 2026|04:18|04:28|11:50|14:59|17:54|19:02
28|18 Maret 2026|04:18|04:28|11:50|14:59|17:53|19:02
29|19 Maret 2026|04:18|04:28|11:50|14:59|17:53|19:01
30|20 Maret 2026|04:18|04:28|11:49|15:00|17:52|19:01`.trim().split('\n');

const bId =['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const hId =['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
let ImsTableData =[];

document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Master TAB Section
    const navBtns = document.querySelectorAll('nav .glass-btn');
    navBtns.forEach(b => {
        b.addEventListener('click', function() {
            navBtns.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(this.getAttribute('data-target')+'-section').classList.add('active');
        });
    });

    DataCompileInit();
    mainCycleEngine(); 
    setInterval(mainCycleEngine, 1000); 
});


/* ==== 1. KOMPILASI PARSING DATA ===== */
function DataCompileInit() {
    ImsTableData = DATA_IMSAKIYAH_TXT.map(r => {
        let cols = r.split('|');
        return { h: cols[0], textId: cols[1], idx: cols[1].toLowerCase(), I: cols[2], S: cols[3], D: cols[4], A: cols[5], M: cols[6], IS: cols[7] }
    });

    // Papan Full Jadwal Pelajaran (Render Sekali, css akan yg urus Toggles hari/full)
    let fulHTML = "";
    Object.keys(JADWAL_PELAJARAN).forEach(dKey => {
        let blockItems = '';
        JADWAL_PELAJARAN[dKey].forEach(itm => {
            if(!itm.brk){ blockItems += `<div class="mini-lesson"><span class="jam-ke">${itm.w.split('-')[0].trim()}</span> <strong>${itm.mp}</strong></div>`;}
        });
        fulHTML += `<div class="week-day-box" id="wd-${dKey}"><h4 class="week-title">${dKey.toUpperCase()}</h4> ${blockItems} </div>`;
    });
    document.getElementById('jadwal-full-wrapper').innerHTML = fulHTML;

    // Full Tabel Ramadhan 
    let ramHTML = "";
    ImsTableData.forEach(r => {
        ramHTML += `<tr data-key="${r.idx}">
        <td>H+${r.h}</td><td>${r.textId}</td><td>${r.I}</td><td>${r.S}</td><td>${r.D}</td><td>${r.A}</td>
        <td style="color:var(--accent-orange); font-weight:800">${r.M}</td><td>${r.IS}</td></tr>`;
    });
    document.getElementById('imsakiyah-tbody').innerHTML = ramHTML;
}

// TOGGLE VIEW Pelajaran: 
window.setModeJadwal = function(md) {
    document.getElementById('vbtn-jadwal-today').classList.toggle('active', md==='today');
    document.getElementById('vbtn-jadwal-all').classList.toggle('active', md==='all');
    document.getElementById('jadwal-today-wrapper').classList.toggle('hidden', md==='all');
    document.getElementById('jadwal-full-wrapper').classList.toggle('hidden', md==='today');
}

// TOGGLE VIEW Imsakiyah:
window.setModeImsakiyah = function(md) {
    document.getElementById('vbtn-ims-today').classList.toggle('active', md==='today');
    document.getElementById('vbtn-ims-all').classList.toggle('active', md==='all');
    document.getElementById('imsakiyah-today-wrapper').classList.toggle('hidden', md==='all');
    document.getElementById('imsakiyah-full-wrapper').classList.toggle('hidden', md==='today');

    if (md === 'all') { // Scrolling tepat ke tr ter highilght hari inib 
        const aktRow = document.querySelector('tr.today-row');
        if (aktRow) aktRow.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}


/* ==== 2. SYSTEM ENGINE PERPUTARAN CLOCK (1 DETIK X TIK) ==== */
function mainCycleEngine() {
    const NOW = new Date();
    // 01 Clock UI Biasa 
    document.getElementById('clock-display').innerText = NOW.toLocaleTimeString('id-ID', {hour12:false});
    
    // Konversi text tgl harian kita cth: 26 februari 2026
    const hr = hId[NOW.getDay()];
    const tglNameNow = `${NOW.getDate().toString().padStart(2,'0')} ${bId[NOW.getMonth()]} ${NOW.getFullYear()}`;
    const srchKey_Now = tglNameNow.toLowerCase();

    // Pastikan tidak nulis date trs2an jk udh match text content UI biar DOM relax.
    if(document.getElementById('date-display').innerText !== `${hr}, ${tglNameNow}`) {
        document.getElementById('date-display').innerText = `${hr}, ${tglNameNow}`;
        document.getElementById('j-lbl-today').innerText = hr;
        document.querySelectorAll('.week-day-box').forEach(x=> x.classList.remove('is-today-week'));
        if (document.getElementById(`wd-${hr}`)) document.getElementById(`wd-${hr}`).classList.add('is-today-week'); 
    }

    /* ─── PEMERIKSAAN DAFTAR AKTIVITAS KELAS JADWAL  ─── */
    EngineCheckJadwal(hr, NOW);

    /* ───  STRATEGI TRANSISI OTOMATIS SUBUH-MAGHRIB ───  */
    EngineTransisiDoaImsak(NOW, srchKey_Now);
}

function EngineCheckJadwal(hariH, oNow) {
    const wwJam = oNow.getHours().toString().padStart(2,'0')+':'+oNow.getMinutes().toString().padStart(2,'0');
    let dbJ = JADWAL_PELAJARAN[hariH];

    // Build Hmtl For Card View list
    if (!dbJ) {
         document.getElementById('jadwal-today-wrapper').innerHTML = `<div class="text-center w-100 mt-5 mb-5 opacity-5">Santai Sejenak. Tidak ada pelajaran</div>`;
         document.getElementById('lesson-status').innerText = 'Jadwal Libur 😊'; return;
    }
    
    let klsAktfName = "Aman (Di luar Jam Pelajaran)"; let listHtml = ""; let adaAktifSrg = false;
    dbJ.forEach(bx => {
         const limits = bx.w.replace(/ /g, '').split('-'); 
         const stat_aktf = (wwJam >= limits[0] && wwJam < limits[1]);
         if (stat_aktf) { adaAktifSrg = true; klsAktfName = bx.mp;}

         listHtml += `<div class="lesson-card ${stat_aktf ? 'active-lesson':''} ${bx.brk?'is-break':''}" ${stat_aktf?'id="aktif-sorot"':''}>
            <div class="jam-ke">${bx.brk?'<i class="fas fa-bed"></i>': bx.j}</div>
            <div class="info"><div class="subject">${bx.mp}</div>${bx.brk?'':`<div class="teacher">${bx.g}</div>`}</div>
            <div class="time-slot">${bx.w}</div>
         </div>`;
    });
    
    // Jangan ngubah DOM jka state ini sama dg yg td digender spy tidak kdip di hover UX. Tapi kl blm render, paksa taruh
    if(!window.ter_rend || window.jamBantuU === undefined || window.jamBantuU !== wwJam.substring(0,2) ) {
        document.getElementById('jadwal-today-wrapper').innerHTML = listHtml;
        document.getElementById('lesson-status').innerHTML = adaAktifSrg ? `Sedang aktif : <strong>${klsAktfName}</strong>` : klsAktfName;
        // Bikin scroll mulus kr kelas aktif kl buka hp panjang
        if(adaAktifSrg) document.getElementById('aktif-sorot').scrollIntoView({ behavior: "smooth", block:"center" });
        window.ter_rend = true; window.jamBantuU = wwJam.substring(0,2);
    }
}


// Object Pengembali Data Timer & Highlight
function cariObjRecordHarian(queryIdLowcase) { 
     let getRes = ImsTableData.find(x => x.idx === queryIdLowcase);
     if(!getRes) getRes = ImsTableData[7]; // (Fallback paksa Hari Ini Tgl 26 Buat display dummy Jika bulan ini bkn di Ramadhan sesungguhnya biar sistem tidak nge-crash blank layarnya).
     return getRes;
}

// Alat potong Time String jd exact JS-Obj Time Mili-precision ("04:17")
function crDtgObj(bseTglDate_Obj, waktuStrTxt) {
      let pcah = waktuStrTxt.split(':');
      return new Date(bseTglDate_Obj.getFullYear(), bseTglDate_Obj.getMonth(), bseTglDate_Obj.getDate(), parseInt(pcah[0]), parseInt(pcah[1]), 0 );
}

function EngineTransisiDoaImsak(O_Now, todayId_stringStr) {
     // A. Tarik Baris Record "Hari Ini" Ramadhan!
     const Rec_Hari_Ini = cariObjRecordHarian(todayId_stringStr); 
     
     // Bangun Tabel UI View nya "Hari Ini Cuma yang ditampilkan doang (6 Kartu)."
     const UIListStrDoa = `<div class="doa-card ${window.dAim==='Imsak'?'active-doa-aim':''}"><h4>IMSAK</h4><p>${Rec_Hari_Ini.I}</p></div>
                         <div class="doa-card ${window.dAim==='Subuh'?'active-doa-aim':''}"><h4>SUBUH</h4><p>${Rec_Hari_Ini.S}</p></div>
                         <div class="doa-card"><h4>DZUHUR</h4><p>${Rec_Hari_Ini.D}</p></div>
                         <div class="doa-card"><h4>ASHAR</h4><p>${Rec_Hari_Ini.A}</p></div>
                         <div class="doa-card ${window.dAim==='Maghrib'?'active-doa-aim':''}"><h4>MAGHRIB</h4><p>${Rec_Hari_Ini.M}</p></div>
                         <div class="doa-card"><h4>ISYA'</h4><p>${Rec_Hari_Ini.IS}</p></div>`;
     document.getElementById('prayer-today-grid').innerHTML = UIListStrDoa; // Over-render krn variable global warna state cpt brbuh.

     // Highlight Di Tampilan ALL TABEL TR 30 Haris:
     document.querySelectorAll('#imsakiyah-tbody tr').forEach(q=> q.classList.remove('today-row'));
     let selR2 = document.querySelector(`tr[data-key="${todayId_stringStr}"]`);
     if(!selR2) selR2 = document.querySelector(`tr[data-key="26 februari 2026"]`); // Fallback css target jk trjdi null lookup date skrg test.
     if(selR2) selR2.classList.add('today-row');

     /* -- ENGINE LOGIC TIMER --: Target Miliseconds Calculation Real 100%*/
     let TS_HariImsak = crDtgObj(O_Now, Rec_Hari_Ini.I);
     let TS_HariSubuh = crDtgObj(O_Now, Rec_Hari_Ini.S);
     let TS_HariMaghrb= crDtgObj(O_Now, Rec_Hari_Ini.M);
     let TargetSuhuMs_Lanjutan; 

     let TXTLabel, ClssColors; 
     let timeWkPusaSelesaiAlertHitungDetikBatasKunciAkhir = new Date(TS_HariMaghrb.getTime() + (30 * 60000)); // + 30m dari adzan mgrib untuk notif hijau bgt!
     
     window.dAim = null; // Target sorotan hijau dikotak.
     
     // State Diagram Logic Decision :
     if (O_Now < TS_HariImsak) {
          TargetSuhuMs_Lanjutan = TS_HariImsak; TXTLabel = "Sisa Menuju Imsak (Bersiap Berhenti Makan)"; ClssColors='neon-text-teal'; window.dAim = 'Imsak';
     } else if (O_Now < TS_HariSubuh) {
          TargetSuhuMs_Lanjutan = TS_HariSubuh; TXTLabel = "Segera Menuju Adzan Subuh!"; ClssColors='neon-text-green'; window.dAim = 'Subuh';
     } else if (O_Now <= timeWkPusaSelesaiAlertHitungDetikBatasKunciAkhir) {
           if(O_Now < TS_HariMaghrb) {
              TargetSuhuMs_Lanjutan = TS_HariMaghrb; TXTLabel = "Berjalan Menuju Maghrib (BUKA PUASA)🔥"; ClssColors='neon-text-orange'; window.dAim = 'Maghrib';
           } else {
              TargetSuhuMs_Lanjutan = null; TXTLabel="✨ SAATNYA BERBUKA PUASA ALHAMDULILLAH ✨"; ClssColors='neon-text-green';
           }
     } else {
           // MELEWATI Jam buka lewat banget Malam Nya -> LANGSUNG FOKUS Cari "Target Imsak Buat Besok (Keesokan Harinya)." 🚀🚀!
           const HariTumbuhObjDate2MalamMntBeskLg = new Date(O_Now.getTime() + 86400000); 
           const BeskFormatTxY = `${HariTumbuhObjDate2MalamMntBeskLg.getDate().toString().padStart(2,'0')} ${bId[HariTumbuhObjDate2MalamMntBeskLg.getMonth()]} ${HariTumbuhObjDate2MalamMntBeskLg.getFullYear()}`.toLowerCase();
           
           let BesokDatabaseObjPetaBarisanTeksPilih2_I = cariObjRecordHarian(BeskFormatTxY); 
           TargetSuhuMs_Lanjutan = crDtgObj(HariTumbuhObjDate2MalamMntBeskLg, BesokDatabaseObjPetaBarisanTeksPilih2_I.I);
           
           TXTLabel = `Menuju Imsak Puasa Ke-+${BesokDatabaseObjPetaBarisanTeksPilih2_I.h}`;
           ClssColors = 'neon-text-teal';
           window.dAim = 'Imsak'; // Tapi untuk Imsak nya Bsok 
     }

     document.getElementById('countdown-label').innerText = TXTLabel;
     document.getElementById('countdown-timer').className = ClssColors;

     if (TargetSuhuMs_Lanjutan !== null) {
          const deltaBeliDMs = TargetSuhuMs_Lanjutan - O_Now; 
          const Hrs=Math.floor(deltaBeliDMs /1000/60/60).toString().padStart(2,'0'); 
          const Min=Math.floor((deltaBeliDMs/1000/60)%60).toString().padStart(2,'0');
          const Sc=Math.floor((deltaBeliDMs/1000)%60).toString().padStart(2,'0');
          document.getElementById('countdown-timer').innerText = `${Hrs}:${Min}:${Sc}`;
     } else {
          // Artinya pasca state berbuak stngjjam
          document.getElementById('countdown-timer').innerText = "-- AMAN --";
     }

}
