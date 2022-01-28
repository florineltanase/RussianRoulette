function pressTheButton()
{
   let x=[1,2,3,4,5,6];
   let tries=0;
   let www=getRandomInt(1,6);
   console.log(www)
   const texting=document.querySelector("mort")
   
   const button = document. querySelector('button')
    
   let number=Math.floor(Math.random()*x.length)
    
   console.log(number)

 
    if(number===www)
    {
       document.body.style.backgroundImage="url('hero_nuclear_blast.jpg')";
      
    }


}

function ResetAll(){
    document.body.style.backgroundImage="url('parc.pg.jpg')"

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}