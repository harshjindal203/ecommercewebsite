//const bar =document.getElementById('bar');
//const close = document.getElementById('close');
//const nav = document.getElementById('navbar');

//if (bar) {
   // bar.addEventListener('click',() => {
     //   nav.classList.add('active');
  //  })
//}
//if (close) {
  //  close.addEventListener('click',() => {
      //  nav.classList.remove('active');
  //  })
//}

//console.clear();

//const loginBtn = document.getElementById('login');
//const signupBtn = document.getElementById('signup');

//loginBtn.addEventListener('click', (e) => {
//	let parent = e.target.parentNode.parentNode;
//	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
//		if(element !== "slide-up") {
//			parent.classList.add('slide-up')
//		}else{
//			signupBtn.parentNode.classList.add('slide-up')
//			parent.classList.remove('slide-up')
//		}
//	});
//});

//signupBtn.addEventListener('click', (e) => {
	//let parent = e.target.parentNode;
	//Array.from(e.target.parentNode.classList).find((element) => {
		//if(element !== "slide-up") {
		//	parent.classList.add('slide-up')
		//}else{
		//	loginBtn.parentNode.parentNode.classList.add('slide-up')
			//parent.classList.remove('slide-up')
	//	}
//	});
//});

// Import the functions you need from the SDKs you need

document.addEventListener('DOMContentLoaded', () => {
	const DataJson = 'items.json';
	fetch(DataJson)
	.then(response => response.json())
	.then(data => {
		DataLoadJson(data);
	})
	.catch(error => {
		console.log(error);
	});
});



const bar =document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

// // Import the functions you need from the SDKs you need




//Updation

function DataLoadJson(data) {
    const proContainer = document.getElementById('pro-container');
    
    // Clear existing content
    proContainer.innerHTML = ' ';

    data.forEach(item => {
        const productHTML = `
        <div class="pro" onclick="window.location.href='sproduct.html?id=${item.id}';">
            <img src="${item.image}" alt="${item.name}">
            <div class="des">
                <span>${item.name}</span>
                <h5>${item.description}</h5>
                <div class="star">00
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${item.price}</h4>
            </div>
            <a href="#"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
        </div>
        `;

        proContainer.innerHTML += productHTML;
    });
}
