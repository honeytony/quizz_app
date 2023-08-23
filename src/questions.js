const Questions = [
    {
        title: 'Что такое СНО?',
        description: 'где его найти, каким цветом выделяются изменения',
        type: 'one',
        answers: [
            {
                text: 'Cтандартный набор операций, изменения выделяются желтым цветом.',
                correct: true,
            },
            {
                text: 'Cтандартный набор операций, изменения выделяются красным цветом.',
                correct: false,
            },
            {
                text: 'Стартовый набор операций, изменения выделяются зеленым цветом.',
                correct: false,
            },
        ],
    },
    {
        title: 'Что такое NS?',
        description: 'Какие инструменты есть для работы с NS',
        type: 'one',
        answers: [
            {
                text: 'No Show – часть премии за сокращение показателя неявки (Отмены). Инструмент для работы – обзвон.',
                correct: true,
            },
            {
                text: 'No Show – часть премии за сокращение показателя неявки (возврата). Инструмент для работы – обзвон.',
                correct: false,
            },
            {
                text: 'No Seek – часть премии за сокращение потерянных вещей. Инструмент для работы – сканер.',
                correct: false,
            },
        ],
    },
    {
        title: 'Зачем нужна рассылка QM Digest?',
        description: '',
        type: 'one',
        answers: [
            {
                text: 'Чтобы сотрудники офиса видели поставленные задачи.',
                correct: false,
            },
            {
                text: 'Чтобы сотрудники операционного направления видели изменения в работе.',
                correct: false,
            },
            {
                text: 'Чтобы все сотрудники видели обновление программного обеспечения.',
                correct: true,
            },
        ],
    },
    {
        title: 'В каких случаях составляется бумажный акт о несоотстветствии?',
        description: '',
        type: 'one',
        answers: [
            {
                text: 'При расформировании отмен и приеме возврата по браку',
                correct: true,
            },
            {
                text: 'При расформировании отмен',
                correct: false,
            },
            {
                text: 'Бумажные акты не используются',
                correct: false,
            },
        ],
    },
    {
        title: 'Что такое ГРОСС?',
        description: '',
        type: 'one',
        answers: [
            {
                text: 'Эта вся выручка (кроме предоплаты), которая пробита на кассе с момента ее регистрации.',
                correct: true,
            },
            {
                text: 'Эта вся выручка вместе с предоплатой, которая пробита на кассе с момента ее регистрации.',
                correct: false,
            },
            {
                text: 'Это предоплата, которая пробита на кассе с момента ее регистрации.',
                correct: false,
            },
        ],
    },
    {
        title: 'Во сколько необходимо снимать Z-отчет?',
        description: '',
        type: 'one',
        answers: [
            {
                text: 'Не раньше 21:00/22:00 (в зависимости от графика пункта)',
                correct: true,
            },
            {
                text: 'Не раньше 20:00/21:00 (в зависимости от графика пункта)',
                correct: false,
            },
            {
                text: 'Не раньше 20:00',
                correct: false,
            },
        ],
    },
    {
        title: 'Какой этап продаж самый важный?',
        description: '',
        type: 'one',
        answers: [
            {
                text: 'Установление контакта',
                correct: true,
            },
            {
                text: 'Отработка возражений',
                correct: false,
            },
            {
                text: 'Аргументация',
                correct: false,
            },
        ],
    },
    {
        title: 'Что делать в случае поломки оборудования на ПВЗ?',
        description: 'Интернет, принтер и так далее...',
        type: 'one',
        answers: [
            {
                text: 'Написать заявку на портал (6911) и уведомить руководителя',
                correct: true,
            },
            {
                text: 'Разобраться самому',
                correct: false,
            },
            {
                text: 'Вызвать мастера по ремонту оборудования',
                correct: false,
            },
        ],
    },
];

module.exports = { Questions };