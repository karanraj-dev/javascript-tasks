const form = document.querySelector("#Qr-form");
const input = document.querySelector("#input-text");
const img = document.querySelector(".qr-img");


form.addEventListener("submit",(e) =>{
  e.preventDefault();
  const inputVal = input.value.trim();
  // const qrImgurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`;

  fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`)
  .then(res => res.url)
  .then(src => {
    img.onload = () => {
      img.style.display = "block";
    };
    img.src = src;
  });
  
  
  // fetchQRImage(inputVal);
  
});

async function fetchQRImage(text){

  try{
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`);

    if(!response.ok) throw new Error("Error Generating QR Image")
    
    const QRdata = await (response.json());
    console.log(QRdata);
    img.src = QRdata;
    img.style.display = "block";
    
    
  }
  catch(error){
    console.error(error);
  }

}









