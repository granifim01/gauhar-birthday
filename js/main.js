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
    { src: "assets/photos/hat-play-0.jpg", cap: "Гримас" },
    { src: "assets/photos/hat-play-1.jpg", cap: "Смех" },
    { src: "assets/photos/hat-play-2.jpg", cap: "Оливковый" },
    { src: "assets/photos/hat-play-3.jpg", cap: "Шляпа" },
    { src: "assets/photos/hat-play-4.jpg", cap: "Игривая" },
    { src: "assets/photos/hat-play-5.jpg", cap: "Ещё" },
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
    { t: "Я блять замуж собираюсь за тебя", who: "ты" },
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
    "Вселенная против «Да»",
    "Лучше нажми «Нет»",
    "Я быстрее",
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function openLightbox(src, cap) {
    const box = $("#lightbox");
    const img = $("#lightboxImg");
    const c = $("#lightboxCap");
    if (!box || !img) return;
    img.src = src;
    img.alt = cap || "";
    if (c) c.textContent = cap || "";
    box.hidden = false;
  }
  function closeLightbox() {
    const box = $("#lightbox");
    if (box) box.hidden = true;
  }

  function photoBtn(photo) {
    const b = document.createElement("button");
    b.type = "button";
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.cap || "";
    img.loading = "lazy";
    b.appendChild(img);
    b.addEventListener("click", () => openLightbox(photo.src, photo.cap));
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
    let i = 0;
    const speed = reduced() ? 0 : 22;
    const tick = () => {
      if (!speed) {
        el.textContent = LETTER;
        el.classList.add("is-done");
        return;
      }
      el.textContent = LETTER.slice(0, i++);
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
    PHOTOS.forEach((p) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "mosaic__item reveal";
      const label = p.cap ? `<span>${p.cap}</span>` : "";
      b.innerHTML = `<img src="${p.src}" alt="${p.cap || "Гаухар"}" loading="lazy" />${label}`;
      b.addEventListener("click", () => openLightbox(p.src, p.cap || "Гаухар"));
      root.appendChild(b);
    });
  }

  function setupLooks() {
    Object.entries(LOOKS).forEach(([id, list]) => {
      const strip = document.getElementById(id);
      if (!strip) return;
      list.forEach((p) => strip.appendChild(photoBtn(p)));
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

  function setupDivorce() {
    const stage = $("#divorceStage");
    const yes = $("#yesBtn");
    const no = $("#noBtn");
    const tease = $("#divorceTease");
    const win = $("#divorceWin");
    if (!stage || !yes || !no) return;
    let moves = 0;
    const place = (x, y) => {
      yes.style.left = `${x}px`;
      yes.style.top = `${y}px`;
    };
    const center = () => {
      const r = stage.getBoundingClientRect();
      place(r.width / 2 - yes.offsetWidth - 18, r.height / 2 - yes.offsetHeight / 2 - 12);
    };
    const flee = () => {
      const r = stage.getBoundingClientRect();
      const pad = 8;
      const maxX = Math.max(pad, r.width - yes.offsetWidth - pad);
      const maxY = Math.max(pad, r.height - yes.offsetHeight - pad - 28);
      place(Math.random() * maxX, Math.random() * maxY);
      moves++;
      if (tease) tease.textContent = TEASES[moves % TEASES.length];
      if (navigator.vibrate) navigator.vibrate(12);
    };
    const approach = (e) => {
      const t = e.touches ? e.touches[0] : e;
      const r = yes.getBoundingClientRect();
      if (Math.hypot(t.clientX - (r.left + r.width / 2), t.clientY - (r.top + r.height / 2)) < 72) flee();
    };
    yes.addEventListener("mouseenter", flee);
    yes.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      flee();
    });
    yes.addEventListener("click", (e) => {
      e.preventDefault();
      flee();
    });
    stage.addEventListener("mousemove", approach);
    stage.addEventListener("touchmove", approach, { passive: true });
    no.addEventListener("click", () => {
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
    const audio = $("#bgMusic");
    const toggle = $("#musicToggle");
    if (!audio || !toggle) return { start: () => {} };
    audio.volume = 0.32;
    let on = false;

    const sync = () => {
      toggle.hidden = false;
      toggle.classList.toggle("is-on", on);
      toggle.setAttribute("aria-pressed", on ? "true" : "false");
      toggle.title = on ? "Выключить музыку" : "Включить музыку";
    };

    const start = () => {
      audio.play().then(() => {
        on = true;
        sync();
      }).catch(() => {
        on = false;
        sync();
      });
    };

    toggle.addEventListener("click", () => {
      if (on) {
        audio.pause();
        on = false;
        sync();
        return;
      }
      audio.play().then(() => {
        on = true;
        sync();
      }).catch(() => {
        on = false;
        sync();
      });
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && on) audio.pause();
      else if (!document.hidden && on) audio.play().catch(() => {});
    });

    return { start };
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
  setupStories();
  setupChips();
  setupMosaic();
  setupLooks();
  setupMoments();
  setupRituals();
  setupQuotes();
  setupEnvelopes();
  setupStars();
  setupHeart();
  setupBalloons();
  setupScratch();
  setupDivorce();
  setupReveals();
  typeLetter();
  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  $("#lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  $("#replayBtn")?.addEventListener("click", () => {
    scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" });
  });
})();
