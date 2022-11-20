let header = document.getElementById("header");
        let aClass = document.getElementById("modela")
        let amgClass = document.getElementById("modelamg")
        let cClass = document.getElementById("modelc")
        let eClass = document.getElementById("modele")
        let sClass = document.getElementById("models")
        let info = document.querySelector('.info');
        
        aClass.addEventListener('click',()=>{
            header.style.backgroundImage = "url(images/A-Class.jpg)"
            info.innerHTML = `<div>
                    <h2>Engine</h2>
                    <p>2.00</p>
                </div>
                <div>
                <h2>Top speed</h2>
                <p>220 mph</p>
            </div>
            <div>
                <h2>Turbo</h2>
                <p>1.80.g5h</p>
            </div>
            <div class="line"></div>
            <div>
                <h2 id="model">A-Class</h2>
            </div>`
        });

        amgClass.addEventListener('click',()=>{
            header.style.backgroundImage = "url(images/amg-63.jpg)"
            info.innerHTML = `<div>
                    <h2>Engine</h2>
                    <p>4.00</p>
                </div>
                <div>
                <h2>Top speed</h2>
                <p>380 mph</p>
            </div>
            <div>
                <h2>Turbo</h2>
                <p>6.80.g5h</p>
            </div>
            <div class="line"></div>
            <div>
                <h2 id="model">Amg-Class</h2>
            </div>`
        });

        cClass.addEventListener('click',()=>{
            header.style.backgroundImage = "url(images/merc.jpg)"
            info.innerHTML = `<div>
                    <h2>Engine</h2>
                    <p>2.40</p>
                </div>
                <div>
                <h2>Top speed</h2>
                <p>240 mph</p>
            </div>
            <div>
                <h2>Turbo</h2>
                <p>2.30.g5h</p>
            </div>
            <div class="line"></div>
            <div>
                <h2 id="model">C-Class</h2>
            </div>`
           
        })
    
        eClass.addEventListener('click',()=>{
            header.style.backgroundImage = "url(images/e-class.jpg)"
            info.innerHTML = `<div>
                    <h2>Engine</h2>
                    <p>3.00</p>
                </div>
                <div>
                <h2>Top speed</h2>
                <p>360 mph</p>
            </div>
            <div>
                <h2>Turbo</h2>
                <p>3.20.g5h</p>
            </div>
            <div class="line"></div>
            <div>
                <h2 id="model">E-Class</h2>
            </div>`
        })
        sClass.addEventListener('click',()=>{
            header.style.backgroundImage = "url(images/s63.jpg)"
            info.innerHTML = `<div>
                    <h2>Engine</h2>
                    <p>3.50</p>
                </div>
                <div>
                <h2>Top speed</h2>
                <p>380 mph</p>
            </div>
            <div>
                <h2>Turbo</h2>
                <p>4.80.g5h</p>
            </div>
            <div class="line"></div>
            <div>
                <h2 id="model">S-Class</h2>
            </div>`
        })