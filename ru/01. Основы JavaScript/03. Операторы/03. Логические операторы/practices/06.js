/* Задача 6 */

/* Условие для отображения кнопки */

/* Отображать кнопку "Cкачать" только если пользователь вошел и у него есть премиум */

const isLoggedIn = true;
const hasPremium = false;

const isVisible = (isLoggedIn, hasPremium) => {
    return isLoggedIn && hasPremium;
}

const button = document.createElement("button");

if (isVisible(isLoggedIn, hasPremium)) {
    button.removeAttribute("hidden");
} else {
    button.setAttribute("hidden", "hidden");
}
