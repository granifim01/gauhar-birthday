(() => {
  "use strict";

  const LETTER = `Моя Гаухар,

с днём рождения, жаным.

Со временем я люблю тебя всё сильнее — и всё больше благодарен судьбе за то, что ты у меня есть: мудрая, нежная, красивая и понимающая меня с полуслова.

Спасибо тебе за добро и тепло рядом со мной. За наши «спокойной ночи», за «золотце» и «ути», за то, что с тобой обычный день становится родным. Я не представляю своей жизни без тебя — ты давно уже часть меня.

Будь самой счастливой. Я буду стараться делать для этого всё, что могу. Пусть этот год принесёт тебе здоровье, лёгкость и исполнение того, о чём мечтаешь. А я буду рядом — беречь тебя и напоминать, как сильно ты любима.

Люблю тебя сиииильно.`;

  const STORIES = [
    {
      when: "июль 2024",
      title: "Первые сообщения",
      text: "11 июля мы просто перешли писать друг другу нормально. А уже на следующий день: «куда бы хотела сходить?» Так началось всё, что потом стало домом.",
    },
    {
      when: "первые свидания",
      title: "Вечера на двоих",
      text: "Бронь на вечер, «если что я тут», одеяло «на всякий» и «не хочешь у меня фильмы посмотреть?». Мы ещё не говорили «навсегда» — но уже выбирали друг друга вечерами.",
    },
    {
      when: "август 2024",
      title: "Первое «золотце»",
      text: "5 августа ты услышала от меня «спокойной ночи, золотце». С тех пор это слово — как тёплая лампа у кровати.",
    },
    {
      when: "октябрь 2024",
      title: "Первое «жаным»",
      text: "7 октября ты написала просто: «Жаным». Одно слово — и я уже понял, что у нас появился свой язык.",
    },
    {
      when: "ноябрь–декабрь",
      title: "Любимый / любимая",
      text: "«Спокойной ночи любимый❤️» — и в ответ «Спокойной ночи, любимая ❤️». Так ночи стали нашими ритуалами, а не просто концом дня.",
    },
    {
      when: "19 декабря 2024",
      title: "Ночь про кольцо",
      text: "Ты спросила: «А ты не можешь сделать мне предложение?» Я шутил про экзамен и работу — а внутри уже знал: свадьба не «когда-нибудь», а мы. «Побыть с тобой для меня лучшее свидание».",
    },
  ];

  const CHIPS = [
    { word: "жаным", mean: "Когда ты зовёшь меня так — я уже дома." },
    { word: "золотце", mean: "Моё имя для тебя перед сном. Мягкое, как свет в комнате." },
    { word: "ути", mean: "Маленькое слово, после которого всё становится теплее." },
    { word: "сиииильно", mean: "Твоя фирменная громкость любви. Чем больше «и» — тем роднее." },
    { word: "солнце", mean: "Ещё одно твоё имя для меня. Светит даже в тишине." },
    { word: "зай", mean: "Коротко, мило и только наше." },
    { word: "спасииибо", mean: "Спасибо с лишними «и» — значит, правда от сердца." },
    { word: "дааа", mean: "Самое частое согласие между нами. Иногда с четырьмя «а»." },
    { word: "хорошооо", mean: "Когда всё ок — но хочется протянуть гласные, как объятие." },
    { word: "ураааа", mean: "Наша маленькая салютная пушка." },
  ];

  const PHOTOS = [
    { src: "assets/photos/beret-1.jpg", cap: "Берет" },
    { src: "assets/photos/beret-2.jpg", cap: "Тихий взгляд" },
    { src: "assets/photos/beret-3.jpg", cap: "Как из фильма" },
    { src: "assets/photos/beret-4.jpg", cap: "Пальто" },
    { src: "assets/photos/beret-5.jpg", cap: "У колонны" },
    { src: "assets/photos/beret-6.jpg", cap: "Полный кадр" },
    { src: "assets/photos/beret-7.jpg", cap: "Профиль" },
    { src: "assets/photos/hat-play-0.jpg", cap: "Гримаска" },
    { src: "assets/photos/hat-play-1.jpg", cap: "Смех" },
    { src: "assets/photos/hat-play-2.jpg", cap: "Оливковый" },
    { src: "assets/photos/hat-play-3.jpg", cap: "Шляпа" },
    { src: "assets/photos/hat-play-4.jpg", cap: "Игривая" },
    { src: "assets/photos/hat-play-5.jpg", cap: "И ещё раз" },
    { src: "assets/photos/cafe-glasses.jpg", cap: "В кафе" },
    { src: "assets/photos/neon-1.jpg", cap: "Неон" },
    { src: "assets/photos/street-1.jpg", cap: "Город" },
    { src: "assets/photos/park-baby.jpg", cap: "Парк" },
    { src: "assets/photos/studio-astana.jpg", cap: "Уверенность" },
    { src: "assets/photos/flowers.jpg", cap: "Цветы" },
    { src: "assets/photos/ring.jpg", cap: "Кольцо" },
    { src: "assets/photos/hq/hq-347.jpg", cap: "" },
    { src: "assets/photos/hq/hq-371.jpg", cap: "" },
    { src: "assets/photos/hq/hq-338.jpg", cap: "" },
    { src: "assets/photos/hq/hq-260.jpg", cap: "" },
    { src: "assets/photos/hq/hq-102.jpg", cap: "" },
    { src: "assets/photos/hq/hq-262.jpg", cap: "" },
    { src: "assets/photos/hq/hq-386.jpg", cap: "" },
    { src: "assets/photos/hq/hq-389.jpg", cap: "" },
    { src: "assets/photos/hq/hq-181.jpg", cap: "" },
    { src: "assets/photos/hq/hq-105.jpg", cap: "" },
    { src: "assets/photos/hq/hq-282.jpg", cap: "" },
    { src: "assets/photos/hq/hq-166.jpg", cap: "" },
    { src: "assets/photos/hq/hq-061.jpg", cap: "" },
    { src: "assets/photos/hq/hq-213.jpg", cap: "" },
    { src: "assets/photos/hq/hq-062.jpg", cap: "" },
    { src: "assets/photos/hq/hq-366.jpg", cap: "" },
    { src: "assets/photos/hq/hq-026.jpg", cap: "" },
    { src: "assets/photos/hq/hq-258.jpg", cap: "" },
    { src: "assets/photos/hq/hq-122.jpg", cap: "" },
    { src: "assets/photos/hq/hq-300.jpg", cap: "" },
    { src: "assets/photos/hq/hq-056.jpg", cap: "" },
    { src: "assets/photos/hq/hq-270.jpg", cap: "" },
    { src: "assets/photos/hq/hq-383.jpg", cap: "" },
    { src: "assets/photos/hq/hq-111.jpg", cap: "" },
    { src: "assets/photos/hq/hq-135.jpg", cap: "" },
    { src: "assets/photos/hq/hq-006.jpg", cap: "" },
    { src: "assets/photos/hq/hq-297.jpg", cap: "" },
    { src: "assets/photos/hq/hq-160.jpg", cap: "" },
    { src: "assets/photos/hq/hq-051.jpg", cap: "" },
    { src: "assets/photos/hq/hq-100.jpg", cap: "" },
    { src: "assets/photos/hq/hq-104.jpg", cap: "" },
    { src: "assets/photos/hq/hq-116.jpg", cap: "" },
    { src: "assets/photos/hq/hq-119.jpg", cap: "" },
    { src: "assets/photos/hq/hq-053.jpg", cap: "" },
    { src: "assets/photos/hq/hq-030.jpg", cap: "" },
    { src: "assets/photos/hq/hq-002.jpg", cap: "" },
    { src: "assets/photos/hq/hq-050.jpg", cap: "" },
    { src: "assets/photos/hq/hq-370.jpg", cap: "" },
    { src: "assets/photos/hq/hq-368.jpg", cap: "" },
    { src: "assets/photos/hq/hq-256.jpg", cap: "" },
    { src: "assets/photos/hq/hq-245.jpg", cap: "" },
    { src: "assets/photos/hq/hq-310.jpg", cap: "" },
    { src: "assets/photos/hq/hq-029.jpg", cap: "" },
    { src: "assets/photos/hq/hq-141.jpg", cap: "" },
    { src: "assets/photos/hq/hq-250.jpg", cap: "" },
    { src: "assets/photos/hq/hq-087.jpg", cap: "" },
    { src: "assets/photos/hq/hq-408.jpg", cap: "" },
    { src: "assets/photos/hq/hq-099.jpg", cap: "" },
    { src: "assets/photos/hq/hq-031.jpg", cap: "" },
    { src: "assets/photos/hq/hq-291.jpg", cap: "" },
    { src: "assets/photos/hq/hq-225.jpg", cap: "" },
    { src: "assets/photos/hq/hq-223.jpg", cap: "" },
    { src: "assets/photos/hq/hq-412.jpg", cap: "" },
    { src: "assets/photos/hq/hq-188.jpg", cap: "" },
    { src: "assets/photos/hq/hq-033.jpg", cap: "" },
    { src: "assets/photos/hq/hq-287.jpg", cap: "" },
    { src: "assets/photos/hq/hq-398.jpg", cap: "" },
    { src: "assets/photos/hq/hq-083.jpg", cap: "" },
    { src: "assets/photos/hq/hq-238.jpg", cap: "" },
    { src: "assets/photos/hq/hq-211.jpg", cap: "" },
    { src: "assets/photos/hq/hq-184.jpg", cap: "" },
    { src: "assets/photos/hq/hq-391.jpg", cap: "" },
    { src: "assets/photos/hq/hq-231.jpg", cap: "" },
    { src: "assets/photos/hq/hq-316.jpg", cap: "" },
    { src: "assets/photos/hq/hq-195.jpg", cap: "" },
    { src: "assets/photos/hq/hq-152.jpg", cap: "" },
    { src: "assets/photos/hq/hq-073.jpg", cap: "" },
    { src: "assets/photos/hq/hq-392.jpg", cap: "" },
    { src: "assets/photos/hq/hq-194.jpg", cap: "" },
    { src: "assets/photos/hq/hq-159.jpg", cap: "" },
    { src: "assets/photos/hq/hq-214.jpg", cap: "" },
    { src: "assets/photos/hq/hq-180.jpg", cap: "" },
    { src: "assets/photos/hq/hq-265.jpg", cap: "" },
    { src: "assets/photos/hq/hq-321.jpg", cap: "" },
    { src: "assets/photos/hq/hq-331.jpg", cap: "" },
    { src: "assets/photos/hq/hq-134.jpg", cap: "" },
    { src: "assets/photos/hq/hq-312.jpg", cap: "" },
    { src: "assets/photos/hq/hq-299.jpg", cap: "" },
    { src: "assets/photos/hq/hq-241.jpg", cap: "" },
    { src: "assets/photos/hq/hq-251.jpg", cap: "" },
    { src: "assets/photos/hq/hq-088.jpg", cap: "" },
    { src: "assets/photos/hq/hq-143.jpg", cap: "" },
    { src: "assets/photos/hq/hq-042.jpg", cap: "" },
    { src: "assets/photos/hq/hq-324.jpg", cap: "" },
    { src: "assets/photos/hq/hq-125.jpg", cap: "" },
    { src: "assets/photos/hq/hq-341.jpg", cap: "" },
    { src: "assets/photos/hq/hq-059.jpg", cap: "" },
    { src: "assets/photos/hq/hq-269.jpg", cap: "" },
    { src: "assets/photos/hq/hq-107.jpg", cap: "" },
    { src: "assets/photos/hq/hq-052.jpg", cap: "" },
    { src: "assets/photos/hq/hq-378.jpg", cap: "" },
    { src: "assets/photos/hq/hq-045.jpg", cap: "" },
    { src: "assets/photos/hq/hq-374.jpg", cap: "" },
    { src: "assets/photos/hq/hq-193.jpg", cap: "" },
    { src: "assets/photos/hq/hq-144.jpg", cap: "" },
    { src: "assets/photos/hq/hq-139.jpg", cap: "" },
    { src: "assets/photos/hq/hq-054.jpg", cap: "" },
    { src: "assets/photos/hq/hq-209.jpg", cap: "" },
    { src: "assets/photos/hq/hq-404.jpg", cap: "" },
    { src: "assets/photos/hq/hq-187.jpg", cap: "" },
    { src: "assets/photos/hq/hq-416.jpg", cap: "" },
    { src: "assets/photos/hq/hq-377.jpg", cap: "" },
    { src: "assets/photos/hq/hq-040.jpg", cap: "" },
    { src: "assets/photos/hq/hq-255.jpg", cap: "" },
    { src: "assets/photos/hq/hq-124.jpg", cap: "" },
    { src: "assets/photos/hq/hq-063.jpg", cap: "" },
    { src: "assets/photos/hq/hq-145.jpg", cap: "" },
    { src: "assets/photos/hq/hq-263.jpg", cap: "" },
    { src: "assets/photos/hq/hq-272.jpg", cap: "" },
    { src: "assets/photos/hq/hq-208.jpg", cap: "" },
    { src: "assets/photos/hq/hq-215.jpg", cap: "" },
    { src: "assets/photos/hq/hq-132.jpg", cap: "" },
    { src: "assets/photos/hq/hq-066.jpg", cap: "" },
    { src: "assets/photos/hq/hq-218.jpg", cap: "" },
    { src: "assets/photos/hq/hq-154.jpg", cap: "" },
    { src: "assets/photos/hq/hq-380.jpg", cap: "" },
    { src: "assets/photos/hq/hq-330.jpg", cap: "" },
    { src: "assets/photos/hq/hq-112.jpg", cap: "" },
    { src: "assets/photos/hq/hq-157.jpg", cap: "" },
    { src: "assets/photos/hq/hq-348.jpg", cap: "" },
    { src: "assets/photos/hq/hq-264.jpg", cap: "" },
    { src: "assets/photos/hq/hq-146.jpg", cap: "" },
    { src: "assets/photos/hq/hq-103.jpg", cap: "" },
    { src: "assets/photos/hq/hq-420.jpg", cap: "" },
    { src: "assets/photos/hq/hq-280.jpg", cap: "" },
    { src: "assets/photos/hq/hq-367.jpg", cap: "" },
    { src: "assets/photos/hq/hq-329.jpg", cap: "" },
    { src: "assets/photos/hq/hq-284.jpg", cap: "" },
    { src: "assets/photos/hq/hq-186.jpg", cap: "" },
    { src: "assets/photos/hq/hq-093.jpg", cap: "" },
    { src: "assets/photos/hq/hq-037.jpg", cap: "" },
    { src: "assets/photos/hq/hq-279.jpg", cap: "" },
    { src: "assets/photos/hq/hq-275.jpg", cap: "" },
    { src: "assets/photos/hq/hq-327.jpg", cap: "" },
    { src: "assets/photos/hq/hq-274.jpg", cap: "" },
    { src: "assets/photos/hq/hq-239.jpg", cap: "" },
    { src: "assets/photos/hq/hq-325.jpg", cap: "" },
    { src: "assets/photos/hq/hq-049.jpg", cap: "" },
    { src: "assets/photos/hq/hq-289.jpg", cap: "" },
    { src: "assets/photos/hq/hq-372.jpg", cap: "" },
    { src: "assets/photos/hq/hq-360.jpg", cap: "" },
    { src: "assets/photos/hq/hq-163.jpg", cap: "" },
    { src: "assets/photos/hq/hq-303.jpg", cap: "" },
    { src: "assets/photos/hq/hq-164.jpg", cap: "" },
    { src: "assets/photos/hq/hq-129.jpg", cap: "" },
    { src: "assets/photos/hq/hq-113.jpg", cap: "" },
    { src: "assets/photos/hq/hq-357.jpg", cap: "" },
    { src: "assets/photos/hq/hq-246.jpg", cap: "" },
    { src: "assets/photos/hq/hq-336.jpg", cap: "" },
    { src: "assets/photos/hq/hq-233.jpg", cap: "" },
    { src: "assets/photos/hq/hq-019.jpg", cap: "" },
    { src: "assets/photos/hq/hq-254.jpg", cap: "" },
    { src: "assets/photos/hq/hq-418.jpg", cap: "" },
    { src: "assets/photos/hq/hq-036.jpg", cap: "" },
    { src: "assets/photos/hq/hq-397.jpg", cap: "" },
    { src: "assets/photos/hq/hq-150.jpg", cap: "" },
    { src: "assets/photos/hq/hq-082.jpg", cap: "" },
    { src: "assets/photos/hq/hq-243.jpg", cap: "" },
    { src: "assets/photos/hq/hq-306.jpg", cap: "" },
    { src: "assets/photos/hq/hq-041.jpg", cap: "" },
    { src: "assets/photos/hq/hq-028.jpg", cap: "" },
    { src: "assets/photos/hq/hq-288.jpg", cap: "" },
    { src: "assets/photos/hq/hq-220.jpg", cap: "" },
    { src: "assets/photos/hq/hq-307.jpg", cap: "" },
    { src: "assets/photos/hq/hq-065.jpg", cap: "" },
    { src: "assets/photos/hq/hq-001.jpg", cap: "" },
    { src: "assets/photos/hq/hq-240.jpg", cap: "" },
    { src: "assets/photos/hq/hq-342.jpg", cap: "" },
    { src: "assets/photos/hq/hq-276.jpg", cap: "" },
    { src: "assets/photos/hq/hq-094.jpg", cap: "" },
    { src: "assets/photos/hq/hq-253.jpg", cap: "" },
    { src: "assets/photos/hq/hq-097.jpg", cap: "" },
    { src: "assets/photos/hq/hq-403.jpg", cap: "" },
    { src: "assets/photos/hq/hq-387.jpg", cap: "" },
    { src: "assets/photos/hq/hq-400.jpg", cap: "" },
    { src: "assets/photos/hq/hq-086.jpg", cap: "" },
    { src: "assets/photos/hq/hq-161.jpg", cap: "" },
    { src: "assets/photos/hq/hq-055.jpg", cap: "" },
    { src: "assets/photos/hq/hq-010.jpg", cap: "" },
    { src: "assets/photos/hq/hq-155.jpg", cap: "" },
    { src: "assets/photos/hq/hq-069.jpg", cap: "" },
    { src: "assets/photos/hq/hq-339.jpg", cap: "" },
    { src: "assets/photos/hq/hq-217.jpg", cap: "" },
    { src: "assets/photos/hq/hq-350.jpg", cap: "" },
    { src: "assets/photos/hq/hq-358.jpg", cap: "" },
    { src: "assets/photos/hq/hq-140.jpg", cap: "" },
    { src: "assets/photos/hq/hq-206.jpg", cap: "" },
    { src: "assets/photos/hq/hq-013.jpg", cap: "" },
    { src: "assets/photos/hq/hq-308.jpg", cap: "" },
    { src: "assets/photos/hq/hq-332.jpg", cap: "" },
    { src: "assets/photos/hq/hq-354.jpg", cap: "" },
    { src: "assets/photos/hq/hq-020.jpg", cap: "" },
    { src: "assets/photos/hq/hq-067.jpg", cap: "" },
    { src: "assets/photos/hq/hq-373.jpg", cap: "" },
    { src: "assets/photos/hq/hq-142.jpg", cap: "" },
    { src: "assets/photos/hq/hq-381.jpg", cap: "" },
    { src: "assets/photos/hq/hq-149.jpg", cap: "" },
    { src: "assets/photos/hq/hq-349.jpg", cap: "" },
    { src: "assets/photos/hq/hq-032.jpg", cap: "" },
    { src: "assets/photos/hq/hq-351.jpg", cap: "" },
    { src: "assets/photos/hq/hq-320.jpg", cap: "" },
    { src: "assets/photos/hq/hq-177.jpg", cap: "" },
    { src: "assets/photos/hq/hq-333.jpg", cap: "" },
    { src: "assets/photos/hq/hq-039.jpg", cap: "" },
    { src: "assets/photos/hq/hq-176.jpg", cap: "" },
    { src: "assets/photos/hq/hq-199.jpg", cap: "" },
    { src: "assets/photos/hq/hq-248.jpg", cap: "" },
    { src: "assets/photos/hq/hq-064.jpg", cap: "" },
    { src: "assets/photos/hq/hq-402.jpg", cap: "" },
    { src: "assets/photos/hq/hq-277.jpg", cap: "" },
    { src: "assets/photos/hq/hq-022.jpg", cap: "" },
    { src: "assets/photos/hq/hq-382.jpg", cap: "" },
    { src: "assets/photos/hq/hq-352.jpg", cap: "" },
    { src: "assets/photos/hq/hq-110.jpg", cap: "" },
    { src: "assets/photos/hq/hq-138.jpg", cap: "" },
    { src: "assets/photos/hq/hq-162.jpg", cap: "" },
    { src: "assets/photos/hq/hq-399.jpg", cap: "" },
    { src: "assets/photos/hq/hq-229.jpg", cap: "" },
    { src: "assets/photos/hq/hq-294.jpg", cap: "" },
    { src: "assets/photos/hq/hq-230.jpg", cap: "" },
    { src: "assets/photos/hq/hq-127.jpg", cap: "" },
    { src: "assets/photos/hq/hq-235.jpg", cap: "" },
    { src: "assets/photos/hq/hq-228.jpg", cap: "" },
    { src: "assets/photos/hq/hq-379.jpg", cap: "" },
    { src: "assets/photos/hq/hq-168.jpg", cap: "" },
    { src: "assets/photos/hq/hq-343.jpg", cap: "" },
    { src: "assets/photos/hq/hq-344.jpg", cap: "" },
    { src: "assets/photos/hq/hq-153.jpg", cap: "" },
    { src: "assets/photos/hq/hq-165.jpg", cap: "" },
    { src: "assets/photos/hq/hq-018.jpg", cap: "" },
    { src: "assets/photos/hq/hq-182.jpg", cap: "" },
    { src: "assets/photos/hq/hq-197.jpg", cap: "" },
    { src: "assets/photos/hq/hq-057.jpg", cap: "" },
    { src: "assets/photos/hq/hq-137.jpg", cap: "" },
    { src: "assets/photos/hq/hq-319.jpg", cap: "" },
    { src: "assets/photos/hq/hq-292.jpg", cap: "" },
    { src: "assets/photos/hq/hq-189.jpg", cap: "" },
    { src: "assets/photos/hq/hq-200.jpg", cap: "" },
    { src: "assets/photos/hq/hq-014.jpg", cap: "" },
    { src: "assets/photos/hq/hq-011.jpg", cap: "" },
    { src: "assets/photos/hq/hq-232.jpg", cap: "" },
    { src: "assets/photos/hq/hq-222.jpg", cap: "" },
    { src: "assets/photos/hq/hq-043.jpg", cap: "" },
    { src: "assets/photos/hq/hq-170.jpg", cap: "" },
    { src: "assets/photos/hq/hq-227.jpg", cap: "" },
    { src: "assets/photos/hq/hq-388.jpg", cap: "" },
    { src: "assets/photos/hq/hq-000.jpg", cap: "" },
    { src: "assets/photos/hq/hq-247.jpg", cap: "" },
    { src: "assets/photos/hq/hq-309.jpg", cap: "" },
    { src: "assets/photos/hq/hq-346.jpg", cap: "" },
    { src: "assets/photos/hq/hq-076.jpg", cap: "" },
    { src: "assets/photos/hq/hq-035.jpg", cap: "" },
    { src: "assets/photos/hq/hq-419.jpg", cap: "" },
    { src: "assets/photos/hq/hq-178.jpg", cap: "" },
    { src: "assets/photos/hq/hq-286.jpg", cap: "" },
    { src: "assets/photos/hq/hq-079.jpg", cap: "" },
    { src: "assets/photos/hq/hq-393.jpg", cap: "" },
    { src: "assets/photos/hq/hq-407.jpg", cap: "" },
    { src: "assets/photos/hq/hq-092.jpg", cap: "" },
    { src: "assets/photos/hq/hq-003.jpg", cap: "" },
    { src: "assets/photos/hq/hq-283.jpg", cap: "" },
    { src: "assets/photos/hq/hq-190.jpg", cap: "" },
    { src: "assets/photos/hq/hq-226.jpg", cap: "" },
    { src: "assets/photos/hq/hq-261.jpg", cap: "" },
    { src: "assets/photos/hq/hq-323.jpg", cap: "" },
    { src: "assets/photos/hq/hq-204.jpg", cap: "" },
    { src: "assets/photos/hq/hq-198.jpg", cap: "" },
    { src: "assets/photos/hq/hq-174.jpg", cap: "" },
    { src: "assets/photos/hq/hq-060.jpg", cap: "" },
    { src: "assets/photos/hq/hq-078.jpg", cap: "" },
    { src: "assets/photos/hq/hq-128.jpg", cap: "" },
    { src: "assets/photos/hq/hq-318.jpg", cap: "" },
    { src: "assets/photos/hq/hq-257.jpg", cap: "" },
    { src: "assets/photos/hq/hq-411.jpg", cap: "" },
    { src: "assets/photos/hq/hq-084.jpg", cap: "" },
    { src: "assets/photos/hq/hq-023.jpg", cap: "" },
    { src: "assets/photos/hq/hq-175.jpg", cap: "" },
    { src: "assets/photos/hq/hq-046.jpg", cap: "" },
    { src: "assets/photos/hq/hq-123.jpg", cap: "" },
    { src: "assets/photos/hq/hq-353.jpg", cap: "" },
    { src: "assets/photos/hq/hq-356.jpg", cap: "" },
    { src: "assets/photos/hq/hq-301.jpg", cap: "" },
    { src: "assets/photos/hq/hq-285.jpg", cap: "" },
    { src: "assets/photos/hq/hq-414.jpg", cap: "" },
    { src: "assets/photos/hq/hq-266.jpg", cap: "" },
    { src: "assets/photos/hq/hq-205.jpg", cap: "" },
    { src: "assets/photos/hq/hq-156.jpg", cap: "" },
    { src: "assets/photos/hq/hq-237.jpg", cap: "" },
    { src: "assets/photos/hq/hq-406.jpg", cap: "" },
    { src: "assets/photos/hq/hq-359.jpg", cap: "" },
    { src: "assets/photos/hq/hq-183.jpg", cap: "" },
    { src: "assets/photos/hq/hq-038.jpg", cap: "" },
    { src: "assets/photos/hq/hq-394.jpg", cap: "" },
    { src: "assets/photos/hq/hq-335.jpg", cap: "" },
    { src: "assets/photos/hq/hq-375.jpg", cap: "" },
    { src: "assets/photos/hq/hq-384.jpg", cap: "" },
    { src: "assets/photos/hq/hq-191.jpg", cap: "" },
    { src: "assets/photos/hq/hq-095.jpg", cap: "" },
    { src: "assets/photos/hq/hq-212.jpg", cap: "" },
    { src: "assets/photos/hq/hq-369.jpg", cap: "" },
    { src: "assets/photos/hq/hq-268.jpg", cap: "" },
    { src: "assets/photos/hq/hq-315.jpg", cap: "" },
    { src: "assets/photos/hq/hq-158.jpg", cap: "" },
    { src: "assets/photos/hq/hq-278.jpg", cap: "" },
    { src: "assets/photos/hq/hq-131.jpg", cap: "" },
    { src: "assets/photos/hq/hq-273.jpg", cap: "" },
    { src: "assets/photos/hq/hq-034.jpg", cap: "" },
    { src: "assets/photos/hq/hq-109.jpg", cap: "" },
    { src: "assets/photos/hq/hq-077.jpg", cap: "" },
    { src: "assets/photos/hq/hq-114.jpg", cap: "" },
    { src: "assets/photos/hq/hq-091.jpg", cap: "" },
    { src: "assets/photos/hq/hq-345.jpg", cap: "" },
    { src: "assets/photos/hq/hq-242.jpg", cap: "" },
    { src: "assets/photos/hq/hq-008.jpg", cap: "" },
    { src: "assets/photos/hq/hq-362.jpg", cap: "" },
    { src: "assets/photos/hq/hq-290.jpg", cap: "" },
    { src: "assets/photos/hq/hq-293.jpg", cap: "" },
    { src: "assets/photos/hq/hq-409.jpg", cap: "" },
    { src: "assets/photos/hq/hq-118.jpg", cap: "" },
    { src: "assets/photos/hq/hq-201.jpg", cap: "" },
    { src: "assets/photos/hq/hq-296.jpg", cap: "" },
    { src: "assets/photos/hq/hq-202.jpg", cap: "" },
    { src: "assets/photos/hq/hq-015.jpg", cap: "" },
    { src: "assets/photos/hq/hq-328.jpg", cap: "" },
    { src: "assets/photos/hq/hq-171.jpg", cap: "" },
    { src: "assets/photos/hq/hq-024.jpg", cap: "" },
    { src: "assets/photos/hq/hq-098.jpg", cap: "" },
    { src: "assets/photos/hq/hq-314.jpg", cap: "" },
    { src: "assets/photos/hq/hq-216.jpg", cap: "" },
    { src: "assets/photos/hq/hq-363.jpg", cap: "" },
    { src: "assets/photos/hq/hq-417.jpg", cap: "" },
    { src: "assets/photos/hq/hq-415.jpg", cap: "" },
    { src: "assets/photos/hq/hq-413.jpg", cap: "" },
    { src: "assets/photos/hq/hq-410.jpg", cap: "" },
    { src: "assets/photos/hq/hq-405.jpg", cap: "" },
    { src: "assets/photos/hq/hq-401.jpg", cap: "" },
    { src: "assets/photos/hq/hq-396.jpg", cap: "" },
    { src: "assets/photos/hq/hq-395.jpg", cap: "" },
    { src: "assets/photos/hq/hq-385.jpg", cap: "" },
    { src: "assets/photos/hq/hq-376.jpg", cap: "" },
    { src: "assets/photos/hq/hq-361.jpg", cap: "" },
    { src: "assets/photos/hq/hq-355.jpg", cap: "" },
    { src: "assets/photos/hq/hq-340.jpg", cap: "" },
    { src: "assets/photos/hq/hq-326.jpg", cap: "" },
    { src: "assets/photos/hq/hq-322.jpg", cap: "" },
    { src: "assets/photos/hq/hq-311.jpg", cap: "" },
    { src: "assets/photos/hq/hq-305.jpg", cap: "" },
    { src: "assets/photos/hq/hq-304.jpg", cap: "" },
    { src: "assets/photos/hq/hq-302.jpg", cap: "" },
    { src: "assets/photos/hq/hq-298.jpg", cap: "" },
    { src: "assets/photos/hq/hq-295.jpg", cap: "" },
    { src: "assets/photos/hq/hq-281.jpg", cap: "" },
    { src: "assets/photos/hq/hq-271.jpg", cap: "" },
    { src: "assets/photos/hq/hq-267.jpg", cap: "" },
    { src: "assets/photos/hq/hq-252.jpg", cap: "" },
    { src: "assets/photos/hq/hq-249.jpg", cap: "" },
    { src: "assets/photos/hq/hq-244.jpg", cap: "" },
    { src: "assets/photos/hq/hq-234.jpg", cap: "" },
    { src: "assets/photos/hq/hq-219.jpg", cap: "" },
    { src: "assets/photos/hq/hq-210.jpg", cap: "" },
    { src: "assets/photos/hq/hq-203.jpg", cap: "" },
    { src: "assets/photos/hq/hq-196.jpg", cap: "" },
    { src: "assets/photos/hq/hq-192.jpg", cap: "" },
    { src: "assets/photos/hq/hq-185.jpg", cap: "" },
    { src: "assets/photos/hq/hq-173.jpg", cap: "" },
    { src: "assets/photos/hq/hq-172.jpg", cap: "" },
    { src: "assets/photos/hq/hq-169.jpg", cap: "" },
    { src: "assets/photos/hq/hq-167.jpg", cap: "" },
    { src: "assets/photos/hq/hq-151.jpg", cap: "" },
    { src: "assets/photos/hq/hq-147.jpg", cap: "" },
    { src: "assets/photos/hq/hq-136.jpg", cap: "" },
    { src: "assets/photos/hq/hq-133.jpg", cap: "" },
    { src: "assets/photos/hq/hq-130.jpg", cap: "" },
    { src: "assets/photos/hq/hq-126.jpg", cap: "" },
    { src: "assets/photos/hq/hq-121.jpg", cap: "" },
    { src: "assets/photos/hq/hq-117.jpg", cap: "" },
    { src: "assets/photos/hq/hq-115.jpg", cap: "" },
    { src: "assets/photos/hq/hq-106.jpg", cap: "" },
    { src: "assets/photos/hq/hq-101.jpg", cap: "" },
    { src: "assets/photos/hq/hq-096.jpg", cap: "" },
    { src: "assets/photos/hq/hq-090.jpg", cap: "" },
    { src: "assets/photos/hq/hq-089.jpg", cap: "" },
    { src: "assets/photos/hq/hq-085.jpg", cap: "" },
    { src: "assets/photos/hq/hq-081.jpg", cap: "" },
    { src: "assets/photos/hq/hq-080.jpg", cap: "" },
    { src: "assets/photos/hq/hq-075.jpg", cap: "" },
    { src: "assets/photos/hq/hq-074.jpg", cap: "" },
    { src: "assets/photos/hq/hq-071.jpg", cap: "" },
    { src: "assets/photos/hq/hq-048.jpg", cap: "" },
    { src: "assets/photos/hq/hq-047.jpg", cap: "" },
    { src: "assets/photos/hq/hq-044.jpg", cap: "" },
    { src: "assets/photos/hq/hq-025.jpg", cap: "" },
    { src: "assets/photos/hq/hq-016.jpg", cap: "" },
    { src: "assets/photos/hq/hq-012.jpg", cap: "" },
    { src: "assets/photos/hq/hq-009.jpg", cap: "" },
    { src: "assets/photos/hq/hq-007.jpg", cap: "" },
    { src: "assets/photos/hq/hq-005.jpg", cap: "" },
    { src: "assets/photos/hq/hq-072.jpg", cap: "" },
    { src: "assets/photos/hq/hq-390.jpg", cap: "" },
    { src: "assets/photos/hq/hq-221.jpg", cap: "" },
    { src: "assets/photos/hq/hq-259.jpg", cap: "" },
    { src: "assets/photos/hq/hq-224.jpg", cap: "" },
    { src: "assets/photos/hq/hq-120.jpg", cap: "" },
    { src: "assets/photos/hq/hq-364.jpg", cap: "" },
    { src: "assets/photos/hq/hq-017.jpg", cap: "" },
    { src: "assets/photos/hq/hq-317.jpg", cap: "" },
    { src: "assets/photos/hq/hq-058.jpg", cap: "" },
    { src: "assets/photos/hq/hq-021.jpg", cap: "" },
    { src: "assets/photos/hq/hq-108.jpg", cap: "" },
    { src: "assets/photos/hq/hq-004.jpg", cap: "" },
    { src: "assets/photos/hq/hq-236.jpg", cap: "" },
    { src: "assets/photos/hq/hq-179.jpg", cap: "" },
    { src: "assets/photos/hq/hq-027.jpg", cap: "" },
    { src: "assets/photos/hq/hq-068.jpg", cap: "" },
    { src: "assets/photos/hq/hq-365.jpg", cap: "" },
    { src: "assets/photos/hq/hq-334.jpg", cap: "" },
    { src: "assets/photos/hq/hq-070.jpg", cap: "" },
    { src: "assets/photos/hq/hq-313.jpg", cap: "" },
    { src: "assets/photos/hq/hq-148.jpg", cap: "" },
    { src: "assets/photos/hq/hq-337.jpg", cap: "" },
    { src: "assets/photos/hq/hq-207.jpg", cap: "" },
  ];

  const LOOKS = {
    lookBeret: [
      { src: "assets/photos/beret-1.jpg", cap: "" },
      { src: "assets/photos/beret-2.jpg", cap: "" },
      { src: "assets/photos/beret-3.jpg", cap: "" },
      { src: "assets/photos/beret-4.jpg", cap: "" },
      { src: "assets/photos/beret-5.jpg", cap: "" },
      { src: "assets/photos/beret-6.jpg", cap: "" },
      { src: "assets/photos/beret-7.jpg", cap: "" },
    ],
    lookHat: [
      { src: "assets/photos/hat-play-0.jpg", cap: "" },
      { src: "assets/photos/hat-play-1.jpg", cap: "" },
      { src: "assets/photos/hat-play-2.jpg", cap: "" },
      { src: "assets/photos/hat-play-3.jpg", cap: "" },
      { src: "assets/photos/hat-play-4.jpg", cap: "" },
      { src: "assets/photos/hat-play-5.jpg", cap: "" },
    ],
    lookLife: [
      { src: "assets/photos/hq/hq-347.jpg", cap: "" },
      { src: "assets/photos/hq/hq-371.jpg", cap: "" },
      { src: "assets/photos/hq/hq-338.jpg", cap: "" },
      { src: "assets/photos/hq/hq-260.jpg", cap: "" },
      { src: "assets/photos/hq/hq-102.jpg", cap: "" },
      { src: "assets/photos/hq/hq-262.jpg", cap: "" },
      { src: "assets/photos/hq/hq-386.jpg", cap: "" },
      { src: "assets/photos/hq/hq-389.jpg", cap: "" },
      { src: "assets/photos/hq/hq-181.jpg", cap: "" },
      { src: "assets/photos/hq/hq-105.jpg", cap: "" },
      { src: "assets/photos/hq/hq-282.jpg", cap: "" },
      { src: "assets/photos/hq/hq-166.jpg", cap: "" },
      { src: "assets/photos/hq/hq-061.jpg", cap: "" },
      { src: "assets/photos/hq/hq-213.jpg", cap: "" },
      { src: "assets/photos/hq/hq-062.jpg", cap: "" },
      { src: "assets/photos/hq/hq-366.jpg", cap: "" },
      { src: "assets/photos/hq/hq-026.jpg", cap: "" },
      { src: "assets/photos/hq/hq-258.jpg", cap: "" },
      { src: "assets/photos/hq/hq-122.jpg", cap: "" },
      { src: "assets/photos/hq/hq-300.jpg", cap: "" },
      { src: "assets/photos/hq/hq-056.jpg", cap: "" },
      { src: "assets/photos/hq/hq-270.jpg", cap: "" },
      { src: "assets/photos/hq/hq-383.jpg", cap: "" },
      { src: "assets/photos/hq/hq-111.jpg", cap: "" },
      { src: "assets/photos/hq/hq-135.jpg", cap: "" },
      { src: "assets/photos/hq/hq-006.jpg", cap: "" },
      { src: "assets/photos/hq/hq-297.jpg", cap: "" },
      { src: "assets/photos/hq/hq-160.jpg", cap: "" },
      { src: "assets/photos/hq/hq-051.jpg", cap: "" },
      { src: "assets/photos/hq/hq-100.jpg", cap: "" },
    ],
  };

  const SIZES = {
    "hq/hq-018.jpg":[665,1182], "hq/hq-020.jpg":[1182,665], "hq/hq-022.jpg":[1182,665],
    "hq/hq-023.jpg":[665,1182], "hq/hq-030.jpg":[1024,768], "hq/hq-041.jpg":[1024,768],
    "hq/hq-050.jpg":[1024,768], "hq/hq-053.jpg":[1024,768], "hq/hq-061.jpg":[665,1182],
    "hq/hq-067.jpg":[665,1182], "hq/hq-078.jpg":[1024,768], "hq/hq-079.jpg":[665,1182],
    "hq/hq-083.jpg":[665,1182], "hq/hq-090.jpg":[1024,768], "hq/hq-092.jpg":[665,1182],
    "hq/hq-095.jpg":[1024,768], "hq/hq-120.jpg":[724,1086], "hq/hq-121.jpg":[324,576],
    "hq/hq-122.jpg":[1024,768], "hq/hq-131.jpg":[665,1182], "hq/hq-135.jpg":[1024,768],
    "hq/hq-137.jpg":[665,1182], "hq/hq-142.jpg":[1024,768], "hq/hq-145.jpg":[720,1090],
    "hq/hq-158.jpg":[665,1182], "hq/hq-161.jpg":[665,1182], "hq/hq-165.jpg":[665,1182],
    "hq/hq-169.jpg":[665,1182], "hq/hq-172.jpg":[324,576], "hq/hq-178.jpg":[665,1182],
    "hq/hq-183.jpg":[1024,768], "hq/hq-188.jpg":[705,1114], "hq/hq-190.jpg":[576,324],
    "hq/hq-191.jpg":[1024,768], "hq/hq-195.jpg":[1024,768], "hq/hq-200.jpg":[665,1182],
    "hq/hq-201.jpg":[576,324], "hq/hq-214.jpg":[665,1182], "hq/hq-217.jpg":[1182,665],
    "hq/hq-222.jpg":[665,1182], "hq/hq-226.jpg":[665,1182], "hq/hq-235.jpg":[665,1182],
    "hq/hq-239.jpg":[1024,768], "hq/hq-243.jpg":[665,1182], "hq/hq-253.jpg":[1024,768],
    "hq/hq-256.jpg":[665,1182], "hq/hq-257.jpg":[665,1182], "hq/hq-268.jpg":[1024,768],
    "hq/hq-271.jpg":[1024,768], "hq/hq-273.jpg":[665,1182], "hq/hq-280.jpg":[1024,768],
    "hq/hq-288.jpg":[1024,768], "hq/hq-289.jpg":[1024,768], "hq/hq-297.jpg":[1024,768],
    "hq/hq-300.jpg":[1024,768], "hq/hq-304.jpg":[665,1182], "hq/hq-307.jpg":[1024,768],
    "hq/hq-310.jpg":[1024,768], "hq/hq-319.jpg":[1024,768], "hq/hq-324.jpg":[665,1182],
    "hq/hq-327.jpg":[1024,768], "hq/hq-329.jpg":[324,576], "hq/hq-332.jpg":[665,1182],
    "hq/hq-338.jpg":[705,1114], "hq/hq-342.jpg":[665,1182], "hq/hq-343.jpg":[1024,768],
    "hq/hq-346.jpg":[1024,768], "hq/hq-353.jpg":[665,1182], "hq/hq-359.jpg":[665,1182],
    "hq/hq-373.jpg":[665,1182], "hq/hq-375.jpg":[665,1182], "hq/hq-378.jpg":[1182,665],
    "hq/hq-381.jpg":[665,1182], "hq/hq-383.jpg":[1024,768], "hq/hq-388.jpg":[1024,768],
    "hq/hq-389.jpg":[1024,768], "hq/hq-391.jpg":[665,1182], "hq/hq-392.jpg":[665,1182],
    "hq/hq-393.jpg":[1024,768], "hq/hq-402.jpg":[1182,665], "hq/hq-404.jpg":[1024,768],
    "hq/hq-405.jpg":[705,1114], "hq/hq-408.jpg":[1024,768], "hq/hq-420.jpg":[1024,768],
    "beret-3.jpg":[952,1280], "beret-4.jpg":[959,1280], "beret-5.jpg":[959,1280], "beret-6.jpg":[959,1280],
    "flowers.jpg":[720,1280], "studio-astana.jpg":[854,1280],
  };

  const TRACKS = [
    { title: "спутник", yt: "hDBoA3449Aw" },
    { title: "нужна", yt: "eCT4puTiApo" },
    { title: "asyl janym", yt: "8b5lPvwsi-0" },
    { title: "как дома", yt: "crY27nzQxSI", feat: "Ayau, Rusha" },
    { title: "что такое счастье?", yt: "P6QIF82XFyo" },
    { title: "даже очень", yt: "yJ9ylqrvrIU" },
    { title: "под небом Алматы", yt: "S3WclvkB9qg" },
  ];

  const TOGETHER_SINCE = "2024-07-11T00:00:00+05:00";
  const WEDDING = "2025-10-03T00:00:00+05:00";

  const QUIZ = [
    {
      q: "Когда мы начали нормально переписываться?",
      a: ["14 февраля", "11 июля", "1 сентября"],
      ok: 1,
      yes: "Да! 11 июля 2024 — и на следующий день я уже звал тебя гулять.",
    },
    {
      q: "Какое слово я впервые написал тебе 5 августа перед сном?",
      a: ["солнце", "зай", "золотце"],
      ok: 2,
      yes: "«Спокойной ночи, золотце» — с тех пор так и повелось.",
    },
    {
      q: "Что ты написала мне 7 октября — одним словом?",
      a: ["Жаным", "Скучаю", "Приезжай"],
      ok: 0,
      yes: "Одно слово — и у нас появился свой язык.",
    },
    {
      q: "О чём ты спросила меня 19 декабря?",
      a: ["Куда поедем летом?", "А ты не можешь сделать мне предложение?", "Что подарить маме?"],
      ok: 1,
      yes: "А я уже тогда знал ответ.",
    },
    {
      q: "Когда мы расписались?",
      a: ["2 октября 2025", "3 октября 2025", "19 декабря 2024"],
      ok: 1,
      yes: "3 октября — наш день. Скоро ему год.",
    },
    {
      q: "Сколько «и» в правильном «сильно»?",
      a: ["Одна", "Четыре", "Чем больше — тем роднее"],
      ok: 2,
      yes: "Сиииииильно. Других вариантов нет.",
    },
  ];

  const COUPONS = [
    { ico: "🤗", title: "Обнимашки вне очереди", text: "В любой момент. Даже посреди дел." },
    { ico: "🍽️", title: "Ужин, который выбираешь ты", text: "Любое место — без «а может, лучше…»" },
    { ico: "🎬", title: "Фильм на твой выбор", text: "Смотрю до конца и не засыпаю. Обещаю." },
    { ico: "💆‍♀️", title: "Массаж 20 минут", text: "Плечи, спина — как скажешь." },
    { ico: "🥐", title: "Завтрак в постель", text: "С кофе и без напоминаний." },
    { ico: "✨", title: "Одно любое желание", text: "Загадай — я исполню." },
  ];

  const MEMORY_PHOTOS = [
    "assets/photos/beret-1.jpg",
    "assets/photos/hat-play-1.jpg",
    "assets/photos/cafe-glasses.jpg",
    "assets/photos/flowers.jpg",
    "assets/photos/ring.jpg",
    "assets/photos/neon-1.jpg",
  ];

  const MOMENTS = [
    { src: "assets/videos/spin-home.mp4", poster: "assets/videos/spin-home.jpg", cap: "Дома, как кино" },
    { src: "assets/videos/white-dress.mp4", poster: "assets/videos/white-dress.jpg", cap: "В белом" },
    { src: "assets/videos/red-skirt.mp4", poster: "assets/videos/red-skirt.jpg", cap: "Праздник в офисе" },
    { src: "assets/videos/airport-smile.mp4", poster: "assets/videos/airport-smile.jpg", cap: "Улыбка в полёт" },
    { src: "assets/videos/gift-box.mp4", poster: "assets/videos/gift-box.jpg", cap: "Сюрприз" },
  ];

  const RITUALS = [
    { ico: "🌙", title: "Спокойной ночи", text: "Иногда с сердцем. Иногда с «золотце». Всегда — как обещание дождаться утра." },
    { ico: "☀️", title: "Доброе утро / выспался?", text: "«Выспался?» и «Выспалась?» — наш способ сказать: я думаю о тебе ещё до кофе." },
    { ico: "💬", title: "Как дела? Как работа?", text: "Сотни раз. Не светская вежливость — привычка возвращаться друг к другу среди дня." },
    { ico: "🚗", title: "Я еду / я дома", text: "Короткие маяки: «я еду», «я дома». Так мы держим нить, даже когда день рвётся на части." },
    { ico: "🫶", title: "Соскучилась", text: "Ты пишешь это честно. И я каждый раз чувствую, что нас тянет друг к другу сильнее расписания." },
  ];

  const QUOTES = [
    { t: "Спокойной ночи, золотце", who: "я" },
    { t: "Ути мой жаным", who: "ты" },
    { t: "Люблю тебя сиииильно сильно", who: "ты" },
    { t: "Безумно тебя люблю", who: "я" },
    { t: "Спокойной ночи любимый❤️", who: "ты" },
    { t: "Спокойной ночи, любимая ❤️", who: "я" },
    { t: "Соскучилась 🥹", who: "ты" },
    { t: "Побыть с тобой для меня лучшее свидание", who: "я" },
    { t: "Спасииибо жаным", who: "ты" },
    { t: "Хотела просто заехать пообнимать )", who: "ты" },
    { t: "Жаным менің", who: "ты" },
  ];

  const ENVELOPES = [
    {
      when: "когда скучаешь",
      title: "Я тоже",
      body: "Напиши «жаным» — и я уже ближе. Даже если застрял в делах.",
    },
    {
      when: "когда устала",
      title: "Можно ничего не делать",
      body: "Клади голову на плечо. Мир подождёт. Я — нет: я уже рядом.",
    },
    {
      when: "когда вспоминаешь начало",
      title: "Мы всё ещё те",
      body: "С июля 2024 мы только учились писать друг другу. А теперь каждое «спокойной ночи» — как продолжение той первой нити.",
    },
    {
      when: "перед сном",
      title: "Спокойной ночи",
      body: "Спи, золотце. Завтра снова будет день, где я выбираю тебя.",
    },
  ];

  const STARS = [
    "Жаным менің",
    "Спокойной ночи, золотце",
    "Люблю тебя сиииильно",
    "Побыть с тобой — лучшее свидание",
    "Ты спросила про кольцо — и я уже знал",
    "С июля мы только учились быть «мы»",
    "«Выспался?» — и я уже улыбаюсь",
    "Я еду. Я дома. Ты — нить дня",
    "Соскучилась — и я тоже",
    "Ути мой жаным",
    "Я выбираю тебя снова",
    "Мы — команда. Навсегда",
  ];

  const WISHES = [
    "Лёгкие утра",
    "Много обнимашек",
    "Цветы без повода",
    "Тихие вечера",
    "Смех до слёз",
    "Ещё тысяча «спокойной ночи»",
  ];

  const TEASES = [
    "Упс, убежала…",
    "Не сегодня 💅",
    "Попробуй ещё",
    "Кнопка знает правду",
    "Серьёзно? 😄",
    "Вселенная против «Нет»",
    "Лучше нажми «Да»",
    "Я быстрее",
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const thumbOf = (src) => src.replace("assets/photos/", "assets/photos/thumb/");
  const sizeOf = (src) => SIZES[src.replace("assets/photos/", "")] || [3, 4];

  function lazyImg(src, alt, holder) {
    const [w, h] = sizeOf(src);
    const img = document.createElement("img");
    img.width = w;
    img.height = h;
    img.alt = alt;
    img.loading = "lazy";
    img.decoding = "async";
    const done = () => holder.classList.add("is-loaded");
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
    img.src = thumbOf(src);
    return img;
  }

  let lbList = [];
  let lbIndex = 0;

  function showLightboxPhoto() {
    const img = $("#lightboxImg");
    const c = $("#lightboxCap");
    const p = lbList[lbIndex];
    if (!img || !p) return;
    img.src = thumbOf(p.src);
    img.alt = p.cap || "Гаухар";
    if (c) c.textContent = p.cap || "";
    const full = new Image();
    full.onload = () => {
      if (lbList[lbIndex] === p) img.src = p.src;
    };
    full.src = p.src;
    const many = lbList.length > 1;
    $("#lightboxPrev").hidden = !many;
    $("#lightboxNext").hidden = !many;
  }
  function openLightbox(list, index) {
    const box = $("#lightbox");
    if (!box) return;
    lbList = list;
    lbIndex = index;
    showLightboxPhoto();
    box.hidden = false;
  }
  function stepLightbox(d) {
    if (lbList.length < 2) return;
    lbIndex = (lbIndex + d + lbList.length) % lbList.length;
    showLightboxPhoto();
  }
  function closeLightbox() {
    const box = $("#lightbox");
    if (box) box.hidden = true;
  }
  function setupLightbox() {
    const box = $("#lightbox");
    if (!box) return;
    $("#lightboxClose")?.addEventListener("click", closeLightbox);
    $("#lightboxPrev")?.addEventListener("click", () => stepLightbox(-1));
    $("#lightboxNext")?.addEventListener("click", () => stepLightbox(1));
    box.addEventListener("click", (e) => {
      if (e.target === box) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") stepLightbox(-1);
      else if (e.key === "ArrowRight") stepLightbox(1);
    });
    let sx = 0;
    let sy = 0;
    box.addEventListener("touchstart", (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    }, { passive: true });
    box.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) stepLightbox(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function photoBtn(photo, list, index) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "photo-btn";
    b.appendChild(lazyImg(photo.src, photo.cap || "Гаухар", b));
    b.addEventListener("click", () => openLightbox(list, index));
    return b;
  }

  function spawnPetals() {
    const wrap = $("#petals");
    if (!wrap || reduced()) return;
    for (let i = 0; i < 14; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${8 + Math.random() * 10}s`;
      p.style.animationDelay = `${Math.random() * 8}s`;
      p.style.width = `${8 + Math.random() * 10}px`;
      p.style.height = `${12 + Math.random() * 14}px`;
      wrap.appendChild(p);
    }
  }

  function setupReveals() {
    const nodes = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduced()) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -4% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
  }

  function typeLetter() {
    const el = $("#typewriter");
    if (!el) return;
    const ghost = document.createElement("span");
    ghost.className = "letter__ghost";
    ghost.setAttribute("aria-hidden", "true");
    ghost.textContent = LETTER;
    const typed = document.createElement("span");
    typed.className = "letter__typed";
    el.append(ghost, typed);
    let i = 0;
    const speed = reduced() ? 0 : 22;
    const tick = () => {
      if (!speed) {
        typed.textContent = LETTER;
        el.classList.add("is-done");
        return;
      }
      typed.textContent = LETTER.slice(0, i++);
      if (i <= LETTER.length) setTimeout(tick, speed + (LETTER[i - 1] === "\n" ? 120 : 0));
      else el.classList.add("is-done");
    };
    const io = new IntersectionObserver((ents) => {
      if (ents.some((e) => e.isIntersecting)) {
        io.disconnect();
        tick();
      }
    }, { threshold: 0.3 });
    io.observe(el);
  }

  function setupStories() {
    const root = $("#storyList");
    if (!root) return;
    STORIES.forEach((s) => {
      const d = document.createElement("article");
      d.className = "story reveal";
      d.innerHTML = `<p class="story__when">${s.when}</p><h3>${s.title}</h3><p>${s.text}</p>`;
      root.appendChild(d);
    });
  }

  function setupChips() {
    const root = $("#chips");
    if (!root) return;
    CHIPS.forEach((c) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip reveal";
      b.innerHTML = `<p class="chip__word">${c.word}</p><p class="chip__mean">${c.mean}</p>`;
      b.addEventListener("click", () => b.classList.toggle("is-open"));
      root.appendChild(b);
    });
  }

  function setupMosaic() {
    const root = $("#mosaic");
    if (!root) return;
    const more = $("#mosaicMore");
    const PAGE = 48;
    let shown = 0;
    const renderPage = () => {
      const frag = document.createDocumentFragment();
      PHOTOS.slice(shown, shown + PAGE).forEach((p, i) => {
        const index = shown + i;
        const [w, h] = sizeOf(p.src);
        const b = document.createElement("button");
        b.type = "button";
        b.className = "mosaic__item";
        b.style.aspectRatio = `${w} / ${h}`;
        b.appendChild(lazyImg(p.src, p.cap || "Гаухар", b));
        if (p.cap) {
          const label = document.createElement("span");
          label.textContent = p.cap;
          b.appendChild(label);
        }
        b.addEventListener("click", () => openLightbox(PHOTOS, index));
        frag.appendChild(b);
      });
      root.appendChild(frag);
      shown = Math.min(PHOTOS.length, shown + PAGE);
      if (more) {
        const left = PHOTOS.length - shown;
        more.hidden = left <= 0;
        more.textContent = `Показать ещё ${Math.min(PAGE, left)} из ${left}`;
      }
    };
    more?.addEventListener("click", renderPage);
    renderPage();
  }

  function setupLooks() {
    Object.entries(LOOKS).forEach(([id, list]) => {
      const strip = document.getElementById(id);
      if (!strip) return;
      list.forEach((p, i) => strip.appendChild(photoBtn(p, list, i)));
    });
  }

  function setupMoments() {
    const root = $("#momentsRail");
    if (!root) return;
    const videos = [];
    MOMENTS.forEach((m) => {
      const fig = document.createElement("figure");
      fig.className = "moment reveal";
      const v = document.createElement("video");
      v.src = m.src;
      v.poster = m.poster;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      v.setAttribute("webkit-playsinline", "");
      v.preload = "metadata";
      v.setAttribute("aria-label", m.cap);
      const cap = document.createElement("figcaption");
      cap.textContent = m.cap;
      fig.appendChild(v);
      fig.appendChild(cap);
      fig.addEventListener("click", () => {
        if (v.paused) v.play().catch(() => {});
        else v.pause();
      });
      root.appendChild(fig);
      videos.push(v);
    });
    if (!("IntersectionObserver" in window)) {
      videos.forEach((v) => v.play().catch(() => {}));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target;
          if (e.isIntersecting && e.intersectionRatio > 0.45) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: [0, 0.45, 0.75] }
    );
    videos.forEach((v) => io.observe(v));
  }

  function setupRituals() {
    const root = $("#ritualsList");
    if (!root) return;
    RITUALS.forEach((r) => {
      const d = document.createElement("div");
      d.className = "ritual reveal";
      d.innerHTML = `<div class="ritual__ico" aria-hidden="true">${r.ico}</div><div><h3>${r.title}</h3><p>${r.text}</p></div>`;
      root.appendChild(d);
    });
  }

  function setupQuotes() {
    const root = $("#quoteWall");
    if (!root) return;
    QUOTES.forEach((q) => {
      const bq = document.createElement("blockquote");
      bq.className = "quote reveal";
      bq.innerHTML = `<p>«${q.t}»</p><cite>${q.who}</cite>`;
      root.appendChild(bq);
    });
  }

  function setupEnvelopes() {
    const root = $("#envelopes");
    if (!root) return;
    ENVELOPES.forEach((e) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "envelope reveal";
      b.innerHTML = `<p class="envelope__label">${e.when}</p><p class="envelope__title">${e.title}</p><p class="envelope__body">${e.body}</p>`;
      b.addEventListener("click", () => b.classList.toggle("is-open"));
      root.appendChild(b);
    });
  }

  function setupStars() {
    const sky = $("#sky");
    const msg = $("#skyMsg");
    if (!sky) return;
    STARS.forEach((text, i) => {
      const s = document.createElement("button");
      s.type = "button";
      s.className = "star";
      s.textContent = "★";
      s.style.left = `${8 + ((i * 37) % 84)}%`;
      s.style.top = `${10 + ((i * 53) % 72)}%`;
      s.style.animationDelay = `${(i % 7) * 0.25}s`;
      s.addEventListener("click", () => {
        if (msg) msg.textContent = text;
        s.style.color = "#ffd6e7";
      });
      sky.appendChild(s);
    });
  }

  function setupHeart() {
    const btn = $("#heartBtn");
    const fill = $("#heartFill");
    const hint = $("#heartHint");
    if (!btn || !fill) return;
    let level = 0;
    let holding = false;
    let raf = 0;
    const frame = () => {
      if (!holding) return;
      level = Math.min(100, level + 1.35);
      fill.style.height = `${level}%`;
      if (level >= 100) {
        btn.classList.add("is-full");
        if (hint) hint.textContent = "Вот сколько во мне любви к тебе ♥";
        burstConfetti();
        holding = false;
        return;
      }
      if (hint) hint.textContent = `Ещё чуть-чуть… ${Math.round(level)}%`;
      raf = requestAnimationFrame(frame);
    };
    const start = (e) => {
      e.preventDefault();
      if (level >= 100) return;
      holding = true;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      holding = false;
      cancelAnimationFrame(raf);
      if (level < 100 && hint) hint.textContent = "Удерживай… не отпускай";
    };
    btn.addEventListener("mousedown", start);
    btn.addEventListener("touchstart", start, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
  }

  function setupBalloons() {
    const field = $("#balloonField");
    if (!field) return;
    const wishEl = document.createElement("p");
    wishEl.className = "balloon__wish";
    wishEl.textContent = "Тапни шарик";
    WISHES.forEach((w) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "balloon";
      b.textContent = "✦";
      b.addEventListener("click", () => {
        if (b.classList.contains("is-popped")) return;
        b.classList.add("is-popped");
        wishEl.textContent = w;
        if ($$(".balloon:not(.is-popped)", field).length === 0) {
          wishEl.textContent = "Все желания — твои.";
          burstConfetti();
        }
      });
      field.appendChild(b);
    });
    field.appendChild(wishEl);
  }

  function setupScratch() {
    const canvas = $("#scratchCanvas");
    const wrap = canvas?.parentElement;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let revealed = false;
    let drawing = false;
    function resize() {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const g = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      g.addColorStop(0, "#b8c5bc");
      g.addColorStop(1, "#87998e");
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "rgba(20,32,26,0.55)";
      ctx.font = "600 16px Manrope, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Сотри здесь", rect.width / 2, rect.height / 2);
    }
    const pos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };
    const scratchAt = (x, y) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();
    };
    const check = () => {
      if (revealed) return;
      const { width, height } = canvas;
      const data = ctx.getImageData(0, 0, width, height).data;
      let clear = 0;
      const step = 16;
      for (let i = 3; i < data.length; i += 4 * step) if (data[i] < 40) clear++;
      if (clear / (data.length / (4 * step)) > 0.48) {
        revealed = true;
        canvas.style.transition = "opacity 0.45s ease";
        canvas.style.opacity = "0";
        setTimeout(() => (canvas.style.pointerEvents = "none"), 450);
      }
    };
    const start = (e) => {
      drawing = true;
      scratchAt(pos(e).x, pos(e).y);
      e.preventDefault();
    };
    const move = (e) => {
      if (!drawing) return;
      scratchAt(pos(e).x, pos(e).y);
      e.preventDefault();
    };
    const end = () => {
      if (!drawing) return;
      drawing = false;
      check();
    };
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);
    resize();
    window.addEventListener("resize", resize);
  }

  function setupProposal() {
    const stage = $("#proposalStage");
    const noBtn = $("#fleeBtn");
    const agree = $("#agreeBtn");
    const tease = $("#proposalTease");
    const win = $("#proposalWin");
    if (!stage || !noBtn || !agree) return;
    let moves = 0;
    const place = (x, y) => {
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    };
    const center = () => {
      const r = stage.getBoundingClientRect();
      place(r.width / 2 + 18, r.height / 2 - noBtn.offsetHeight / 2 - 12);
    };
    const flee = () => {
      const r = stage.getBoundingClientRect();
      const pad = 8;
      const maxX = Math.max(pad, r.width - noBtn.offsetWidth - pad);
      const maxY = Math.max(pad, r.height - noBtn.offsetHeight - pad - 28);
      place(Math.random() * maxX, Math.random() * maxY);
      moves++;
      if (tease) tease.textContent = TEASES[moves % TEASES.length];
      if (navigator.vibrate) navigator.vibrate(12);
    };
    const approach = (e) => {
      const t = e.touches ? e.touches[0] : e;
      const r = noBtn.getBoundingClientRect();
      if (Math.hypot(t.clientX - (r.left + r.width / 2), t.clientY - (r.top + r.height / 2)) < 72) flee();
    };
    noBtn.addEventListener("mouseenter", flee);
    noBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      flee();
    });
    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      flee();
    });
    stage.addEventListener("mousemove", approach);
    stage.addEventListener("touchmove", approach, { passive: true });
    agree.addEventListener("click", () => {
      stage.hidden = true;
      if (win) win.hidden = false;
      burstConfetti();
      setTimeout(() => $("#finale")?.scrollIntoView({ behavior: reduced() ? "auto" : "smooth" }), 700);
    });
    center();
    window.addEventListener("resize", center);
  }

  function burstConfetti() {
    const canvas = $("#confetti");
    if (!canvas || reduced()) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const colors = ["#c2186a", "#e84a8a", "#c9a66b", "#2f5a45", "#f7fbf8"];
    const parts = Array.from({ length: 100 }, () => ({
      x: Math.random() * innerWidth,
      y: -20 - Math.random() * 60,
      r: 3 + Math.random() * 5,
      vx: -2 + Math.random() * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * Math.PI,
      vr: -0.2 + Math.random() * 0.4,
      color: colors[(Math.random() * colors.length) | 0],
      life: 90 + Math.random() * 40,
    }));
    let frame = 0;
    (function draw() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rot += p.vr;
        p.life--;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life / 100);
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        ctx.restore();
      });
      if (++frame < 150) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, innerWidth, innerHeight);
    })();
  }

  function setupMusic() {
    const toggle = $("#musicToggle");
    const panel = $("#player");
    const fallbackAudio = $("#bgMusic");
    if (!toggle || !panel) return { start: () => {} };
    const titleEl = $("#playerTitle");
    const hint = $("#playerHint");
    const list = $("#playerList");
    const playBtn = $("#playerPlay");
    let yt = null;
    let ready = false;
    let playing = false;
    let wantPlay = false;
    let fallback = false;
    let resumeOnShow = false;
    let current = 0;
    let errors = 0;

    const items = TRACKS.map((t, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.className = "player__track";
      b.innerHTML = `<span class="player__num">${i + 1}</span><span>${t.title}${t.feat ? ` <small>feat. ${t.feat}</small>` : ""}</span>`;
      b.addEventListener("click", () => playTrack(i));
      li.appendChild(b);
      list?.appendChild(li);
      return b;
    });

    const sync = () => {
      toggle.hidden = false;
      toggle.classList.toggle("is-on", playing);
      toggle.setAttribute("aria-label", playing ? "Музыка играет — открыть плеер" : "Открыть плеер");
      if (playBtn) playBtn.textContent = playing ? "❚❚" : "▶";
      if (titleEl) titleEl.textContent = fallback ? "Фоновая мелодия" : `M'Dee — ${TRACKS[current].title}`;
      items.forEach((b, i) => b.classList.toggle("is-current", i === current));
    };

    const openPanel = (open) => {
      panel.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    };

    const playFallback = () => {
      fallbackAudio?.play().then(() => {
        playing = true;
        sync();
      }).catch(() => {});
    };

    const play = () => {
      wantPlay = true;
      if (fallback) playFallback();
      else if (ready) yt.playVideo();
    };

    const pause = () => {
      wantPlay = false;
      if (fallback) {
        fallbackAudio?.pause();
        playing = false;
        sync();
      } else if (ready) yt.pauseVideo();
    };

    const playTrack = (i) => {
      current = (i + TRACKS.length) % TRACKS.length;
      wantPlay = true;
      if (ready && !fallback) yt.loadVideoById(TRACKS[current].yt);
      sync();
    };

    const checkStarted = () => {
      setTimeout(() => {
        if (playing || !wantPlay || fallback) return;
        openPanel(true);
        if (hint) hint.hidden = false;
      }, 2500);
    };

    const useFallback = () => {
      if (fallback || ready) return;
      fallback = true;
      panel.classList.add("is-fallback");
      if (wantPlay) playFallback();
      sync();
    };

    window.onYouTubeIframeAPIReady = () => {
      yt = new YT.Player("ytPlayer", {
        width: "100%",
        height: "100%",
        videoId: TRACKS[0].yt,
        playerVars: { playsinline: 1, rel: 0, modestbranding: 1 },
        events: {
          onReady: () => {
            if (fallback) {
              if (playing) return;
              fallback = false;
              panel.classList.remove("is-fallback");
            }
            ready = true;
            yt.setVolume(70);
            if (wantPlay) {
              yt.playVideo();
              checkStarted();
            }
            sync();
          },
          onStateChange: (e) => {
            const S = YT.PlayerState;
            if (e.data === S.PLAYING) {
              playing = true;
              wantPlay = true;
              errors = 0;
              if (hint) hint.hidden = true;
            } else if (e.data === S.PAUSED) {
              playing = false;
            } else if (e.data === S.ENDED) {
              playing = false;
              playTrack(current + 1);
            }
            sync();
          },
          onError: () => {
            if (++errors >= TRACKS.length) {
              ready = false;
              useFallback();
              return;
            }
            playTrack(current + 1);
          },
        },
      });
    };

    const api = document.createElement("script");
    api.src = "https://www.youtube.com/iframe_api";
    api.async = true;
    api.onerror = useFallback;
    document.head.appendChild(api);
    setTimeout(() => {
      if (!ready) useFallback();
    }, 15000);

    toggle.addEventListener("click", () => {
      if (fallback) {
        if (playing) pause();
        else play();
        return;
      }
      openPanel(!panel.classList.contains("is-open"));
    });
    $("#playerClose")?.addEventListener("click", () => openPanel(false));
    $("#playerPrev")?.addEventListener("click", () => playTrack(current - 1));
    $("#playerNext")?.addEventListener("click", () => playTrack(current + 1));
    playBtn?.addEventListener("click", () => (playing ? pause() : play()));

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (!playing) return;
        resumeOnShow = true;
        if (fallback) fallbackAudio?.pause();
        else if (ready) yt.pauseVideo();
      } else if (resumeOnShow) {
        resumeOnShow = false;
        play();
      }
    });

    sync();
    toggle.hidden = true;

    const start = () => {
      wantPlay = true;
      toggle.hidden = false;
      if (fallback) playFallback();
      else if (ready) yt.playVideo();
      checkStarted();
    };

    return { start };
  }

  const plural = (n, forms) => {
    const a = Math.abs(n) % 100;
    const b = a % 10;
    if (a > 10 && a < 20) return forms[2];
    if (b > 1 && b < 5) return forms[1];
    if (b === 1) return forms[0];
    return forms[2];
  };

  function setupTogether() {
    const root = $("#togetherCounter");
    const married = $("#togetherMarried");
    const note = $("#togetherNote");
    if (!root) return;
    const since = new Date(TOGETHER_SINCE).getTime();
    const wedding = new Date(WEDDING).getTime();
    const cell = (u) => $(`[data-unit="${u}"]`, root);
    const units = { d: cell("d"), h: cell("h"), m: cell("m"), s: cell("s") };
    const DAY = 86400000;
    const ORD = ["", "первая", "вторая", "третья", "четвёртая", "пятая"];
    const ORD_GEN = ["", "первой", "второй", "третьей", "четвёртой", "пятой"];

    const anniversary = () => {
      const a = new Date(Date.now() + 5 * 3600000);
      const today = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
      let year = a.getUTCFullYear();
      let next = Date.UTC(year, 9, 3);
      if (next < today) next = Date.UTC(++year, 9, 3);
      const n = year - 2025;
      const ord = ORD[n] || `${n}-я`;
      const ordGen = ORD_GEN[n] || `${n}-й`;
      const left = Math.round((next - today) / DAY);
      if (left === 0) return `Сегодня наша ${ord} годовщина свадьбы 💍`;
      if (left === 1) return `Завтра — наша ${ord} годовщина свадьбы 💍`;
      return `До нашей ${ordGen} годовщины свадьбы — ${left} ${plural(left, ["день", "дня", "дней"])}`;
    };

    const tick = () => {
      const now = Date.now();
      let t = Math.max(0, Math.floor((now - since) / 1000));
      const d = Math.floor(t / 86400);
      t -= d * 86400;
      const h = Math.floor(t / 3600);
      t -= h * 3600;
      const m = Math.floor(t / 60);
      const s = t - m * 60;
      units.d.textContent = d;
      units.h.textContent = String(h).padStart(2, "0");
      units.m.textContent = String(m).padStart(2, "0");
      units.s.textContent = String(s).padStart(2, "0");
      const md = Math.floor((now - wedding) / DAY);
      if (married) married.textContent = md >= 0 ? `Из них женаты — ${md} ${plural(md, ["день", "дня", "дней"])}` : "";
      if (note) note.textContent = anniversary();
    };
    tick();
    setInterval(tick, 1000);
  }

  function setupQuiz() {
    const root = $("#quiz");
    if (!root) return;
    let step = 0;
    let score = 0;

    const render = () => {
      root.innerHTML = "";
      if (step >= QUIZ.length) {
        const perfect = score === QUIZ.length;
        root.innerHTML = `
          <p class="quiz__score">${score} из ${QUIZ.length}</p>
          <p class="quiz__q">${perfect ? "Идеально. Ты помнишь всё — как и я." : "Неважно, сколько правильных. Главное — это всё наше."}</p>
          <button class="btn btn--primary quiz__next" type="button">Ещё раз</button>`;
        $(".quiz__next", root).addEventListener("click", () => {
          step = 0;
          score = 0;
          render();
        });
        if (perfect) burstConfetti();
        return;
      }
      const item = QUIZ[step];
      const head = document.createElement("p");
      head.className = "quiz__step";
      head.textContent = `Вопрос ${step + 1} из ${QUIZ.length}`;
      const q = document.createElement("p");
      q.className = "quiz__q";
      q.textContent = item.q;
      const opts = document.createElement("div");
      opts.className = "quiz__opts";
      const fb = document.createElement("p");
      fb.className = "quiz__fb";
      fb.setAttribute("aria-live", "polite");
      const next = document.createElement("button");
      next.type = "button";
      next.className = "btn btn--primary quiz__next";
      next.textContent = step === QUIZ.length - 1 ? "Результат" : "Дальше";
      next.hidden = true;
      next.addEventListener("click", () => {
        step++;
        render();
      });
      item.a.forEach((text, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "quiz__opt";
        b.textContent = text;
        b.addEventListener("click", () => {
          if (opts.classList.contains("is-done")) return;
          opts.classList.add("is-done");
          const right = i === item.ok;
          if (right) score++;
          b.classList.add(right ? "is-right" : "is-wrong");
          opts.children[item.ok].classList.add("is-right");
          fb.textContent = right ? item.yes : `Почти! ${item.yes}`;
          next.hidden = false;
        });
        opts.appendChild(b);
      });
      root.append(head, q, opts, fb, next);
    };
    render();
  }

  function setupCoupons() {
    const root = $("#coupons");
    if (!root) return;
    const KEY = "gauhar-coupons";
    let used = {};
    try {
      used = JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      used = {};
    }
    const save = () => {
      try {
        localStorage.setItem(KEY, JSON.stringify(used));
      } catch (e) {}
    };
    COUPONS.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "coupon reveal";
      const status = document.createElement("p");
      status.className = "coupon__status";
      b.innerHTML = `<span class="coupon__ico" aria-hidden="true">${c.ico}</span><span class="coupon__body"><span class="coupon__title">${c.title}</span><span class="coupon__text">${c.text}</span></span>`;
      $(".coupon__body", b).appendChild(status);
      let armed = 0;
      const paint = () => {
        b.classList.toggle("is-used", !!used[i]);
        b.classList.toggle("is-armed", !!armed && !used[i]);
        status.textContent = used[i]
          ? `Активирован ${used[i]} — покажи мне этот экран`
          : armed
            ? "Нажми ещё раз, чтобы активировать"
            : "Тапни, чтобы использовать";
      };
      b.addEventListener("click", () => {
        if (used[i]) return;
        if (!armed) {
          armed = setTimeout(() => {
            armed = 0;
            paint();
          }, 3500);
          paint();
          return;
        }
        clearTimeout(armed);
        armed = 0;
        used[i] = new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
        save();
        paint();
        burstConfetti();
      });
      paint();
      root.appendChild(b);
    });
  }

  function setupMemory() {
    const root = $("#memory");
    const status = $("#memoryStatus");
    const again = $("#memoryAgain");
    if (!root) return;
    let first = null;
    let lock = false;
    let found = 0;
    let moves = 0;

    const setStatus = () => {
      if (!status) return;
      status.textContent = found === MEMORY_PHOTOS.length
        ? `Все пары за ${moves} ${plural(moves, ["ход", "хода", "ходов"])}. Как мы с тобой — идеальная пара 💞`
        : `Ходов: ${moves} · Пар: ${found} из ${MEMORY_PHOTOS.length}`;
    };

    const deal = () => {
      root.innerHTML = "";
      first = null;
      lock = false;
      found = 0;
      moves = 0;
      if (again) again.hidden = true;
      const deck = [...MEMORY_PHOTOS, ...MEMORY_PHOTOS]
        .map((src) => ({ src, r: Math.random() }))
        .sort((a, b) => a.r - b.r);
      deck.forEach(({ src }) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "memory__card";
        card.dataset.src = src;
        card.setAttribute("aria-label", "Карточка");
        card.innerHTML = `<span class="memory__inner"><span class="memory__back" aria-hidden="true">♥</span><span class="memory__front"><img src="${thumbOf(src)}" alt="" loading="lazy" decoding="async" /></span></span>`;
        card.addEventListener("click", () => {
          if (lock || card === first || card.classList.contains("is-open")) return;
          card.classList.add("is-open");
          if (!first) {
            first = card;
            return;
          }
          moves++;
          if (first.dataset.src === card.dataset.src) {
            first.classList.add("is-matched");
            card.classList.add("is-matched");
            first = null;
            found++;
            if (found === MEMORY_PHOTOS.length) {
              burstConfetti();
              if (again) again.hidden = false;
            }
          } else {
            lock = true;
            const a = first;
            first = null;
            setTimeout(() => {
              a.classList.remove("is-open");
              card.classList.remove("is-open");
              lock = false;
            }, 850);
          }
          setStatus();
        });
        root.appendChild(card);
      });
      setStatus();
    };
    again?.addEventListener("click", deal);
    deal();
  }

  function setupGate() {
    const gate = $("#gate");
    const app = $("#app");
    const btn = $("#enterBtn");
    const music = setupMusic();
    if (!gate || !app || !btn) return;
    btn.addEventListener("click", () => {
      gate.classList.add("is-gone");
      app.hidden = false;
      app.classList.remove("is-locked");
      document.body.style.overflow = "";
      music.start();
      setTimeout(() => gate.remove(), 750);
      requestAnimationFrame(() => {
        $$(".hero .reveal").forEach((n, i) => setTimeout(() => n.classList.add("is-in"), 90 + i * 70));
      });
    });
  }

  document.body.style.overflow = "hidden";
  spawnPetals();
  setupGate();
  setupLightbox();
  setupTogether();
  setupStories();
  setupQuiz();
  setupChips();
  setupMosaic();
  setupLooks();
  setupMoments();
  setupRituals();
  setupQuotes();
  setupMemory();
  setupEnvelopes();
  setupCoupons();
  setupStars();
  setupHeart();
  setupBalloons();
  setupScratch();
  setupProposal();
  setupReveals();
  typeLetter();
  $("#replayBtn")?.addEventListener("click", () => {
    scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" });
  });
})();
