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
];

module.exports = { Questions };
