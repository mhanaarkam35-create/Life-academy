// ==========================================
// LIFE ACADEMY
// JavaScript
// ==========================================


// ---------- DATA ----------

const courses = [

    {
        id: 1,
        icon: "🧠",
        title: "فهم نفسك",
        description: "تعلم كيف تفهم شخصيتك وأفكارك ومشاعرك.",
        category: "تطوير الذات",

        lessons: [
            {
                title: "من أنا؟",
                content: `
                    <p>
                    فهم نفسك هو أول خطوة في بناء حياة أفضل.
                    لا يمكنك اختيار الطريق الصحيح إذا كنت لا تعرف
                    نقاط قوتك وضعفك.
                    </p>

                    <h3>ما الذي يجب أن تعرفه عن نفسك؟</h3>

                    <ul>
                        <li>ما الأشياء التي تجيدها؟</li>
                        <li>ما الأشياء التي تحتاج إلى تطويرها؟</li>
                        <li>ما أهدافك؟</li>
                        <li>ما الأشياء التي تحب تعلمها؟</li>
                    </ul>

                    <h3>تمرين</h3>

                    <p>
                    اكتب 5 نقاط قوة لديك و5 أشياء تريد تحسينها.
                    لا تبحث عن إجابات مثالية، كن صريحًا مع نفسك.
                    </p>
                `,

                question: "ما أول خطوة لفهم حياتك بشكل أفضل؟",

                answers: [
                    "فهم نفسك",
                    "مقارنة نفسك بالآخرين",
                    "تجاهل أخطائك",
                    "عدم التفكير"
                ],

                correct: 0
            },

            {
                title: "الثقة بالنفس",
                content: `
                    <p>
                    الثقة بالنفس لا تعني أنك تعرف كل شيء.
                    تعني أنك تؤمن بقدرتك على التعلم والتعامل
                    مع المشاكل.
                    </p>

                    <h3>كيف تبني الثقة؟</h3>

                    <ul>
                        <li>تعلم مهارة جديدة.</li>
                        <li>نفذ ما تخطط له.</li>
                        <li>تقبل الأخطاء.</li>
                        <li>لا تجعل رأي الآخرين يحدد قيمتك.</li>
                    </ul>
                `,

                question: "ماذا تعني الثقة بالنفس؟",

                answers: [
                    "أنني لا أخطئ أبدًا",
                    "أنني أفضل من الجميع",
                    "الإيمان بقدرتي على التعلم والتعامل مع المشاكل",
                    "عدم الاستماع لأي شخص"
                ],

                correct: 2
            }
        ]
    },


    {
        id: 2,
        icon: "⏱️",
        title: "إدارة الوقت",
        description: "تعلم كيف تستعمل وقتك بدل أن يضيع منك.",
        category: "الانضباط",

        lessons: [
            {
                title: "قيمة الوقت",

                content: `
                    <p>
                    المال الذي تخسره يمكن تعويضه.
                    أما الوقت الذي يمر فلا يعود.
                    </p>

                    <h3>كيف تستعمل وقتك؟</h3>

                    <ul>
                        <li>حدد أهم مهمة في اليوم.</li>
                        <li>قلل استعمال الهاتف أثناء العمل.</li>
                        <li>قسم المشاريع الكبيرة إلى خطوات.</li>
                        <li>خصص وقتًا للتعلم والراحة.</li>
                    </ul>

                    <h3>تطبيق عملي</h3>

                    <p>
                    اختر مهمة واحدة مهمة اليوم واعمل عليها
                    لمدة 30 دقيقة بدون هاتف.
                    </p>
                `,

                question: "ما الشيء الذي لا يمكن استرجاعه بعد مروره؟",

                answers: [
                    "المال",
                    "الوقت",
                    "الهاتف",
                    "الطعام"
                ],

                correct: 1
            }
        ]
    },


    {
        id: 3,
        icon: "💰",
        title: "المال والعمل",
        description: "تعلم أساسيات المال والعمل وبناء الدخل.",
        category: "المال",

        lessons: [
            {
                title: "الدخل والمصاريف",

                content: `
                    <p>
                    الإدارة المالية تبدأ بفهم العلاقة بين الدخل
                    والمصاريف.
                    </p>

                    <h3>مثال</h3>

                    <p>
                    إذا كان دخلك 50,000 دينار ومصاريفك 40,000 دينار،
                    فالمبلغ المتبقي هو 10,000 دينار.
                    </p>

                    <h3>قاعدة بسيطة</h3>

                    <ul>
                        <li>اعرف دخلك.</li>
                        <li>سجل مصاريفك.</li>
                        <li>قلل المصاريف غير الضرورية.</li>
                        <li>خصص جزءًا للادخار.</li>
                        <li>استثمر في تعلم مهارة.</li>
                    </ul>
                `,

                question: "ما أول شيء يجب أن تعرفه لإدارة أموالك؟",

                answers: [
                    "لون هاتفك",
                    "دخلك ومصاريفك",
                    "رأي الآخرين",
                    "عدد أصدقائك"
                ],

                correct: 1
            }
        ]
    },


    {
        id: 4,
        icon: "💻",
        title: "التكنولوجيا",
        description: "تعلم الكمبيوتر والإنترنت والبرمجة والأمن.",
        category: "التكنولوجيا",

        lessons: [
            {
                title: "كيف يعمل الإنترنت؟",

                content: `
                    <p>
                    الإنترنت عبارة عن شبكة ضخمة تربط ملايين
                    الأجهزة حول العالم.
                    </p>

                    <h3>عندما تفتح موقعًا</h3>

                    <ul>
                        <li>تكتب عنوان الموقع.</li>
                        <li>يتم البحث عن عنوان الخادم.</li>
                        <li>يرسل جهازك طلبًا.</li>
                        <li>يرد الخادم بالبيانات.</li>
                        <li>المتصفح يعرض الصفحة.</li>
                    </ul>

                    <h3>مصطلحات مهمة</h3>

                    <p>
                    DNS — يحول أسماء النطاقات إلى عناوين IP.
                    </p>

                    <p>
                    HTTP/HTTPS — بروتوكولات تستخدم لنقل بيانات الويب.
                    </p>
                `,

                question: "ما وظيفة DNS الأساسية؟",

                answers: [
                    "تشغيل الشاشة",
                    "تحويل اسم النطاق إلى عنوان IP",
                    "زيادة سرعة المعالج",
                    "شحن الهاتف"
                ],

                correct: 1
            }
        ]
    },


    {
        id: 5,
        icon: "🤝",
        title: "العلاقات",
        description: "تعلم التواصل والاحترام وفهم الآخرين.",
        category: "العلاقات",

        lessons: [
            {
                title: "فن الاستماع",

                content: `
                    <p>
                    التواصل الجيد لا يعني الكلام فقط.
                    الاستماع مهارة أساسية.
                    </p>

                    <h3>عندما يتحدث شخص معك:</h3>

                    <ul>
                        <li>لا تقاطعه باستمرار.</li>
                        <li>ركز على كلامه.</li>
                        <li>اطرح أسئلة لفهمه.</li>
                        <li>لا تفترض أنك تعرف كل شيء.</li>
                    </ul>
                `,

                question: "ما أحد أهم عناصر التواصل الجيد؟",

                answers: [
                    "المقاطعة",
                    "عدم الاهتمام",
                    "الاستماع",
                    "الصراخ"
                ],

                correct: 2
            }
        ]
    },


    {
        id: 6,
        icon: "📚",
        title: "التعلم",
        description: "تعلم كيف تتعلم أي مهارة بطريقة منظمة.",
        category: "التعلم",

        lessons: [
            {
                title: "كيف تتعلم أي مهارة؟",

                content: `
                    <p>
                    لا تحتاج إلى معرفة كل شيء قبل أن تبدأ.
                    ابدأ بالأساسيات ثم طبّق.
                    </p>

                    <h3>الطريقة</h3>

                    <ol>
                        <li>حدد المهارة.</li>
                        <li>تعلم الأساسيات.</li>
                        <li>طبق عمليًا.</li>
                        <li>ارتكب الأخطاء.</li>
                        <li>حلل أخطاءك.</li>
                        <li>كرر التدريب.</li>
                    </ol>
                `,

                question: "ما الذي يجعل التعلم أقوى؟",

                answers: [
                    "الحفظ فقط",
                    "التطبيق العملي",
                    "مشاهدة الفيديوهات فقط",
                    "عدم التجربة"
                ],

                correct: 1
            }
        ]
    },


    {
        id: 7,
        icon: "🛠️",
        title: "المهنة",
        description: "اكتشف كيف تحول المهارة إلى مهنة.",
        category: "المهنة",

        lessons: [
            {
                title: "من التعلم إلى العمل",

                content: `
                    <p>
                    المهارة تصبح ذات قيمة عندما تستطيع استخدامها
                    لحل مشكلة حقيقية.
                    </p>

                    <h3>مثال</h3>

                    <p>
                    تعلم صيانة الكمبيوتر وحده جيد،
                    لكن القدرة على تشخيص وإصلاح جهاز زبون
                    هي مهارة مهنية.
                    </p>

                    <h3>المعادلة</h3>

                    <p>
                    معرفة + ممارسة + مشاكل حقيقية + خبرة = مهارة مهنية
                    </p>
                `,

                question: "متى تصبح المهارة مهنية؟",

                answers: [
                    "عندما تحفظ اسمها",
                    "عندما تستطيع استخدامها لحل مشاكل حقيقية",
                    "عندما تشاهد فيديو عنها",
                    "عندما تتحدث عنها"
                ],

                correct: 1
            }
        ]
    },


    {
        id: 8,
        icon: "🎯",
        title: "الأهداف",
        description: "تعلم كيفية وضع أهداف واقعية ومتابعتها.",
        category: "التخطيط",

        lessons: [
            {
                title: "كيف تضع هدفًا؟",

                content: `
                    <p>
                    الهدف الجيد يجب أن يكون واضحًا ويمكن متابعته.
                    </p>

                    <h3>مثال سيئ</h3>

                    <p>
                    أريد أن أصبح محترفًا.
                    </p>

                    <h3>مثال أفضل</h3>

                    <p>
                    سأدرس JavaScript لمدة ساعة يوميًا لمدة 90 يومًا
                    وأبني ثلاثة مشاريع.
                    </p>
                `,

                question: "أي هدف أفضل؟",

                answers: [
                    "أريد أن أنجح",
                    "أريد أن أصبح مشهورًا",
                    "سأتعلم JavaScript ساعة يوميًا لمدة 90 يومًا",
                    "سأفكر في المستقبل"
                ],

                correct: 2
            }
        ]
    },


    {
        id: 9,
        icon: "❤️",
        title: "الصحة",
        description: "تعلم أساسيات بناء نمط حياة صحي.",
        category: "الصحة",

        lessons: [
            {
                title: "النوم",

                content: `
                    <p>
                    النوم جزء أساسي من الحياة اليومية.
                    يساعد الجسم والعقل على التعافي.
                    </p>

                    <h3>عادات مفيدة</h3>

                    <ul>
                        <li>حافظ على وقت نوم واستيقاظ منتظم قدر الإمكان.</li>
                        <li>قلل الشاشات قبل النوم.</li>
                        <li>اجعل غرفة النوم مريحة.</li>
                    </ul>
                `,

                question: "لماذا النوم مهم؟",

                answers: [
                    "لأنه مضيعة للوقت",
                    "لأنه يساعد الجسم والعقل على التعافي",
                    "لأنه يمنع التعلم",
                    "لا فائدة منه"
                ],

                correct: 1
            }
        ]
    },


    {
        id: 10,
        icon: "🌍",
        title: "التفكير في الحياة",
        description: "أسئلة تساعدك على التفكير في مستقبلك وقيمك.",
        category: "الفلسفة العملية",

        lessons: [
            {
                title: "ما معنى النجاح؟",

                content: `
                    <p>
                    النجاح ليس له تعريف واحد للجميع.
                    </p>

                    <p>
                    بالنسبة لشخص قد يعني النجاح بناء مشروع،
                    وبالنسبة لشخص آخر قد يعني إتقان مهنة،
                    أو مساعدة عائلته، أو تحقيق الاستقلال.
                    </p>

                    <h3>السؤال الحقيقي</h3>

                    <p>
                    ما الحياة التي تريد أن تبنيها أنت؟
                    </p>
                `,

                question: "هل يوجد تعريف واحد للنجاح يناسب الجميع؟",

                answers: [
                    "نعم دائمًا",
                    "لا، يختلف حسب الشخص وقيمه",
                    "النجاح هو المال فقط",
                    "النجاح هو الشهرة فقط"
                ],

                correct: 1
            }
        ]
    }

];


// ---------- STATE ----------

let completedLessons =
    JSON.parse(localStorage.getItem("completedLessons")) || [];

let points =
    Number(localStorage.getItem("lifePoints")) || 0;


// ---------- ELEMENTS ----------

const coursesGrid =
    document.getElementById("coursesGrid");

const searchInput =
    document.getElementById("searchInput");

const lessonSection =
    document.getElementById("lessonSection");

const coursesSection =
    document.getElementById("courses");

const lessonTitle =
    document.getElementById("lessonTitle");

const lessonCategory =
    document.getElementById("lessonCategory");

const lessonIcon =
    document.getElementById("lessonIcon");

const lessonContent =
    document.getElementById("lessonContent");

const completeBtn =
    document.getElementById("completeBtn");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const quizResult =
    document.getElementById("quizResult");


// ---------- RENDER COURSES ----------

function renderCourses(list = courses) {

    coursesGrid.innerHTML = "";

    list.forEach(course => {

        const completed =
            course.lessons.filter(lesson =>
                completedLessons.includes(
                    `${course.id}-${lesson.title}`
                )
            ).length;

        const card =
            document.createElement("div");

        card.className = "course";

        card.innerHTML = `

            <div class="course-icon">
                ${course.icon}
            </div>

            <h3>
                ${course.title}
            </h3>

            <p>
                ${course.description}
            </p>

            <div class="course-footer">

                <span>
                    ${course.lessons.length} درس
                </span>

                <span>
                    ${completed} مكتمل
                </span>

            </div>
        `;

        card.addEventListener("click", () => {

            openLesson(
                course,
                course.lessons[0]
            );

        });

        coursesGrid.appendChild(card);

    });

}


// ---------- OPEN LESSON ----------

function openLesson(course, lesson) {

    coursesSection.classList.add("hidden");

    lessonSection.classList.remove("hidden");

    lessonIcon.textContent =
        course.icon;

    lessonCategory.textContent =
        course.category;

    lessonTitle.textContent =
        lesson.title;

    lessonContent.innerHTML =
        lesson.content;

    completeBtn.dataset.id =
        `${course.id}-${lesson.title}`;

    completeBtn.textContent =
        completedLessons.includes(
            `${course.id}-${lesson.title}`
        )
        ? "✓ الدرس مكتمل"
        : "✓ إكمال الدرس";

    completeBtn.disabled =
        completedLessons.includes(
            `${course.id}-${lesson.title}`
        );

    createQuiz(lesson);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ---------- BACK ----------

document.getElementById("backBtn")
    .addEventListener("click", () => {

        lessonSection.classList.add("hidden");

        coursesSection.classList.remove("hidden");

        renderCourses();

        window.scrollTo({
            top: coursesSection.offsetTop,
            behavior: "smooth"
        });

    });


// ---------- COMPLETE LESSON ----------

completeBtn.addEventListener("click", () => {

    const lessonId =
        completeBtn.dataset.id;

    if (!completedLessons.includes(lessonId)) {

        completedLessons.push(lessonId);

        points += 10;

        localStorage.setItem(
            "completedLessons",
            JSON.stringify(completedLessons)
        );

        localStorage.setItem(
            "lifePoints",
            points
        );

        updateProgress();

        completeBtn.textContent =
            "✓ الدرس مكتمل";

        completeBtn.disabled = true;

        alert("ممتاز! حصلت على 10 نقاط 🎉");

    }

});


// ---------- QUIZ ----------

function createQuiz(lesson) {

    question.textContent =
        lesson.question;

    answers.innerHTML = "";

    quizResult.textContent = "";

    lesson.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.textContent =
                answer;

            button.addEventListener(
                "click",
                () => {

                    if (index === lesson.correct) {

                        quizResult.textContent =
                            "✅ إجابة صحيحة! أحسنت.";

                        quizResult.style.color =
                            "var(--green)";

                    } else {

                        quizResult.textContent =
                            "❌ ليست الإجابة الصحيحة. حاول مرة أخرى.";

                        quizResult.style.color =
                            "var(--gold)";
                    }

                }
            );

            answers.appendChild(button);

        }
    );

}


// ---------- SEARCH ----------

searchInput.addEventListener(
    "input",
    () => {

        const value =
            searchInput.value
                .trim()
                .toLowerCase();

        const filtered =
            courses.filter(course =>

                course.title
                    .toLowerCase()
                    .includes(value)

                ||

                course.description
                    .toLowerCase()
                    .includes(value)

                ||

                course.category
                    .toLowerCase()
                    .includes(value)

            );

        renderCourses(filtered);

    }
);


// ---------- PROGRESS ----------

function updateProgress() {

    let totalLessons = 0;

    courses.forEach(course => {

        totalLessons +=
            course.lessons.length;

    });

    const completed =
        completedLessons.length;

    const percentage =
        totalLessons === 0
            ? 0
            : Math.round(
                (completed / totalLessons) * 100
            );


    document.getElementById("points")
        .textContent = points;

    document.getElementById("completed")
        .textContent = completed;

    document.getElementById("percentage")
        .textContent = `${percentage}%`;

    document.getElementById("bigProgress")
        .style.width = `${percentage}%`;

    document.getElementById("heroProgress")
        .style.width = `${percentage}%`;

    document.getElementById("heroProgressText")
        .textContent =
        `${percentage}% مكتمل`;


    let motivation =
        "ابدأ أول درس اليوم 🚀";

    if (percentage >= 25)
        motivation =
            "رائع! أنت بدأت تتقدم 🔥";

    if (percentage >= 50)
        motivation =
            "ممتاز! استمر، أنت في منتصف الطريق 💪";
