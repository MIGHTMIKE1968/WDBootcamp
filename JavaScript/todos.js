let lis =  document.querySelectorAll("li");

for(let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("select1");    
    });
    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("select1");
    });
    lis[i].addEventListener("click", function() {
        this.classList.toggle("done");
    });
}
        
        