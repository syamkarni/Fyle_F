const focus_fun = ({ id, focus, value = "" }) => {
    if (focus) {
      document.getElementById(id).style.position = "relative"
    }
    else {
      if (value.length === 0) {
        document.getElementById(id).style.position = "absolute"
      }
    }
  }

  const show_contact_us_form_fun = () => {
    document.getElementById("contact_us_form").classList.remove("d-none")
  }

  const close_contact_us_form_fun = () => {
    document.getElementById("contact_us_form").classList.add("d-none")
  }

  const close_popup = () => {
    document.getElementById("popup").classList.replace("d-grid", "d-none")
  }

  const open_popup = () => {
    document.getElementById("popup").classList.replace("d-none", "d-grid")
  }

  const prjct_changing_btns = document.querySelectorAll(".project_changing_btns li")
  const project_img = document.querySelectorAll(".project_section img")
  prjct_changing_btns.forEach((btn, i) => {

    btn.addEventListener("click", function () {
      prjct_changing_btns.forEach(v => v.classList.remove("active_project"))
      prjct_changing_btns.forEach(v => v.children[0].classList.remove("project_active_text"))
      prjct_changing_btns.forEach(v => v.children[1].classList.remove("project_active_text"))
      prjct_changing_btns.forEach(v => v.children[0].style.color = "")
      prjct_changing_btns.forEach(v => v.children[1].style.color = "")
      project_img.forEach(v => v.classList.remove("project_active_img"))

      btn.classList.add("active_project")
      btn.children[0].style.color = "white"
      btn.children[1].style.color = "white"
      project_img[i].classList.add("project_active_img")

    })
  })

  // service scroller
  const scroll_images_container = document.getElementById("scroll-images");
   let totalWidthSizeOfImages = scroll_images_container.children.length * (scroll_images_container.children[0].clientWidth + 12);
  let widthOfImage = scroll_images_container.children[0].clientWidth + 12;
  
  let totalFrame = 0;
  totalFrame = totalWidthSizeOfImages / widthOfImage;

  let totalFramseOfElements = 0;

  totalFramseOfElements = Math.ceil(totalFrame)

  let innerWidth = window.innerWidth;
 
  if(innerWidth < 576 ){
    totalFramseOfElements = Math.ceil(totalFrame / 1 )
  }
  if(innerWidth > 575 && innerWidth <= 992 ){
    totalFramseOfElements = Math.ceil(totalFrame / 2 )
  }
  if(innerWidth > 992 && innerWidth < 1200 ){
    totalFramseOfElements = Math.ceil(totalFrame / 3 )
  }
  if(innerWidth >= 1200){
    totalFramseOfElements = Math.ceil(totalFrame / 4 )
  }

  const scroll_indicator_container = document.getElementById("scroll-indicator");

  Array.from({ length: totalFramseOfElements }, (v, i) => {
    const li = document.createElement("li");

    scroll_indicator_container.appendChild(li);
    li.classList.remove("active_service");
    scroll_indicator_container.children[0].classList.add("active_service")

    li.onclick = function(e){
      for(let x = 0; scroll_indicator_container.children.length > x; x++){
        scroll_indicator_container.children[x].classList.remove("active_service")
      }

      let left = ((scroll_images_container.clientWidth - 10) * i)
      scroll_images_container.scrollLeft = left;
     
      e.currentTarget.classList.add("active_service")
    }

  })

  form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const data = new FormData(e.target);

    console.log("data ", data)
      const url = "https://getform.io/f/adrygyza";

    fetch(url, {
      method : "POST",
      body : data,
      headers : {
        "Accept" : "application/json"
      }
    }).then((res)=>{
      if(!res.ok){
        console.log("err ", res)
        close_contact_us_form_fun()
        open_popup()
      }
      else{
        console.log("response ", res)
      }
    })
  })


  function input_handler(e){
    const {name, value} = e;

    if(name === "tnc"){
      form.tnc = e.checked ? "yes" : "no"      
    }
    else{
  }}