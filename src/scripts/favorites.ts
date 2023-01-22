export default function favorites() {
  const fav_btns = document.querySelectorAll("[data-fav]");

  let favs = localStorage.getItem("favs");
  if (!favs) {
    localStorage.setItem("favs", JSON.stringify({}))
  }
  let favs_arr = favs ? JSON.parse(favs) : {};

  /**
   * Update Favorites States
   * @param btn Element
   */
  const updateStates = (btn: Element) => {
    const id = btn.getAttribute("data-fav") || "";
    if (typeof favs_arr[id] !== "undefined") {
      btn.children[1].classList.remove('hidden');
    }
    console.log(id, favs_arr, typeof favs_arr[id]);
  }

  /**
   * Update the favorites counter text
   */
  const updateFavCounter = () => {
    const counterElem = document.querySelectorAll(".js-fav-counter");

    let favs = localStorage.getItem("favs");
    let favs_arr = favs ? JSON.parse(favs) : false;

    counterElem.forEach(el => {
      el.innerHTML = `(${Object.keys(favs_arr).length})`;
    });
  }

  /**
   * Handle Favorites Button Click
   * @param el HTML element
   * @returns void
   */
  const handleFavClick = (el: HTMLElement) => {
    const id: number = parseInt(el.getAttribute("data-fav") || "");
    const title: string = el.getAttribute("data-fav-title") || "";
    const thumb: string = el.getAttribute("data-fav-thumb") || "";

    console.log(id, title, thumb);
    if (!id) return;

    if (!favs_arr[id]) {
      favs_arr[id] = [title, thumb];
      el.children[1].classList.remove('hidden');
    } else {
      delete favs_arr[id]
      el.children[1].classList.add('hidden');
    }
    localStorage.setItem("favs", JSON.stringify(favs_arr));
    // } else {
    //   el.children[1].classList.add('hidden');
    //   localStorage.setItem(
    //     "favs",
    //     JSON.stringify({
    //       [id]: [title, thumb],
    //     })
    //   );
    // }

    console.log(favs_arr);
  }

  // Initialize
  fav_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      handleFavClick(e.currentTarget as HTMLElement);
      updateFavCounter();
    });
    updateStates(btn);
    updateFavCounter();
  });
}