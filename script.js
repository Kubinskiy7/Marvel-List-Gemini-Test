document.addEventListener('DOMContentLoaded', () => {
    // Полные данные из PDF структурированные как JSON
    // Примечание: IMDb/Кинопоиск и ссылки HDrezka не включены, их нужно получать отдельно.
    const marvelData = [
      {
        section: "Сага Бесконечности",
        phase: "Фаза 1",
        projects: [
          { id: 1, title: "Железный человек", voice_over: "Дубляж", duration: "2:06:10", director: "Джон Фавро", release_date: "14 апреля 2008 года", type: "Фильм" },
          { id: 2, title: "Невероятный Халк", voice_over: "Дубляж", duration: "1:52:14", director: "Луи Летерье", release_date: "6 июня 2008 года", type: "Фильм" },
          { id: 3, title: "Железный человек 2", voice_over: "Дубляж", duration: "2:04:34", director: "Джон Фавро", release_date: "28 апреля 2010 года", type: "Фильм" },
          { id: 4, title: "Тор", voice_over: "Дубляж", duration: "1:54:50", director: "Кеннет Брана", release_date: "28 апреля 2011 года", type: "Фильм" },
          { id: 5, title: "Первый мститель", voice_over: "Дубляж", duration: "2:04:11", director: "Джо Джонстон", release_date: "28 июля 2011 года", type: "Фильм" },
          { id: 6, title: "Короткометражка Marvel: Консультант", voice_over: "Leiunium Voices или Flarrow Films", duration: "03:57", director: "Лейтум", release_date: "13 сентября 2011 года", type: "Короткометражка" },
          { id: 7, title: "Короткометражка Marvel: Забавный случай на пути к молоту Тора", voice_over: "Несмертельное оружие", duration: "04:03", director: "Лейтум", release_date: "25 октября 2011 года", type: "Короткометражка" },
          { id: 8, title: "Мстители", voice_over: "Дубляж", duration: "2:22:54", director: "Джосс Уидон", release_date: "3 мая 2012 года", type: "Фильм" }
        ]
      },
      {
        section: "Сага Бесконечности",
        phase: "Фаза 2",
        projects: [
          { id: 9, title: "Короткометражка Marvel: Образец 47", voice_over: "Несмертельное оружие", duration: "11:20", director: "Луис Д'Эспозито", release_date: "13 июля 2012 года", type: "Короткометражка" },
          { id: 10, title: "Железный человек 3", voice_over: "Дубляж", duration: "2:10:32", director: "Шейн Блэк", release_date: "2 мая 2013 года", type: "Фильм" },
          { id: 11, title: "Короткометражка Marvel: Агент Картер", voice_over: "Flarrow Films", duration: "15:29", director: "Луис Д'Эспозито", release_date: "19 июля 2013 года", type: "Короткометражка" },
          { id: 12, title: "Тор 2: Царство тьмы", voice_over: "Дубляж", duration: "1:52:03", director: "Алан Тейлор", release_date: "22 октября 2013 года", type: "Фильм" },
          { id: 13, title: "Короткометражка Marvel: Да здравствует король", voice_over: "Flarrow Films", duration: "13:51", director: "Дрю Пирс", release_date: "4 февраля 2014 года", type: "Короткометражка" },
          { id: 14, title: "Первый мститель: Другая война", voice_over: "Дубляж", duration: "2:15:54", director: "Джо Руссо, Энтони Руссо", release_date: "13 марта 2014 года", type: "Фильм" },
          { id: 15, title: "Стражи Галактики", voice_over: "Дубляж", duration: "2:00:51", director: "Джеймс Ганн", release_date: "31 июля 2014 года", type: "Фильм" },
          { id: 16, title: "Мстители: Эра Альтрона", voice_over: "Дубляж", duration: "2:21:18", director: "Джосс Уидон", release_date: "23 апреля 2015 года", type: "Фильм" },
          { id: 17, title: "Человек-муравей", voice_over: "Дубляж", duration: "1:57:06", director: "Пейтон Рид", release_date: "16 июля 2015 года", type: "Фильм" }
        ]
      },
       {
        section: "Сага Бесконечности",
        phase: "Фаза 3",
        projects: [
            { id: 18, title: "Первый мститель: Противостояние", voice_over: "Дубляж", duration: "2:27:41", director: "Джо Руссо, Энтони Руссо", release_date: "5 мая 2016 года", type: "Фильм" },
            { id: 19, title: "Доктор Стрэндж", voice_over: "Дубляж", duration: "1:54:58", director: "Скотт Дерриксон", release_date: "28 октября 2016 года", type: "Фильм" },
            { id: 20, title: "Стражи Галактики. Часть 2", voice_over: "Дубляж", duration: "2:15:46", director: "Джеймс Ганн", release_date: "19 апреля 2017 года", type: "Фильм" },
            { id: 21, title: "Человек-паук: Возвращение домой", voice_over: "Дубляж", duration: "2:13:28", director: "Джон Уоттс", release_date: "6 июля 2017 года", type: "Фильм" },
            { id: 22, title: "Тор: Рагнарёк", voice_over: "Дубляж", duration: "2:10:30", director: "Тайка Вайтити", release_date: "10 октября 2017 года", type: "Фильм" },
            { id: 23, title: "Чёрная Пантера", voice_over: "Дубляж", duration: "2:14:33", director: "Райан Куглер", release_date: "29 января 2018 года", type: "Фильм" },
            { id: 24, title: "Мстители: Война бесконечности", voice_over: "Дубляж", duration: "2:29:21", director: "Энтони Руссо, Джо Руссо", release_date: "23 апреля 2018 года", type: "Фильм" },
            { id: 25, title: "Человек-муравей и Оса", voice_over: "Дубляж", duration: "1:58:06", director: "Пейтон Рид", release_date: "4 июля 2018 года", type: "Фильм" },
            { id: 26, title: "Капитан Марвел", voice_over: "Дубляж", duration: "2:03:42", director: "Анна Боден, Райан Флек", release_date: "27 февраля 2019 года", type: "Фильм" },
            { id: 27, title: "Мстители: Финал", voice_over: "Дубляж", duration: "3:01:47", director: "Энтони Руссо, Джо Руссо", release_date: "22 апреля 2019 года", type: "Фильм" },
            { id: 28, title: "Человек-паук: Вдали от дома", voice_over: "Дубляж", duration: "2:09:23", director: "Джон Уоттс", release_date: "28 июня 2019 года", type: "Фильм" }
         ]
      },
      {
        section: "Сага Мультивселенной",
        phase: "Фаза 4",
        projects: [
          { id: 29, title: "Ванда/Вижн", voice_over: "HDrezka Studio", duration: "9 серий (29-49 мин)", director: "Мэтт Шекман", release_date: "15 января 2021 года", type: "Сериал" },
          { id: 30, title: "Сокол и Зимний Солдат", voice_over: "HDrezka Studio или Flarrow Films", duration: "6 серий (49-60 мин)", director: "Кари Скогланд", release_date: "19 марта 2021 года", type: "Сериал" },
          { id: 31, title: "Локи (1 сезон)", voice_over: "HDrezka Studio или Flarrow Films", duration: "6 серий (42-54 мин)", director: "Кейт Херрон", release_date: "9 июня 2021 года", type: "Сериал" },
          { id: 32, title: "Чёрная Вдова", voice_over: "Дубляж", duration: "2:13:46", director: "Кейт Шортланд", release_date: "8 июля 2021 года", type: "Фильм" },
          { id: 33, title: "Что, если...? (1 сезон)", voice_over: "HDrezka Studio или Flarrow Films", duration: "9 серий (34-36 мин)", director: "Брайан Эндрюс", release_date: "11 августа 2021 года", type: "Анимационный сериал" },
          { id: 34, title: "Шан-Чи и легенда десяти колец", voice_over: "Дубляж", duration: "2:12:33", director: "Дестин Дэниел Креттон", release_date: "2 сентября 2021 года", type: "Фильм" },
          { id: 35, title: "Вечные", voice_over: "Дубляж", duration: "2:36:05", director: "Хлоя Чжао", release_date: "4 ноября 2021 года", type: "Фильм" },
          { id: 36, title: "Соколиный глаз", voice_over: "HDrezka Studio или Flarrow Films", duration: "6 серий (40-62 мин)", director: "Берт, Кэти Эллвуд, Риз Томас", release_date: "24 ноября 2021 года", type: "Сериал" },
          { id: 37, title: "Человек-паук: Нет пути домой", voice_over: "Дубляж", duration: "2:28:09", director: "Джон Уоттс", release_date: "16 декабря 2021 года", type: "Фильм", notes: "Примечание: Перед просмотром данного фильма, обязательно стоит посмотреть подразделы «Человек-паук от Сэма Рэйми», «Новый Человек-паук от Марка Уэбба» и два фильма про Венома, которые находятся в разделе «Фильмы от Sony»." },
          { id: 38, title: "Лунный Рыцарь", voice_over: "Red Head Sound", duration: "6 серий (44-53 мин)", director: "Джастин Бенсон, Мохамед Диаб, Аарон Мурхед", release_date: "30 марта 2022 года", type: "Сериал" },
          { id: 39, title: "Доктор Стрэндж 2: В Мультивселенной безумия", voice_over: "Дубляж", duration: "2:06:31", director: "Сэм Рэйми", release_date: "4 мая 2022 года", type: "Фильм" },
          { id: 40, title: "Мисс Марвел", voice_over: "Flarrow Films или Red Head Sound", duration: "6 серий (38-50 мин)", director: "Мира Менон, Билал Фалла, Шармин Обаид, Адиль Эль Арби", release_date: "8 июня 2022 года", type: "Сериал" },
          { id: 41, title: "Тор 4: Любовь и Гром", voice_over: "Дубляж", duration: "1:59:00", director: "Тайка Вайтити", release_date: "8 июля 2022 года", type: "Фильм" }, // Исправлена длительность
          { id: 42, title: "Я есть Грут", voice_over: "Red Head Sound", duration: "5 серий (~4 мин)", director: "Кирстен Лепор", release_date: "10 августа 2022 года", type: "Анимационные короткометражки" },
          { id: 43, title: "Женщина-Халк: Судебный адвокат", voice_over: "Red Head Sound", duration: "9 серий (30-38 мин)", director: "Кэт Койро, Ану Валиа", release_date: "17 августа 2022 года", type: "Сериал" },
          { id: 44, title: "Ночной Оборотень", voice_over: "Red Head Sound", duration: "52:37", director: "Майкл Джаккино", release_date: "7 октября 2022 года", type: "Спецвыпуск" },
          { id: 45, title: "Чёрная пантера 2: Ваканда навеки", voice_over: "Дубляж", duration: "2:41:18", director: "Райан Куглер", release_date: "11 ноября 2022 года", type: "Фильм" },
          { id: 46, title: "Стражи Галактики: Праздничный спецвыпуск", voice_over: "Red Head Sound", duration: "41:55", director: "Джеймс Ганн", release_date: "25 ноября 2022 года", type: "Спецвыпуск" }
         ]
      },
        {
            section: "Сага Мультивселенной",
            phase: "Фаза 5",
            projects: [
                { id: 47, title: "Человек-муравей и Оса: Квантомания", voice_over: "Дубляж или Read Head Sound", duration: "2:04:29", director: "Пейтон Рид", release_date: "17 февраля 2023 года", type: "Фильм" },
                { id: 48, title: "Стражи Галактики. Часть 3", voice_over: "Дубляж или Read Head Sound", duration: "2:30:02", director: "Джеймс Ганн", release_date: "5 мая 2023 года", type: "Фильм" },
                { id: 49, title: "Секретное вторжение", voice_over: "Red Head Sound", duration: "6 серий (38-58 мин)", director: "Томас Безуча, Али Селим", release_date: "21 июня 2023 года", type: "Сериал" },
                { id: 50, title: "Локи (2 сезон)", voice_over: "Дубляж (HDrezka Studio) или Red Head Sound", duration: "6 серий (45-53 мин)", director: "Джастин Бенсон, Аарон Мурхед", release_date: "6 октября 2023 года", type: "Сериал" },
                { id: 51, title: "Марвелы (Капитан Марвел 2)", voice_over: "Дубляж или Red Head Sound", duration: "1:44:38", director: "Ниа ДаКоста", release_date: "10 ноября 2023 года", type: "Фильм" },
                { id: 52, title: "Что, если...? (2 сезон)", voice_over: "HDrezka Studio или Flarrow Films", duration: "9 серий (30-37 мин)", director: "Брайан Эндрюс", release_date: "22 декабря 2023 года", type: "Анимационный сериал" },
                { id: 53, title: "Эхо", voice_over: "Flarrow Films", duration: "5 серий (37-51 мин)", director: "Сидней Фриланд, Катриона МакКензи", release_date: "9 января 2024 года", type: "Сериал" },
                { id: 54, title: "Дэдпул и Росомаха", voice_over: "Дубляж", duration: "?", director: "Шон Леви", release_date: "26 июля 2024 года", type: "Фильм", notes: "Примечание: Перед просмотром данного фильма, обязательно стоит посмотреть подраздел «Люди Икс (серия фильмов)» в разделе «Фильмы от Fox»." }, // Дата изменена согласно последним данным
                { id: 55, title: "Это всё Агата", voice_over: "HDrezka Studio", duration: "9 серий (29-49 мин)", director: "Жаклин Шеффер, Рэйчел Голдберг, Ганджа Монтейру", release_date: "18 сентября 2024 года", type: "Сериал" },
                { id: 56, title: "Что, если...? (3 сезон)", voice_over: "HDrezka Studio или Flarrow Films", duration: "8 серий (30-37 мин)", director: "Брайан Эндрюс, Стефан Франк", release_date: "22 декабря 2024 года", type: "Анимационный сериал" },
                { id: 57, title: "Ваш дружелюбный сосед Человек-паук (1 сезон)", voice_over: "HDrezka Studio или Flarrow Films", duration: "10 серий (29-33 мин)", director: "Мельхиор Цвиер, Лиза Сингер", release_date: "29 января 2025 года", type: "Анимационный сериал" }, // Добавлено (1 сезон)
                { id: 58, title: "Капитан Америка: Новый мир", voice_over: "Дубляж", duration: "1:59:37", director: "Джулиус Она", release_date: "14 февраля 2025 года", type: "Фильм" },
                { id: 59, title: "Сорвиголова: Рождённый заново (1 сезон)", voice_over: "HDrezka Studio или Red Head Sound или Flarrow Films", duration: "9 серий (42-60 мин)", director: "Джеффри Начманофф, Майкл Куэста, Дэвид Бойд, Аарон Мурхед, Джастин Бенсон", release_date: "4 марта 2025 года", type: "Сериал", notes: "Примечание: Перед просмотром данного сериала, обязательно стоит посмотреть подраздел «Сериалы Netflix» в разделе «Сериалы Marvel Television»." },
                { id: 60, title: "Громовержцы*", voice_over: "Дубляж", duration: "?", director: "Джейк Шрейер", release_date: "2 мая 2025 года", type: "Фильм" },
                { id: 61, title: "Железное сердце", voice_over: "?", duration: "6 серий (?)", director: "Сэм Бэйли, Анджела Барнс", release_date: "24 июня 2025 года", type: "Сериал" }, // Уточнено
                { id: 62, title: "Фантастическая четвёрка: Первые шаги", voice_over: "Дубляж", duration: "?", director: "Мэтт Шекман", release_date: "25 июля 2025 года", type: "Фильм" }
            ]
        },
        {
            section: "Сага Мультивселенной",
            phase: "Фаза 6",
            projects: [
               { id: 63, title: "Очи Ваканды", voice_over: "?", duration: "4 серии (?)", director: "Райан Куглер", release_date: "6 августа 2025 года", type: "Анимационный сериал" }, // Уточнено
               { id: 64, title: "Зомби Marvel", voice_over: "?", duration: "4 серии (?)", director: "Брайан Эндрюс", release_date: "3 октября 2025 года", type: "Анимационный сериал" }, // Уточнено
               { id: 65, title: "Чудо-человек", voice_over: "?", duration: "? серий", director: "Дестин Дэниел Креттон, Стелла Меги, Джеймс Понсольдт, Тиффани Джонсон", release_date: "Декабрь 2025 года", type: "Сериал" },
               { id: 66, title: "Неизвестный фильм Marvel", voice_over: "?", duration: "?", director: "?", release_date: "13 февраля 2026 года", type: "Фильм" },
               { id: 67, title: "Сорвиголова: Рождённый заново (2 сезон)", voice_over: "?", duration: "8 серий (?)", director: "Аарон Мурхед, Джастин Бенсон", release_date: "Март 2026 года", type: "Сериал" }, // Уточнено
               { id: 68, title: "Мстители: Судный день", voice_over: "Дубляж", duration: "?", director: "Энтони Руссо, Джо Руссо", release_date: "1 мая 2026 года", type: "Фильм" },
               { id: 69, title: "Человек-паук: Совершенно новый день", voice_over: "Дубляж", duration: "?", director: "Дестин Дэниел Креттон", release_date: "31 июля 2026 года", type: "Фильм" },
               { id: 70, title: "Неизвестный фильм Marvel", voice_over: "?", duration: "?", director: "?", release_date: "6 ноября 2026 года", type: "Фильм" },
               { id: 71, title: "Квест Вижна", voice_over: "?", duration: "?", director: "Терри Маталас, Кристофер Дж. Бирн, Винченцо Натали", release_date: "2026 год", type: "Сериал" },
               { id: 72, title: "Ваш дружелюбный сосед Человек-паук (2 сезон)", voice_over: "?", duration: "?", director: "?", release_date: "2026 год", type: "Анимационный сериал" }, // Добавлено (2 сезон)
               { id: 73, title: "Безымянный спецвыпуск о Карателе", voice_over: "?", duration: "?", director: "Рейнальдо Маркус Грин", release_date: "2026 год", type: "Спецвыпуск", notes: "Примечание: Перед просмотром данного проекта, обязательно стоит посмотреть подраздел «Сериалы Netflix» в разделе «Сериалы Marvel Television», также сериал «Сорвиголова: Рождённый заново» от Marvel Studios." },
               { id: 74, title: "Мстители: Секретные войны", voice_over: "Дубляж", duration: "?", director: "Энтони Руссо, Джо Руссо", release_date: "7 мая 2027 года", type: "Фильм" }
           ]
        },
        {
            section: "Неизвестная фаза",
            phase: null, // Фаза не указана
            projects: [
                { id: 75, title: "Неизвестный фильм Marvel", voice_over: "?", duration: "?", director: "?", release_date: "18 февраля 2028 года", type: "Фильм" },
                { id: 76, title: "Неизвестный фильм Marvel", voice_over: "?", duration: "?", director: "?", release_date: "5 мая 2028 года", type: "Фильм" },
                { id: 77, title: "Неизвестный фильм Marvel", voice_over: "?", duration: "?", director: "?", release_date: "10 ноября 2028 года", type: "Фильм" },
                { id: 78, title: "Блэйд", voice_over: "?", duration: "?", director: "Бассам Тарик", release_date: "?", type: "Фильм" },
                { id: 79, title: "Ваш дружелюбный сосед Человек-паук (3 сезон)", voice_over: "?", duration: "?", director: "?", release_date: "?", type: "Анимационный сериал" }, // Добавлено (3 сезон)
                { id: 80, title: "Войны в доспехах", voice_over: "?", duration: "?", director: "?", release_date: "?", type: "Фильм" }, // Сменен тип с Сериала на Фильм
                { id: 81, title: "Неизвестный проект о Нове", voice_over: "?", duration: "? серий", director: "?", release_date: "?", type: "Сериал/Спецвыпуск" }, // Уточнен тип
                { id: 82, title: "Неизвестный проект о Черной пантере", voice_over: "?", duration: "?", director: "?", release_date: "?", type: "Проект" }, // Уточнен тип
                { id: 83, title: "Неизвестный фильм о Шан-Чи", voice_over: "?", duration: "?", director: "Дестин Дэниел Креттон", release_date: "?", type: "Фильм" },
                { id: 84, title: "Неизвестный фильм о Вечных", voice_over: "?", duration: "?", director: "Хлоя Чжао", release_date: "?", type: "Фильм" },
                { id: 85, title: "Неизвестный фильм о Людях Икс", voice_over: "?", duration: "?", director: "?", release_date: "?", type: "Фильм" }
            ]
        },
      // --- Дополнительно ---
      {
        section: "Дополнительно",
        subgroup: "Сериалы Marvel Television",
        projects: [
            // Сериалы ABC
            { subgroup_title: "Сериалы ABC", id: 86, title: "Агенты «Щ.И.Т.»", voice_over: "Дубляж", duration: "7 сезонов, 136 серий (40-44 мин)", director: "Кевин Танчароэн, Джесси Бокко, Билл Джирхарт, Винс Мисиано", release_date: "15 марта 2014 года", type: "Сериал" },
            { id: 87, title: "Агент Картер", voice_over: "Дубляж", duration: "2 сезона, 18 серий (40-43 мин)", director: "Дженнифер Гетцингер, Метин Хусейн, Дэвид Платт", release_date: "7 сентября 2016 года", type: "Сериал", notes: "Примечание: Только этот сериал из всех сериалов Marvel Television является каноничной историей, и входит в Кино Вселенную Марвел." },
            { id: 88, title: "Агенты «Щ.И.Т.»: Йо-Йо", voice_over: "LostFilm", duration: "6 серий (4-6 мин)", director: "Крис Шерами, Джон П. Гордон, Mark Kolpack, Феликс Парнелл", release_date: "13 декабря 2016 года", type: "Веб-сериал" },
            { id: 89, title: "Сверхлюди / Нелюди", voice_over: "LostFilm", duration: "8 серий (42 мин)", director: "Крис Фишер, Роэль Рейн, Билл Джирхарт, Neasa Hardiman", release_date: "31 августа 2017 года", type: "Сериал" },
             // Сериалы Netflix
            { subgroup_title: "Сериалы Netflix", id: 90, title: "Сорвиголова", voice_over: "LostFilm", duration: "3 сезона, 39 серий (48-60 мин)", director: "Фил Абрахам, Стивен Серджик, Питер Хор", release_date: "2 апреля 2015 года", type: "Сериал" },
            { id: 91, title: "Джессика Джонс", voice_over: "HDrezka Studio", duration: "3 сезона, 39 серий (48–60 мин)", director: "Стивен Серджик, Дженнифер Гетцингер, Ута Бризвитц, Розмари Родригез", release_date: "10 октября 2015 года", type: "Сериал" },
            { id: 92, title: "Люк Кейдж", voice_over: "LostFilm", duration: "2 сезона, 26 серий (48-60 мин)", director: "Энди Годдард, Марк Йобст, Кларк Джонсон, Стивен Серджик", release_date: "28 сентября 2016 года", type: "Сериал" },
            { id: 93, title: "Железный кулак", voice_over: "HDrezka Studio", duration: "2 сезона, 23 серии (48-60 мин)", director: "Стивен Серджик, Джон Дал, Фэррен Блэкберн, Ута Бризвитц", release_date: "15 марта 2017 года", type: "Сериал" },
            { id: 94, title: "Защитники", voice_over: "LostFilm", duration: "8 серий (48-60 мин)", director: "С.Дж. Кларксон, Фил Абрахам, Фэррен Блэкберн, Ута Бризвитц", release_date: "22 июля 2017 года", type: "Сериал" },
            { id: 95, title: "Каратель", voice_over: "LostFilm", duration: "2 сезона, 26 серий (48-65 мин)", director: "Джим О’Хенлон, Джереми Уэбб, Джет Уилкинсон, Энди Годдард", release_date: "6 ноября 2017 года", type: "Сериал" },
            // Сериалы HULU
            { subgroup_title: "Сериалы HULU", id: 96, title: "Беглецы", voice_over: "LostFilm", duration: "3 сезона, 33 серии (42-53 мин)", director: "Рэмси Никелл, Джереми Уэбб, Джеффри В. Бёрд, Патрик Р. Норрис", release_date: "7 октября 2017 года", type: "Сериал" },
            { id: 97, title: "Хелстром", voice_over: "HDrezka Studio", duration: "10 серий (44-55 мин)", director: "Сэнфорд Букставер, Андерс Энгстрем, Чери Ноулан, Джим О’Хенлон", release_date: "16 ноября 2020 года", type: "Сериал" },
             // Сериалы Freeform
            { subgroup_title: "Сериалы Freeform", id: 98, title: "Плащ и Кинжал", voice_over: "LostFilm", duration: "2 сезона, 20 серий (42-49 мин)", director: "Эми Канаан Манн, Дженнифер Фанг, Джефф Вулнаф, Алекс Гарсиа Лопес", release_date: "8 июня 2018 года", type: "Сериал" },
        ]
      },
      {
        section: "Дополнительно",
        subgroup: "Фильмы от Sony",
        projects: [
             // Человек-паук от Сэма Рэйми
            { subgroup_title: "Человек-паук от Сэма Рэйми", id: 99, title: "Человек-паук", voice_over: "Дубляж", duration: "2:01:12", director: "Сэм Рэйми", release_date: "30 апреля 2002 года", type: "Фильм" },
            { id: 100, title: "Человек-паук 2", voice_over: "Дубляж", duration: "2:07:35", director: "Сэм Рэйми", release_date: "25 июня 2004 года", type: "Фильм" },
            { id: 101, title: "Человек-паук 3: Враг в отражении", voice_over: "Дубляж", duration: "2:19:12", director: "Сэм Рэйми", release_date: "3 апреля 2007 года", type: "Фильм" },
            // Новый Человек-паук от Марка Уэбба
            { subgroup_title: "Новый Человек-паук от Марка Уэбба", id: 102, title: "Новый Человек-паук", voice_over: "Дубляж", duration: "2:16:17", director: "Марк Уэбб", release_date: "13 июня 2012 года", type: "Фильм" },
            { id: 103, title: "Новый Человек-паук: Высокое напряжение", voice_over: "Дубляж", duration: "2:21:34", director: "Марк Уэбб", release_date: "10 апреля 2014 года", type: "Фильм" },
             // Вселенная Человека-паука от Sony
            { subgroup_title: "Вселенная Человека-паука от Sony", id: 104, title: "Веном", voice_over: "Дубляж", duration: "1:52:08", director: "Рубен Фляйшер", release_date: "3 октября 2018 года", type: "Фильм" },
            { id: 105, title: "Веном 2: Да будет Карнаж", voice_over: "Дубляж", duration: "1:37:18", director: "Энди Серкис", release_date: "30 сентября 2021 года", type: "Фильм" },
            { id: 106, title: "Морбиус", voice_over: "Дубляж", duration: "1:44:11", director: "Даниэль Эспиноса", release_date: "24 марта 2022 года", type: "Фильм" },
            { id: 107, title: "Мадам Паутина", voice_over: "Дубляж", duration: "?", director: "С. Дж. Кларксон", release_date: "16 февраля 2024 года", type: "Фильм" },
            { id: 108, title: "Веном 3: Последний танец", voice_over: "Дубляж", duration: "?", director: "Келли Марсел", release_date: "25 октября 2024 года", type: "Фильм" },
            { id: 109, title: "Крэйвен-охотник", voice_over: "Дубляж", duration: "?", director: "Джей Си Чендор", release_date: "13 декабря 2024 года", type: "Фильм" },
            { id: 110, title: "Эль Муэрто", voice_over: "Дубляж", duration: "?", director: "?", release_date: "?", type: "Фильм" },
            { id: 111, title: "Ночной страж", voice_over: "Дубляж", duration: "?", director: "?", release_date: "?", type: "Фильм" },
            { id: 112, title: "Зловещая шестёрка", voice_over: "Дубляж", duration: "?", director: "?", release_date: "?", type: "Фильм" }
        ]
      },
       {
        section: "Дополнительно",
        subgroup: "Фильмы от Fox",
        projects: [
             // Люди Икс (серия фильмов)
            { subgroup_title: "Люди Икс (серия фильмов)", id: 113, title: "Люди Икс", voice_over: "Дубляж", duration: "1:44:20", director: "Брайан Сингер", release_date: "12 июля 2000 года", type: "Фильм" },
            { id: 114, title: "Люди Икс 2", voice_over: "Дубляж", duration: "2:13:47", director: "Брайан Сингер", release_date: "24 апреля 2003 года", type: "Фильм" },
            { id: 115, title: "Люди Икс: Последняя битва", voice_over: "Дубляж", duration: "1:44:04", director: "Бретт Рэтнер", release_date: "22 мая 2006 года", type: "Фильм" },
            { id: 116, title: "Люди Икс: Начало. Росомаха", voice_over: "Дубляж", duration: "1:47:24", director: "Гэвин Худ", release_date: "8 апреля 2009 года", type: "Фильм" },
            { id: 117, title: "Люди Икс: Первый класс", voice_over: "Дубляж", duration: "2:11:42", director: "Мэттью Вон", release_date: "25 мая 2011 года", type: "Фильм" },
            { id: 118, title: "Росомаха: Бессмертный", voice_over: "Дубляж или Дубляж (реж. версия)", duration: "2:06:08", director: "Джеймс Мэнголд", release_date: "16 июля 2013 года", type: "Фильм" },
            { id: 119, title: "Люди Икс: Дни минувшего будущего", voice_over: "Дубляж или Дубляж (реж. версия)", duration: "2:11:35", director: "Брайан Сингер", release_date: "10 мая 2014 года", type: "Фильм" },
            { id: 120, title: "Дэдпул", voice_over: "Дубляж", duration: "1:48:06", director: "Тим Миллер", release_date: "21 января 2016 года", type: "Фильм" },
            { id: 121, title: "Люди Икс: Апокалипсис", voice_over: "Дубляж", duration: "2:23:56", director: "Брайан Сингер", release_date: "9 мая 2016 года", type: "Фильм" },
            { id: 122, title: "Легион", voice_over: "Фокс (Fox)", duration: "3 сезона, 27 серий (47-68 мин)", director: "Джон Камерон, Ноа Хоули, Тим Милантс, Майкл Аппендаль", release_date: "9 февраля 2017 года", type: "Сериал" },
            { id: 123, title: "Логан", voice_over: "Дубляж или Дубляж (реж. версия)", duration: "2:17:23", director: "Джеймс Мэнголд", release_date: "17 февраля 2017 года", type: "Фильм" },
            { id: 124, title: "Одаренные", voice_over: "Фокс (Fox) или HDrezka Studio и 13 серию 1 сезона от LostFilm", duration: "2 сезона, 29 серий (47-68 мин)", director: "Скотт Питерс, Стивен Серджик, Роберт Данкан МакНил, Стивен ДеПол", release_date: "3 октября 2017 года", type: "Сериал" },
            { id: 125, title: "Дэдпул 2", voice_over: "Дубляж или Дубляж (реж. версия)", duration: "2:14:09", director: "Дэвид Литч", release_date: "1 мая 2018 года", type: "Фильм" },
            { id: 126, title: "Люди Икс: Тёмный Феникс", voice_over: "Дубляж", duration: "1:53:56", director: "Саймон Кинберг", release_date: "5 июня 2019 года", type: "Фильм" },
            { id: 127, title: "Новые мутанты", voice_over: "Дубляж", duration: "1:34:03", director: "Джош Бун", release_date: "26 августа 2020 года", type: "Фильм" },
             // Фантастическая четвёрка (серия фильмов)
            { subgroup_title: "Фантастическая четвёрка (серия фильмов)", id: 128, title: "Фантастическая четверка (1994)", voice_over: "Одноголосый", duration: "1:30:04", director: "Олей Сэссон", release_date: "1994 год", type: "Фильм", notes: "Бонус: Этот фильм не от Fox. Права у Constantin Film." },
            { id: 129, title: "Фантастическая четверка (2005)", voice_over: "Дубляж", duration: "1:45:29", director: "Тим Стори", release_date: "29 июня 2005 года", type: "Фильм" },
            { id: 130, title: "Фантастическая четверка: Вторжение Серебряного серфера", voice_over: "Дубляж", duration: "1:31:51", director: "Тим Стори", release_date: "12 июня 2007 года", type: "Фильм" },
            { id: 131, title: "Фантастическая четверка (2015)", voice_over: "Дубляж", duration: "1:39:58", director: "Джош Транк", release_date: "4 августа 2015 года", type: "Фильм", notes: "Примечание: Перезапуск, основан на Ultimate Fantastic Four. Плохо принят критиками, провалился в прокате." }
        ]
      },
      {
        section: "Дополнительно",
        subgroup: "Анимационные фильмы и сериалы",
        projects: [
             // Театральные
            { subgroup_title: "Театральные", id: 132, title: "Город героев", voice_over: "Дубляж", duration: "1:41:52", director: "Дон Холл, Крис Уильямс", release_date: "23 октября 2014 года", type: "Анимационный фильм", studio: "Walt Disney Animation Studios" },
            { id: 133, title: "Человек-паук: Через вселенные", voice_over: "Дубляж", duration: "1:56:50", director: "Боб Персичетти, Питер Рэмзи, Родни Ротман", release_date: "6 декабря 2018 года", type: "Анимационный фильм", studio: "Sony Pictures Animation" },
            { id: 134, title: "Человек-паук: Паутина Вселенных", voice_over: "Дубляж или Read Head Sound", duration: "2:20:05", director: "Хоаким Дос Сантос, Кэмп Пауэрс, Джастин К. Томпсон", release_date: "2 июня 2023 года", type: "Анимационный фильм", studio: "Sony Pictures Animation", notes: "Примечание: После просмотра данной картины можете посмотреть короткометражку «Паук внутри: История паучьей Вселенной»..." },
            { id: 135, title: "Человек-паук: За пределами вселенных", voice_over: "Дубляж", duration: "?", director: "Хоаким Дос Сантос, Кэмп Пауэрс, Джастин К. Томпсон", release_date: "?", type: "Анимационный фильм", studio: "Sony Pictures Animation" },
            // Телевизионные
            { subgroup_title: "Телевизионные", id: 136, title: "Дракула: Повелитель проклятых", voice_over: "?", duration: "1 ч. 34 мин.", director: "Минору Окадзаки", release_date: "19 августа 1980 года", type: "Анимационный фильм", studio: "Toei Animation", notes: "Примечание: Нет на HDrezka, искать на YouTube (англ.)." },
            { id: 137, title: "Чудовище Франкенштейн", voice_over: "?", duration: "1 ч. 38 мин.", director: "Юго Сэрикава, Тоёо Асида", release_date: "27 июля 1981 года", type: "Анимационный фильм", studio: "Toei Animation", notes: "Примечание: Нет на HDrezka, искать на YouTube (англ.)." },
            { id: 138, title: "Новые Мстители", voice_over: "Flarrow Films", duration: "1:11:21", director: "Курт Геда, Стивен Е. Гордон, Боб Ричардсон", release_date: "21 февраля 2006 года", type: "Анимационный фильм", studio: "MLG Productions, Marvel Studios", notes: "Примечание: Первый фильм в серии «Marvel Animated Features»." },
            { id: 139, title: "Несокрушимые Мстители / Новые Мстители 2", voice_over: "Flarrow Films", duration: "1:12:47", director: "Уилл Меньот, Дик Сэбаст, Боб Ричардсон", release_date: "2 июля 2006 года", type: "Анимационный фильм", studio: "MLG Productions, Marvel Studios", notes: "Примечание: Второй фильм в серии «Marvel Animated Features»." },
            { id: 140, title: "Несокрушимый Железный человек", voice_over: "Flarrow Films", duration: "1:23:03", director: "Патрик Арчибальд, Джей Олива, Фрэнк Пор", release_date: "23 января 2007 года", type: "Анимационный фильм", studio: "MLG Productions, Marvel Studios", notes: "Примечание: Третий фильм в серии «Marvel Animated Features»." },
            { id: 141, title: "Доктор Стрэндж и Тайна Ордена магов", voice_over: "Flarrow Films", duration: "1:16:26", director: "Патрик Арчибальд, Джей Олива, Фрэнк Пор, Дик Сэбаст", release_date: "14 августа 2007 года", type: "Анимационный фильм", studio: "MLG Productions, Marvel Studios", notes: "Примечание: Четвёртый фильм в серии «Marvel Animated Features»." },
            { id: 142, title: "Новые Мстители: Герои завтрашнего дня", voice_over: "Flarrow Films", duration: "1:18:03", director: "Джей Олива, Гари Хартл", release_date: "2 сентября 2008 года", type: "Анимационный фильм", studio: "MLG Productions, Marvel Animation", notes: "Примечание: Пятый фильм в серии «Marvel Animated Features»." },
            { id: 143, title: "Халк против…", voice_over: "Многоголосый закадровый", duration: "1:22:30", director: "Сэм Лью, Фрэнк Пор", release_date: "27 января 2009 года", type: "Анимационный фильм", studio: "MLG Productions, Marvel Animation, Madhouse", notes: "Примечание: Состоит из «Халк против Тора» и «Халк против Росомахи». Шестой фильм в серии «Marvel Animated Features»." },
            { id: 144, title: "Планета Халка", voice_over: "Flarrow Films", duration: "1:21:07", director: "Сэм Лью", release_date: "2 февраля 2010 года", type: "Анимационный фильм", studio: "MLG Productions, Marvel Animation, Madhouse", notes: "Примечание: Седьмой фильм в серии «Marvel Animated Features»." },
            { id: 145, title: "Тор: Сказания Асгарда", voice_over: "Flarrow Films", duration: "1:16:57", director: "Сэм Лью", release_date: "11 мая 2011 года", type: "Анимационный фильм", studio: "MLG Productions, Marvel Animation, Madhouse, Lions Gate Entertainment", notes: "Примечание: Восьмой и финальный фильм в серии «Marvel Animated Features»." },
            { id: 146, title: "Железный Человек: Восстание Техновора", voice_over: "Flarrow Films", duration: "1:28:04", director: "Хироси Хамасаки", release_date: "9 апреля 2013 года", type: "Анимационный фильм", studio: "Marvel Entertainment, Madhouse" },
            { id: 147, title: "Железный человек и Халк: Союз героев", voice_over: "Дубляж", duration: "1:11:44", director: "Эрик Радомски, Лео Райли", release_date: "3 декабря 2013 года", type: "Анимационный фильм", studio: "Marvel Animation, Brain Zoo Studios", notes: "Примечание: Первый мультфильм в серии «Heroes United»." },
            { id: 148, title: "Секретные материалы Мстителей: Чёрная Вдова и Каратель", voice_over: "Flarrow Films", duration: "1:22:42", director: "Кэнъити Симидзу", release_date: "11 марта 2014 года", type: "Анимационный фильм", studio: "Marvel Entertainment, Madhouse" },
            { id: 149, title: "Железный человек и Капитан Америка: Союз героев", voice_over: "Дубляж", duration: "1:10:56", director: "Эрик Радомски, Лео Райли", release_date: "29 июля 2014 года", type: "Анимационный фильм", studio: "Marvel Animation", notes: "Примечание: Второй, финальный мультфильм в серии «Heroes United». Первый фильм Marvel Animation, снятый собственной студией." },
            { id: 150, title: "Приключения Супергероев: Морозный Бой", voice_over: "Двухголосый закадровый", duration: "1:13:58", director: "Эрик Радомски, Митч Шауэр", release_date: "11 декабря 2015 года", type: "Анимационный фильм", studio: "Marvel Animation, Marvel Entertainment, The Walt Disney Company" },
            { id: 151, title: "Халк: Где обитают чудовища", voice_over: "Flarrow Films", duration: "1:15:14", director: "Эрик Радомски, Митч Шауэр", release_date: "9 октября 2016 года", type: "Анимационный фильм", studio: "Marvel Animation" },
            { id: 152, title: "Восход Marvel: Тайные воины", voice_over: "Дубляж", duration: "1:20:28", director: "Альфред Гимено, Эрик Радомски", release_date: "30 сентября 2018 года", type: "Анимационный фильм", studio: "Marvel Animation", notes: "Примечание: Второй фильм в серии «Восход Marvel»." },
             // Короткометражные
             { subgroup_title: "Короткометражные", id: 153, title: "Супергерои Marvel 4D (Лондон)", voice_over: "?", duration: "9 минут", director: "Джошуа Уэкслер", release_date: "30 мая 2010 года", type: "4D Короткометражка", studio: "Marvel Entertainment, Threshold Animation Studios", notes: "Примечание: 4D фильм в Музее мадам Тюссо, Лондон." },
             { id: 154, title: "Супергерои Marvel 4D (Нью-Йорк)", voice_over: "?", duration: "8 минут", director: "Джошуа Уэкслер", release_date: "26 апреля 2012 года", type: "4D Короткометражка", studio: "Marvel Entertainment, Threshold Animation Studios", notes: "Примечание: Обновлённая 4D версия в Музее мадам Тюссо, Нью-Йорк." },
             { id: 155, title: "Супергерои Marvel 4D (Лас-Вегас)", voice_over: "?", duration: "?", director: "?", release_date: "20 ноября 2013 года", type: "4D Короткометражка", studio: "Marvel Entertainment, Threshold Animation Studios", notes: "Примечание: Ещё одна версия 4D фильма в Музее мадам Тюссо, Лас-Вегас." },
             { id: 156, title: "Супергерои Marvel 4D: Битва Мстителей на Бали (Бали)", voice_over: "?", duration: "?", director: "?", release_date: "22 ноября 2013 года", type: "4D Короткометражка", studio: "Marvel Entertainment, Threshold Animation Studios", notes: "Примечание: Другая версия 4D фильма в Музее мадам Тюссо, Бали." },
             { id: 157, title: "Супергерои Marvel 4D (Сингапур)", voice_over: "?", duration: "?", director: "?", release_date: "14 декабря 2017 года", type: "4D Короткометражка", studio: "Marvel Entertainment, Threshold Animation Studios", notes: "Примечание: Версия как в Нью-Йорке, в Музее мадам Тюссо, Сингапур." },
             { id: 158, title: "Восход Marvel: Инициация", voice_over: "Колдфильм (Coldfilm)", duration: "24:46 (6x~4 мин)", director: "Альфред Гимено", release_date: "13 августа 2018 года", type: "Анимационная короткометражка (серия)", studio: "Marvel Animation / Marvel Entertainment", notes: "Примечание: Первый фильм в серии «Восход Marvel». Серия из 6 короткометражек." },
             { id: 159, title: "Восход Marvel: В погоне за призраками", voice_over: "?", duration: "21:57", director: "Альфред Гимено", release_date: "16 января 2019 года", type: "Анимационная короткометражка", studio: "Marvel Animation / Marvel Entertainment", notes: "Примечание: Третий фильм в серии «Восход Marvel». Нет на HDrezka, ссылка на Marvel HQ YouTube (может быть недоступно)." },
             { id: 160, title: "Застрявший в ветчине", voice_over: "?", duration: "4:02", director: "Мигель Джирон", release_date: "19 марта 2019 года", type: "Анимационная короткометражка", studio: "Sony Pictures Animation, Marvel Entertainment, Titmouse", notes: "Примечание: Приквел к «Человек-паук: Через вселенные». Нет на HDrezka, ссылка на Marvel HQ YouTube." },
             { id: 161, title: "Восход Marvel: Железное сердце", voice_over: "?", duration: "43:57", director: "Сол Чой, Альфред Гимено", release_date: "31 марта 2019", type: "Анимационная короткометражка", studio: "Marvel Animation / Marvel Entertainment", notes: "Примечание: Четвёртый фильм в серии «Восход Marvel». Нет на HDrezka, ссылка на Marvel HQ YouTube (может быть недоступно)." },
             { id: 162, title: "Восход Marvel: Битва групп", voice_over: "?", duration: "21:55", director: "Крис Рутковски", release_date: "28 августа 2019 года", type: "Анимационная короткометражка", studio: "Marvel Animation / Marvel Entertainment", notes: "Примечание: Пятый фильм в серии «Восход Marvel»." },
             { id: 163, title: "Восход Marvel: Операция Шури", voice_over: "Многоголосый закадровый", duration: "21:59", director: "Крис Рутковски, Эрик Радомски", release_date: "11 октября 2019 года", type: "Анимационная короткометражка", studio: "Marvel Animation / Marvel Entertainment", notes: "Примечание: Шестой фильм в серии «Восход Marvel»." },
             { id: 164, title: "Восход Marvel: Игра с огнём", voice_over: "?", duration: "43:56", director: "Сол Чой, Эрик Радомски", release_date: "18 декабря 2019 года", type: "Анимационная короткометражка", studio: "Marvel Animation / Marvel Entertainment", notes: "Примечание: Седьмой и финальный фильм в серии «Восход Marvel». Нет на HDrezka, ссылка на Marvel HQ YouTube (может быть недоступно)." },
             { id: 165, title: "Marvel Rising: Ultimate Comics", voice_over: "?", duration: "6:48–6:57", director: "?", release_date: "20 февраля 2019 года", type: "Анимационный комикс", studio: "Marvel Animation / Marvel Entertainment", notes: "Примечание: Анимированные комиксы, не фильм. Нет на кино-сервисах." },
            // LEGO
            { subgroup_title: "LEGO", id: 166, title: "LEGO Супергерои Marvel: Максимальная перегрузка", voice_over: "Дубляж", duration: "22:11", director: "Грег Ричардсон", release_date: "5 ноября 2013 года", type: "LEGO Спецвыпуск", studio: "Arc Productions, Marvel Entertainment" },
            { id: 167, title: "LEGO Супергерои Marvel: Мстители. Снова в сборе", voice_over: "Дубляж", duration: "22:27", director: "Роб Сильвестри", release_date: "16 ноября 2015 года", type: "LEGO Спецвыпуск", studio: "Arc Productions, Marvel Entertainment" },
            { id: 168, title: "LEGO Супергерои Marvel: Стражи Галактики", voice_over: "Дубляж", duration: "22:23", director: "Майкл Д. Блэк", release_date: "24 ноября 2017 года", type: "LEGO Спецвыпуск", studio: "Marvel Entertainment, Pure Imagination Studios, The LEGO Group" },
            { id: 169, title: "LEGO Супергерои Marvel: Черная пантера", voice_over: "Дубляж", duration: "22:27", director: "Майкл Д. Блэк", release_date: "4 июня 2018 года", type: "LEGO Спецвыпуск", studio: "Marvel Entertainment, Pure Imagination Studios, The LEGO Group" },
            { id: 170, title: "LEGO Marvel Человек-Паук: Одержимый Веномом", voice_over: "Любительский", duration: "22:05", director: "Кен Каннингэм, Эндрю Дункан", release_date: "3 августа 2019 года", type: "LEGO Спецвыпуск", studio: "Marvel Animation, The LEGO Group" },
            { id: 171, title: "LEGO Marvel Мстители: Климатический Парадокс", voice_over: "?", duration: "4 серии (~22 мин)", director: "Кен Каннингэм", release_date: "1 августа 2020 года", type: "LEGO Сериал", studio: "Marvel Studios, Atomic Cartoons, The LEGO Group", notes: "Примечание: Нет на HDrezka, ссылки на LEGO YouTube (4 серии)." },
            { id: 172, title: "LEGO Marvel Мстители: Локи на тренировке", voice_over: "?", duration: "22 мин.", director: "?", release_date: "22 ноября 2021 года", type: "LEGO Спецвыпуск", studio: "Marvel Entertainment, The LEGO Group", notes: "Примечание: Нет на HDrezka, ссылка на Disney Now (может требовать VPN)." },
            { id: 173, title: "LEGO Marvel Мстители: Искривлённое время", voice_over: "?", duration: "22:11", director: "Кен Каннингэм", release_date: "17 января 2022 года", type: "LEGO Спецвыпуск", studio: "Marvel Entertainment, The LEGO Group", notes: "Примечание: Нет на HDrezka, ссылка на Marvel HQ YouTube (может быть недоступно)." },
            { id: 174, title: "LEGO Marvel Человек-Паук", voice_over: "?", duration: "?", director: "?", release_date: "?", type: "LEGO Спецвыпуск", studio: "Alberto McCheezdip Studios, Dneail, Puzzle Entertainment" }
        ]
      }
    ];


    // --- DOM Элементы ---
    const projectListContainer = document.getElementById('project-list');
    const searchInput = document.getElementById('search-input');
    const themeToggleButton = document.getElementById('theme-toggle');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalReleaseDate = document.getElementById('modal-release-date');
    const modalDuration = document.getElementById('modal-duration');
    const modalDirector = document.getElementById('modal-director');
    const modalVoiceOver = document.getElementById('modal-voice-over');
    const modalRatings = document.getElementById('modal-ratings');
    const modalHdrezka = document.getElementById('modal-hdrezka');
    const modalNotes = document.getElementById('modal-notes');
    const closeModalButton = modal.querySelector('.close-button');

    let currentHighlight = null; // Для отслеживания подсвеченного элемента

    // --- Функции ---

    // Функция для рендеринга списка проектов
    function renderProjectList(data) {
        projectListContainer.innerHTML = ''; // Очищаем контейнер
        data.forEach(group => {
            // Добавляем заголовок секции, если он есть
            if (group.section) {
                const sectionHeader = document.createElement('h2');
                sectionHeader.classList.add('section-header');
                sectionHeader.textContent = group.section;
                if (group.subgroup) { // Если это подгруппа внутри секции
                     sectionHeader.textContent += `: ${group.subgroup}`;
                }
                projectListContainer.appendChild(sectionHeader);
            }

            // Добавляем заголовок фазы, если он есть
            if (group.phase) {
                const phaseHeader = document.createElement('h3');
                phaseHeader.classList.add('phase-header');
                phaseHeader.textContent = group.phase;
                projectListContainer.appendChild(phaseHeader);
            }

             let currentSubgroupTitle = null;
            // Рендерим проекты внутри группы
            group.projects.forEach(project => {
                // Добавляем заголовок подгруппы (напр., Сериалы Netflix, LEGO)
                 if (project.subgroup_title && project.subgroup_title !== currentSubgroupTitle) {
                    const subgroupHeader = document.createElement('h4');
                    subgroupHeader.classList.add('subgroup-header');
                    subgroupHeader.textContent = project.subgroup_title;
                    projectListContainer.appendChild(subgroupHeader);
                    currentSubgroupTitle = project.subgroup_title;
                }

                const projectItem = document.createElement('div');
                projectItem.classList.add('project-item');
                projectItem.dataset.projectId = project.id; // Добавляем ID для поиска

                const title = document.createElement('h3');
                title.textContent = `${project.id}. ${project.title}`;

                const details = document.createElement('p');
                details.textContent = `Тип: ${project.type || 'Н/Д'} | Дата выхода: ${project.release_date || 'Н/Д'}`;

                projectItem.appendChild(title);
                projectItem.appendChild(details);
                projectListContainer.appendChild(projectItem);
            });
        });
    }

    // Функция для поиска проекта по ID
    function findProjectById(id) {
         for (const group of marvelData) {
            const project = group.projects.find(p => p.id === parseInt(id));
            if (project) return project;
        }
        return null;
    }

     // Функция для открытия модального окна
    function openModal(projectId) {
        const project = findProjectById(projectId);
        if (!project) return;

        modalTitle.textContent = project.title;
        modalReleaseDate.textContent = project.release_date || 'Н/Д';
        modalDuration.textContent = project.duration || 'Н/Д';
        modalDirector.textContent = project.director || 'Н/Д';
        modalVoiceOver.textContent = project.voice_over || 'Н/Д';
        modalRatings.textContent = 'Загрузка... (требуется внешний поиск)'; // Placeholder
        modalHdrezka.textContent = 'Поиск... (требуется внешний поиск)';   // Placeholder
        modalNotes.innerHTML = project.notes ? `<p>${project.notes}</p>` : '';

        modal.style.display = 'block';
         // Удаляем классы анимации закрытия, если они есть
        modal.classList.remove('fade-out');
        modal.querySelector('.modal-content').classList.remove('scale-down');
        // Добавляем классы анимации открытия (хотя они заданы в CSS по умолчанию при display: block)
        modal.style.animation = 'fadeIn var(--transition-speed) ease-out';
        modal.querySelector('.modal-content').style.animation = 'scaleUp var(--transition-speed) ease-out';

        // --- Место для кода поиска рейтингов и ссылок ---
        // Пример:
        // searchRatings(project.title).then(ratings => modalRatings.textContent = ratings);
        // searchHdrezkaLink(project.title).then(link => modalHdrezka.innerHTML = link ? `<a href="${link}" target="_blank">Смотреть</a>` : 'Не найдено');
    }

    // Функция для закрытия модального окна
    function closeModal() {
         modal.classList.add('fade-out');
         modal.querySelector('.modal-content').classList.add('scale-down');
         // Добавляем задержку перед скрытием, чтобы анимация успела проиграться
         setTimeout(() => {
            modal.style.display = 'none';
            // Очищаем стили анимации, чтобы они не мешали при следующем открытии
            modal.style.animation = '';
            modal.querySelector('.modal-content').style.animation = '';
         }, parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-speed') || '0.3') * 1000);
    }

    // Функция поиска и прокрутки
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Снимаем подсветку с предыдущего результата
        if (currentHighlight) {
            currentHighlight.classList.remove('highlight');
            currentHighlight = null;
        }

        if (!searchTerm) {
             // Если поиск пуст, показываем все элементы (если они были скрыты)
             document.querySelectorAll('.project-item').forEach(item => item.style.display = '');
             return; // Выход, если поиск пуст
        }

        const projectItems = document.querySelectorAll('.project-item');
        let firstMatch = null;

        projectItems.forEach(item => {
            const titleElement = item.querySelector('h3');
            const title = titleElement ? titleElement.textContent.toLowerCase() : '';

            if (title.includes(searchTerm)) {
                item.style.display = ''; // Показываем совпавший элемент
                if (!firstMatch) {
                    firstMatch = item; // Находим первое совпадение
                }
            } else {
                 item.style.display = 'none'; // Скрываем несовпавшие
            }
        });

         // Прокрутка и подсветка первого совпадения
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstMatch.classList.add('highlight');
            currentHighlight = firstMatch;

            // Убираем подсветку через некоторое время
            setTimeout(() => {
                if (currentHighlight === firstMatch) { // Проверяем, не изменился ли поиск за это время
                    firstMatch.classList.remove('highlight');
                    currentHighlight = null;
                }
            }, 2000); // 2 секунды подсветки
        }
    }

     // Функция для переключения темы
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        // Сохраняем выбор темы
        const isDarkMode = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

     // Функция для установки темы при загрузке
    function applyInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    // --- Обработчики событий ---
    searchInput.addEventListener('input', handleSearch);

    themeToggleButton.addEventListener('click', toggleTheme);

    projectListContainer.addEventListener('click', (event) => {
        const projectItem = event.target.closest('.project-item');
        if (projectItem && projectItem.dataset.projectId) {
            openModal(projectItem.dataset.projectId);
        }
    });

    closeModalButton.addEventListener('click', closeModal);

    // Закрытие модального окна по клику вне его
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- Инициализация ---
    applyInitialTheme(); // Применяем тему при загрузке
    renderProjectList(marvelData); // Рендерим список проектов
});
