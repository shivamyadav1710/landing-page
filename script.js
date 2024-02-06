var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Ducati Superleggera V4"><img class="bik"src="dugati.jpg"alt="V4"><div class="tover"><br>dugati</br></div> </a></div>';
        l+=1;
    }
    else if(l==2)
    {        
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Kawasaki Ninja H2R"><img class="bik"src="kawasaki ninja h2r.jpg" alt="H2R"><div class="tover"><br>Kawasaki</div></a></div>';
        l+=1;
    }
    else if(l==3)
    {
        container.innerHTML+= '<div class="box"><a href="https://sco.wikipedia.org/wiki/Dugati Streetfighter V4 Lamborghini"><img class="bik"src="dugati streetfighter v4 lamborghini.jpg" alt="V4 Lamborghini"><div class="tover"><br>Dugati</div></a></div>';
        l+=1;
    }
    else if(l==4)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Dugati_Panigale_V4_R"><img class="bik"src="dugati panigale v4 R.jpg" alt="V4_R"><div class="tover"><br>Dugati</div></a></div>';
        l+=1;
    }
    else
    {
        alert('More COntent will be added Soon. Stay Tuned:)');
    }
}
function sub(){
    alert('Form Sent')
}