import { useState } from "react";

export const toggleClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.toggle(className);
};

export const removeClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};


<<<<<<< HEAD
export const api_base_url = "https://code-room-kkzv.onrender.com"
=======
export const api_base_url = "https://code-room-kkzv.onrender.com"
>>>>>>> 27eed9748fa46910cb44f1dcb4a22ed09187301a
