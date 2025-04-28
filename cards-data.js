const allCardsData = [
    { question: "Квадратное уравнение", answer: "$$ax^2 + bx + c = 0$$" },
    { question: "Дискриминант", answer: "$$D = b^2 - 4ac$$" },
    { question: "Корни квадратного уравнения", answer: "$$x = \\frac{-b \\pm \\sqrt{D}}{2a}$$" },
    { question: "Квадрат суммы", answer: "$$(a + b)^2 = a^2 + 2ab + b^2$$" },
    { question: "Квадрат разности", answer: "$$(a - b)^2 = a^2 - 2ab + b^2$$" },
    { question: "Разность квадратов", answer: "$$a^2 - b^2 = (a - b)(a + b)$$" },
    { question: "Куб суммы", answer: "$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$" },
    { question: "Куб разности", answer: "$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$" },
    { question: "Сумма кубов", answer: "$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$" },
    { question: "Разность кубов", answer: "$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$" },
    { question: "Формула Виета", answer: "$$x_1 + x_2 = -\\frac{b}{a},\\quad x_1 x_2 = \\frac{c}{a}$$" },
    { question: "Арифметическая прогрессия: n-й член", answer: "$$a_n = a_1 + d(n-1)$$" },
    { question: "Сумма n членов арифметической прогрессии", answer: "$$S_n = \\frac{(a_1 + a_n) n}{2}$$" },
    { question: "Геометрическая прогрессия: n-й член", answer: "$$b_n = b_1 q^{n-1}$$" },
    { question: "Сумма n членов геометрической прогрессии", answer: "$$S_n = b_1 \\frac{1 - q^n}{1 - q},\\ q \\neq 1$$" },
    { question: "Логарифм произведения", answer: "$$\\log_a(xy) = \\log_a x + \\log_a y$$" },
    { question: "Логарифм частного", answer: "$$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$$" },
    { question: "Логарифм степени", answer: "$$\\log_a(x^n) = n \\log_a x$$" },
    { question: "Показательная функция", answer: "$$y = a^x,\\ a > 0,\\ a \\neq 1$$" },
    { question: "Свойство логарифма", answer: "$$\\log_a a = 1,\\ \\log_a 1 = 0$$" },
    { question: "Переход к новому основанию логарифма", answer: "$$\\log_a b = \\frac{\\log_c b}{\\log_c a}$$" },
    { question: "Свойство степеней (умножение)", answer: "$$a^m \\cdot a^n = a^{m+n}$$" },
    { question: "Свойство степеней (деление)", answer: "$$\\frac{a^m}{a^n} = a^{m-n}$$" },
    { question: "Степень степени", answer: "$$(a^m)^n = a^{mn}$$" },
    { question: "Корень из степени", answer: "$$a^{1/n} = \\sqrt[n]{a}$$" },
    { question: "Сумма корней квадратного уравнения", answer: "$$x_1 + x_2 = -\\frac{b}{a}$$" },
    { question: "Произведение корней квадратного уравнения", answer: "$$x_1 x_2 = \\frac{c}{a}$$" },
    { question: "Модуль числа", answer: "$$|a| = \\begin{cases} a, & a \\geq 0 \\\\ -a, & a < 0 \\end{cases}$$" },
    { question: "Свойство модуля", answer: "$$|ab| = |a| \\cdot |b|$$" },
    { question: "Решение неравенства ax + b > 0", answer: "$$x > -\\frac{b}{a},\\ a > 0$$" },
    
    // Добавляем еще 30 карточек
    { question: "Формула синуса суммы", answer: "$$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$$" },
    { question: "Формула косинуса суммы", answer: "$$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$$" },
    { question: "Формула тангенса суммы", answer: "$$\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$$" },
    { question: "Синус двойного угла", answer: "$$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$$" },
    { question: "Косинус двойного угла", answer: "$$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha$$" },
    { question: "Основное тригонометрическое тождество", answer: "$$\\sin^2\\alpha + \\cos^2\\alpha = 1$$" },
    { question: "Формула приведения синуса", answer: "$$\\sin(\\pi - \\alpha) = \\sin\\alpha$$" },
    { question: "Формула приведения косинуса", answer: "$$\\cos(\\pi - \\alpha) = -\\cos\\alpha$$" },
    { question: "Производная синуса", answer: "$$\\frac{d}{dx}\\sin x = \\cos x$$" },
    { question: "Производная косинуса", answer: "$$\\frac{d}{dx}\\cos x = -\\sin x$$" },
    { question: "Производная тангенса", answer: "$$\\frac{d}{dx}\\tan x = \\frac{1}{\\cos^2 x}$$" },
    { question: "Производная логарифма", answer: "$$\\frac{d}{dx}\\ln x = \\frac{1}{x}$$" },
    { question: "Производная экспоненты", answer: "$$\\frac{d}{dx}e^x = e^x$$" },
    { question: "Первообразная синуса", answer: "$$\\int \\sin x dx = -\\cos x + C$$" },
    { question: "Первообразная косинуса", answer: "$$\\int \\cos x dx = \\sin x + C$$" },
    { question: "Формула Муавра", answer: "$$[r(\\cos\\phi + i\\sin\\phi)]^n = r^n(\\cos(n\\phi) + i\\sin(n\\phi))$$" },
    { question: "Формула бинома Ньютона", answer: "$$(x + y)^n = \\sum_{k=0}^n C_n^k x^{n-k}y^k$$" },
    { question: "Число сочетаний", answer: "$$C_n^k = \\frac{n!}{k!(n-k)!}$$" },
    { question: "Формула Тейлора для sin(x)", answer: "$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + ...$$" },
    { question: "Формула Тейлора для cos(x)", answer: "$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + ...$$" },
    { question: "Формула Тейлора для e^x", answer: "$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + ...$$" },
    { question: "Интеграл по частям", answer: "$$\\int u dv = uv - \\int v du$$" },
    { question: "Предел функции", answer: "$$\\lim_{x \\to a} f(x) = L$$" },
    { question: "Первый замечательный предел", answer: "$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$" },
    { question: "Второй замечательный предел", answer: "$$\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e$$" },
    { question: "Критерий Коши", answer: "$$\\lim_{n \\to \\infty} a_n = A \\iff |a_n - A| < \\varepsilon$$" },
    { question: "Ряд Тейлора", answer: "$$f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n$$" },
    { question: "Формула Эйлера", answer: "$$e^{ix} = \\cos x + i\\sin x$$" },
    { question: "Комплексная форма числа", answer: "$$z = r(\\cos\\phi + i\\sin\\phi) = re^{i\\phi}$$" },
    { question: "Теорема Безу", answer: "$$P(x) = (x - a)Q(x) + P(a)$$" }
];

// Выбираем случайные 30 карточек при загрузке
const cardsDataFull = (() => {
    const shuffled = [...allCardsData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 30);
})();

// cardsData для текущего отображения
let cardsData = [];