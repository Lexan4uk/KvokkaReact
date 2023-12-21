const cquestions = [
    {
      title: 'Что такое C++?',
      answers: [
        'A Язык программирования, разработанный для системного программирования',
        'B Язык для написания стихов',
        'C Название нового кофейного напитка',
        'D Язык программирования, используемый только для веб-разработки'
      ],
      correct: [0],
      multipleCorrect: false
    },
    {
      title: 'Какова основная цель использования указателей в C++?',
      answers: [
        'A Управление динамической памятью и обеспечение эффективности',
        'B Создание красивого шаблона для программы',
        'C Передача данных в функции',
        'D Избегание ошибок компиляции'
      ],
      correct: [0],
      multipleCorrect: false
    },
    {
      title: 'Что такое "класс" в C++?',
      answers: [
        'A Специальный тип кофе',
        'B Структура данных для хранения чисел',
        'C Тип данных для хранения строк',
        'D Конструкция для создания пользовательских типов данных'
      ],
      correct: [3],
      multipleCorrect: false
    },
    {
      title: 'Что такое STL в контексте C++?',
      answers: [
        'A Стандартная библиотека шаблонов',
        'B Специальная библиотека для работы с кофе',
        'C Системная тестовая библиотека',
        'D Библиотека для работы с текстовыми строками'
      ],
      correct: [0],
      multipleCorrect: false
    },
    {
        title: 'В какие годы C++ уже существовал?',
        answers: [
          'A 1960',
          'B 2000',
          'C 2010',
          'D 1890'
        ],
        correct: [1, 2],
        multipleCorrect: true
      }
];
const jsquestions = [
    {
      title: 'Что такое JavaScript?',
      answers: [
        'A Язык программирования, используемый для создания веб-приложений',
        'B Язык для рисования изображений',
        'C Название нового мобильного устройства',
        'D Язык программирования, используемый только для научных исследований'
      ],
      correct: [0],
      multipleCorrect: false
    },
    {
      title: 'Какие методы используются для работы с массивами в JavaScript?',
      answers: [
        'A push()',
        'B pop()',
        'C shift()',
        'D slice()'
      ],
      correct: [0, 1, 2, 3],
      multipleCorrect: true
    },
    {
      title: 'Что такое "замыкание" в JavaScript?',
      answers: [
        'A Отсутствие операторов сравнения',
        'B Процесс объединения двух функций',
        'C Функция, которая сохраняет доступ к переменным из внешней области видимости',
        'D Способ создания графических элементов'
      ],
      correct: [2],
      multipleCorrect: false
    },
    {
      title: 'Что такое JSON?',
      answers: [
        'A JavaScript Object Notation',
        'B Стандартный язык программирования',
        'C Формат обмена данными, легко читаемый людьми',
        'D Язык описания стилей для веб-страниц'
      ],
      correct: [0, 2],
      multipleCorrect: true
    },
    {
      title: 'Как объявить переменную в JavaScript?',
      answers: [
        'A let myVar = 10;',
        'B const myVar = "Hello";',
        'C var myVar = true;',
        'D variable myVar = 3.14;'
      ],
      correct: [0, 1],
      multipleCorrect: true
    }
];
const pythonquestions = [
  {
    title: 'Что такое Python?',
    answers: [
      'A Язык программирования, разработанный для системного программирования',
      'B Язык для создания видеоигр',
      'C Название нового кулинарного блюда',
      'D Язык программирования, используемый для веб-разработки'
    ],
    correct: [0],
    multipleCorrect: false
  },
  {
    title: 'Как создать функцию в Python?',
    answers: [
      'A function my_function() {}',
      'B def my_function():',
      'C create function my_function():',
      'D def = my_function() {}'
    ],
    correct: [1],
    multipleCorrect: false
  },
  {
    title: 'Какие типы данных поддерживает Python?',
    answers: [
      'A int',
      'B float',
      'C string',
      'D boolean'
    ],
    correct: [0, 1, 2, 3],
    multipleCorrect: true
  },
  {
    title: 'Что такое PIP в контексте Python?',
    answers: [
      'A Программа для создания графических изображений',
      'B Системный пакет управления пакетами',
      'C Язык программирования для научных вычислений',
      'D Метод сжатия изображений'
    ],
    correct: [1],
    multipleCorrect: false
  },
  {
    title: 'Какой символ используется для однострочного комментария в Python?',
    answers: [
      'A //',
      'B #',
      'C --',
      'D /* */'
    ],
    correct: [1],
    multipleCorrect: false
  },
  {
    title: 'Как создать список (list) в Python?',
    answers: [
      'A let myList = [];',
      'B list myList = [];',
      'C var myList = ();',
      'D myList = []'
    ],
    correct: [3],
    multipleCorrect: false
  }
];
export { cquestions, jsquestions, pythonquestions };
  