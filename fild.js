const fild = () => {
    const fildbox = document.querySelector(".fild");
    for (let i = 0; i < 9; i = i + 3) {
        let row = document.createElement(`div`);
        row.classList.add(`row`, `row${i}`);
        fildbox.append(row);
        let rowi = document.querySelector(`.row${i}`);
        for (let k = i; k < i + 3; k++) {
            rowi.innerHTML += `<div id=${k} class="box box${k} animate__animated animate__zoomIn"></div>`;
        };
    };
};
export default fild;