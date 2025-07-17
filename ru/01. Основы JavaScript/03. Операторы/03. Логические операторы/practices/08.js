/* Задача 8 */

/* Доступ в чат */

/* Писать в чат можно, если пользователь онлайн и (он друг или модератор) */

const hasSendMessage = (isOnline, isFriend, isModerator) => {
    return isOnline && (isFriend || isModerator);
}