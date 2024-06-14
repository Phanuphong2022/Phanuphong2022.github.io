async function fetchserverstatus() {
  
  /* เก็บค่าตัวหนังสือจาก Input */
  var inputserver = document.getElementById("ipserver").value
  
  if (ipserver.value){
  Swal.fire({
    title: "<h3>กำลังเช็คข้อมูลเซิร์ฟเวอร์: </h3>" + inputserver,
    html: "<p>โปรดรอภายใน <red><b></b> วินาที</p></red>",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 5);
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  });
  }else {
    
    Swal.fire({
  title: "เกิดข้อผิดพลาด",
  html: "<p><red>ไม่พบการป้อนที่อยู่เซิร์ฟเวอร์</red></p>",
  icon: "error",
  showConfirmButton: false,
  timer: 1500,
});
    
  }
  
  document.getElementById("playername").innerHTML = "";
  const parameterValue = document.getElementById('ipserver').value;

  const mcAPI = `https://api.mcsrvstat.us/3/${parameterValue}`;
  fetch(mcAPI).then(responseMcStatus => {
    if (!responseMcStatus.ok) {
      throw new Error(`Network response was not ok: ${responseMcStatus.status}`);
    }
    return responseMcStatus.json();
  }).then(mcAPI => {
   document.getElementById("ip").innerHTML = mcAPI.ip;
   document.getElementById("port").innerHTML =  mcAPI.port;
   document.getElementById("version").innerHTML =  mcAPI.version;
   document.getElementById("software").innerHTML = mcAPI.software;
   
   document.getElementById("resultContainer").innerHTML = ""+ mcAPI.players.online + " / " + mcAPI.players.max + " คน"
    const playerInfoDiv = document.getElementById('playername');
    mcAPI.players.list.forEach(player => {
      const playerName = player.name;
      const playerUUID = player.uuid;

      const playerInfoParagraph = document.createElement('p');


      // Log or use the player information as needed
      playerInfoParagraph.textContent = playerName
      playerInfoDiv.appendChild(playerInfoParagraph);
      console.log(playerName);
      console.log("--------------------------");


    })
    const mcbanner = document.getElementById('mcbanner');
    mcbanner.src = `https://namemc.com/server/${parameterValue}/embed`;
  })
}
function clearform(){
  document.getElementById('ipserver').value = '';
  if (true) {
    Swal.fire({
      title: "<h1>สำเร็จ</h1>",
      html: "<p>คุณได้ <red>ลบ</red> ที่อยู่เซิร์ฟเวอร์เรียบร้อย</p>",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}


/* ทดลอง API Google Sheet */
const apiUrl = 'https://sheet.best/api/sheets/3a76a427-5e8f-4955-a92c-f6408462e110';

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    //console.log(userData);

    document.getElementById('footer').innerHTML = userData[0].footer
    document.getElementById('as').innerHTML = userData[0].as
    
    //สไลด์รูปภาพ
    document.getElementById('png').innerHTML = userData[0].png
    document.getElementById('png1').innerHTML = userData[0].png1
    document.getElementById('png2').innerHTML = userData[0].png2
  })
  .catch(error => {
    console.error('Error:', error);
  });
  