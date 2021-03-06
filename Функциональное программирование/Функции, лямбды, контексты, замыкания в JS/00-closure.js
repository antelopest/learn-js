/*

Замыкания

JS - язык программирования с сильным функциольно-ориентированным уклоном.

В JS у каждой выполняемой функции, блока кода и скрипта есть связанный с ними внутренний скрытый объект, называемый лексическим окружением.

Объект лексического окружения состоит из двух частей:
* Environment Record - объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this)
* Ссылка на внешнее лексическое окружение - то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок)

Переменная - это просто свойство специального внутреннего объекта: Environment Record
Получить или изменить переменную, означает получить или изменить свойство этого объекта.

Пример
let phrase = 'Hell';
console.log(phrase);

Lexical Environment:
phrase: 'Hello

У глобального лексического окружения отстуствует внешнее окружение.

Итого:
Переменная – это свойство специального внутреннего объекта, связанного с текущим выполняющимся блоком/функцией/скриптом.
Работа с переменными - это работа со свойствами этого объекта.

=================================================================================================================================================

Function Declaration

В отличие от переменных, объявленных с помощью let, они полностью инициализируются не тогда, когда выполнение доходит до них, а раньше, когда создаётся лексическое окружение.

=================================================================================================================================================

Внутреннее и внешнее лексическое окружение

При запуске функции для неё автоматически создаётся новое лексическое окружение, для хранения локальных переменных и параметров вызова.

Итак, в процессе вызова функции у нас есть два лексических окружения: внутреннее (для вызываемой функции) и внешнее (глобальное):
внутреннее лексическое окружение соответствует текущему выполнению say.
В нём находится одна переменная name, аргумент функции. Мы вызываем say("John"), так что значение переменной name равно "John".
Внешнее лексическое окружение – это глобальное лексическое окружение.
В нём находятся переменная phrase и сама функция.

let phrase = 'Hello'
function say(name) {
  alert(`${phrase}, ${name});
}

Внешнее лексическое окружение:
phrase: 'Hello'
Внутрее лексическое окружение:
name: undefined
say(): Function

Когда код хочет получить доступ к переменной – сначала происходит поиск во внутреннем лексическом окружении, затем во внешнем, затем в следующем и так далее, до глобального.

Функция получает текущее значение внешних переменных, то есть, их последнее значение

=================================================================================================================================================

Вложенные функции

Функция называется «вложенной», когда она создаётся внутри другой функции.

Пример
function sayHiBye(firstName, lastName) {
  // функция-помощник, которую мы используем ниже
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );
}

или

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert( counter1() ); // 0
alert( counter1() ); // 1

alert( counter2() ); // 0 (независимо)


Замыкания
В программировании есть общий термин: «замыкание», – которое должен знать каждый разработчик.

Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ. В некоторых языках это невозможно, или функция должна быть написана специальным образом, чтобы получилось замыкание. Но, как было описано выше, в JavaScript, все функции изначально являются замыканиями (есть только одно исключение, про которое будет рассказано в Синтаксис "new Function").

То есть, они автоматически запоминают, где были созданы, с помощью скрытого свойства [[Environment]] и все они могут получить доступ к внешним переменным.

Когда на собеседовании фронтенд-разработчик получает вопрос: «что такое замыкание?», – правильным ответом будет определение замыкания и объяснения того факта, что все функции в JavaScript являются замыканиями, и, может быть, несколько слов о технических деталях: свойстве [[Environment]] и о том, как работает лексическое окружение.

«что такое замыкание?», – правильным ответом будет определение замыкания и объяснения того факта, что все функции в JavaScript являются замыканиями, и, может быть, несколько слов о технических деталях: свойстве [[Environment]] и о том, как работает лексическое окружение.


Предыдущие примеры сосредоточены на функциях. Но лексическое окружение существует для любых блоков кода {...}.

Лексическое окружение создаётся при выполнении блока кода и содержит локальные переменные для этого блока. Вот пара примеров.

Так что программистам пришлось что-то придумать. И то, что они сделали, называется «immediately-invoked function expressions» (аббревиатура IIFE), что означает функцию, запускаемую сразу после объявления.

*/